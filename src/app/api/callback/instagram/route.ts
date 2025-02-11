import dbHandler from "@/utils/dbHandler";
import logger from "@/utils/logger";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


async function fetchLongLiveAccessToken(accessToken: string): Promise<any | null> {
  const INSTAGRAM_GRAPH_API_URL = 'https://graph.instagram.com';

  if (!accessToken || typeof accessToken !== 'string') {
    throw new Error('Error fetching long lived Access Token: Access Token is missing or invalid');
  }

  const longTokenRes = await fetch(
    `${INSTAGRAM_GRAPH_API_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${accessToken}`
  );

  const longTokenData: { access_token?: string; expires_in?: number } = await longTokenRes.json();
  if (!longTokenData.access_token) {
    throw new Error("Error fetching long lived Access Token");
  }

  return longTokenData;
}

export async function GET(req: Request): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");
    const session = await getToken({ req: req as any, secret: process.env.NEXTAUTH_SECRET }) || {};

    if (!code) {
      throw new Error("Authorization code missing");
    }

    const tokenRes = await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_CLIENT_ID!,
        client_secret: process.env.INSTAGRAM_CLIENT_SECRET!,
        grant_type: "authorization_code",
        redirect_uri: process.env.INSTAGRAM_CALLBACK_URL!,
        code,
      }),
    });

    const tokenData: { access_token?: string } = await tokenRes.json();
    if (!tokenData.access_token) {
      throw new Error("Failed to get short-lived token");
    }

    const shortToken = tokenData.access_token;
    const longTokenData = await fetchLongLiveAccessToken(shortToken);

    const filter = { email: session.email }
    const userData = {
      email: session.email,
      instagram: {
        token: longTokenData.access_token,
        expiry: new Date(Date.now() + longTokenData.expires_in * 1000),
      }
    }
    const dbRes = await dbHandler('zylouser', 'update', filter, userData);
    logger.info(dbRes);
    return NextResponse.redirect(new URL(`${process.env.HOST_URL}/dashboard`));
  } catch (error) {
    logger.error(error);
    return NextResponse.redirect(new URL(`${process.env.HOST_URL}/error`));
  }
}