'use client'

import { LogoWrapper } from "./logo-wrapper";

export function Logo({ index }: { index: number }) {

  return (
    <LogoWrapper index={index}>
      <div className="flex flex-1 flex-col justify-end relative items-stretch" >
      </div>
    </LogoWrapper>
  )
}
