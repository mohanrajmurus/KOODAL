export type ActivityLabel =
  | "Turf Cricket"
  | "Badminton"
  | "Table Tennis"
  | "Pickleball"
  | "Padel"
  | "Board Games"
  | "Quiz Nights"
  | "Study Groups"
  | "Beach Games"
  | "Photography Walks"
  | "Treks"
  | "Movies"
  | "Theatre"
  | "Cultural Events";

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
