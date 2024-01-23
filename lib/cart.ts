import { kv } from "@vercel/kv";

import { drizzle } from 'drizzle-orm/vercel-postgres';
import { Product } from "./types";
export async function fetchCartEdge () {
    const session = await kv.lrange("cart",0,10);
    return session
  }