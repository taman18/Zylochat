import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export function authMiddleware() {
    return withAuth(
        function middleware(req: NextRequest) {
            return NextResponse.next();
        },
        {
            pages: {
                signIn: "/api/auth/signin",
            },
        }
    );
}