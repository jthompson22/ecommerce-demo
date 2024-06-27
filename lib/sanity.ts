import { experimental_taintUniqueValue } from 'react'
import { createClient } from "next-sanity";
import type { ClientPerspective, QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import { groq } from "next-sanity";
export const token = process.env.SANITY_API_READ_TOKEN
export const HERO_QUERY = groq`*[_type == "hero_content"]`;
export const PRODUCT_QUERY = groq`*[_type == "product"]{
    productName,
    _id,
    description,
    price,
     "imageUrl": image.asset->url
   }`;



export const client = createClient({
    apiVersion: '2023-03-12',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true,
    // These settings will be overridden in 
    // ./sanity/lib/store.ts when draftMode is enabled
    perspective: "published",
    stega: {
        enabled: false,
        studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    },
});

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    perspective = draftMode().isEnabled ? "previewDrafts" : "published",
    /**
     * Stega embedded Content Source Maps are used by Visual Editing by both the Sanity Presentation Tool and Vercel Visual Editing.
     * The Sanity Presentation Tool will enable Draft Mode when loading up the live preview, and we use it as a signal for when to embed source maps.
     * When outside of the Sanity Studio we also support the Vercel Toolbar Visual Editing feature, which is only enabled in production when it's a Vercel Preview Deployment.
     */
    stega = perspective === "previewDrafts" ||
    process.env.VERCEL_ENV === "preview",
}: {
    query: string;
    params?: QueryParams;
    perspective?: Omit<ClientPerspective, "raw">;
    stega?: boolean;
}) {
    if (perspective === "previewDrafts") {
        return client.fetch<QueryResponse>(query, params, {
            stega,
            perspective: "previewDrafts",
            // The token is required to fetch draft content
            token,
            // The `previewDrafts` perspective isn't available on the API CDN
            useCdn: false,
            // And we can't cache the responses as it would slow down the live preview experience
            next: { revalidate: 0 },
        });
    }
    return client.fetch<QueryResponse>(query, params, {
        stega,
        perspective: "published",
        // The `published` perspective is available on the API CDN
        useCdn: true,
        // Only enable Stega in production if it's a Vercel Preview Deployment, as the Vercel Toolbar supports Visual Editing
        // When using the `published` perspective we use time-based revalidation to match the time-to-live on Sanity's API CDN (60 seconds)
        next: { revalidate: 60 },
    });
}