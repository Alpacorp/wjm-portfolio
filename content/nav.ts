/**
 * Navegación. Antes estaba duplicada tres veces (navbar desktop, navbar
 * móvil y footer), así que añadir una sección obligaba a tocar tres listas.
 *
 * El sitio es monolingüe en español. Solo se admite inglés en terminología
 * técnica del sector ("SEO Lab", "Technical SEO"...), nunca en etiquetas de
 * navegación genéricas: nada de Work, About o Let's Talk.
 *
 * "Inicio" ya no está en el menú: el logotipo WJ. cumple esa función.
 */

export type NavItem = {
  href: string
  label: string
  /**
   * `true` cuando la sección de destino todavía no existe en el sitio.
   * Estos ítems NO se renderizan, para no dejar enlaces rotos: el ancla no
   * llevaría a ninguna parte. Al crear la sección, basta con quitar la
   * marca y el ítem aparece en la navegación y en el pie.
   */
  pending?: boolean
}

const allNavItems: NavItem[] = [
  { href: "#enfoque", label: "Enfoque" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#seo-lab", label: "SEO Lab", pending: true },
  { href: "#sobre-mi", label: "Sobre mí", pending: true },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
]

/** Lo que se pinta: solo los ítems con sección real detrás. */
export const navItems = allNavItems.filter((item) => !item.pending)

/** Secciones pedidas para el menú que aún están por construir. */
export const pendingNavItems = allNavItems.filter((item) => item.pending)
