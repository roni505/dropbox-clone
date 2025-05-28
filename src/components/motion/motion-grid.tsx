'use client'

import { RawMotionWrapper } from "./motion-wrapper";
import { BottomTile } from "../tile/bottom";
import { LeftTile } from "../tile/left";
import { RightTile } from "../tile/right";
import { TopTile } from "../tile/top";

export function MotionGrid({ index }: { index: number }) {
  return (
    <RawMotionWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawMotionWrapper>
  )
}
