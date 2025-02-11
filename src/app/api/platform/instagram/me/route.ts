import dbHandler from "@/utils/dbHandler";
import logger from "@/utils/logger";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const session = await getToken({ req: req as any, secret: process.env.NEXTAUTH_SECRET }) || {};
        const filter = {
            email: session.email
        }
        const dbRes: any = await dbHandler('zylouser', 'read', filter);
        const zyloUser = dbRes[0];

        if (!zyloUser || !zyloUser.instagram || !zyloUser.instagram.token) {
            return NextResponse.redirect(`${process.env.HOST}/api/connect/instagram`);
        }

        const apiUrl = `https://graph.instagram.com/me?fields=id,username,account_type,media_count,profile_picture_url&access_token=${zyloUser.instagram.token}`;
        const response = await fetch(apiUrl, { method: "GET" });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Failed to fetch Instagram account details");
        }

        return NextResponse.json(data);
    } catch (error) {
        logger.error("Error fetching Instagram account details:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}