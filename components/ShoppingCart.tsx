"use client"
import { Button } from "@/components/ui/button"
import {Suspense, useEffect, useState} from 'react'
import axios from 'axios'
import {joinEventServerAction} from "@/lib/actions"
import { revalidatePath } from 'next/cache'
import { useFormStatus } from "react-dom"
import useSWR from 'swr'
import { Loader2 } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { fetchCartEdge } from "@/lib/cart"
  

  
export default  function ShoppingCart() {
    const [numItems, setNumItems] = useState(1)
    const [itemsFetched, setItemsFetched] = useState(false)
    const [ cartData, setCartData] = useState<any[]>([])

    async function  fetchCart() {
        setItemsFetched(true)
        const cartData = await fetch('/api/edge/').then(res=>res.json())
        setCartData(cartData.message)
        setItemsFetched(false)

    }

    
    useEffect(() => {
        // Update the document title using the browser API
      });
    return (
        <>
        <Popover>
            <PopoverTrigger onClick={fetchCart}>
                <>
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
                </>
            </PopoverTrigger>
            <PopoverContent>
                {itemsFetched?<>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /></>:
                <>
                {
                cartData.map(item =>(
                    <div key={item.id}>
                        1 x {item.name} - ${item.cost}
                    </div>
                ))
                }
                <Button className="mt-4 w-full">Checkout</Button>
                </>}
           
             
            </PopoverContent>
        </Popover>
        </>
    )
  }

//   onClick={()=>{joinEvent(event.slug);}}