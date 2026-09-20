"use client";

import { useState, type FormEvent } from "react";
import { useSignup, HERO_FORM_INPUT_ID, CLOSING_FORM_INPUT_ID } from "@/context/SignupProvider";
import { activityLabel } from "@/lib/activities";
import { SuccessConfirmation } from "./SuccessConfirmation";
import type { CtaSource } from "@/lib/types";

interface CtaFormProps {
  placement: CtaSource;
}

export function CtaForm({ placement }: CtaFormProps) {
  const {
    activity,
    contact,
    setContact,
    honeypot,
    setHoneypot,
    setActiveSource,
    submitting,
    submitted,
    error,
    submit,
  } = useSignup();
  const [focused, setFocused] = useState(false);
  const dark = placement === "closing";
  const inputId = placement === "closing" ? CLOSING_FORM_INPUT_ID : HERO_FORM_INPUT_ID;
  const label = activityLabel(activity);

  if (submitted) {
    return <SuccessConfirmation dark={dark} />;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submit();
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2.5" noValidate>
      <div
        className={`relative rounded-md border-2 px-4 pb-2.5 pt-3.5 transition-[border-color,box-shadow,background-color] duration-200 ${
          dark ? "bg-white/6" : "bg-surface"
        } ${
          focused
            ? "border-primary shadow-[0_0_0_4px_rgba(212,224,49,0.28)]"
            : dark
              ? "border-white/15"
              : "border-border"
        }`}
      >
        <label
          htmlFor={inputId}
          className={`block text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
            focused ? (dark ? "text-primary" : "text-teal") : dark ? "text-dark-muted" : "text-muted"
          }`}
        >
          WhatsApp number or Instagram handle
        </label>
        <input
          id={inputId}
          name="contact"
          type="text"
          autoComplete="off"
          placeholder="98xxxxxxxx  ·  @yourhandle"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          onFocus={() => {
            setFocused(true);
            setActiveSource(placement);
          }}
          onBlur={() => setFocused(false)}
          disabled={submitting}
          className={`w-full min-h-8.5 border-none bg-transparent py-1.5 text-[17px] font-medium outline-none ${
            dark ? "text-cream" : "text-ink"
          }`}
        />
      </div>

      {/* Honeypot — hidden from real visitors via CSS, bots that autofill it get silently dropped server-side. */}
      <input
        type="text"
        name="_hp"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute h-0 w-0 opacity-0"
      />

      <button
        type="submit"
        disabled={submitting}
        className={`min-h-13 rounded-full px-6 py-4 text-[17px] font-bold transition-[transform,background-color,color] duration-150 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 ${
          dark ? "bg-primary text-primary-ink hover:bg-primary" : "bg-ink text-primary hover:bg-teal"
        }`}
      >
        {submitting ? "Sending…" : "Count me in"}
      </button>

      <p className={`pl-1 text-sm ${dark ? "text-dark-muted" : "text-muted"}`}>
        {error ? (
          <span className="text-accent">{error}</span>
        ) : label ? (
          `Tagged: ${label} · no name, no email`
        ) : (
          "No name, no email. Just one way to reach you."
        )}
      </p>
    </form>
  );
}
