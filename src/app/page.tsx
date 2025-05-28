'use client'

import { Hero } from "@/components/hero/hero";
import { Nav } from "@/components/nav/nav";
import { useLoading } from "@/context/loadingContext";
import { animate } from "motion";
import { useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect } from "react";

export default function Home() {
  const loadValue = useMotionValue(0);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const controls = animate(loadValue, 1, { duration: 1.5, ease: [0.5, 0, 0.05, 1] });
    return () => controls.stop();
  }, [loadValue]);

  useMotionValueEvent(loadValue, "animationComplete", () => {
    setLoading(false);
  });

  return (
    <div className={`h-screen ${loading ? "overflow-hidden" : ""}`}>
      <div className={`h-[300vh]`}>
        <Nav />
        <Hero />
      </div>
    </div>
  )
}
