import { validateContact } from "@/lib/validateContact";
import { ACTIVITIES } from "@/lib/activities";
import type { ActivityTag, CtaSource } from "@/lib/types";

const VALID_ACTIVITIES: ActivityTag[] = [...ACTIVITIES.map((a) => a.id), "any"];
const VALID_SOURCES: CtaSource[] = ["hero", "closing"];

export async function POST(request: Request) {
  let body: {
    contact?: unknown;
    activity?: unknown;
    source?: unknown;
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

  const contact = typeof body.contact === "string" ? body.contact : "";
  const { valid, error } = validateContact(contact);
  if (!valid) {
    return Response.json({ ok: false, error }, { status: 400 });
  }

  const activity: ActivityTag = VALID_ACTIVITIES.includes(body.activity as ActivityTag)
    ? (body.activity as ActivityTag)
    : "any";
  const source: CtaSource = VALID_SOURCES.includes(body.source as CtaSource)
    ? (body.source as CtaSource)
    : "hero";

  const webhookUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  if (!webhookUrl) {
    console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");
    return Response.json(
      { ok: false, error: "Signups aren't set up yet. Try again shortly." },
      { status: 502 },
    );
  }

  const payload = {
    contact: contact.trim(),
    activity,
    source,
    timestamp: new Date().toISOString(),
  };

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!webhookRes.ok) {
      throw new Error(`Webhook responded with ${webhookRes.status}`);
    }
  } catch (err) {
    console.error("Failed to forward signup to Apps Script webhook:", err);
    return Response.json(
      { ok: false, error: "Couldn't save that just now. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
