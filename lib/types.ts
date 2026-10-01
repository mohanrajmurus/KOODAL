/** The six MVP activities — see "MVP activities" in the PRD. */
export type ActivityLabel = "Box Cricket" | "Board Games" | "Badminton" | "Gaming" | "Pickleball" | "Cycling";

/** Matches the three options the Signup Form offers; "" means unpicked. */
export type Intent = "" | "I have a plan and need people" | "I want to join a plan" | "Both";

export interface SignupPayload {
  name: string;
  whatsapp: string;
  areaPincode: string;
  /** Optional — the only field in the form that isn't required. */
  email?: string;
  activities: ActivityLabel[];
  intent: Intent;
  /** Required consent to be contacted, per India's DPDP Act. */
  consent: boolean;
  /** Honeypot field — real visitors never fill this in. */
  _hp?: string;
}

export interface SignupResponse {
  ok: boolean;
  error?: string;
}
