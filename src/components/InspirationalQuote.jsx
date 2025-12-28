"use client";

import { useEffect, useState } from "react";
import { getRandomContent } from "@/utils/inspirationalContent";
import { BookOpen, RefreshCw } from "lucide-react";

const InspirationalQuote = () => {
    const [content, setContent] = useState(null);
    const [isRotating, setIsRotating] = useState(false);

    const loadNewContent = () => {
        setIsRotating(true);
        setTimeout(() => {
            setContent(getRandomContent());
            setIsRotating(false);
        }, 300);
    };

    useEffect(() => {
        loadNewContent();
        // Change content every 30 seconds
        const interval = setInterval(loadNewContent, 30000);
        return () => clearInterval(interval);
    }, []);

    if (!content) return null;

    const { type, content: data } = content;

    return (
        <div className="max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-slate-700 dark:text-yellow-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300">
                        {type === 'verse' ? 'Quranic Verse' : 'Hadith'}
                    </span>
                </div>
                <button
                    onClick={loadNewContent}
                    className="p-2 rounded-full hover:bg-white/10 transition-all group"
                    aria-label="Load new quote"
                >
                    <RefreshCw
                        className={`w-4 h-4 text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-white transition-all ${isRotating ? 'animate-spin' : ''
                            }`}
                    />
                </button>
            </div>

            <div className="space-y-3">
                {type === 'verse' && data.arabic && (
                    <p lang="ar" className="text-right text-lg md:text-xl font-arabic leading-relaxed text-slate-800 dark:text-white">
                        {data.arabic}
                    </p>
                )}

                <blockquote className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-gray-200 italic">
                    “{data.text}”
                </blockquote>

                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-gray-400 pt-2 border-t border-white/10">
                    <cite className="font-medium not-italic">{data.reference}</cite>
                    {type === 'hadith' && data.narrator && (
                        <span className="text-xs">Narrated by {data.narrator}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InspirationalQuote;
