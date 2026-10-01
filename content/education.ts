/**
 * Formación.
 *
 * ⚠️  ESTADO: SIN VALIDAR — y por eso NO se publica todavía.
 *
 * El listado de abajo viene del sitio generado con v0.dev: 4 categorías con
 * exactamente 5 ítems cada una, incluyendo titulaciones concretas
 * ("Google Analytics 4 Certificación", "SEMrush Certification",
 * "Ahrefs Masterclass"...). Ese patrón es característico del relleno de
 * plantilla, y el brief prohíbe expresamente inventar certificaciones.
 *
 * Los datos NO se han borrado: se conservan aquí íntegros. Pero mientras
 * `status` sea "unverified", la sección renderiza un <Pending> en lugar de
 * listarlos, para no publicar titulaciones que puedan no existir.
 *
 * CÓMO PUBLICARLOS
 * 1. Revisar `items` y dejar solo la formación real.
 * 2. Cambiar `status` a "verified".
 * La sección se renderiza sola, sin tocar componentes.
 */

export type EducationStatus = "unverified" | "verified"

export const educationStatus: EducationStatus = "unverified"

export const educationPendingNote =
  "Esta sección está en pausa a propósito: el listado heredado del sitio anterior incluía certificaciones que no se han podido verificar. Se publicará cuando esté validada."

export type EducationGroup = {
  id: string
  category: string
  icon: "book" | "award" | "cap"
  items: string[]
}

/** Contenido heredado, pendiente de validación. Ver nota de cabecera. */
export const education: EducationGroup[] = [
  {
    id: "seo",
    category: "SEO y Posicionamiento Web",
    icon: "book",
    items: [
      "SEO Técnico Avanzado",
      "Optimización para Core Web Vitals",
      "SEO Local y Google My Business",
      "Análisis de Keywords y Competencia",
      "Link Building Estratégico",
    ],
  },
  {
    id: "analytics",
    category: "Analítica y Marketing Digital",
    icon: "award",
    items: [
      "Google Analytics 4 Certificación",
      "Google Tag Manager",
      "Marketing de Contenidos",
      "Email Marketing Automation",
      "Conversion Rate Optimization (CRO)",
    ],
  },
  {
    id: "content",
    category: "Copywriting y Contenido",
    icon: "cap",
    items: [
      "Copywriting para SEO",
      "Redacción Persuasiva",
      "Content Marketing Strategy",
      "Storytelling para Marcas",
      "Escritura para Web y Blogs",
    ],
  },
  {
    id: "tools",
    category: "Herramientas y Plataformas",
    icon: "book",
    items: [
      "WordPress Avanzado",
      "Elementor Pro",
      "SEMrush Certification",
      "Ahrefs Masterclass",
      "Screaming Frog SEO Spider",
    ],
  },
]
