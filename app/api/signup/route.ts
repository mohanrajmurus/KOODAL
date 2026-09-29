import { validateSignupFields } from "@/lib/validateSignup";
import { ALL_ACTIVITIES } from "@/lib/activities";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { Intent } from "@/lib/types";

const VALID_INTENTS: Intent[] = [
  "I have a plan and need people",
  "I want to join a plan",
  "Both",
];

export async function POST(request: Request) {
  let body: {
    name?: unknown;
    whatsapp?: unknown;
    areaPincode?: unknown;
    email?: unknown;
    activities?: unknown;
    intent?: unknown;
    consent?: unknown;
    _hp?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field in. Bots that
  // autofill every input do — silently accept without forwarding anywhere.
  if (typeof body._hp === "string" && body._hp.trim().length > 0) {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name : "";
  const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp : "";
  const areaPincode = typeof body.areaPincode === "string" ? body.areaPincode : "";
  const email = typeof body.email === "string" ? body.email : "";
  const intent: Intent = VALID_INTENTS.includes(body.intent as Intent) ? (body.intent as Intent) : "";
  const consent = body.consent === true;

  const { valid, error } = validateSignupFields({ name, whatsapp, areaPincode, email, intent, consent });
  if (!valid) {
    return Response.json({ ok: false, error }, { status: 400 });
  }

  const activities = Array.isArray(body.activities)
    ? body.activities.filter(
        (a): a is string => typeof a === "string" && ALL_ACTIVITIES.includes(a as never),
      )
    : [];

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not configured.");
    return Response.json(
      { ok: false, error: "Signups aren't set up yet. Try again shortly." },
      { status: 502 },
    );
  }

  const { error: insertError } = await supabase.from("signups").insert({
    name: name.trim(),
    whatsapp: whatsapp.trim(),
    area_pincode: areaPincode.trim(),
    email: email.trim() || null,
    activities,
    intent,
    consent,
  });

  if (insertError) {
    console.error("Failed to insert signup into Supabase:", insertError);
    return Response.json(
      { ok: false, error: "Couldn't save that just now. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
