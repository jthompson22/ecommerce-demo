import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  numeric,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';


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