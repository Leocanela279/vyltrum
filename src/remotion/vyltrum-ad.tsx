"use client";

import { loadFont } from "@remotion/google-fonts/JetBrainsMono";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { HelloZoom } from "@/components/snap-cn/hello-zoom";
import { VyltrumLogoMark } from "@/remotion/vyltrum-logo-mark";

const { fontFamily: JETBRAINS } = loadFont("normal", {
  weights: ["500", "600", "700"],
  subsets: ["latin"],
});

export const VYLTRUM_AD_FPS = 30;
export const VYLTRUM_AD_WIDTH = 1080;
export const VYLTRUM_AD_HEIGHT = 1080;

/** Intro (logo) + Hello Zoom (75f) + end card */
export const INTRO_FRAMES = 36;
export const HELLO_ZOOM_FRAMES = 75;
export const END_FRAMES = 54;
export const VYLTRUM_AD_DURATION =
  INTRO_FRAMES + HELLO_ZOOM_FRAMES + END_FRAMES;

const INK = "#111111";
const PAPER = "#FFFFFF";
const STEEL = "#6B6B6B";

const FLICKER_WORDS = [
  "Systems",
  "Products",
  "Europe",
  "Craft",
  "House",
  "Technology",
  "Vyltrum",
];

function IntroLogo() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 120, mass: 0.7 },
  });
  const scale = interpolate(enter, [0, 1], [0.72, 1]);
  const opacity = interpolate(frame, [0, 8, 28, 36], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const wordOpacity = interpolate(frame, [10, 18, 28, 36], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: PAPER,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: JETBRAINS,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <VyltrumLogoMark size={128} color={INK} />
        <div
          style={{
            opacity: wordOpacity,
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: "-0.06em",
            color: INK,
          }}
        >
          vyltrum
        </div>
      </div>
    </AbsoluteFill>
  );
}

function LogoCorner({ color }: { color: string }) {
  const frame = useCurrentFrame();
  // Hide during the deep zoom so the letter dive stays clean
  const opacity = interpolate(frame, [0, 6, 34, 42, 70, 75], [0, 0.9, 0.9, 0, 0, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 48,
          opacity,
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontFamily: JETBRAINS,
        }}
      >
        <VyltrumLogoMark size={40} color={color} />
        <span
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color,
          }}
        >
          vyltrum
        </span>
      </div>
    </AbsoluteFill>
  );
}

function EndCard() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 110, mass: 0.75 },
  });
  const scale = interpolate(enter, [0, 1], [0.88, 1]);
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tagOpacity = interpolate(frame, [12, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: INK,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: JETBRAINS,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <VyltrumLogoMark size={140} color={PAPER} />
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: "-0.06em",
            color: PAPER,
          }}
        >
          vyltrum
        </div>
        <div
          style={{
            opacity: tagOpacity,
            marginTop: 8,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: STEEL,
          }}
        >
          Systems that become products.
        </div>
        <div
          style={{
            opacity: tagOpacity,
            marginTop: 4,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: STEEL,
          }}
        >
          vyltrum.eu
        </div>
      </div>
    </AbsoluteFill>
  );
}

/**
 * Vyltrum ad — logo open, Hello Zoom beat, logo end card.
 */
export function VyltrumAd() {
  return (
    <AbsoluteFill style={{ background: INK }}>
      <Sequence durationInFrames={INTRO_FRAMES}>
        <IntroLogo />
      </Sequence>

      <Sequence from={INTRO_FRAMES} durationInFrames={HELLO_ZOOM_FRAMES}>
        <AbsoluteFill>
          <HelloZoom
            words={FLICKER_WORDS}
            lead="Hello"
            rest="Vyltrum."
            nextWord="soon."
            fontFamily={JETBRAINS}
            fontWeight={700}
            inkColor={INK}
            paperColor={PAPER}
          />
          <LogoCorner color={PAPER} />
        </AbsoluteFill>
      </Sequence>

      <Sequence
        from={INTRO_FRAMES + HELLO_ZOOM_FRAMES}
        durationInFrames={END_FRAMES}
      >
        <EndCard />
      </Sequence>
    </AbsoluteFill>
  );
}

export default VyltrumAd;
