import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: number;
  /** When true, hide from assistive tech (background / watermark). */
  decorative?: boolean;
  /** Heavier strokes for large background use. */
  weight?: "default" | "display";
};

/**
 * Vyltrum Node mark — primary beam, ghost twin, terminal point.
 * Locked brand mark (proposal 04).
 */
export function LogoNode({
  className,
  size = 32,
  decorative = false,
  weight = "default",
}: Props) {
  const stroke = weight === "display" ? 2.85 : 2.2;
  const node = weight === "display" ? 2.45 : 2.1;
  const tip = weight === "display" ? 1.85 : 1.55;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", decorative ? "text-current" : "text-ink", className)}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "Vyltrum"}
    >
      <path
        d="M8 7 L16 25.5"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d="M24 7 L16 25.5"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="16" cy="25.5" r={node} fill="currentColor" />
      <circle cx="8" cy="7" r={tip} fill="currentColor" />
    </svg>
  );
}
