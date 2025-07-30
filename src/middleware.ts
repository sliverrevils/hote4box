import { NextResponse } from "next/server";
import type { MiddlewareConfig, NextRequest } from "next/server";
import { verifyJWT } from "@/lib/jwt";

export async function middleware(req: NextRequest) {
    console.log("MIDDLEWARE 🖐️");
    const token = req.cookies.get("token")?.value;
    const url = req.nextUrl.clone();

    if (!token) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    const payload = await verifyJWT({ token });
    if (!payload) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // Только админ может заходить на /admin
    if (url.pathname.startsWith("/admin") && payload.role !== "admin") {
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: ["/user/:path*", "/admin/:path*"],
};
