import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  numeric,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { SanityDocument } from "next-sanity"
import { sanityFetch, PRODUCT_QUERY, HERO_QUERY } from "@/lib/sanity"
import { Product } from './types';
import { groq } from "next-sanity";

// Create a pgTable that maps to a table in your DB
export const ProductTable = pgTable(
  'products',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    imageurl: text('imageurl').notNull(),
    description: text('description').notNull(),
    cost: numeric('cost').notNull(),
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(products.id),
    };
  },
);


// export const getProductsSanity = async () => {
//   const data = await sanityFetch<SanityDocument[]>({
//     query: PRODUCT_QUERY,
//   })
//   // const products = data.map((product: any) => { return { id: product._id, name: product.productName, imageurl: product.imageUrl, description: product.description, cost: product.price } })
//   return products
// };






export const getProducts = async () => {
  const db = drizzle(sql);
  const selectResult = await db.select().from(ProductTable);
  return selectResult
};


export const getProduct = async (productID: number) => {
  const db = drizzle(sql)
  const product = await db.select().from(ProductTable).where(eq(ProductTable.id, productID))
  return product[0]

}