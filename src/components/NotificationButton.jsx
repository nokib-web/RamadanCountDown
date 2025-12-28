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
                // OneSignal not ready yet, silently ignore
            }
        };

        const timeoutId = setTimeout(checkSubscription, 1000);
        return () => clearTimeout(timeoutId);
    }, []);

    const handleToggle = async () => {
        try {
            if (isSubscribed) {
                await OneSignal.User.PushSubscription.optOut();
            } else {
                await OneSignal.User.PushSubscription.optIn();
            }
        } catch (error) {
            console.error("Error toggling notifications:", error);
            // Fallback for subscribing only
            if (!isSubscribed) {
                try {
                    await OneSignal.Slidedown.promptPush();
                } catch (inner) { console.error("Fallback failed", inner); }
            }
        }
    };

    if (!mounted || !isSupported) return null;

    return (
        <button
            onClick={handleToggle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
                fixed top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50
                min-w-[44px] min-h-[44px] p-3 rounded-full 
                backdrop-blur-md border transition-all duration-300 shadow-lg group
                ${isSubscribed
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-500"
                    : "bg-white/10 border-white/20 hover:bg-white/20 text-slate-800 dark:text-white"
                }
            `}
            aria-label={isSubscribed ? "Disable Notifications" : "Enable Notifications"}
            title={isSubscribed ? "Click to Disable Daily Reminders" : "Enable Daily Reminders"}
        >
            {isSubscribed ? (
                <Bell className="w-6 h-6 fill-current" />
            ) : (
                <div className="relative">
                    <Bell className={`w-6 h-6 ${isHovered ? 'animate-swing' : ''}`} />
                </div>
            )}
        </button>
    );
};

export default NotificationButton;
