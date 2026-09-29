import type { Intent } from "./types";

export interface SignupFormValues {
  name: string;
  whatsapp: string;
  areaPincode: string;
  /** Optional — checked for format only if non-empty. */
  email: string;
  intent: Intent;
  consent: boolean;
}

const PHONE_LIKE = /^[+\d][\d\s-]{7,}$/;
const EMAIL_LIKE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Shared client + server validation for the signup form. Loose on format
 * (the PRD warns against over-enforcing format hurting conversion) but
 * strict on presence — including consent, which the DPDP Act requires
 * before we can contact someone with the info they've given us.
 */
export function validateSignupFields(values: SignupFormValues): { valid: boolean; error?: string } {
  const missing: string[] = [];
  if (!values.intent) missing.push("pick what brings you here");
  if (!values.name.trim()) missing.push("add your name");
  if (!values.whatsapp.trim()) missing.push("add your WhatsApp number");
  if (!values.areaPincode.trim()) missing.push("add your area or pincode");
  if (!values.consent) missing.push("agree to be contacted");
  if (missing.length) {
    return { valid: false, error: `Please ${missing.join(", ")}.` };
  }

  if (values.name.trim().length < 2) {
    return { valid: false, error: "That name looks too short." };
  }
  if (!PHONE_LIKE.test(values.whatsapp.trim())) {
    return { valid: false, error: "Enter a valid WhatsApp number." };
  }

  const email = values.email.trim();
  if (email && !EMAIL_LIKE.test(email)) {
    return { valid: false, error: "That email doesn't look right — or leave it blank." };
  }

  return { valid: true };
}
