"use client";

import { useEffect, useState } from "react";
import { gregorianToHijri } from "@/utils/islamicCalendar";
import { Calendar } from "lucide-react";

const IslamicDate = () => {
    const [hijriDate, setHijriDate] = useState(null);
    const [gregorianDate, setGregorianDate] = useState("");

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            setHijriDate(gregorianToHijri(now));
            setGregorianDate(
                now.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            );
        };

        updateDate();
        const interval = setInterval(updateDate, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    if (!hijriDate) return null;

    return (
        <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">
                    Today's Date
                </span>
            </div>

            <div className="text-center">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {hijriDate.formatted}
                </p>
                <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                    {gregorianDate}
                </p>
            </div>
        </div>
    );
};

export default IslamicDate;
