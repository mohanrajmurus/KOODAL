"use client";

import { useState, type FormEvent } from "react";
import { useSignup, FORM_NAME_INPUT_ID } from "@/context/SignupProvider";
import { SuccessConfirmation } from "./SuccessConfirmation";
import type { Intent } from "@/lib/types";

const INTENT_OPTIONS: Exclude<Intent, "">[] = [
  "I have a plan and need people",
  "I want to join a plan",
  "Both",
];

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
}

// Styled for this form's one home: the dark closing/footer card. Focus
// styling is pure CSS (:focus-within via the `group` wrapper) rather than
// per-field JS state, since four fields would otherwise need four separate
// useState hooks just to track which one is focused.
function Field({ id, label, value, onChange, type = "text", placeholder, autoComplete = "off", disabled }: FieldProps) {
  return (
    <div className="group relative rounded-md border-2 border-white/15 bg-white/6 px-4 pt-3.5 pb-2.5 transition-[border-color,box-shadow] duration-200 focus-within:border-primary focus-within:shadow-[0_0_0_4px_rgba(212,224,49,0.28)]">
      <label
        htmlFor={id}
        className="block text-xs font-bold tracking-wide text-dark-muted uppercase transition-colors duration-200 group-focus-within:text-primary"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="min-h-8.5 w-full border-none bg-transparent py-1.5 text-[17px] font-medium text-cream outline-none"
      />
    </div>
  );
}

export function CtaForm() {
  const {
    activities,
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
  } = useSignup();
  const [error, setError] = useState("");

  if (submitted) {
    return <SuccessConfirmation />;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await submit();
    setError(result.ok ? "" : (result.error ?? ""));
  }

  const joinedActivities = activities.join(", ");
  const metaText = activities.length
    ? `Tagged: ${joinedActivities.length > 40 ? `${activities.length} activities` : joinedActivities}`
    : "Pick activities above to tag your interests.";

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2.5" noValidate>
      <div className="flex flex-col gap-2.5">
        <span className="pl-1 text-xs font-bold tracking-wide text-dark-muted uppercase">
          What brings you here?
        </span>
        <div className="flex flex-wrap gap-2">
          {INTENT_OPTIONS.map((option) => {
            const isOn = intent === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={isOn}
                onClick={() => {
                  setError("");
                  setIntent(option);
                }}
                className={`min-h-11.5 rounded-full border-2 px-4 py-2.5 text-left text-[15px] font-medium transition-[background-color,color,border-color,transform] duration-150 hover:border-primary active:scale-[0.98] ${
                  isOn ? "border-primary bg-primary text-ink" : "border-white/15 bg-white/6 text-cream"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <Field id={FORM_NAME_INPUT_ID} label="Name" value={name} onChange={setName} placeholder="Your name" disabled={submitting} />
        <Field
          id="koodal-whatsapp"
          label="WhatsApp number"
          value={whatsapp}
          onChange={setWhatsapp}
          type="tel"
          autoComplete="tel"
          placeholder="98xxxxxxxx"
          disabled={submitting}
        />
        <Field
          id="koodal-area"
          label="Area / Pincode"
          value={areaPincode}
          onChange={setAreaPincode}
          placeholder="Thoraipakkam · 600097"
          disabled={submitting}
        />
        <Field
          id="koodal-email"
          label="Email (optional)"
          value={email}
          onChange={setEmail}
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          disabled={submitting}
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

      <label className="flex items-start gap-2.5 pt-1 pl-1">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setError("");
            setConsent(e.target.checked);
          }}
          disabled={submitting}
          className="mt-0.5 h-4.5 w-4.5 shrink-0 accent-primary"
        />
        <span className="text-sm leading-snug text-dark-muted">
          I agree to be contacted about KOODAL plans on WhatsApp or email. We&apos;ll only use this to reach
          you about plans near you and occasional updates — never shared with anyone else.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="min-h-13 rounded-full bg-primary px-6 py-4 text-[17px] font-bold text-ink transition-[transform,background-color,color] duration-150 hover:scale-[1.02] hover:bg-teal hover:text-primary active:scale-[0.98] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get Early Access"}
      </button>

      <p className="pl-1 text-sm text-dark-muted">{metaText}</p>
      {error && (
        <p className="pl-1 text-sm font-medium text-[#ffb3a0]" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
