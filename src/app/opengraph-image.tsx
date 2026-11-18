import { ImageResponse } from "next/og";

export const alt = "Vyltrum — Systems that become products.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #ffffff 0%, #f7f8fa 40%, #eef1f5 100%)",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          color: "#111111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft cool mist */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 55% at 92% 8%, rgba(148,163,184,0.22), transparent 55%)",
          }}
        />

        {/* Large Node mark watermark */}
        <svg
          width="420"
          height="420"
          viewBox="0 0 32 32"
          fill="none"
          style={{
            position: "absolute",
            right: "-20px",
            top: "80px",
            opacity: 0.1,
          }}
        >
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
          <circle cx="16" cy="25.5" r="2.3" fill="#111111" />
          <circle cx="8" cy="7" r="1.7" fill="#111111" />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
            <path
              d="M8 7 L16 25.5"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M24 7 L16 25.5"
              stroke="#111111"
              strokeWidth="2.4"
              strokeLinecap="round"
              opacity="0.35"
            />
            <circle cx="16" cy="25.5" r="2.1" fill="#111111" />
            <circle cx="8" cy="7" r="1.55" fill="#111111" />
          </svg>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.04em",
            }}
          >
            vyltrum
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 780 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              letterSpacing: "-0.05em",
              lineHeight: 1.05,
            }}
          >
            Systems that become products.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#6b6b6b",
              letterSpacing: "-0.02em",
              lineHeight: 1.35,
            }}
          >
            The house is forming. Built in silence — ships when ready.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "#6b6b6b",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <span>Technology · Europe</span>
          <span>vyltrum.eu</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
