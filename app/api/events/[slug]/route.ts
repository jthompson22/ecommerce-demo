import { NextResponse } from "next/server";
import { revalidatePath } from 'next/cache'

// To handle a POST request to /api
export async function GET(request :any) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
  }
// To handle a POST request to /api
export async function PUT(request :any, {params}:{params:{slug:string}}) {
    //   revalidate paths
    revalidatePath(`/events/${params.slug}`)
    revalidatePath(`/events`)
  return NextResponse.json({ message: "success" }, { status: 200 });
}