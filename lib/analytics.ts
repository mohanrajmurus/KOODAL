import { sendGAEvent } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Centralized GA4 custom event tracking. No-ops when GA isn't configured
 * (e.g. local dev without a measurement ID) so callers never need to guard.
 */
export function track(event: string, params: Record<string, unknown> = {}): void {
  if (!GA_ID || typeof window === "undefined") return;

  sendGAEvent("event", event, {
    ...params,
    ...(process.env.NODE_ENV !== "production" ? { debug_mode: true } : {}),
  });
}
