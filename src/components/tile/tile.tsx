'use client'

import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "../../lib/utils"

export function Tile({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "absolute bg-[#669df5]",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 1.25 }}
      {...props}
    />
  )
}
