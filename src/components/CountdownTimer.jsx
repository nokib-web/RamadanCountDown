"use client";

import { useEffect, useState } from "react";
import { getNextRamadanDate } from "@/utils/islamicCalendar";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [targetDate, setTargetDate] = useState(null);

    useEffect(() => {
        // Get the next Ramadan date dynamically
        const ramadanDate = getNextRamadanDate();
        setTargetDate(ramadanDate);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = ramadanDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label, isLast, max }) => {
        const percentage = max ? (value / max) * 100 : 0;

        return (
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center min-w-[70px] sm:min-w-[100px] md:min-w-[140px] group">
                    <div className="relative">
                        <time
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-slate-800 dark:text-white tabular-nums leading-tight drop-shadow-sm transition-colors duration-300"
                            aria-label={`${value} ${label.toLowerCase()}`}
                        >
                            {String(value).padStart(2, "0")}
                        </time>

                        {/* Progress bar */}
                        <div className="mt-2 w-full h-1 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>

                    <span className="mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm font-semibold text-slate-600 dark:text-gray-300 uppercase tracking-widest transition-colors duration-300">
                        {label}
                    </span>
                </div>
                {!isLast && (
                    <div className="hidden md:block w-px h-10 sm:h-16 bg-slate-300 dark:bg-gray-700/50 mx-2 sm:mx-4 lg:mx-8" />
                )}
            </div>
        );
    };

    const readableFull = `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds`;

    return (
        <div className="w-full max-w-6xl mx-auto my-4 sm:my-8 lg:my-12">
            {targetDate && (
                <div className="text-center mb-4">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                        Countdown to Ramadan — {targetDate.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </p>
                </div>
            )}

            <div role="status" aria-live="polite" className="sr-only">
                Time remaining: {readableFull}.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-0">
                <TimeUnit value={timeLeft.days} label="Days" max={365} />
                <TimeUnit value={timeLeft.hours} label="Hours" max={24} />
                <TimeUnit value={timeLeft.minutes} label="Minutes" max={60} />
                <TimeUnit value={timeLeft.seconds} label="Seconds" max={60} isLast={true} />
            </div>
        </div>
    );
};

export default CountdownTimer;
