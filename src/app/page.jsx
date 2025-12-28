"use client";

import { useState } from "react";
import Background from "@/components/Background";
import CountdownTimer from "@/components/CountdownTimer";
import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import IslamicDate from "@/components/IslamicDate";
import InspirationalQuote from "@/components/InspirationalQuote";
import ShareButton from "@/components/ShareButton";
import LearnMoreModal from "@/components/LearnMoreModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex min-h-[100dvh] w-full flex-col items-center justify-between relative px-4 py-4 text-center font-sans transition-colors duration-500">
      <Background />
      <ThemeToggle />

      {/* Top Spacer / Header Area */}
      <div className="flex-none pt-4 md:pt-8 w-full z-10 animate-fade-in-down">
        <h2 className="text-sm sm:text-lg md:text-xl font-bold tracking-[0.3em] uppercase text-slate-800 dark:text-white drop-shadow-sm transition-colors duration-300 mb-1 sm:mb-2">
          Upcoming
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none text-slate-900 dark:text-white drop-shadow-xl transition-colors duration-300">
          Ramadan<br />Kareem
        </h1>
        <p className="hidden sm:block mt-2 sm:mt-4 text-xs sm:text-base md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-300 px-4">
          The month of mercy, forgiveness, and blessings.
        </p>


        {/* Middle Area: Countdown - Grows to fill space */}
        <div className="flex-grow flex items-center justify-center w-full z-10 py-2">
          <div className="w-full transform scale-90 sm:scale-100 lg:scale-110 transition-transform duration-500">
            <CountdownTimer />
          </div>
        </div>

        {/* Islamic Date Display */}
        <div className="mt-4 flex justify-center">
          <IslamicDate />
        </div>
      </div>


      {/* Inspirational Quote Section */}
      <div className="flex-none w-full max-w-4xl mx-auto z-10 mb-4 px-2">
        {/* <InspirationalQuote /> */}
      </div>

      {/* Bottom Area: Footer/Social - Fixed size at bottom */}
      <div className="flex-none flex flex-col items-center gap-3 sm:gap-6 z-10 pb-2 sm:pb-6">


        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 sm:px-10 sm:py-4 text-xs sm:text-sm font-bold tracking-widest text-slate-900 dark:text-white uppercase transition-all duration-300 border-2 border-slate-900 dark:border-white rounded hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-white bg-transparent"
          >
            Learn More
          </button>

          <ShareButton />
        </div>
      </div>

      {/* Learn More Modal */}
      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="text-slate-700 dark:text-white transition-colors duration-300 scale-75 sm:scale-100">
        <SocialLinks />
      </div>
    </main>
  );
}
