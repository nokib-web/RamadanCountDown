"use client";

import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalInitializer() {
    useEffect(() => {
        const runOneSignal = async () => {
            try {
                await OneSignal.init({
                    appId: "4ec5a01e-5863-4a06-9510-4d7ec616bffe", // TODO: Replace with your actual OneSignal App ID
                    allowLocalhostAsSecureOrigin: true,
                    notifyButton: {
                        enable: false, // We use our own custom button
                    },
                });
            } catch (error) {
                // Suppress the domain mismatch error to avoid the Next.js error overlay
                if (error?.message?.includes('Can only be used on') || error?.toString()?.includes('Can only be used on')) {
                    console.warn("OneSignal Warning: Domain mismatch. Please add http://localhost:3000 to your OneSignal App settings to test notifications locally.");
                } else {
                    console.error("OneSignal initialization failed:", error);
                }
            }
        };

        const timer = setTimeout(() => {
            runOneSignal();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
