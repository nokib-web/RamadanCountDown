import { NextResponse } from 'next/server';
import { getNextRamadanDate } from '@/utils/islamicCalendar';
import * as OneSignal from '@onesignal/node-onesignal';

// You need to set these in your Vercel Environment Variables
const ONESIGNAL_APP_ID = process.env.ONESIGNAL_APP_ID || "4ec5a01e-5863-4a06-9510-4d7ec616bffe";
const ONESIGNAL_API_KEY = process.env.ONESIGNAL_REST_API_KEY;

export async function GET(request) {
    // Basic security check (optional: verify Vercel Cron header if needed)
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    //     return new Response('Unauthorized', { status: 401 });
    // }

    if (!ONESIGNAL_API_KEY) {
        return NextResponse.json({ error: "Missing OneSignal REST API Key" }, { status: 500 });
    }

    try {
        // Calculate days remaining
        const now = new Date();
        const ramadanDate = getNextRamadanDate();
        const difference = ramadanDate.getTime() - now.getTime();
        const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

        if (daysLeft < 0) {
            return NextResponse.json({ message: "Ramadan has passed for this cycle." });
        }

        // Configure OneSignal Client
        const configuration = OneSignal.createConfiguration({
            restApiKey: ONESIGNAL_API_KEY,
        });
        const client = new OneSignal.DefaultApi(configuration);

        // Create Notification Object
        const notification = new OneSignal.Notification();
        notification.app_id = ONESIGNAL_APP_ID;
        notification.headings = { en: "Ramadan Countdown Update" };
        notification.contents = { en: `${daysLeft} Days Until Ramadan 2026!` };

        // Critical: Collapse ID ensures this notification replaces the previous day's one
        notification.collapse_id = "ramadan_daily_update";

        notification.included_segments = ["All"]; // Or "Subscribed Users"
        notification.priority = 10;

        // Optional: Open the app when clicked
        notification.url = "https://ramadan-count-down-wheat.vercel.app";

        // Send
        const response = await client.createNotification(notification);

        return NextResponse.json({
            success: true,
            daysLeft,
            oneSignalResponse: response
        });

    } catch (error) {
        console.error("Notification Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
