import { kv } from "@vercel/kv";
import { CartItem } from "./types";


export async function fetchCartEdge(): Promise<CartItem[]> {
  const session = await kv.lrange("cart", 0, 99);
  const cartItems = session.map((item: any) => ({ id: item.id, name: item.name, cost: item.cost, imageURL: item.imageURL }))
  return cartItems
}