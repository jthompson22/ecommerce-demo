import { fetchCartEdge } from "@/lib/cart";
import { NextResponse } from "next/server";

export const runtime = 'edge'; // 'nodejs' is the default
export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export async function GET(request: Request) {
const data =  await fetchCartEdge()
// const jsonreturn = {'data':JSON.parse()}
console.log(data)
return NextResponse.json({ message: data }, { status: 200 });
}