"use client";

/**
 * Remotion-safe Vyltrum Node mark — same geometry as LogoNode, concrete colors.
 */
export function VyltrumLogoMark({
  size = 96,
  color = "#111111",
  opacity = 1,
}: {
  size?: number;
  color?: string;
  opacity?: number;
}) {
  const stroke = 2.85;
  const node = 2.45;
  const tip = 1.85;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity, display: "block" }}
    >
      <path
        d="M8 7 L16 25.5"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d="M24 7 L16 25.5"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        opacity={0.35}
      />
      <circle cx="16" cy="25.5" r={node} fill={color} />
      <circle cx="8" cy="7" r={tip} fill={color} />
    </svg>
  );
}
