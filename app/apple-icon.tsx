import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same "Converge" mark as app/icon.tsx, at iOS home-screen size. iOS rounds the
// corners itself, so no borderRadius here. Also used as the Organization logo
// in the JSON-LD in app/page.tsx.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#d4e031",
        }}
      >
        <svg viewBox="0 0 100 100" width="180" height="180">
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
