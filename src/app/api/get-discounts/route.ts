import { NextResponse } from "next/server";
export const revalidate = 0;

export async function GET() {
  const response = await fetch(process.env.GOOGLE_SCRIPT_URL as string);
  const data = await response.json();
  return NextResponse.json(data);
}
