/**
 * Narrativa de marca: "Search is evolving. So am I."
 *
 * Todo el texto de este archivo proviene del brief de Wendy. Es su posición
 * profesional, no una definición académica del sector — ver `disclaimer`.
 */

export const thesis = {
  headline: {
    lead: "Search is evolving.",
    emphasis: "So am I.",
  },

  /** El punto de partida: lo que NO se está muriendo. */
  premise:
    "Los fundamentos del SEO siguen siendo fundamentales. Lo que está cambiando es el ecosistema de búsqueda y el comportamiento de las personas.",

  /** Fundamentos que siguen vigentes. Se muestran como una retícula de labels. */
  fundamentals: [
    "Rastreo",
    "Indexación",
    "Arquitectura",
    "Contenido",
    "Enlazado",
    "Autoridad",
    "Experiencia",
    "Datos",
  ],

  /** Lo que sí cambió. */
  shift:
    "Las personas siguen utilizando buscadores tradicionales, pero también utilizan sistemas de inteligencia artificial y LLMs para descubrir, preguntar, comparar, investigar y tomar decisiones.",

  conclusion:
    "Por eso mi desarrollo profesional incorpora SEO + AEO / AI Search.",

  /** El par conceptual que ancla la marca visualmente. */
  pairing: [
    { term: "SEO", purpose: "para ser encontrado", tone: "aqua" as const },
    { term: "AEO", purpose: "para ser entendido y citado", tone: "iris" as const },
  ],

  /**
   * Requisito explícito del brief: esta formulación no debe presentarse como
   * una definición universal de SEO/AEO.
   */
  disclaimer: "Formulación propia para explicar mi enfoque, no una definición del sector.",
} as const

/**
 * Estados que rodean al retrato del hero.
 *
 * Recorren el camino de un contenido por el ecosistema de búsqueda:
 * entra (SEARCH), se rastrea e indexa (etapa SEO, turquesa) y termina
 * siendo mencionado y citado por sistemas de IA (etapa AEO, violeta).
 * Es la tesis SEO -> AEO contada con el lenguaje de un log de rastreo.
 */
export const searchPipeline = [
  { label: "Search", stage: "entry" as const },
  { label: "Crawled", stage: "seo" as const },
  // De las dos opciones que diste (Indexable / Indexed) se usa "Indexed":
  // es el estado real que reporta Search Console y mantiene la serie en
  // participio, igual que Crawled, Mentioned y Cited.
  { label: "Indexed", stage: "seo" as const },
  { label: "Mentioned", stage: "aeo" as const },
  { label: "Cited", stage: "aeo" as const },
  { label: "200 OK", stage: "status" as const },
] as const
