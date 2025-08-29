import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import type { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Sachet Bisi — Portfolio",
    template: "%s | Sachet Bisi",
  },
  description: "Software Developer & AI/ML Engineer",
  openGraph: {
    title: "Sachet Bisi — Portfolio",
    description: "Software Developer & AI/ML Engineer",
    url: "https://sachet-portfolio-views.vercel.app",
    siteName: "Sachet Bisi",
    images: [
      {
        url: "/og.png", // you can add your own OpenGraph image under /public/og.png
        width: 1920,
        height: 1080,
      },
    ],
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
    title: "Sachet Bisi — Portfolio",
    card: "summary_large_image",
  },
  icons: {
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
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
