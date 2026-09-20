"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  /** Stop observing after the first time the element enters view. */
  once?: boolean;
}

/**
 * Tracks whether an element is in the viewport. Under prefers-reduced-motion,
 * short-circuits to `true` immediately so consumers never need their own
 * reduced-motion branch — content is simply present, never animated.
 */
export function useInView<T extends HTMLElement>(
  options: UseInViewOptions = {},
): { ref: React.RefObject<T | null>; inView: boolean } {
  const { threshold = 0.2, rootMargin = "0px 0px -10% 0px", once = true } = options;
  const ref = useRef<T | null>(null);
  const [observedInView, setObservedInView] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Under reduced motion, content is simply present — skip the observer
    // entirely rather than writing state to force the same outcome.
    if (reducedMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObservedInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setObservedInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold, rootMargin, once]);

  return { ref, inView: reducedMotion || observedInView };
}
