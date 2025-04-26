import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// In-memory store for rate limiting (consider using Redis in production)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 2; // requests
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

export function middleware(request: NextRequest) {
  // Only apply to the contact form API
  if (request.nextUrl.pathname === "/api/contact-form") {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ?? "anonymous";
    const now = Date.now();

    // Clean up old entries
    for (const [key, value] of rateLimit.entries()) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.delete(key);
      }
    }

    // Check rate limit
    const userLimit = rateLimit.get(ip);
    if (userLimit) {
      if (now - userLimit.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, timestamp: now });
      } else if (userLimit.count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 }
        );
      } else {
        userLimit.count++;
      }
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/contact-form",
};
