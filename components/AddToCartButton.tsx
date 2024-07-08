"use client"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import axios from 'axios'
import { addToCartAction } from "@/lib/actions"
import { revalidatePath } from 'next/cache'
import { useFormState, useFormStatus } from "react-dom"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import AddToCartButtonPending from "./AddToCartButtonPending"
const initialState = {
  message: '',
  success: false
}
export default function AddToCartButton(product: any) {
  const { pending } = useFormStatus()
  const [formState, formAction] = useFormState(addToCartAction, initialState);


  return (
    <>
      <form action={formAction}>
        {formState?.success &&
          <Alert className="bg-green-800 text-white">
            <AlertTitle>Item Added!</AlertTitle>
            <AlertDescription>
              {product.product.name} has been added to your cart!
            </AlertDescription>
          </Alert>
        }
        <input type="hidden" id="id" name="id" value={product.product.id} />
        <input type="hidden" id="name" name="name" value={product.product.name} />
        <input type="hidden" id="cost" name="cost" value={product.product.cost} />
        <input type="hidden" id="imageURL" name="imageURL" value={product.product.imageurl} />
        <AddToCartButtonPending />
      </form>
    </>
  )
}
