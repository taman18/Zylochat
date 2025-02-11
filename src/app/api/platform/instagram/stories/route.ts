import dbHandler from "@/utils/dbHandler";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const INSTAGRAM_API_BASE = "https://graph.instagram.com";
const MAX_RETRIES = 5;

async function fetchInstagramStories(accessToken: string) {
    let allStories: any[] = [];
    let nextUrl = `${INSTAGRAM_API_BASE}/me/stories?fields=id,media_type,media_url,timestamp,caption&access_token=${accessToken}`;
    let retries = 0;

    while (nextUrl && retries < MAX_RETRIES) {
        try {
            const response = await fetch(nextUrl, { method: "GET" });
            const data = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    const waitTime = Math.pow(2, retries) * 1000;
                    console.warn(`Rate limit hit. Retrying in ${waitTime / 1000} seconds...`);
                    await new Promise((resolve) => setTimeout(resolve, waitTime));
                    retries++;
                    continue;
                }
                throw new Error(data.error?.message || "Failed to fetch Instagram stories");
            }

            allStories = [...allStories, ...data.data];
            nextUrl = data.paging?.next || null;
            retries = 0;

        } catch (error) {
            console.error("Error fetching Instagram stories:", error);
            return null;
        }
    }
    return allStories;
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

        const accessToken = zyloUser.instagram.token;

        const stories = await fetchInstagramStories(accessToken);
        if (!stories) {
            return NextResponse.json({ error: "Failed to fetch Instagram stories" }, { status: 500 });
        }

        return NextResponse.json({ stories });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}