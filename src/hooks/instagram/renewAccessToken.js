import compareDatesByDate from '../../utils/compareDatesByDate.js';
import dbHandler from '../../utils/dbHandler.js';
import logger from '../../utils/logger.js';
import cron from "node-cron";

async function renewInstagramAccessToken(currentToken) {
    try {
        const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        if (!response.ok || !data.access_token) {
            throw new Error(`Failed to renew the Instagram access token: ${data.error?.message || "Unknown error"}`);
        }
        return data;
    } catch (error) {
        logger.error("Error while refreshing the Instagram access token:", error);
        throw error;
    }
}

async function renewAllInstagramAccessToken() {
    const users = await dbHandler("zylouser", "read");
    if (users && Array.isArray(users)) {
        for (const user of users) {
            if (compareDatesByDate(new Date(), new Date(user.instagram.expiry))) {
                const tokenData = await renewInstagramAccessToken(user.instagram.token);
                if (tokenData.access_token) {
                    const updatedData = {
                        token: tokenData.access_token,
                        expiry: new Date(Date.now() + tokenData.expires_in * 1000),
                    }
                    await dbHandler("zylouser", "update", { _id: user._id }, { instagram: updatedData });
                    logger.info(`Updated token for user ${user.email}`);
                }
            }
        }
    } else {
        logger.error("No users found or database query failed.");
    }
}

function startInstagramTokenRenewScheduler() {
    cron.schedule("0 */12 * * *", async () => {
        await renewAllInstagramAccessToken();
    });
    renewAllInstagramAccessToken();
}

export default startInstagramTokenRenewScheduler;