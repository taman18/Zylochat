import { NextResponse } from "next/server";
import querystring from "querystring";

export async function GET() {
    const instagramAuthUrl = `https://api.instagram.com/oauth/authorize?${querystring.stringify({
        client_id: process.env.INSTAGRAM_CLIENT_ID,
        redirect_uri: process.env.INSTAGRAM_CALLBACK_URL,
        response_type: 'code',
        scope: 'instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments',
        state: '123456'
    })}`;
    return NextResponse.redirect(instagramAuthUrl);
}