"use client";

import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import OneSignal from "react-onesignal";

const NotificationButton = () => {
    const [mounted, setMounted] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if notifications are supported
        setIsSupported(typeof window !== "undefined" && "Notification" in window);

        // Listen for OneSignal subscription changes
        const checkSubscription = async () => {
            try {
                // Wait a bit for OneSignal to initialize
                // Note: OneSignal.User.PushSubscription might be undefined if not initialized yet
                if (OneSignal.User && OneSignal.User.PushSubscription) {
                    const optedIn = OneSignal.User.PushSubscription.optedIn;
                    setIsSubscribed(optedIn);

                    OneSignal.User.PushSubscription.addEventListener("change", (event) => {
                        setIsSubscribed(event.current.optedIn);
                    });
                }
            } catch (e) {
                console.log("OneSignal not ready yet", e);
            }
        };

        const timeoutId = setTimeout(checkSubscription, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleSubscribe = async () => {
        try {
            console.log("Attempting to subscribe...");
            // Use the direct opt-in method which triggers the native browser prompt
            await OneSignal.User.PushSubscription.optIn();
            console.log("Opt-in requested");
        } catch (error) {
            console.error("Error subscribing to notifications:", error);
            // Fallback for older browsers or if the SDK behaves differently
            try {
                await OneSignal.Slidedown.promptPush();
            } catch (innerError) {
                console.error("Fallback prompt failed:", innerError);
            }
        }
    };

    if (!mounted || !isSupported) return null;

    return (
        <button
            onClick={handleSubscribe}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={isSubscribed}
            className={`
                fixed top-6 left-6 z-50 p-3 rounded-full 
                backdrop-blur-md border transition-all duration-300 shadow-lg group
                ${isSubscribed
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 cursor-default"
                    : "bg-white/10 border-white/20 hover:bg-white/20 text-slate-800 dark:text-white cursor-pointer"
                }
            `}
            aria-label="Enable Notifications"
            title={isSubscribed ? "Notifications Enabled" : "Enable Daily Reminders"}
        >
            {isSubscribed ? (
                <Bell className="w-6 h-6 fill-current" />
            ) : (
                <div className="relative">
                    <Bell className={`w-6 h-6 ${isHovered ? 'animate-swing' : ''}`} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                </div>
            )}
        </button>
    );
};

export default NotificationButton;
