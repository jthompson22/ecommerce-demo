import { NextResponse } from "next/server";
import { createResource } from "@/lib/actions"
// To handle a POST request to /api
export async function POST(request: any) {
    // Do whatever you want\
    const postData = await request.json()
    createResource({ content: `${postData.productName} ${postData.description}`, productId: postData._id, price: postData.price.toString(), imageUrl: postData.imageUrl, productName: postData.productName });
    return NextResponse.json({ message: "success" }, { status: 200 });
}