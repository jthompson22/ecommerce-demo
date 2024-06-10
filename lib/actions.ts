'use server'

import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";
import { db, sql } from "@vercel/postgres";
import { ProductTable } from "./products";
import { kv } from "@vercel/kv";

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { Product } from "./types";


export async function createProductServerAction(formData: FormData) {
  const name: any = formData.get('name')
  const cost: any = formData.get('cost')
  const description: any = formData.get('description')
  const imageFile = formData.get('image') as File;
  const blob = await put(imageFile.name, imageFile, {

    access: 'public',
  })
  const url = blob.url
  const db = drizzle(sql);
  const product = { name: name, cost: cost, description: description, imageurl: url }
  await db.insert(ProductTable).values(product);
  revalidatePath('/products')
}

export async function addToCartAction(prevState: any, formData: FormData) {
  const data = await kv.lpush("cart", JSON.stringify({ "id": formData.get('id'), "name": formData.get('name'), "cost": formData.get('cost') }))

  return {
    message: 'success',
    success: true
  }
}