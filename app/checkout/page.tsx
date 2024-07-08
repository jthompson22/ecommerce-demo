import ShoppingGrid from "@/components/ShoppingGrid";
import Header from "@/components/Header";
import Image from "next/image";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";
import TaylorSwiftHero from "@/components/TaylorSwiftHero";
import { unstable_flag as flag } from '@vercel/flags/next';
import { FlagValues } from '@vercel/flags/react';
import { get } from '@vercel/edge-config';

import { SanityDocument } from "next-sanity"
import { sanityFetch, HERO_QUERY, PRODUCT_QUERY } from "@/lib/sanity"
import Cart from "@/components/Cart";
import { fetchCartEdge } from "@/lib/cart";
import StripeElement from "@/components/StripeElement";

async function getCartData() {
    const cartData = await fetchCartEdge()
    return cartData
}
export default async function Checkout() {
    const cartItems = await getCartData()
    const total = cartItems.reduce((acc, item) => acc + Number(item.cost), 0)
    return (
        <>
            <main className="flex flex-col items-center">
                <div className="flex  flex-col  w-full justify-between bg-primary  bg-cover bg-top bg-no-repeat ">
                    <h2 className="text-3xl tracking-tight p-6 text-white dark:text-black">
                        Checkout
                    </h2>
                </div>
                <div className="flex flex-col w-full md:flex-row p-6">
                    <div className="basis-1/2">
                        <Cart cartItems={cartItems} total={total} />
                    </div>
                    <div className="basis-1/2">
                        <StripeElement total={total} />
                    </div>

                </div>
            </main>
        </>
    );
}
