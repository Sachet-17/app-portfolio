// app/layout.tsx
import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import type { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { PageTransition } from "./components/page-transition";

export const metadata: Metadata = {
  title: {
    default: "Sachet Ranjan Bisi — Portfolio",
    template: "%s | Sachet Ranjan Bisi",
  },
  description: "AI/ML Engineer & Software Developer",
  metadataBase: new URL("https://iamsrb.com"), // <- your live domain
  openGraph: {
    title: "Sachet Ranjan Bisi — Portfolio",
    description: "AI/ML Engineer & Software Developer",
    url: "/", // resolved against metadataBase
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
        className={`bg-black noise radial-bg ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}