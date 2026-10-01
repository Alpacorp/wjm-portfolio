"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Retrato del hero.
 *
 * Antes: círculo de 400px con borde turquesa al 30%, gradiente interior,
 * capa de glow y una animación de balanceo infinita al pasar el ratón.
 * Ahora: aro fino de bajísima opacidad y una escala muy leve en hover,
 * acorde con "animaciones sutiles" y con el presupuesto de color del brief.
 */
export function AvatarImage() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="relative h-[240px] w-[240px] rounded-full md:h-[300px] md:w-[300px]"
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Aro exterior */}
      <div aria-hidden className="absolute inset-0 rounded-full border border-aqua/15" />

      {/* Profundidad ambiental, muy contenida */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.10),transparent_60%)]"
      />

      <div className="relative h-full w-full p-3">
        <Image
          src="/images/avatar-hd.png"
          alt="Wendy Jiménez Montero"
          fill
          sizes="(min-width: 768px) 300px, 240px"
          className="object-contain p-2"
          priority
        />
      </div>
    </motion.div>
  )
}
