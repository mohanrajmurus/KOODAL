import { timingSafeEqual } from "node:crypto";
import { getSupabaseAdmin } from "@/lib/supabase";

function passwordMatches(candidate: string, expected: string): boolean {
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  // timingSafeEqual throws on mismatched lengths rather than returning false.
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  let body: { password?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const expected = process.env.ADMIN_PASSWORD;
  const candidate = typeof body.password === "string" ? body.password : "";

  if (!expected || !candidate || !passwordMatches(candidate, expected)) {
    return Response.json({ ok: false, error: "Incorrect password." }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return Response.json({ ok: false, error: "Signups aren't set up yet." }, { status: 502 });
  }

  const { data, error } = await supabase
    .from("signups")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch signups from Supabase:", error);
    return Response.json({ ok: false, error: "Couldn't load submissions just now." }, { status: 502 });
  }

  return Response.json({ ok: true, data });
}
