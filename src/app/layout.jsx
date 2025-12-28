import { Providers } from "./providers";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ramadan Countdown 2026 | Days Left Until Ramadan",
  description: "Count down the days, hours, and minutes until Ramadan 2026. Get accurate Islamic dates, daily inspiration, and prepare for the holy month of fasting.",
  keywords: [
    "Ramadan 2026",
    "Ramadan Countdown",
    "Days until Ramadan",
    "When is Ramadan 2026",
    "Islamic Calendar",
    "Muslim Fasting",
    "Hijri Date",
    "Ramadan Kareem",
    "Eid al-Fitr",
    "Ramadan 1447",
    "Islamic Holy Month"
  ],
  authors: [{ name: "Ramadan Countdown Team" }],
  creator: "Ramadan Countdown",
  publisher: "Ramadan Countdown",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ramadan-count-down-wheat.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ramadan Countdown 2026 | Days Left Until the Holy Month",
    description: "Join functionality for millions counting down to Ramadan 2026. Track time remaining, view Islamic dates, and get daily inspiration.",
    url: 'https://ramadan-count-down-wheat.vercel.app',
    siteName: 'Ramadan Countdown 2026',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Ensure you have an og-image.png in public folder or use a remote URL
        width: 1200,
        height: 630,
        alt: 'Ramadan Countdown 2026 Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ramadan Countdown 2026 | Days Left Until Ramadan",
    description: "Track the days, hours, and minutes until the holy month of Ramadan 2026 begins.",
    creator: '@ramadancountdown',
    images: ['/og-image.png'],
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
      { url: '/favicon.ico', sizes: 'any' }, // Fallback
    ],
    apple: [
      { url: '/apple-touch-icon.png' }, // Ensure this exists if possible, or browsers might 404
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Allow zooming for accessibility
  },
  verification: {
    google: 'google-site-verification=YOUR_VERIFICATION_CODE', // Placeholder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans`} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
