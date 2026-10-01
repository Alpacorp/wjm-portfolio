import Image from "next/image"

import { profile } from "@/content/profile"
import { searchSignals } from "@/content/thesis"
import { cn } from "@/lib/utils"

/**
 * Retrato del hero: figura recortada y perfilada, rodeada de etiquetas
 * técnicas.
 *
 * Las etiquetas NO describen un proceso ni se conectan entre sí: son
 * conceptos sueltos de dos familias, y el color es lo único que las agrupa.
 * Turquesa para el SEO técnico (Crawled, Indexed, 200 OK) y violeta para la
 * visibilidad en AI Search (Mentioned, Cited, Sentiment).
 *
 * Todo se mide en porcentajes sobre un contenedor de proporción fija, así
 * que la composición se mantiene al escalar de móvil a escritorio.
 */

/** Posición de cada etiqueta, en el mismo orden que searchSignals. */
const POSITIONS = [
  "top-0 left-[64%]", // Search: separada de la cabeza, arriba y a la derecha
  "top-[27%] left-0", // Crawled
  "top-[20%] right-0", // Indexed
  "bottom-[1%] left-1/2 -translate-x-1/2", // 200 OK
  "bottom-[30%] left-0", // Mentioned
  "bottom-[24%] right-0", // Cited
  "bottom-[12%] right-[7%]", // Sentiment
] as const

const FAMILY_STYLES = {
  umbrella: "border-border bg-ink/85 text-fg-muted",
  seo: "border-aqua/25 bg-ink/85 text-aqua",
  aeo: "border-iris/30 bg-ink/85 text-iris-soft",
  status: "border-aqua/40 bg-aqua/10 text-aqua",
} as const

/*
 * Contorno de la silueta.
 *
 * `drop-shadow` es el único filtro que sigue el canal alfa en lugar de la
 * caja del elemento, así que perfila la figura recortada y no un rectángulo.
 * Se encadenan cuatro desplazamientos para cerrar el trazo por todo el
 * perímetro, más un halo ancho y muy tenue.
 *
 * Intensidad rebajada ~28% respecto a la primera versión (opacidad 0.5 ->
 * 0.36, desplazamiento 1.5 -> 1.25px, halo 0.15 -> 0.11): el trazo sigue
 * leyéndose pero el resultado es más editorial y menos artificial.
 */
const OUTLINE_COLOR = "rgba(40, 224, 207, 0.36)"
const SILHOUETTE_OUTLINE = [
  `drop-shadow(1.25px 0 0 ${OUTLINE_COLOR})`,
  `drop-shadow(-1.25px 0 0 ${OUTLINE_COLOR})`,
  `drop-shadow(0 1.25px 0 ${OUTLINE_COLOR})`,
  `drop-shadow(0 -1.25px 0 ${OUTLINE_COLOR})`,
  "drop-shadow(0 0 26px rgba(40, 224, 207, 0.11))",
].join(" ")

/*
 * Desvanecido inferior.
 *
 * La foto original ya viene cortada a la altura de los muslos, así que el
 * contorno dibujaba un filo recto horizontal en la base. Con esta máscara la
 * figura se disuelve en el fondo y el corte desaparece. Va en un contenedor
 * aparte del filtro: así la máscara se aplica sobre el resultado ya
 * perfilado, contorno incluido.
 */
const BOTTOM_FADE =
  "linear-gradient(to bottom, #000 76%, rgba(0, 0, 0, 0.35) 92%, transparent 100%)"

export function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-[290px] sm:w-[340px] lg:w-[380px]">
      {/* Halo detrás del torso: despega la figura del fondo */}
      <div
        aria-hidden
        className="absolute inset-x-[8%] inset-y-[12%] rounded-full bg-[radial-gradient(ellipse_at_50%_38%,hsl(var(--brand)/0.10),transparent_68%)]"
      />

      {/* Figura. object-bottom la apoya en la base del contenedor. */}
      <div
        className="absolute inset-0"
        style={{ maskImage: BOTTOM_FADE, WebkitMaskImage: BOTTOM_FADE }}
      >
        <div className="absolute inset-0" style={{ filter: SILHOUETTE_OUTLINE }}>
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 290px"
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/*
        Etiquetas.
        Entran escalonadas con una animación CSS, no con <Reveal>: así no
        dependen de la hidratación de React y el hero no necesita JS de
        cliente. El contenido se pinta visible desde el primer frame; esto
        es solo decoración.
      */}
      {searchSignals.map((signal, index) => (
        // El posicionamiento va en el contenedor y la animación dentro: la
        // animación termina en `transform: none`, que anularía el
        // -translate-x-1/2 con el que se centra la etiqueta de 200 OK.
        <span key={signal.label} className={cn("absolute z-10", POSITIONS[index])}>
          <span
            style={{ animationDelay: `${(0.15 + index * 0.08).toFixed(2)}s` }}
            className={cn(
              "reveal-css flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1",
              "font-mono text-[0.625rem] uppercase tracking-[0.12em] backdrop-blur-[2px] sm:text-[0.6875rem]",
              FAMILY_STYLES[signal.family],
              // "subtle" baja el peso visual sin sacarla de su familia de color
              "subtle" in signal && signal.subtle && "opacity-65",
            )}
          >
            {signal.family === "status" && (
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-aqua" />
            )}
            {signal.label}
          </span>
        </span>
      ))}
    </div>
  )
}
