import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import heroImg from '@/public/hero.jpg'
import { getHeroContent } from '@/lib/contentful'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { DemoSettings } from '@/lib/demoSettings'
import ProductCarousel from '@/components/ProductCarousel'
import { getProducts } from '@/lib/products'

import { draftMode } from 'next/headers'
import { SanityDocument } from "next-sanity"
import { sanityFetch, HERO_QUERY, PRODUCT_QUERY } from "@/lib/sanity"


export default async function CanadaPage() {
    const hero = await sanityFetch<SanityDocument[]>({
        query: HERO_QUERY,
    })
    return (
        <>
            <main className="flex min-h-screen flex-col items-center bg-stone-100">
                <div className="flex flex-wrap min-w-full bg-[url('/canada.jpg')] bg-cover bg-bottom bg-no-repeat h-96">
                    <div className="flex items-center min-w-full px-10" >
                        <div className="mb-8">
                            <Suspense fallback={<Skeleton className=" w-[400px] h-[20px] my-5   bg-slate-100" />} >
                                <p className="py-5 font-bold text-xl leading-normal text-white lg:text-xl xl:text-2xl ">
                                    {hero[1].value}
                                </p>
                            </Suspense>
                            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row justify-start">
                                <Link
                                    href="/products"
                                    className="px-8 py-4 text-md font-medium text-center text-white bg-red-700 rounded-md " >
                                    Lets go shopping eh
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h1 className="text-3xl font-bold mt-10">Top Prices for your Justin Bieber Concerts</h1>
                <Image src={'/justin.webp'} alt="justin bieber" width={600} height={300} /> */}
            </main >
        </>
    )
}
