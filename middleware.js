import { NextResponse } from "next/server";

/**
 * Root middleware.
 *
 * NOTE: this file previously lived at app/middleware.js, where Next.js ignores
 * it completely. Middleware must sit at the project root (next to
 * next.config.mjs) or inside src/. It is only effective from here.
 *
 * The matcher below is deliberately the simple, documented Next.js form. All
 * other filtering is done in the function body, where it is plain JavaScript
 * and cannot break route compilation.
 */

// Static asset extensions that should never be processed here.
const ASSET_RE =
  /\.(?:png|jpg|jpeg|gif|webp|svg|ico|pdf|mp4|webm|woff|woff2|ttf|otf|css|js|xml|txt|json|html)$/i;

// Route trees that are reachable but must never compete with the live pages.
const NOINDEX_PREFIXES = [
  "/about-backup",
  "/backup-contact",
  "/placements-backup",
  "/newhome",
  "/dump",
  "/tulas-university",
  "/form-widget",
];

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Never touch Next internals, the API, or static files.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    ASSET_RE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 1. Collapse duplicate slashes and 308-redirect.
  //    Links such as "/grievance//" were being generated across the site and
  //    are crawled as separate, broken URLs.
  if (pathname.includes("//")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/{2,}/g, "/");
    return NextResponse.redirect(url, 308);
  }

  // 2. Lowercase the path. Mixed-case variants of the same page are
  //    duplicate content for crawlers.
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  const response = NextResponse.next();

  // 3. Keep backup / staging / thank-you routes out of the index.
  const isNoIndex =
    NOINDEX_PREFIXES.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    ) ||
    pathname.includes("/backup-") ||
    pathname.endsWith("-backup") ||
    pathname.endsWith("-backup/") ||
    pathname.includes("/thank-you");

  if (isNoIndex) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
