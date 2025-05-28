'use client'

import { useScroll, motion, useMotionValueEvent, useMotionValue, useTransform } from "motion/react"
import { useState } from "react";
import ScrollChevron from "./scroll-chevron";
import DropBoxSvg from "./dropbox-svg";
import { HeroText } from "./hero-text";
import { useLoading } from "@/context/loadingContext";

const initialSize = "calc(-2px + min(800px, -64px + min(100vw, 100vh)))";
const middleSize = "calc(-2px + min(502px, -64px + min(100vw, 100vh)))";
const endSize = "calc(-2px + min(92px, -64px + min(100vw, 100vh)))";

export function Hero() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<string>("up");
  const [pastHalf, setPastHalf] = useState(false);
  const userScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollY, "change", (curr) => {
    const diff = curr - scrollY.getPrevious()!;
    if (diff > 0) {
      return setScrollDirection("down")
    }
    if (diff < 0 && curr <= 50) {
      return setScrollDirection("up")
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    userScroll.set(curr);
    setPastHalf(curr >= 0.35);
  });

  const size = useTransform(userScroll, [0.35, 1], [middleSize, endSize]);

  const variants = {
    initial: {
      width: initialSize,
      height: initialSize,
      '--text-color': "#0061FE",
      '--dropbox-bg': "#ffffff",
    },
    middle: {
      width: middleSize,
      height: middleSize,
      '--text-color': "#ffffff",
      '--dropbox-bg': "#0061FE",
    }
  };

  return (
    <div
      className="flex justify-center items-center fixed z-[101] size-(--dropbox-btn-size) left-(--dropbox-left) bottom-(--dropbox-bottom) transform-(--dropbox-transform) pointer-events-none"
    >
      <motion.div
        initial={variants.initial}
        variants={{
          up: variants.initial,
          down: variants.middle,
        }}
        animate={pastHalf ? "down" : scrollDirection}
        style={{
          width: pastHalf ? size : undefined,
          height: pastHalf ? size : undefined,
        }}
        transition={{ duration: 0.6, ease: [0.5, 0, 0.2, 1] }}
        className="relative border border-transparent text-(--text-color) flex-none bg-(--dropbox-bg)"
      >
        <div
          style={{ width: "min(500px, min(100vw, 100vh) - 64px)" }}
          className="pointer-events-none p-5.5 h-full max-w-[500px] flex justify-between items-start"
        >
          <HeroText scrollDirection={scrollDirection} />
          <ScrollChevron />
          <DropBoxSvg />
        </div>
      </motion.div>
    </div>
  )
}
