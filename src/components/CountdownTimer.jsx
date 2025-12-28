"use client";

import { useEffect, useState } from "react";
import { getNextRamadanDate } from "@/utils/islamicCalendar";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [targetDate, setTargetDate] = useState(null);

    useEffect(() => {
        const ramadanDate = getNextRamadanDate();
        setTargetDate(ramadanDate);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = ramadanDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label, max, isLast }) => {
        const percentage = max ? (value / max) * 100 : 0;

        return (
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center min-w-[70px] sm:min-w-[100px] md:min-w-[140px] lg:min-w-[160px] group">
                    <div className="relative flex items-center justify-center h-12 sm:h-20 md:h-24">
                        <span
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-800 dark:text-white tabular-nums tracking-tighter drop-shadow-sm"
                        >
                            {String(value).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-2 w-full h-1 bg-slate-200 dark:bg-gray-700/50 rounded-full overflow-hidden max-w-[80%] mx-auto">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                        />
                    </div>

                    <span className="mt-3 text-[10px] sm:text-xs md:text-sm font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest transition-colors duration-300">
                        {label}
                    </span>
                </div>
                {!isLast && (
                    <div className="hidden sm:block w-[1px] h-12 sm:h-16 md:h-20 bg-slate-200 dark:bg-gray-700/50 mx-2 sm:mx-6 md:mx-10" />
                )}
            </div>
        );
    };

    const readableFull = `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, and ${timeLeft.seconds} seconds`;

    return (
        <div className="w-full max-w-6xl mx-auto py-6 sm:py-10">
            <div role="status" aria-live="polite" className="sr-only">
                Time remaining: {readableFull}.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
                <TimeUnit value={timeLeft.days} label="Days" max={365} />
                <TimeUnit value={timeLeft.hours} label="Hours" max={24} />
                <TimeUnit value={timeLeft.minutes} label="Minutes" max={60} />
                <TimeUnit value={timeLeft.seconds} label="Seconds" max={60} isLast={true} />
            </div>

            {targetDate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center"
                >
                    <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-gray-400 font-medium tracking-wide">
                        Countdown to <span className="text-slate-900 dark:text-white font-bold">Ramadan 2026</span> — {targetDate.toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </motion.div>
            )}
        </div>
    );
};

export default CountdownTimer;
