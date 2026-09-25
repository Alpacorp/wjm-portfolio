"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export function AvatarImage() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-2 border-teal-500/30 p-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Gradient background inside the circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-indigo-500/10 rounded-full"></div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-teal-400/5 backdrop-blur-sm"></div>

      {/* Avatar container with animation */}
      <motion.div
        className="w-full h-full relative flex items-center justify-center"
        animate={
          isHovering
            ? {
                rotate: [0, -5, 5, -5, 0],
                scale: [1, 1.05, 1],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: isHovering ? Number.POSITIVE_INFINITY : 0,
          repeatDelay: 0.5,
        }}
      >
        {/* High quality image with transparent background */}
        <div className="relative w-[85%] h-[85%]">
          <Image
            src="/images/avatar-hd.png"
            alt="Wendy Jimenez Montero"
            fill
            className="object-contain z-10"
            priority
            quality={100}
          />
        </div>
      </motion.div>

      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
    </div>
  )
}
