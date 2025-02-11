import dbHandler from "@/utils/dbHandler";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";


const INSTAGRAM_API_BASE = "https://graph.instagram.com";
const MAX_RETRIES = 5;

async function fetchAllInstagramPosts(accessToken: string) {
    let allPosts: any[] = [];
    let nextUrl = `${INSTAGRAM_API_BASE}/me/media?fields=id,caption,media_type,media_url,timestamp,permalink,thumbnail_url&access_token=${accessToken}`;
    let retries = 0;

    while (nextUrl && retries < MAX_RETRIES) {
        try {
            const response = await fetch(nextUrl, { method: "GET" });
            const data = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    const waitTime = Math.pow(2, retries) * 1000;
                    console.warn(`Rate limit reached. Retrying in ${waitTime / 1000} seconds...`);
                    await new Promise((resolve) => setTimeout(resolve, waitTime));
                    retries++;
                    continue;
                }
                throw new Error(data.error?.message || "Failed to fetch Instagram posts");
            }

            allPosts = [...allPosts, ...data.data];
            nextUrl = data.paging?.next || null;
            retries = 0;

        } catch (error) {
            console.error("Error fetching Instagram posts:", error);
            return null;
        }
    }
    return allPosts;
}

export async function GET(req: NextRequest) {
    try {
        const session = await getToken({ req: req as any, secret: process.env.NEXTAUTH_SECRET }) || {};
        if (!session?.email) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const filter = { email: session.email };
        const dbRes: any = await dbHandler('zylouser', 'read', filter);
        const zyloUser = dbRes[0];

        if (!zyloUser?.instagram?.token) {
            return NextResponse.redirect(`${process.env.HOST}/api/connect/instagram`);
        }

        const posts = await fetchAllInstagramPosts(zyloUser.instagram.token);
        if (!posts) {
            return NextResponse.json({ error: "Failed to fetch Instagram posts" }, { status: 500 });
        }

        return NextResponse.json({ posts });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}