'use client'

import { useLoading } from "@/context/loadingContext";
import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useState } from "react";

export function useAnimationEnd() {
  const [isEnd, setIsEnd] = useState(false);
  const { scrollYProgress } = useScroll();
  const userScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    userScroll.set(curr);
    if (curr === 1) {
      setIsEnd(true);
    }
  });

  const scaleValue = useTransform(userScroll, [0, 1], [2, 1]);

  useMotionValueEvent(scaleValue, 'change', (curr) => {
    setIsEnd(curr === 1);
  });

  return isEnd
}
