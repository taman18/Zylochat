import { authMiddleware } from "@/lib/authMiddleware";

export default authMiddleware();
export const config = {
    matcher: [
        "/api/connect/:path*",
        "/api/callback/:path*",
        "/api/platform/:path*"
    ],
};