/**
 * Áreas de trabajo.
 *
 * ORIGEN: este contenido viene de `components/services-section.tsx`, pero
 * reencuadrado. El brief pide explícitamente que el sitio NO sea un catálogo
 * de servicios, así que las mismas competencias se presentan como áreas de
 * práctica ("en esto trabajo") en lugar de como oferta comercial
 * ("esto te vendo"). No se ha perdido ningún bullet técnico del original.
 *
 * La estructura sigue los pilares del brief:
 * SEO · Technical SEO · On-Page · Analytics · AEO / AI Search
 */

export type ExpertiseArea = {
  id: string
  /** Numeración editorial (01, 02...). */
  index: string
  title: string
  /** Una línea que sitúa el área. */
  summary: string
  /** Prácticas concretas. Texto heredado del contenido anterior. */
  practices: string[]
  /**
   * `true` cuando todavía no hay contenido real de Wendy para esta área.
   * La UI lo marca con <Pending> en lugar de inventar capacidades.
   */
  pending?: boolean
  /** Nota visible solo en áreas pendientes. */
  pendingNote?: string
}

export const expertise: ExpertiseArea[] = [
  {
    id: "technical-seo",
    index: "01",
    title: "Technical SEO",
    summary: "Que el sitio se pueda rastrear, indexar y servir rápido.",
    practices: [
      "Revisión técnica del sitio: velocidad, indexación, errores, rastreo",
      "Optimización de velocidad (Core Web Vitals, lazy load, compresión)",
      "Mejora de la arquitectura del sitio y URLs",
      "Implementación de datos estructurados con Schema",
      "Configuración de sitemap.xml, robots.txt, canonical y hreflang",
      "Corrección de errores técnicos desde Search Console",
    ],
  },
  {
    id: "on-page",
    index: "02",
    title: "On-Page y contenido",
    summary: "Estructura semántica y contenido alineado a la intención de búsqueda.",
    practices: [
      "Estructura de contenido orientado a intención de búsqueda",
      "Redacción y optimización de títulos, metadescripciones y encabezados",
      "Evaluación de contenido, metadatos y jerarquía de encabezados",
      "Enlazado interno jerárquico",
      "Optimización de imágenes y etiquetas semánticas",
    ],
  },
  {
    id: "analytics",
    index: "03",
    title: "Analytics y medición",
    summary: "Decisiones sobre datos, no sobre intuición.",
    practices: [
      "Configuración y análisis en Google Analytics 4",
      "Implementación de seguimiento con Google Tag Manager",
      "Seguimiento de rendimiento en Search Console",
      "Medición de rendimiento SEO por categoría",
      "Análisis de datos para mejorar posicionamiento",
    ],
  },
  {
    id: "authority",
    index: "04",
    title: "Autoridad y enlazado",
    summary: "Perfil de enlaces sano, construido con criterio.",
    practices: [
      "Auditoría de perfil de enlaces",
      "Diseño de estrategias White Hat",
      "Creación de recursos enlazables (ebooks, guías, herramientas)",
      "Monitorización de menciones y backlinks",
      "Eliminación de enlaces tóxicos",
    ],
  },
  {
    id: "ecommerce",
    index: "05",
    title: "SEO para e-commerce",
    summary: "Catálogos grandes, facetas y keywords transaccionales.",
    practices: [
      "Optimización de productos: títulos, descripciones, imágenes, rich snippets",
      "Prevención de contenido duplicado en navegación por filtros",
      "Enlazado estratégico entre productos y categorías",
      "Búsqueda de keywords transaccionales y long tail",
    ],
  },
  {
    id: "aeo",
    index: "06",
    title: "AEO / AI Search",
    summary: "Ser entendido y citado por sistemas de IA, no solo indexado.",
    practices: [],
    pending: true,
    pendingNote:
      "Describir aquí tu trabajo real en AEO: qué has estudiado, probado o implementado (p. ej. entidades, datos estructurados orientados a respuestas, contenido citable, seguimiento de menciones en LLMs). No se rellena automáticamente para no atribuirte experiencia que no has indicado.",
  },
]

/**
 * Herramientas. Cada una está respaldada por un proyecto concreto de
 * `content/projects.ts` o por las competencias ya publicadas en el sitio.
 * No añadir herramientas cuya única fuente sea la formación sin validar.
 */
export const toolbox = [
  "Google Search Console",
  "Google Analytics 4",
  "Google Tag Manager",
  "Semrush",
  "Ahrefs",
  "Schema.org",
  "Yoast SEO",
  "WordPress",
  "Elementor",
  "WooCommerce",
  "Drupal",
  "WIX",
] as const
