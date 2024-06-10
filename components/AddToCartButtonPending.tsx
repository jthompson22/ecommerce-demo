"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { useFormStatus } from "react-dom"
import { Loader2 } from "lucide-react"

export default function AddToCartButtonPending() {
    const { pending } = useFormStatus()
    return (
        <>
            {pending ?
                <Button variant="outline" className="bg-green-700 font-white mt-2 w-full h-16" disabled> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> <span className="ml-3 text-xl">Adding To Cart</span></Button>
                :
                (<>
                    <Button type="submit" className="bg-sky-700 mt-2 w-full h-16 " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>    <span className=" ml-3 text-xl">Add To Cart</span>
                    </Button>
                </>)}
        </>
    )
}
