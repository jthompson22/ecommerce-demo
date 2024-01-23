
import ShoppingGrid from '@/components/ShoppingGrid'
import Header from '@/components/Header'
import Image from 'next/image'
import {getProducts} from '@/lib/products'
import { Suspense } from 'react'
import { FormField } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import { createProductServerAction } from '@/lib/actions'
import { useFormStatus } from 'react-dom'
import AddProductSubmit from '@/components/AddProductSubmit'
import { redirect } from 'next/navigation'

export default  async function AddProduct() {
    async function  createProduct(formData : any) {
        "use server"
        await createProductServerAction(formData)
        redirect('/')
    }
  return (
    <>
    <main className="flex  justify-between p-4 bg-slate-100 min-h-screen">
        <div className='flex-none mt-8 w-full '>
        <h2 className="text-4xl tracking-tight  text-black dark:text-black">Add Product</h2>
            <form action={createProduct}  className="mt-10 w-1/2">
                <Input type="text" placeholder="Product Name" id="name" name="name" className="mb-3"/>
                <Input type="text" placeholder="Cost" id="cost" name="cost" className="mb-3"/>
                <Textarea placeholder="Description" className="mb-3" name="description" id="description" />
                <Label htmlFor="picture">Picture</Label>
                <Input id="image" name="image" type="file" />
                <AddProductSubmit/>
            </form>
        </div>
    </main>
    </>
  )
}
