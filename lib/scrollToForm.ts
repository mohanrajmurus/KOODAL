import { FORM_NAME_INPUT_ID } from "@/context/SignupProvider";

const STICKY_NAV_OFFSET = 90;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** The one signup form lives in `SignupSection` — every "Get Early Access" button scrolls here. */
export function scrollToSignupForm(): void {
  const input = document.getElementById(FORM_NAME_INPUT_ID);
  const form = input?.closest("form");
  if (!input || !form) return;
  const reduce = prefersReducedMotion();
  const top = form.getBoundingClientRect().top + window.scrollY - STICKY_NAV_OFFSET;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
  window.setTimeout(() => input.focus({ preventScroll: true }), reduce ? 0 : 450);
}
