'use client'

import { RawTypographyWrapper } from "./typography-wrapper";
import { BottomTile } from "../tile/bottom";
import { LeftTile } from "../tile/left";
import { RightTile } from "../tile/right";
import { TopTile } from "../tile/top";

export function TypographyGrid({ index }: { index: number }) {
  return (
    <RawTypographyWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawTypographyWrapper>
  )
}
