// app/layout.tsx
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
  metadataBase: new URL("https://sachet-portfolio.vercel.app"), // <- use your live domain
  openGraph: {
    title: "Sachet Bisi — Portfolio",
    description: "Software Developer & AI/ML Engineer",
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
  // Kept for rich cards when your link is shared on X (formerly Twitter).
  // Safe to keep even if you don't use X.
  twitter: {
    card: "summary_large_image",
    title: "Sachet Bisi — Portfolio",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
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
        {children}
      </body>
    </html>
  );
}