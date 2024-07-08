
import Image from "next/image";
import logoImg from "@/public/logo.png";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { fetchCartEdge } from "@/lib/cart";
import { SanityDocument } from "next-sanity";

import { CartItem } from "@/lib/types";



export default async function Cart({ cartItems, total }: { cartItems: CartItem[], total: number }) {
    // const cartItems = await getCartData()
    // const total = cartItems.reduce((acc, item) => acc + Number(item.cost), 0)
    return (
        <div className="container px-4 md:px-6 py-12">
            <div className="grid gap-8">
                <div className="grid gap-2">
                    <h1 className="text-2xl font-bold">Your Cart</h1>
                    <p className="text-muted-foreground">Review and update your cart before checkout.</p>
                </div>
                <div className="grid gap-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="grid md:grid-cols-[100px_1fr_100px] gap-4 items-center">
                            <Image
                                src={item.imageURL}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="rounded-md object-cover"
                            />
                            <div className="grid gap-1">
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-muted-foreground">${item.cost}</p>
                            </div>
                            <div className="flex items-center gap-2">

                                <Button variant="outline" size="icon" >
                                    <TrashIcon className="h-4 w-4" />
                                    <span className="sr-only">Remove</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row-reverse items-end gap-4 md:gap-8 border-t pt-6">
                    <div>
                        <h2 className="text-xl font-bold">Total</h2>
                        <p className="text-muted-foreground">${total}</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

function TrashIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}