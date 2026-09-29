"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ActivityLabel, Intent, SignupResponse } from "@/lib/types";
import { validateSignupFields } from "@/lib/validateSignup";
import { track } from "@/lib/analytics";

/** The signup form's Name field — the natural focus target when a "Get Early Access" button scrolls to it. */
export const FORM_NAME_INPUT_ID = "koodal-signup-name";

export interface SubmitResult {
  ok: boolean;
  error?: string;
}

interface SignupContextValue {
  activities: ActivityLabel[];
  toggleActivity: (label: ActivityLabel) => void;
  intent: Intent;
  setIntent: (value: Intent) => void;
  name: string;
  setName: (value: string) => void;
  whatsapp: string;
  setWhatsapp: (value: string) => void;
  areaPincode: string;
  setAreaPincode: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  consent: boolean;
  setConsent: (value: boolean) => void;
  honeypot: string;
  setHoneypot: (value: string) => void;
  submitting: boolean;
  submitted: boolean;
  /** Validates and submits; the caller (CtaForm) owns showing the returned error locally. */
  submit: () => Promise<SubmitResult>;
}

const SignupContext = createContext<SignupContextValue | null>(null);

/**
 * The single source of truth for the one signup form, which lives only in
 * `SignupSection` — every "Get Early Access" button elsewhere on the page
 * scrolls down to it rather than embedding its own copy.
 */
export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [activities, setActivities] = useState<ActivityLabel[]>([]);
  const [intent, setIntentState] = useState<Intent>("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [areaPincode, setAreaPincode] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleActivity = useCallback((label: ActivityLabel) => {
    setActivities((current) =>
      current.includes(label) ? current.filter((a) => a !== label) : [...current, label],
    );
    track("cta_click", { location: "activity_pill", label });
  }, []);

  const setIntent = useCallback((value: Intent) => {
    setIntentState((current) => (current === value ? "" : value));
  }, []);

  const submit = useCallback(async (): Promise<SubmitResult> => {
    track("cta_click", { location: "footer_form", intent, activities });

    const { valid, error: validationError } = validateSignupFields({
      name,
      whatsapp,
      areaPincode,
      email,
      intent,
      consent,
    });
    if (!valid) {
      return { ok: false, error: validationError ?? "Please check your entries." };
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          whatsapp: whatsapp.trim(),
          areaPincode: areaPincode.trim(),
          email: email.trim(),
          activities,
          intent,
          consent,
          _hp: honeypot,
        }),
      });
      const data: SignupResponse = await res.json();

      if (res.ok && data.ok) {
        track("signup_success", { activities, intent });
        setSubmitted(true);
        return { ok: true };
      }
      return { ok: false, error: data.error ?? "Something went wrong. Try again in a moment." };
    } catch {
      return { ok: false, error: "Couldn't reach the server. Check your connection and try again." };
    } finally {
      setSubmitting(false);
    }
  }, [activities, areaPincode, consent, email, honeypot, intent, name, whatsapp]);

  return (
    <SignupContext.Provider
      value={{
        activities,
        toggleActivity,
        intent,
        setIntent,
        name,
        setName,
        whatsapp,
        setWhatsapp,
        areaPincode,
        setAreaPincode,
        email,
        setEmail,
        consent,
        setConsent,
        honeypot,
        setHoneypot,
        submitting,
        submitted,
        submit,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignup(): SignupContextValue {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used within SignupProvider");
  return ctx;
}
