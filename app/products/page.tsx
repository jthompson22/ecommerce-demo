import ShoppingGrid from "@/components/ShoppingGrid";
import Header from "@/components/Header";
import Image from "next/image";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";
import Loading from "./loading";
import TaylorSwiftHero from "@/components/TaylorSwiftHero";
import { unstable_flag as flag } from '@vercel/flags/next';
import { FlagValues } from '@vercel/flags/react';
import { get } from '@vercel/edge-config';
import { freeShippingFlag } from '@/app/flags';

import { SanityDocument } from "next-sanity"
import { sanityFetch, HERO_QUERY, PRODUCT_QUERY } from "@/lib/sanity"

async function Products() {
  const productsQuery = await sanityFetch<SanityDocument[]>({
    query: PRODUCT_QUERY,
  })
  const products = productsQuery.map((product: any) => { return { id: product._id, name: product.productName, imageurl: product.imageUrl, description: product.description, cost: product.price } })
  return <ShoppingGrid products={products} />;
}


export default async function ListEvent() {

  const showShippingFlag = await freeShippingFlag()
  return (
    <>
      <Header />

      <main className="flex min-h-56 flex-col  justify-between bg-stone-100 bg-[url('/concert.jpg')] bg-cover bg-top bg-no-repeat h-10">
        {showShippingFlag ? (<div className="w-full bg-primary z-5 flex justify-center items-center pt-4">
          <p className="text-white h-14">Free shipping on orders over $100!</p>
        </div>) : <></>}
        <h2 className="mb-4 text-4xl tracking-tight p-24 text-white dark:text-black">
          New Arrivals
        </h2>
      </main>
      <main className="flex flex-col justify-center p-4 items-center">

        {/* <TaylorSwiftHero/> */}

        <div className=" px-4 max-w-screen-lg  mt-6">
          <Products />
        </div>
      </main>
    </>
  );
}
