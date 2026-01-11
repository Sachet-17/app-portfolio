/**
 * Utility functions for scroll behavior and hash navigation
 */

/**
 * Converts navigation hrefs to hash links (e.g., "/about" -> "#about")
 */
export function getHashFromHref(href: string): string {
  return href.startsWith("/") ? `#${href.slice(1)}` : href;
}

/**
 * Scrolls to a section by hash with smooth behavior
 * @param hash - The hash string (e.g., "#about")
 */
export function scrollToSection(hash: string): void {
  const targetId = hash.slice(1); // Remove #
  const element = document.getElementById(targetId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

/**
 * Handles scrolling to hash on page load
 */
export function handleHashOnLoad(): void {
  if (typeof window !== "undefined" && window.location.hash) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      scrollToSection(window.location.hash);
    }, 100);
  }
}

