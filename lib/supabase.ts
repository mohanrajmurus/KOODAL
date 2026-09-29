import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only: the service role key bypasses Row Level Security, so this
 * must never be imported into a client component or otherwise reach the
 * browser. Returns null when unset rather than throwing, matching the
 * "no-op gracefully when unset" pattern used for other env-gated features.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
