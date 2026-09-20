"use client";

import { useEffect, useState } from "react";
import { useSignup, HERO_FORM_INPUT_ID } from "@/context/SignupProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { activityLabel } from "@/lib/activities";
import { track } from "@/lib/analytics";

const SCROLL_THRESHOLD = 420;

/**
 * Fixed bottom CTA bar, mobile only (sm:hidden). Shown once the visitor has
 * scrolled past the hero, hidden again once they've signed up.
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const { activity, submitted } = useSignup();

  useEffect(() => {
    let ticking = false;

    const check = () => {
      ticking = false;
      setVisible(window.scrollY > SCROLL_THRESHOLD && !submitted);
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
  }, [submitted]);

  function handleClick() {
    track("cta_click", { location: "sticky_mobile_cta", activity });
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    window.setTimeout(
      () => document.getElementById(HERO_FORM_INPUT_ID)?.focus({ preventScroll: true }),
      reducedMotion ? 0 : 420,
    );
  }

  const label = activityLabel(activity);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/94 px-5 py-3 backdrop-blur-md transition-transform duration-350 ease-out sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-heading truncate text-base font-extrabold tracking-tight text-ink">
            Plan irukku. Aal illa?
          </div>
          <div className="truncate text-[13px] text-muted">
            {label ? `${label} · one field, nothing else` : "One field. WhatsApp or Instagram."}
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="min-h-12 shrink-0 rounded-full bg-ink px-5.5 text-base font-bold text-primary transition-[transform,background-color] duration-180 hover:scale-[1.04] hover:bg-teal active:scale-[0.97]"
        >
          Count me in
        </button>
      </div>
    </div>
  );
}
