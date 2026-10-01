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
 * Etiquetas técnicas que rodean al retrato del hero.
 *
 * NO son un proceso secuencial y no deben conectarse con flechas: son
 * conceptos sueltos de dos familias.
 *
 * - Crawled, Indexed y 200 OK pertenecen al SEO técnico (turquesa).
 * - Mentioned, Cited y Sentiment introducen la visibilidad en AI Search /
 *   AEO: menciones, citas y sentimiento son parte de las métricas con las
 *   que se analiza la presencia en LLMs (violeta).
 * - Search queda como término paraguas, en gris.
 *
 * Se mantienen en inglés a propósito: es la terminología habitual del
 * sector, no un indicio de que el sitio sea bilingüe.
 */
export const searchSignals = [
  { label: "Search", family: "umbrella" as const },
  { label: "Crawled", family: "seo" as const },
  { label: "Indexed", family: "seo" as const },
  { label: "200 OK", family: "status" as const },
  { label: "Mentioned", family: "aeo" as const },
  { label: "Cited", family: "aeo" as const },
  // Pedida "de manera sutil": se pinta mas atenuada que el resto.
  { label: "Sentiment", family: "aeo" as const, subtle: true },
] as const
