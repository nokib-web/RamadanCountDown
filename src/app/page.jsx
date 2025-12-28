"use client";

import { useState } from "react";
import OneSignalInitializer from "@/components/OneSignalInitializer";
import Background from "@/components/Background";
import CountdownTimer from "@/components/CountdownTimer";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import NotificationButton from "@/components/NotificationButton";
import IslamicDate from "@/components/IslamicDate";
import InspirationalQuote from "@/components/InspirationalQuote";
import ShareButton from "@/components/ShareButton";
import LearnMoreModal from "@/components/LearnMoreModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-[100dvh] w-full flex-col items-center justify-between relative px-3 py-3 sm:px-4 sm:py-4 text-center font-sans transition-colors duration-500">
      <OneSignalInitializer />
      <Background />
      <ThemeToggle />
      <NotificationButton />

      {/* Header Area */}
      <div className="flex-none pt-3 sm:pt-4 md:pt-8 w-full z-10 animate-fade-in-down">
        <h2 className="text-xs sm:text-sm md:text-lg font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-slate-800 dark:text-white drop-shadow-sm transition-colors duration-300 mb-1">
          Upcoming
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none text-slate-900 dark:text-white drop-shadow-xl transition-colors duration-300">
          Ramadan<br />Kareem
        </h1>
        <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base lg:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300 px-2 sm:px-4">
          The month of mercy, forgiveness, and blessings.
        </p>

        {/* Countdown Timer */}
        <div className="flex-grow flex items-center justify-center w-full z-10 py-3 sm:py-4 md:py-6">
          <div className="w-full">
            <CountdownTimer />
          </div>
        </div>

        {/* Islamic Date Display */}
        <div className="mt-3 sm:mt-4 flex justify-center">
          <IslamicDate />
        </div>
      </div>

      {/* Bottom Area: Actions */}
      <div className="flex-none flex flex-col items-center gap-4 sm:gap-6 z-10 pb-3 sm:pb-4 md:pb-6 mt-4">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="min-h-[44px] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-bold tracking-widest text-slate-900 dark:text-white uppercase transition-all duration-300 border-2 border-slate-900 dark:border-white rounded hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-white bg-transparent"
          >
            Learn More
          </button>

          <ShareButton />
        </div>

        <div className="text-slate-700 dark:text-white transition-colors duration-300">
          <SocialLinks />
        </div>
      </div>

      {/* Learn More Modal */}
      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
