"use client";

import { track } from "@/lib/analytics";
import { scrollToSignupForm } from "@/lib/scrollToForm";

const VARIANTS = {
  nav: "min-h-11 bg-ink px-4.5 py-2.5 text-[15px] text-primary hover:scale-[1.04] hover:bg-teal active:scale-[0.97]",
  solid: "min-h-12 bg-ink px-5.5 py-3.5 text-base text-primary hover:scale-[1.04] hover:bg-teal active:scale-[0.97]",
  outline:
    "min-h-12.5 border-2 border-ink bg-primary px-6 py-3.5 text-base text-ink hover:-translate-y-0.5 active:translate-y-0",
  // No border: for placement on a dark card, where an ink border would vanish.
  lime: "min-h-12.5 bg-primary px-6 py-3.5 text-base text-ink hover:-translate-y-0.5 active:translate-y-0",
  heroSolid:
    "min-h-13.5 bg-ink px-7 py-4 text-lg text-primary hover:scale-[1.03] hover:bg-teal active:scale-[0.98]",
};

interface CountMeInButtonProps {
  location: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
}

export function CountMeInButton({ location, variant = "outline", className = "" }: CountMeInButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        track("cta_click", { location });
        scrollToSignupForm();
      }}
      className={`shrink-0 rounded-full font-bold transition-[transform,background-color] duration-180 ${VARIANTS[variant]} ${className}`}
    >
      Get Early Access
    </button>
  );
}
