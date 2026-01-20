import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // Change this to your exact path
  if (request.nextUrl.pathname === "/tulas-university") {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}
