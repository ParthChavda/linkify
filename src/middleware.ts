import { NextRequest, NextResponse } from "next/server";

// Clerk disabled for local UI-only preview — no auth backend configured.
export default function middleware(req: NextRequest) {
    const url = req.nextUrl.pathname;

    // Protect /dashboard and sub-routes
    if (url.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
}

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/(api|trpc)(.*)",
        "/dashboard(.*)",
        "/",
        "/auth/sign-in",
        "/auth/sign-up",
    ],
};