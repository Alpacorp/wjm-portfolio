import Image from "next/image"

import { profile } from "@/content/profile"
import { searchPipeline } from "@/content/thesis"
import { cn } from "@/lib/utils"

/**
 * Retrato del hero rodeado de estados de rastreo.
 *
 * Los labels recorren el camino de un contenido por el ecosistema de
 * búsqueda —Search → Crawled → Indexed → Mentioned → Cited, con 200 OK como
 * estado de la respuesta— y reparten el color según la etapa: turquesa para
 * la fase SEO, violeta para la fase AEO. Cuenta la tesis del sitio sin una
 * sola frase.
 *
 * Todo se mide en porcentajes sobre un contenedor cuadrado, así que la
 * composición se mantiene idéntica al escalar de móvil a escritorio.
 */

/** Posición de cada estado, en el mismo orden que searchPipeline. */
const POSITIONS = [
  "top-0 left-[52%]", // Search
  "top-[30%] left-0", // Crawled
  "top-[23%] right-0", // Indexed
  "bottom-[25%] left-0", // Mentioned
  "bottom-[19%] right-0", // Cited
  "bottom-0 left-1/2 -translate-x-1/2", // 200 OK
] as const

const STAGE_STYLES = {
  entry: "border-border bg-ink/85 text-fg-muted",
  seo: "border-aqua/25 bg-ink/85 text-aqua",
  aeo: "border-iris/30 bg-ink/85 text-iris-soft",
  status: "border-aqua/40 bg-aqua/10 text-aqua",
} as const

/*
 * Tratamiento de la foto.
 *
 * El original es un plano de estudio con fondo gris claro. Puesto tal cual
 * sobre el #030609 del sitio quedaba como un disco luminoso: rompía la regla
 * de 75% de fondos oscuros y parecía una pegatina.
 *
 * En vez de recortar la imagen, se difumina su borde con una máscara radial,
 * de modo que el gris del estudio se desvanece hacia el fondo de la página y
 * Wendy parece emerger de él. El grading baja brillo y saturación para que
 * el gris caiga a un tono medio, y una capa en `soft-light` con el turquesa
 * de marca integra la foto en la paleta sin teñir la piel.
 */
/*
 * Viñeta interior: oscurece el borde del círculo para que el gris del
 * estudio se funda con el fondo de la página en lugar de recortarse contra
 * él. Va como estilo inline y no como clase arbitraria de Tailwind porque
 * el JIT escanea el código de forma estática.
 */
const PORTRAIT_VIGNETTE =
  "radial-gradient(circle closest-side at 50% 44%, transparent 52%, hsl(var(--background) / 0.5) 82%, hsl(var(--background) / 0.92) 100%)"

export function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-square w-[290px] sm:w-[350px] lg:w-[390px]">
      {/* Órbita: insinúa el recorrido sin añadir peso visual */}
      <div
        aria-hidden
        className="absolute inset-[9%] rounded-full border border-dashed border-aqua/10"
      />

      {/* Halo detrás del retrato */}
      <div
        aria-hidden
        className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_50%_35%,hsl(var(--brand)/0.14),transparent_65%)]"
      />

      {/* Retrato: object-top encuadra el rostro y descarta la parte baja del plano */}
      <div className="absolute inset-[13%] overflow-hidden rounded-full ring-1 ring-inset ring-aqua/15">
        <Image
          src={profile.avatar.src}
          alt={profile.avatar.alt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 270px, 225px"
          className="object-cover object-top brightness-[0.84] contrast-[1.1] saturate-[0.8]"
          priority
        />

        {/* Integra la foto en la paleta: turquesa muy tenue, sin teñir la piel */}
        <div aria-hidden className="absolute inset-0 bg-aqua/[0.07] mix-blend-soft-light" />

        <div aria-hidden className="absolute inset-0" style={{ backgroundImage: PORTRAIT_VIGNETTE }} />
      </div>

      {/*
        Estados.
        Entran escalonados con una animación CSS, no con <Reveal>: así no
        dependen de la hidratación de React y el hero no necesita JS de
        cliente. El contenido se pinta visible desde el primer frame; esto
        es solo decoración.
      */}
      {searchPipeline.map((state, index) => (
        // El posicionamiento va en el contenedor y la animación dentro: la
        // animación termina en `transform: none`, que anularía el
        // -translate-x-1/2 con el que se centra el chip de 200 OK.
        <span key={state.label} className={cn("absolute z-10", POSITIONS[index])}>
          <span
            style={{ animationDelay: `${(0.15 + index * 0.08).toFixed(2)}s` }}
            className={cn(
              "reveal-css flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1",
              "font-mono text-[0.625rem] uppercase tracking-[0.12em] sm:text-[0.6875rem]",
              STAGE_STYLES[state.stage],
            )}
          >
            {state.stage === "status" && (
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-aqua" />
            )}
            {state.label}
          </span>
        </span>
      ))}
    </div>
  )
}
