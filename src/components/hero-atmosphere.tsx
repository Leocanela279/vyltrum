import { LogoNode } from "@/components/logo-node";

/**
 * Hero atmosphere — soft light + static Node watermark.
 * Mark sits close to the copy on desktop so the field doesn’t feel empty.
 */
export function HeroAtmosphere() {
  return (
    <div
      className="enter-fade pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 78% 18%, rgba(255,255,255,0.75), transparent 55%),
            radial-gradient(ellipse 70% 55% at 92% 8%, rgba(148,163,184,0.18), transparent 52%),
            radial-gradient(ellipse 60% 50% at 12% 88%, rgba(148,163,184,0.14), transparent 50%),
            radial-gradient(ellipse 40% 35% at 55% 60%, rgba(255,255,255,0.45), transparent 60%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-65"
        style={{
          background:
            "linear-gradient(125deg, transparent 20%, rgba(255,255,255,0.5) 48%, transparent 72%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 40% 70%, transparent 30%, rgba(148,163,184,0.08) 100%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-multiply">
        <filter id="vyltrum-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vyltrum-grain)" />
      </svg>

      {/* Static Node — tucked beside the hero copy, not stranded on the far edge */}
      <div className="logo-watermark absolute top-[18%] right-[-18%] sm:top-1/2 sm:right-[max(1.5rem,calc(50%-28rem))] sm:-translate-y-[42%] lg:right-[max(2rem,calc(50%-26rem))]">
        <LogoNode
          decorative
          weight="display"
          size={480}
          className="h-[min(46vh,300px)] w-[min(46vh,300px)] max-w-none text-ink sm:h-[min(58vh,440px)] sm:w-[min(58vh,440px)]"
        />
      </div>
    </div>
  );
}
