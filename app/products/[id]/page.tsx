import Header from '@/components/Header'
import Image from 'next/image'
import {Product} from '@/lib/types'
import {getProduct} from '@/lib/products'
import { Button } from "@/components/ui/button"
import AddToCartButton from '@/components/AddToCartButton'
import { addToCartAction } from '@/lib/actions'

export  default async function Product(id: any) {
  const product : Product= await getProduct(id.params.id)
 
  return (
    <>
    <main className="flex flex-row justify-between bg-slate-100 min-h-screen">
      <div className="basis-1/2 h-full p-6  flex justify-center">
          <Image src={product.imageurl} alt={product.name} width={400} height={600}  />
      </div>
      <div className="basis-1/2 h-full p-6">
        <p className="text-2xl">{product.name}</p>
        <p className="text-1xl mt-3 mb-3">{product.description}</p>
        <p className="text-4xl mt-6 mb-3 text-left text-slate-600">${product.cost}</p>
  
        
          <AddToCartButton product={product}/>
      </div>
    </main>
    </>
  )
}
