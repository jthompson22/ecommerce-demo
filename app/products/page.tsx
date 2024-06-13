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



async function Products() {
  const products = await getProducts();
  return <ShoppingGrid products={products} />;
}


export default async function ListEvent() {
  const showFreeShipping = flag({
    key: 'free_shipping',
    async decide() {
      // Can also use third-party services to determine the flag value
      // return getLaunchDarklyClient().variation(this.key, false);
      const value = await get(this.key)
      return await get(this.key) ?? false
    }
  })
  const showShippingFlag = await showFreeShipping()

  return (
    <>
      <main className="flex min-h-56 flex-col  justify-between bg-stone-100 bg-[url('/concert.jpg')] bg-cover bg-top bg-no-repeat h-10">
        {showShippingFlag ? (<div className="w-full h-10 bg-primary z-5 flex justify-center items-center">
          <span className=" text-white align-center">Free shipping on orders over $100!</span>
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
