import { NextResponse } from "next/server";
// To handle a POST request to /api
export async function GET(request :any) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
  }
// To handle a POST request to /api
export async function PUT(request :any) {
  // Do whatever you want
  console.log(request)
  return NextResponse.json({ message: "success" }, { status: 200 });
}