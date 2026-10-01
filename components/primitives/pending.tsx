import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PendingProps = {
  /** Qué dato falta. Se muestra tras la etiqueta "PENDIENTE". */
  label: string
  /** Explicación opcional de qué hay que aportar. */
  children?: ReactNode
  variant?: "block" | "inline"
  className?: string
}

/**
 * Placeholder explícito para datos que todavía no existen.
 *
 * Regla del brief: si un dato no está disponible, se marca de forma
 * claramente identificable en lugar de inventarlo. Este componente es el
 * único lugar autorizado para representar un hueco de contenido.
 *
 * Se distingue del contenido real por tres señales: borde discontinuo,
 * violeta (color reservado, no el turquesa de las afirmaciones reales) y la
 * etiqueta literal "PENDIENTE".
 *
 * Buscar "<Pending" en el repo da la lista completa de huecos por rellenar.
 */
export function Pending({ label, children, variant = "block", className }: PendingProps) {
  if (variant === "inline") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-dashed border-iris/40 px-3 py-1",
          "font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-iris-soft",
          className,
        )}
      >
        Pendiente
        <span className="text-fg-muted normal-case tracking-normal">{label}</span>
      </span>
    )
  }

  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-iris/35 bg-iris/[0.04] p-5 md:p-6",
        className,
      )}
    >
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-iris-soft">
        Pendiente · {label}
      </p>
      {children && (
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-fg-muted">
          {children}
        </p>
      )}
    </div>
  )
}
