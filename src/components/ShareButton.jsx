"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

const ShareButton = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = "Countdown to Ramadan 2026 — join me in preparing for the month.";

    const handleShare = async (platform) => {
        const urls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
            telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
        };

        if (platform === 'copy') {
            try {
                await navigator.clipboard.writeText(shareUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        } else if (platform === 'native' && navigator.share) {
            try {
                await navigator.share({
                    title: 'Ramadan Countdown 2026',
                    text: shareText,
                    url: shareUrl,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            window.open(urls[platform], '_blank', 'width=600,height=400');
        }

        setShowMenu(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                aria-label="Share countdown"
            >
                <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Share</span>
            </button>

            {showMenu && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowMenu(false)}
                    />
                    <div className="absolute bottom-full mb-2 right-0 z-50 w-48 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 animate-fade-in-up">
                        <div className="space-y-1">
                            {navigator.share && (
                                <button
                                    onClick={() => handleShare('native')}
                                    className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                                >
                                    Share via...
                                </button>
                            )}
                            <button
                                onClick={() => handleShare('facebook')}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                            >
                                Facebook
                            </button>
                            <button
                                onClick={() => handleShare('twitter')}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                            >
                                Twitter
                            </button>
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                            >
                                WhatsApp
                            </button>
                            <button
                                onClick={() => handleShare('telegram')}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                            >
                                Telegram
                            </button>
                            <div className="border-t border-gray-200 dark:border-gray-700 my-1" />
                            <button
                                onClick={() => handleShare('copy')}
                                className="w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors flex items-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4 text-green-500" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        <span>Copy Link</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ShareButton;
