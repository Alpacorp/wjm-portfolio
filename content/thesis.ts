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
