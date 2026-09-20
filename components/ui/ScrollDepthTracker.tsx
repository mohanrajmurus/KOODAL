"use client";

import { useScrollDepth } from "@/hooks/useScrollDepth";

/** Mounted once at the page level to fire GA scroll_depth events. Renders nothing. */
export function ScrollDepthTracker() {
  useScrollDepth();
  return null;
}
