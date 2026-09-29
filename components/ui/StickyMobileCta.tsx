"use client";

import { useEffect, useState } from "react";
import { useSignup } from "@/context/SignupProvider";
import { CountMeInButton } from "./CountMeInButton";

const SCROLL_THRESHOLD = 520;

/**
 * Fixed bottom CTA bar below 760px (where the nav links are hidden). Shown
 * once the visitor has scrolled past the hero, hidden again after signup.
 */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);
  const { activities, submitted } = useSignup();

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

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/94 px-5 pt-3 backdrop-blur-md transition-transform duration-350 ease-[cubic-bezier(0.2,0.7,0.3,1)] min-[760px]:hidden ${
        visible ? "translate-y-0" : "translate-y-[110%]"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-heading truncate text-base font-extrabold tracking-tight text-ink">
            Plan irukku. Aal illa?
          </div>
          <div className="truncate text-[13px] text-muted">
            {activities.length ? activities.join(" · ") : "Name, WhatsApp number, area — quick."}
          </div>
        </div>
        <CountMeInButton location="sticky_mobile_cta" variant="solid" />
      </div>
    </div>
  );
}
