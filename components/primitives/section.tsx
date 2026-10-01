import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  children: ReactNode
  /** Fondo base o alterno, para dar ritmo vertical entre secciones. */
  tone?: "base" | "alt"
  /** Halo ambiental. `none` para secciones que deben respirar del todo. */
  ambient?: "aqua" | "iris" | "none"
  /** Línea superior tenue que separa de la sección anterior. */
  divider?: boolean
  className?: string
}

/**
 * Contenedor de sección.
 *
 * Antes, cada sección repetía el mismo andamiaje: un gradiente a pantalla
 * completa, dos círculos `blur-[100px]` y el contenedor con su ancho máximo.
 * Eran ~10 capas de color saturado en el home.
 *
 * Aquí se sustituye por un único halo radial muy tenue (ver `.ambient-*` en
 * globals.css), acorde con la regla de color del brief: el turquesa y el
 * violeta no deben inundar la interfaz, solo dar profundidad.
 *
 * El ancho máximo (max-w-5xl) es el mismo en todas las secciones.
 */
export function Section({
  id,
  children,
  tone = "base",
  ambient = "none",
  divider = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        "py-20 md:py-28 lg:py-36",
        tone === "alt" ? "bg-ink-alt" : "bg-ink",
        className,
      )}
    >
      {ambient !== "none" && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            ambient === "aqua" ? "ambient-aqua" : "ambient-iris",
          )}
        />
      )}

      {divider && (
        <div aria-hidden className="absolute inset-x-0 top-0 h-px rule-fade" />
      )}

      <div className="relative mx-auto w-full max-w-5xl px-5 md:px-6">{children}</div>
    </section>
  )
}
