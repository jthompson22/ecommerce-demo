'use server'

import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";
// import { sql } from "@vercel/postgres";
import { ProductTable } from "./products";
import { kv } from "@vercel/kv";
import { generateEmbeddings } from '@/lib/ai/embedding';
import { embeddings as embeddingsTable } from '@/lib/db/schema/embeddings';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { Product } from "./types";
import {
  NewResourceParams,
  insertResourceSchema,
  resources,
} from "@/lib/db/schema/resources";
import { vectordb } from "@/lib/db";
import postgres from 'postgres'
const connectionString = process.env.POSTGRES_URL


export const createResource = async (input: NewResourceParams) => {
  try {
    const { content } = insertResourceSchema.parse(input);
    const [resource] = await vectordb
      .insert(resources)
      .values(input)
      .returning();

    const embeddings = await generateEmbeddings(content);
    await vectordb.insert(embeddingsTable).values(
      embeddings.map((embedding: any) => ({
        resourceId: resource.id,
        ...embedding,
      })),
    );

    return 'Resource successfully created and embedded.';
  } catch (e) {
    if (e instanceof Error)
      return e.message.length > 0 ? e.message : "Error, please try again.";
  }
};


export async function createProductServerAction(formData: FormData) {
  const name: any = formData.get('name')
  const cost: any = formData.get('cost')
  const description: any = formData.get('description')
  const imageFile = formData.get('image') as File;
  const blob = await put(imageFile.name, imageFile, {

    access: 'public',
  })
  const url = blob.url
  // const client = postgres(connectionString)
  // const db = drizzle(client);
  // const product = { name: name, cost: cost, description: description, imageurl: url }
  // await db.insert(ProductTable).values(product);
  // createResource({ content: `${name} ${description}` });
  revalidatePath('/products')
}

export async function addToCartAction(prevState: any, formData: FormData) {
  const data = await kv.lpush("cart", JSON.stringify({ "id": formData.get('id'), "name": formData.get('name'), "cost": formData.get('cost'), "imageURL": formData.get('imageURL') }))

  return {
    message: 'success',
    success: true
  }
}