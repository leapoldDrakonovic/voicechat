// src/app/api/auth/session/route.js

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get("session");

    if (!session) {
      return NextResponse.json({ message: "No session" }, { status: 401 });
    }

    return NextResponse.json({ name: session.value });
  } catch (error) {
    return NextResponse.json({ error: "Failed to get session" }, { status: 500 });
  }
}
