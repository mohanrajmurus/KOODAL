export type ActivityTag =
  | "turf_cricket"
  | "badminton"
  | "table_tennis"
  | "pickleball"
  | "padel"
  | "board_games"
  | "quiz_nights"
  | "beach_games"
  | "photography_walks"
  | "movie_groups"
  | "theatre_cultural"
  | "any";

export type CtaSource = "hero" | "closing";

export interface SignupPayload {
  contact: string;
  activity: ActivityTag;
  source: CtaSource;
  /** Honeypot field — real visitors never fill this in. */
  _hp?: string;
}

export interface SignupResponse {
  ok: boolean;
  error?: string;
}
