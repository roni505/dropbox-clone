'use client'

import { Color } from "../color/color";
import { Framework } from "../framework/framework";
import { Iconography } from "../iconography/iconography";
import { Imagery } from "../imagery/imagery";
import { Logo } from "../logo/logo";
import { Motion } from "../motion/motion";
import { Typography } from "../typography/typography";
import { VoiceTone } from "../voicetone/voice&tone";

export function NavContent() {
  return (
    <nav className="absolute inset-0 z-[2] *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto">
      <Framework index={0} />
      <VoiceTone index={1} />
      <Logo index={2} />
      <Typography index={3} />
      <Iconography index={4} />
      <Color index={5} />
      <Imagery index={6} />
      <Motion index={7} />
    </nav>
  )
}
