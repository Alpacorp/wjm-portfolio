import Image from "next/image"

import { profile } from "@/content/profile"
import { searchPipeline } from "@/content/thesis"
import { Reveal } from "@/components/primitives/reveal"
import { cn } from "@/lib/utils"

/**
 * Retrato del hero rodeado de estados de rastreo.
 *
 * Los labels recorren el camino de un contenido por el ecosistema de
 * búsqueda —Search → Crawled → Indexable → 200 OK → Mentioned → Cited— y
 * reparten el color según la etapa: turquesa para la fase SEO, violeta para
 * la fase AEO. Es la tesis del sitio contada sin una sola frase.
 *
 * Todo se mide en porcentajes sobre un contenedor cuadrado, así que la
 * composición se mantiene idéntica al escalar de móvil a escritorio.
 */

/** Posición de cada estado alrededor del círculo, en el mismo orden que searchPipeline. */
const POSITIONS = [
  "top-0 left-[52%]", // Search
  "top-[30%] left-0", // Crawled
  "top-[23%] right-0", // Indexable
  "bottom-0 left-1/2 -translate-x-1/2", // 200 OK
  "bottom-[25%] left-0", // Mentioned
  "bottom-[19%] right-0", // Cited
] as const

const STAGE_STYLES = {
  entry: "border-border bg-ink/85 text-fg-muted",
  seo: "border-aqua/25 bg-ink/85 text-aqua",
  status: "border-aqua/40 bg-aqua/10 text-aqua",
  aeo: "border-iris/30 bg-ink/85 text-iris-soft",
} as const

export function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-square w-[290px] sm:w-[350px] lg:w-[390px]">
      {/* Órbita: insinúa el recorrido sin añadir peso visual */}
      <div
        aria-hidden
        className="absolute inset-[9%] rounded-full border border-dashed border-aqua/10"
      />

      {/* Profundidad ambiental, muy contenida */}
      <div
        aria-hidden
        className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle_at_30%_20%,hsl(var(--brand)/0.12),transparent_62%)]"
      />

      {/* Retrato */}
      <div className="absolute inset-[16%] rounded-full border border-aqua/15">
        <Image
          src={profile.avatar.src}
          alt={profile.avatar.alt}
          fill
          sizes="(min-width: 1024px) 390px, (min-width: 640px) 350px, 290px"
          className="rounded-full object-contain p-1"
          priority
        />
      </div>

      {/* Estados */}
      {searchPipeline.map((state, index) => (
        <Reveal
          key={state.label}
          delay={0.3 + index * 0.08}
          className={cn("absolute z-10", POSITIONS[index])}
        >
          <span
            className={cn(
              "flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1",
              "font-mono text-[0.625rem] uppercase tracking-[0.12em] backdrop-blur-sm sm:text-[0.6875rem]",
              STAGE_STYLES[state.stage],
            )}
          >
            {state.stage === "status" && (
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-aqua" />
            )}
            {state.label}
          </span>
        </Reveal>
      ))}
    </div>
  )
}
