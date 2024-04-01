import ShoppingGrid from "@/components/ShoppingGrid";
import Header from "@/components/Header";
import Image from "next/image";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";
import Loading from "./loading";
import TaylorSwiftHero from "@/components/TaylorSwiftHero";

export const revalidate = 60;

async function Products() {
  const products = await getProducts();
  return <ShoppingGrid products={products} />;
}

export default async function ListEvent() {
  return (
    <>
      <main className="flex min-h-56 flex-col  justify-between bg-stone-100 bg-[url('/concert.jpg')] bg-cover bg-top bg-no-repeat h-10">
        <h2 className="mb-4 text-4xl tracking-tight p-24 text-white dark:text-black">
          New Arrivals
        </h2>
      </main>
      <main className="flex flex-col justify-center p-4 items-center">

        <TaylorSwiftHero/>
        
        <div className=" px-4 max-w-screen-lg  mt-6">
            <Products />
        </div>
      </main>
    </>
  );
}
