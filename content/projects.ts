/**
 * Proyectos. ÚNICA fuente de verdad.
 *
 * Antes estos datos estaban duplicados en `components/projects-section.tsx` y
 * en `app/proyectos/[id]/page.tsx`, de modo que editar uno dejaba el otro
 * desincronizado. Ahora ambos consumen este archivo.
 *
 * Contenido conservado íntegramente del sitio anterior. No se ha añadido
 * ninguna métrica, resultado ni porcentaje que no estuviera ya presente.
 */

export type Project = {
  id: string
  title: string
  /** Disciplina o stack principal. */
  badge: string
  /** Resumen de una línea. */
  description: string
  /** Párrafo de contexto para la ficha de detalle. */
  fullDescription: string
  /** Gestor de contenidos, cuando se especificó. */
  cms?: string
  /** Rol desempeñado, cuando se especificó. */
  role?: string
  /** Actividades realizadas. */
  activities: string[]
  /** Herramientas utilizadas. */
  tools: string[]
  /**
   * PENDIENTE: capturas reales del proyecto.
   * El sitio anterior usaba `/placeholder.svg`; se dejan en null para no
   * mostrar imágenes falsas. Al añadir rutas reales, la galería aparece sola.
   */
  images: string[] | null
}

export const projects: Project[] = [
  {
    id: "desprendarte",
    title: "Desprendarte",
    badge: "WordPress + SEO",
    description: "Gestión de contenido, maquetación visual y SEO",
    fullDescription:
      "Proyecto integral de desarrollo web para Desprendarte utilizando WordPress y Elementor. Se enfocó en crear una experiencia de usuario optimizada para conversión, implementando las mejores prácticas de SEO desde el inicio del proyecto.",
    cms: "WordPress + Elementor",
    role: "Gestión de contenido, maquetación visual y SEO",
    activities: [
      "Maquetación del sitio completo con Elementor",
      "Organización del contenido orientado a conversión",
      "Implementación SEO On Page (metadatos, encabezados, enlazado interno)",
      "Optimización de imágenes (formato, atributos ALT y title)",
      "Configuración de plugins SEO (Yoast o Rank Math)",
      "Integración con Search Console para seguimiento de resultados",
    ],
    tools: ["WordPress", "Elementor Pro", "Yoast SEO", "Google Search Console", "Google Analytics"],
    images: null,
  },
  {
    id: "ehunting-latam",
    title: "eHunting Latam",
    badge: "SEO & Paid Media",
    description: "Estrategia digital integral para empresa de reclutamiento",
    fullDescription:
      "Implementación de una estrategia digital integral para eHunting Latam, empresa especializada en reclutamiento y selección de personal. El proyecto incluyó gestión de contenido en WordPress, optimización SEO y campañas publicitarias en redes sociales.",
    activities: [
      "Gestión de contenido en WordPress",
      "Optimización SEO on-page y off-page",
      "Campañas en Facebook, Instagram y LinkedIn Ads",
      "Análisis de métricas y optimización continua",
      "Mejora de posicionamiento orgánico",
    ],
    tools: ["WordPress", "Google Analytics", "Google Search Console", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
    images: null,
  },
  {
    id: "servientrega",
    title: "Servientrega",
    badge: "SEO + Datos estructurados",
    description: "Estrategia SEO y gestión de contenidos",
    fullDescription:
      "Implementación de una estrategia integral de SEO para Servientrega, enfocada en mejorar la visibilidad en buscadores y aumentar el tráfico orgánico al sitio web. El proyecto incluyó auditoría técnica, optimización on-page, creación de contenido y seguimiento de métricas.",
    activities: [
      "Estrategias avanzadas de SEO en blogs",
      "Moderación de contenido en redes sociales",
      "Maquetación y optimización de contenido",
      "Implementación de schema.org",
      "Análisis de datos para mejorar posicionamiento",
    ],
    tools: ["SEMrush", "Google Analytics", "Google Search Console", "HCL Web Content Manager", "Schema.org"],
    images: null,
  },
  {
    id: "toc-toc-aseo",
    title: "Toc Toc Aseo",
    badge: "WordPress",
    description: "Optimización de blogs y contenido web",
    fullDescription:
      "Proyecto de optimización de contenido para Toc Toc Aseo, enfocado en mejorar la estructura del blog corporativo y aumentar su visibilidad en buscadores mediante WordPress y YoastSEO.",
    activities: [
      "Actualización y optimización de blogs",
      "Implementación de WordPress y YoastSEO",
      "Mejora del posicionamiento de la marca",
      "Estrategia de contenidos",
      "Optimización de palabras clave",
    ],
    tools: ["WordPress", "YoastSEO", "Google Analytics", "Google Search Console", "Ubersuggest"],
    images: null,
  },
  {
    id: "tabcin",
    title: "Tabcin Centro América",
    badge: "Drupal · Multipaís",
    description: "Administración de contenido y SEO",
    fullDescription:
      "Gestión y optimización de contenido para los portales web de Tabcin Centro América utilizando CMS Drupal, con enfoque en mejorar el posicionamiento orgánico en los mercados centroamericanos.",
    activities: [
      "Administración de contenido con CMS Drupal",
      "Optimización SEO de contenido",
      "Mejora de visibilidad y tráfico",
      "Gestión de portales web",
      "Estrategia de palabras clave",
    ],
    tools: ["Drupal", "SEMrush", "Google Analytics", "Google Search Console", "Ahrefs"],
    images: null,
  },
  {
    id: "mopa-moda",
    title: "Mopa Moda",
    badge: "E-commerce",
    description: "Administración de tienda online y SEO",
    fullDescription:
      "Gestión integral de la tienda online Mopa Moda en WordPress y WooCommerce, con enfoque en la optimización SEO y la mejora de la experiencia de usuario para aumentar las ventas.",
    activities: [
      "Administración y optimización de contenido en WordPress y WooCommerce",
      "Implementación de YoastSEO para mejorar posicionamiento",
      "Actualización constante de productos y precios",
      "Mejora de experiencia de usuario",
      "Optimización para motores de búsqueda",
    ],
    tools: ["WordPress", "WooCommerce", "YoastSEO", "Google Analytics", "Google Search Console"],
    images: null,
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
