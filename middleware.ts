import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

    // Protect admin routes - only allow ADMIN role
    if (isAdminRoute) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", request.url));
        }

        if (token.role !== "ADMIN") {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
