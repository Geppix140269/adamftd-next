"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect media query matches
 * @param query - Media query string (e.g., "(max-width: 768px)")
 * @returns boolean - Whether the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create listener
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Add listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/**
 * Hook to detect mobile viewport (<768px)
 */
export function useMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}

/**
 * Hook to detect tablet viewport (768px - 1023px)
 */
export function useTablet(): boolean {
  return useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
}

/**
 * Hook to detect desktop viewport (>=1024px)
 */
export function useDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}
