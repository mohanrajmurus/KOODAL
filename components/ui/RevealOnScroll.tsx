"use client";

import { useInView } from "@/hooks/useInView";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Extra transition-delay in ms, for staggering siblings. */
  delayMs?: number;
}

/**
 * Fades + slides content up as it enters the viewport. Only animates
 * opacity/transform (never display/visibility/pointer-events) so wrapped
 * interactive content — the CTA in particular — stays clickable throughout.
 */
export function RevealOnScroll({ children, className = "", delayMs = 0 }: RevealOnScrollProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
