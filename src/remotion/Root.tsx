import { Composition } from "remotion";
import {
  VYLTRUM_AD_DURATION,
  VYLTRUM_AD_FPS,
  VYLTRUM_AD_HEIGHT,
  VYLTRUM_AD_WIDTH,
  VyltrumAd,
} from "./vyltrum-ad";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="VyltrumAd"
        component={VyltrumAd}
        durationInFrames={VYLTRUM_AD_DURATION}
        fps={VYLTRUM_AD_FPS}
        width={VYLTRUM_AD_WIDTH}
        height={VYLTRUM_AD_HEIGHT}
      />
    </>
  );
};
