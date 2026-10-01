import Image from "next/image"

import { profile } from "@/content/profile"
import { searchPipeline } from "@/content/thesis"
import { cn } from "@/lib/utils"

/**
 * Retrato del hero: figura recortada y perfilada, rodeada de estados de
 * rastreo.
 *
 * Los labels recorren el camino de un contenido por el ecosistema de
 * búsqueda —Search → Crawled → Indexed → Mentioned → Cited, con 200 OK como
 * estado de la respuesta— y reparten el color según la etapa: turquesa para
 * la fase SEO, violeta para la fase AEO. Cuenta la tesis del sitio sin una
 * sola frase.
 *
 * Todo se mide en porcentajes sobre un contenedor de proporción fija, así
 * que la composición se mantiene al escalar de móvil a escritorio.
 */

/** Posición de cada estado, en el mismo orden que searchPipeline. */
const POSITIONS = [
  "top-[1%] left-[57%]", // Search
  "top-[27%] left-0", // Crawled
  "top-[20%] right-0", // Indexed
  "bottom-[30%] left-0", // Mentioned
  "bottom-[24%] right-0", // Cited
  "bottom-[1%] left-1/2 -translate-x-1/2", // 200 OK
] as const

const STAGE_STYLES = {
  entry: "border-border bg-ink/85 text-fg-muted",
  seo: "border-aqua/25 bg-ink/85 text-aqua",
  aeo: "border-iris/30 bg-ink/85 text-iris-soft",
  status: "border-aqua/40 bg-aqua/10 text-aqua",
} as const

/*
 * Contorno de la silueta.
 *
 * `drop-shadow` es el único filtro que sigue el canal alfa en lugar de la
 * caja del elemento, así que perfila la figura recortada y no un rectángulo.
 * Se encadenan cuatro desplazamientos de 1.5px —arriba, abajo y a los
 * lados— para cerrar el trazo por todo el perímetro, más un halo ancho y muy
 * tenue que separa la figura del fondo sin caer en el neón que el brief
 * pide evitar.
 */
const OUTLINE_COLOR = "rgba(40, 224, 207, 0.5)"
/*
 * Desvanecido inferior.
 *
 * La foto original ya viene cortada a la altura de los muslos, asi que el
 * contorno dibujaba un filo recto horizontal en la base. Con esta mascara la
 * figura se disuelve en el fondo y el corte desaparece. Va en un contenedor
 * aparte del filtro: asi la mascara se aplica sobre el resultado ya
 * perfilado, contorno incluido.
 */
const BOTTOM_FADE =
  "linear-gradient(to bottom, #000 76%, rgba(0, 0, 0, 0.35) 92%, transparent 100%)"

const SILHOUETTE_OUTLINE = [
  `drop-shadow(1.5px 0 0 ${OUTLINE_COLOR})`,
  `drop-shadow(-1.5px 0 0 ${OUTLINE_COLOR})`,
  `drop-shadow(0 1.5px 0 ${OUTLINE_COLOR})`,
  `drop-shadow(0 -1.5px 0 ${OUTLINE_COLOR})`,
  "drop-shadow(0 0 30px rgba(40, 224, 207, 0.15))",
].join(" ")

export function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-[290px] sm:w-[340px] lg:w-[380px]">
      {/* Halo detrás del torso: despega la figura del fondo */}
      <div
        aria-hidden
        className="absolute inset-x-[8%] inset-y-[12%] rounded-full bg-[radial-gradient(ellipse_at_50%_38%,hsl(var(--brand)/0.12),transparent_68%)]"
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
              "font-mono text-[0.625rem] uppercase tracking-[0.12em] backdrop-blur-[2px] sm:text-[0.6875rem]",
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
