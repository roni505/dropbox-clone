'use client'

import { useLoading } from "@/context/loadingContext";
import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from "motion/react"

export function useGridScale() {
  const { scrollYProgress } = useScroll();
  const userScroll = useMotionValue(0);
  const { loading } = useLoading();

  useMotionValueEvent(scrollYProgress, "change", (curr) => {
    if (loading) return;
    userScroll.set(curr);
  });

  const scaleValue = useTransform(userScroll, [0, 1], [0.5, 1]);

  return loading ? 0.5 : scaleValue

}
