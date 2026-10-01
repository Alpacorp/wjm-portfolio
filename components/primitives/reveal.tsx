"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  /** Retardo en segundos. Para escalonar listas: index * 0.06 */
  delay?: number
  className?: string
  as?: "div" | "li" | "article" | "section"
}

/**
 * Entrada al hacer scroll. Antes este bloque
 * (initial / whileInView / viewport / transition) estaba copiado en las seis
 * secciones del sitio; centralizarlo permite ajustar el ritmo en un solo sitio.
 *
 * Respeta `prefers-reduced-motion`: si el usuario lo pide, el contenido
 * aparece sin desplazamiento.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
