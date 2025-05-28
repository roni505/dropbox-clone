import { RawLogoWrapper } from "./logo-wrapper";
import { BottomTile } from "../tile/bottom";
import { LeftTile } from "../tile/left";
import { RightTile } from "../tile/right";
import { TopTile } from "../tile/top";

export function LogoGrid({ index }: { index: number }) {

  return (
    <RawLogoWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawLogoWrapper>
  )
}
