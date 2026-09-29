"use client";

import { useSignup } from "@/context/SignupProvider";
import { track } from "@/lib/analytics";
import { scrollToSignupForm } from "@/lib/scrollToForm";

// Placeholders only: no store listing exists yet, and official Apple/Google
// badge artwork may only be used for live apps, so these are custom-styled.
const STORES = [
  {
    name: "App Store",
    location: "app_store_button",
    icon: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    name: "Google Play",
    location: "play_store_button",
    icon: <path d="M6 3.5v17l13-8.5z" />,
  },
];

export function StoreButtons() {
  const { submitted } = useSignup();

  if (submitted) return null;

  return (
    <div className="mt-6.5 flex flex-col gap-2.5">
      <span className="text-[13px] font-medium text-dark-muted">App coming soon on iOS &amp; Android</span>
      <div className="flex flex-wrap gap-2.5">
        {STORES.map((store) => (
          <button
            key={store.name}
            type="button"
            onClick={() => {
              track("cta_click", { location: store.location });
              scrollToSignupForm();
            }}
            aria-label={`${store.name} — coming soon, get notified`}
            className="flex min-h-13 items-center gap-2.5 rounded-full border-[1.5px] border-cream py-2 pr-4.5 pl-3.5 text-left text-cream transition-[transform,border-color,color] duration-180 hover:-translate-y-0.5 hover:border-primary hover:text-primary active:translate-y-0"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {store.icon}
            </svg>
            <span className="flex flex-col leading-[1.1]">
              <span className="text-[11px] font-medium opacity-80">Coming soon</span>
              <span className="text-base font-bold">{store.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
