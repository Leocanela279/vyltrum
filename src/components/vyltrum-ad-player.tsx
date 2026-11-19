"use client";

import { Player } from "@remotion/player";
import {
  VYLTRUM_AD_DURATION,
  VYLTRUM_AD_FPS,
  VYLTRUM_AD_HEIGHT,
  VYLTRUM_AD_WIDTH,
  VyltrumAd,
} from "@/remotion/vyltrum-ad";

type Props = {
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
};

export function VyltrumAdPlayer({
  className,
  autoPlay = true,
  loop = true,
}: Props) {
  return (
    <div className={className}>
      <Player
        component={VyltrumAd}
        durationInFrames={VYLTRUM_AD_DURATION}
        compositionWidth={VYLTRUM_AD_WIDTH}
        compositionHeight={VYLTRUM_AD_HEIGHT}
        fps={VYLTRUM_AD_FPS}
        style={{
          width: "100%",
          aspectRatio: `${VYLTRUM_AD_WIDTH} / ${VYLTRUM_AD_HEIGHT}`,
          borderRadius: 0,
        }}
        controls
        autoPlay={autoPlay}
        loop={loop}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
