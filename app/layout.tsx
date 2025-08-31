// app/layout.tsx
import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import type { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Sachet Bisi — Portfolio",
    template: "%s | Sachet Ranjan Bisi",
  },
  description: "AI/ML Engineer & Software Developer",
  metadataBase: new URL("https://iamsrb.com"),
  openGraph: {
    title: "Sachet Bisi — Portfolio",
    description: "AI/ML Engineer & Software Developer",
    url: "/",
    siteName: "Sachet Bisi",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachet Bisi — Portfolio",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        {/* SRB brand badge (top-left, clickable, larger size) */}
        <Link
          href="/"
          aria-label="Go to home"
          className="fixed left-4 top-4 z-[60] md:left-6 md:6"
        >
          {/* Floating SRB logo */}
          <div className="fixed top-6 left-6 z-50">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-900/50">
              <Image
                src="/srb-base.png"
                alt="SRB Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Link>

        {children}
      </body>
    </html>
  );
}