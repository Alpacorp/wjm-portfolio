/**
 * Datos de perfil. Única fuente de verdad: antes estaban repartidos entre
 * hero-section, about-section, contact-section, navbar y footer.
 *
 * CONVENCIÓN DE PENDIENTES
 * Un valor `null` significa "dato real todavía no disponible". La UI lo
 * renderiza con el componente <Pending>, que lo marca de forma visible.
 * Nunca se rellena con un dato inventado.
 */

export const profile = {
  name: "Wendy Jiménez",
  initials: "WJ",
  /*
   * No se usa "Estratega SEO" como etiqueta publica: el posicionamiento del
   * sitio es "SEO & AEO" (ver `tagline`). Se conserva el campo porque
   * describe el rol de forma neutra para usos internos.
   */
  role: "SEO y AEO",

  /** Firma corta del hero. */
  tagline: "SEO & AEO",

  /** Indicado por la propia Wendy (2026-09-30). No modificar sin confirmación. */
  experience: "Más de 4 años de experiencia",

  /**
   * Entradilla del hero, escrita por Wendy.
   * Sustituye a la anterior ("Especialista en posicionamiento orgánico,
   * optimización web y estrategias digitales...").
   */
  summary:
    "Trabajo para que las marcas sean encontradas, entendidas y elegidas en un ecosistema de búsqueda donde Google, los contenidos, los datos y la inteligencia artificial forman parte del proceso de descubrimiento y decisión.",

  /** Franja de disciplinas bajo el hero. */
  pillars: ["Technical SEO", "On-Page", "Analytics", "AEO / AI Search"],

  /** Estado de búsqueda laboral: es el objetivo principal del sitio. */
  availability: "Abierta a nuevas oportunidades y equipos",

  links: {
    email: "wendymotero@gmail.com",
    whatsapp: {
      href: "https://wa.me/573147588175",
      label: "+57 314 758 8175",
    },
    /** PENDIENTE: la URL del repo era un placeholder (`/in/tu-perfil-linkedin`). */
    linkedin: null as string | null,
    /** PENDIENTE: CV en PDF. Un reclutador lo va a buscar. */
    cv: null as string | null,
  },

  avatar: {
    src: "/images/wendy-jimenez.png",
    alt: "Wendy Jiménez Montero",
    /**
     * Recorte en PNG con transparencia real (1024x1536, RGBA). El alfa pasa
     * de 0 a 253 en unos 20px, sin halo semitransparente, asi que la silueta
     * se puede perfilar con drop-shadow.
     *
     * Sustituye al plano de estudio con fondo gris que habia antes, que sobre
     * el fondo oscuro del sitio quedaba como un disco claro.
     */
  },
} as const

/**
 * Competencias declaradas en el sitio anterior (los badges de "Sobre Mí").
 *
 * NO se renderizan hoy: su contenido quedó cubierto por las áreas de
 * `content/expertise.ts` (On-Page, Off-Page, Analytics...) y por `toolbox`.
 * Se conservan aquí para no perderlas y porque hay una excepción:
 * "Optimización de Conversiones" no aparece en ninguna sección del rediseño.
 * Si quieres mantenerla visible, hay que darle un sitio explícito.
 */
export const skills = [
  "SEO On-Page",
  "SEO Off-Page",
  "Posicionamiento Web",
  "Optimización de Conversiones",
  "Google Analytics 4",
  "Google Tag Manager",
  "WordPress",
  "WooCommerce",
  "Drupal",
  "WIX",
] as const

/**
 * Competencias reales pero fuera del foco de marca (SEO / Technical / On-Page /
 * Analytics / AEO). Se conservan aquí, NO se eliminan: están respaldadas por el
 * proyecto de eHunting Latam. No se muestran en el home para no diluir el
 * posicionamiento hacia "marketing digital genérico".
 *
 * Para mostrarlas, añadirlas al render de <Expertise /> o a la ficha de perfil.
 */
export const adjacentSkills = [
  "Marketing Digital",
  "Facebook Ads",
  "Instagram Ads",
  "LinkedIn Ads",
  "TikTok Ads",
] as const
