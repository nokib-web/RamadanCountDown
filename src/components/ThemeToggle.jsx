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

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 dark:bg-slate-800/50 dark:border-slate-700 dark:hover:bg-slate-800/80 shadow-lg group"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-500 group-hover:rotate-90" />
            ) : (
                <Moon className="w-6 h-6 text-slate-800 dark:text-slate-200 transition-transform duration-500 group-hover:-rotate-12" />
            )}
        </button>
    );
};

export default ThemeToggle;
