'use client'

import { easeInOut } from "motion";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { LogoGrid } from "../logo/logo-grid";
import { TypographyGrid } from "../typography/typography-grid";
import { IconographyGrid } from "../iconography/IconographyGrid";
import { ColorGrid } from "../color/color-grid";
import { ImageryGrid } from "../imagery/imagery-grid";
import { MotionGrid } from "../motion/motion-grid";
import { VoiceToneGrid } from "../voicetone/voice&tone-grid";
import { cn } from "@/lib/utils";
import { FrameworkGrid } from "../framework/framework-grid";
import { HeroGrid } from "../hero/hero-grid";
import { useLoading } from "@/context/loadingContext";

export function NavGrid() {
  const { scrollYProgress } = useScroll();
  const manualScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    manualScroll.set(curr);
  });

  const opacity = useTransform(manualScroll, [0.85, 1], [1, 0], { ease: easeInOut });

  return (
    <motion.div
      style={{
        opacity: opacity,
      }}
      className={cn(
        "absolute inset-0 z-1 items-stretch *:absolute *:p-0 *:origin-[100%_100%] *:pointer-events-auto",
      )}>
      <HeroGrid />
      <FrameworkGrid index={0} />
      <VoiceToneGrid index={1} />
      <LogoGrid index={2} />
      <TypographyGrid index={3} />
      <IconographyGrid index={4} />
      <ColorGrid index={5} />
      <ImageryGrid index={6} />
      <MotionGrid index={7} />
    </motion.div>
  )
}
