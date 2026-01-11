"use client";

import { ScrollToTop } from "./components/scroll-to-top";

export default function Template({ children }: { children: React.ReactNode }) {
  // Template still needed for ScrollToTop to work on every route change
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
}

