import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { phoneNumber } = await request.json();
  const response = await fetch(process.env.GOOGLE_SCRIPT_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phoneNumber }),
  });
  const data = await response.json();
  return NextResponse.json(data);
}
