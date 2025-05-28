import { RawColorWrapper } from "./color-wrapper";
import { BottomTile } from "../tile/bottom";
import { LeftTile } from "../tile/left";
import { RightTile } from "../tile/right";
import { TopTile } from "../tile/top";

export function ColorGrid({ index }: { index: number }) {
  return (
    <RawColorWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawColorWrapper>
  )
}
