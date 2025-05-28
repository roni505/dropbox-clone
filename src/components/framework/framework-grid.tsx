'use client'

import { BottomTile } from "../tile/bottom";
import { LeftTile } from "../tile/left";
import { RightTile } from "../tile/right";
import { TopTile } from "../tile/top";
import { RawStrategyWrapper } from "./framework-wrapper";

export function FrameworkGrid({ index }: { index: number }) {
  return (
    <RawStrategyWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawStrategyWrapper>
  )
}
