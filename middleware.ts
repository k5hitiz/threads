import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/api/webhook/clerk"],

  // Routes that are ignored by the auth middleware
  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
    // Always run on API routes
    "/api/:path*",
  ],
};