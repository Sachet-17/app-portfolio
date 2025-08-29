// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sachet Bisi — Portfolio",
  description: "Software Developer & AI/ML Engineer",
  // optional extras:
  // metadataBase: new URL("https://sachet-portfolio-views.vercel.app"),
  // openGraph: { title: "Sachet Bisi — Portfolio", description: "Software Developer & AI/ML Engineer", url: "/", siteName: "Sachet Bisi", type: "website" },
  // twitter: { card: "summary_large_image", title: "Sachet Bisi — Portfolio", description: "Software Developer & AI/ML Engineer" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
