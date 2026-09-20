import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// The "Converge" mark from the Koodal Lockup design — see components/ui/KoodalLockup.tsx.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#d4e031",
          borderRadius: 8,
        }}
      >
        <svg viewBox="0 0 100 100" width="32" height="32">
          <g fill="#15191a" transform="translate(50 50) scale(0.66) translate(-50 -50)">
            <path d="M12 8 H88 L54 42 H46 Z" />
            <path d="M12 8 H88 L54 42 H46 Z" transform="rotate(90 50 50)" />
            <path d="M12 8 H88 L54 42 H46 Z" transform="rotate(180 50 50)" />
            <path d="M12 8 H88 L54 42 H46 Z" transform="rotate(270 50 50)" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
