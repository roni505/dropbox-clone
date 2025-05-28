'use client'

import { RawIconographyWrapper } from "./IconographyWrapper";
import { BottomTile } from "../tile/bottom";
import { LeftTile } from "../tile/left";
import { RightTile } from "../tile/right";
import { TopTile } from "../tile/top";

export function IconographyGrid({ index }: { index: number }) {
  return (
    <RawIconographyWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawIconographyWrapper>
  )
}
