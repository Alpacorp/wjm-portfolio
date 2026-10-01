import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type AccentProps = {
  children: ReactNode
  tone?: "aqua" | "iris"
  className?: string
}

/**
 * Resalte de una palabra clave dentro de un texto.
 *
 * Concentrar aquí el resalte mantiene la proporción de color del brief
 * (~7% turquesa, ~3% violeta): el acento se aplica a palabras sueltas,
 * nunca a bloques o fondos.
 */
export function Accent({ children, tone = "aqua", className }: AccentProps) {
  return (
    <span className={cn(tone === "aqua" ? "text-aqua" : "text-iris-soft", className)}>
      {children}
    </span>
  )
}
