"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ActivityTag, CtaSource, SignupResponse } from "@/lib/types";
import { validateContact } from "@/lib/validateContact";
import { track } from "@/lib/analytics";

export const HERO_FORM_INPUT_ID = "koodal-hero-input";
export const CLOSING_FORM_INPUT_ID = "koodal-closing-input";

const BASE_SIGNUP_COUNT = 148;

interface SignupContextValue {
  activity: ActivityTag;
  toggleActivity: (tag: Exclude<ActivityTag, "any">) => void;
  contact: string;
  setContact: (value: string) => void;
  honeypot: string;
  setHoneypot: (value: string) => void;
  activeSource: CtaSource;
  setActiveSource: (source: CtaSource) => void;
  submitting: boolean;
  submitted: boolean;
  error: string | null;
  signupCount: number;
  submit: () => Promise<void>;
}

const SignupContext = createContext<SignupContextValue | null>(null);

/**
 * Both CTA forms (hero + closing) are projections of the same underlying
 * signup: one shared contact value, one shared submit, one shared success
 * state — matching the KOODAL Landing design, where typing or submitting in
 * either place reflects everywhere on the page.
 */
export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [activity, setActivity] = useState<ActivityTag>("any");
  const [contact, setContact] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [activeSource, setActiveSource] = useState<CtaSource>("hero");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [signupCount, setSignupCount] = useState(BASE_SIGNUP_COUNT);

  const toggleActivity = useCallback((tag: Exclude<ActivityTag, "any">) => {
    setActivity((current) => (current === tag ? "any" : tag));
    track("cta_click", { location: "activity_card", activity: tag });
  }, []);

  const submit = useCallback(async () => {
    track("cta_click", { location: `${activeSource}_form`, activity });

    const { valid, error: validationError } = validateContact(contact);
    if (!valid) {
      setError(validationError ?? "Please check your entry.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: contact.trim(),
          activity,
          source: activeSource,
          _hp: honeypot,
        }),
      });
      const data: SignupResponse = await res.json();

      if (res.ok && data.ok) {
        track("signup_success", { activity, source: activeSource });
        setSubmitted(true);
        setSignupCount((count) => count + 1);
      } else {
        setError(data.error ?? "Something went wrong. Try again in a moment.");
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }, [activity, activeSource, contact, honeypot]);

  return (
    <SignupContext.Provider
      value={{
        activity,
        toggleActivity,
        contact,
        setContact,
        honeypot,
        setHoneypot,
        activeSource,
        setActiveSource,
        submitting,
        submitted,
        error,
        signupCount,
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
