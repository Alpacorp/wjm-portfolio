import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./eyebrow"
import { Reveal } from "./reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  /** Alineación: el sitio anterior centraba todo; el registro editorial pide izquierda. */
  align?: "left" | "center"
  className?: string
}

/**
 * Cabecera de sección: eyebrow + h2 + entradilla.
 *
 * Tipografía grande y jerarquía marcada, con la entradilla en gris para que
 * el blanco quede reservado al titular.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {lead && (
        <p className={cn("max-w-2xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg")}>
          {lead}
        </p>
      )}
    </Reveal>
  )
}
