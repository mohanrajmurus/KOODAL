"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100] as const;

/**
 * Fires a GA `scroll_depth` event once per milestone (25/50/75/100% of
 * document height scrolled). Mount once at the page level.
 */
export function useScrollDepth(): void {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let ticking = false;

    const check = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = (window.scrollY / scrollable) * 100;

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone);
          track("scroll_depth", { percent: milestone });
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
