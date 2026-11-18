import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 7 L16 25.5"
            stroke="#111111"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M24 7 L16 25.5"
            stroke="#111111"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.35"
          />
          <circle cx="16" cy="25.5" r="2.2" fill="#111111" />
          <circle cx="8" cy="7" r="1.6" fill="#111111" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
