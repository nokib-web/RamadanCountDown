"use client";

import { X, Moon, Heart, Book, Users, Star } from "lucide-react";
import { useEffect } from "react";

const LearnMoreModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const features = [
        {
            icon: Moon,
            title: "The Holy Month",
            description: "Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting, prayer, reflection, and community."
        },
        {
            icon: Heart,
            title: "Spiritual Growth",
            description: "A time for distinct spiritual reflection, self-improvement, and heightened devotion. It's a reset button for the soul."
        },
        {
            icon: Book,
            title: "Quran Revelation",
            description: "Commemorating the first revelation of the Quran. The Night of Power (Laylat al-Qadr) falls within the last ten nights."
        },
        {
            icon: Users,
            title: "Community & Charity",
            description: "Strengthening bonds with family and community. A time of empathy where charity (Zakat/Sadaqah) is multiplied."
        }
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Container */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="learnmore-title"
                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-800 animate-fade-in-up scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700"
            >
                {/* Header - Sticky with Blur */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg">
                            <Star className="w-5 h-5 text-slate-800 dark:text-yellow-400 fill-current" />
                        </div>
                        <h2 id="learnmore-title" className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                            About Ramadan
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content Body */}
                <div className="p-6 md:p-8 space-y-8">
                    {/* Hero Text */}
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                            <span className="font-medium text-slate-900 dark:text-white">Ramadan</span> is more than just abstaining from food.
                            It is a journey of the heart, a time to reconnect with the Creator, and a reminder of our shared humanity.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group p-6 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-slate-800 dark:text-blue-400" strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Key Practices Section */}
                    <div className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-slate-900 text-white p-8">
                        {/* Decorative background gradients */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full" />

                        <div className="relative z-10 grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Key Practices</h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-slate-300 text-sm md:text-base">
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <span><strong>Sawm:</strong> Dawn-to-sunset fasting</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <span><strong>Zakat:</strong> Charity & giving</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <span><strong>Salah:</strong> Five daily prayers</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <span><strong>Iftar:</strong> Community meals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <span><strong>Quran:</strong> Recitation & reflection</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    <span><strong>Taraweeh:</strong> Night prayers</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Quote Footer
                    <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-800">
                        <blockquote className="text-sm text-slate-500 dark:text-slate-500 italic max-w-2xl mx-auto">
                            "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous."
                        </blockquote>
                        <cite className="block mt-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            — Quran 2:183
                        </cite>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default LearnMoreModal;
