"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = theme === 'dark';
    const handleToggle = () => setTheme(isDark ? 'light' : 'dark');

    return (
        <button
            onClick={handleToggle}
            className={`
                fixed top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50
                min-w-[44px] min-h-[44px] p-3 rounded-full
                backdrop-blur-md border-2 transition-all duration-300 ease-out
                hover:scale-110 active:scale-95
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${isDark
                    ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white focus:ring-white/50'
                    : 'bg-slate-800/10 border-slate-800/20 hover:bg-slate-800/20 text-slate-800 focus:ring-slate-800/50'
                }
            `}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
        >
            {isDark ? (
                <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-500 group-hover:rotate-90" />
            ) : (
                <Moon className="w-6 h-6 text-slate-800 dark:text-slate-200 transition-transform duration-500 group-hover:-rotate-12" />
            )}
        </button>
    );
};

export default ThemeToggle;
