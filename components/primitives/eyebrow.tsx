import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type EyebrowProps = {
  children: ReactNode
  tone?: "aqua" | "iris" | "muted"
  className?: string
}

/**
 * Micro-etiqueta monoespaciada. Uno de los usos de acento permitidos por el
 * brief ("pequeños labels"): aporta el registro técnico/de datos sin gastar
 * presupuesto de color en superficies grandes.
 */
export function Eyebrow({ children, tone = "aqua", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.6875rem] uppercase tracking-[0.2em]",
        tone === "aqua" && "text-aqua",
        tone === "iris" && "text-iris-soft",
        tone === "muted" && "text-fg-muted",
        className,
      )}
    >
      {children}
    </p>
  )
}
