interface SuccessConfirmationProps {
  dark?: boolean;
}

export function SuccessConfirmation({ dark = false }: SuccessConfirmationProps) {
  return (
    <div
      className="flex items-center gap-3.5"
      style={{ animation: "koodal-rise 0.4s ease both" }}
      role="status"
    >
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
        style={{ animation: "koodal-pop 0.45s cubic-bezier(0.2,0.8,0.3,1) both" }}
      >
        <circle cx="23" cy="23" r="23" fill="#d4e031" />
        <path
          d="M13 24l7 7 13-14"
          stroke="#15191a"
          strokeWidth="3.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="34"
          strokeDashoffset="34"
          style={{ animation: "koodal-draw 0.45s ease 0.28s forwards" }}
        />
      </svg>
      <div>
        <p
          className={`font-heading text-xl font-extrabold tracking-tight ${
            dark ? "text-(--color-cream)" : "text-(--color-ink)"
          }`}
        >
          Nalla irukku — you&apos;re in.
        </p>
        <p className={`mt-1 text-[15px] leading-snug ${dark ? "text-(--color-dark-muted)" : "text-(--color-muted)"}`}>
          We&apos;ll message you the moment a plan near you needs people.
        </p>
      </div>
    </div>
  );
}
