import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf7ef",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <svg viewBox="0 0 100 100" width="56" height="56">
            <path d="M12 8 H88 L54 42 H46 Z" fill="#15191a" />
            <path d="M12 8 H88 L54 42 H46 Z" fill="#d4e031" transform="rotate(90 50 50)" />
            <path d="M12 8 H88 L54 42 H46 Z" fill="#15191a" transform="rotate(180 50 50)" />
            <path d="M12 8 H88 L54 42 H46 Z" fill="#d4e031" transform="rotate(270 50 50)" />
          </svg>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#15191a" }}>KOODAL</div>
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "#15191a",
            display: "flex",
          }}
        >
          Plan irukku.&nbsp;<span style={{ color: "#ff6a4d" }}>Aal illa?</span>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#5d6462",
            marginTop: 24,
          }}
        >
          Find your people for pickleball, badminton, board games & quiz nights.
        </div>
      </div>
    ),
    { ...size },
  );
}
