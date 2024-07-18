import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Some thing we" });
  }
}
