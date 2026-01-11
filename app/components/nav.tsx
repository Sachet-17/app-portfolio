// app/components/nav.tsx
"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { navigation } from "../../data/config";
import { getHashFromHref, scrollToSection } from "../../util/scroll";

const links = navigation;

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Scroll spy: detect which section is in view
  useEffect(() => {
    const sections = links.map((link) => {
      const hash = getHashFromHref(link.href);
      return hash.slice(1); // Remove the # to get the section id
    });

    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is near top
      threshold: 0,
    };

    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
            // Update URL hash without scrolling
            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        }, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Detect hero section intersection for header styling
  useEffect(() => {
    const heroSection = document.querySelector("section:first-of-type");
    if (!heroSection) {
      // Fallback: use scroll position if hero section not found
      const handleScroll = () => {
        setIntersecting(window.scrollY < 100);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Close mobile sheet on ESC
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Handle smooth scroll on hash link click
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    scrollToSection(hash);
    setOpen(false);
  };

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50 border-zinc-800"
        }`}
      >
        <div className="container mx-auto flex items-center justify-center px-4 py-4 md:px-6">
          {/* Desktop links */}
          <nav className="hidden sm:flex items-center gap-6">
            {links.map((link) => {
              const hash = getHashFromHref(link.href);
              const sectionId = hash.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={hash}
                  onClick={(e) => handleLinkClick(e, hash)}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative text-sm md:text-base transition-colors pb-1 md:pb-2 cursor-pointer",
                    isActive
                      ? "text-white font-semibold after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 md:after:-bottom-1.5 after:h-[2px] after:bg-gradient-to-r after:from-zinc-200 after:via-zinc-400/80 after:to-zinc-200 after:rounded-full"
                      : "text-zinc-400 hover:text-zinc-100",
                  ].join(" ")}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile sheet */}
        <div
          className={`sm:hidden transition-[max-height] overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="container mx-auto grid gap-2 px-4 pb-4 md:px-6">
            {links.map((link) => {
              const hash = getHashFromHref(link.href);
              const sectionId = hash.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={hash}
                  onClick={(e) => handleLinkClick(e, hash)}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 transition-colors cursor-pointer ${
                    isActive
                      ? "text-white font-semibold bg-zinc-800/60"
                      : "text-zinc-200 hover:bg-zinc-800/60"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* push content below fixed bar on very small screens */}
      <div className="h-16 sm:h-0" aria-hidden="true" />
    </header>
  );
};
