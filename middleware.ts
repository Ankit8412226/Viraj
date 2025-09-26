import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/services") ||
      request.nextUrl.pathname.startsWith("/best-gold-buyer-lajpat-nagar") ||
      request.nextUrl.pathname === "/") {
    response.headers.set("X-Robots-Tag", "index, follow");
  }
  return response;
}

export const config = {
  matcher: ["/", "/services/:path*", "/best-gold-buyer-lajpat-nagar"],
};


