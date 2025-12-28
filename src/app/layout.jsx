import { Providers } from "./providers";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ramadan Countdown 2026 — Days Until the Holy Month",
  description: "Track the days, hours, minutes, and seconds until Ramadan 2026. Includes the Islamic calendar, inspirational Quranic verses, and helpful context.",
  keywords: ["Ramadan", "Ramadan 2026", "Islamic Calendar", "Ramadan Countdown", "Muslim", "Fasting", "Quran", "Hadith", "Islamic Months", "Hijri Calendar"],
  authors: [{ name: "Ramadan Countdown" }],
  creator: "Ramadan Countdown",
  publisher: "Ramadan Countdown",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ramadan-countdown.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ramadan Countdown 2026 | Count Down to the Holy Month",
    description: "Join millions in counting down to Ramadan 2026. Track the days until the blessed month of fasting, prayer, and reflection.",
    url: 'https://ramadan-countdown.vercel.app',
    siteName: 'Ramadan Countdown',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ramadan Countdown 2026 | Count Down to the Holy Month",
    description: "Join millions in counting down to Ramadan 2026. Track the days until the blessed month.",
    creator: '@ramadancountdown',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
