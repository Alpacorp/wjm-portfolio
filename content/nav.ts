/**
 * Navegación. Antes estaba duplicada tres veces (navbar desktop, navbar móvil
 * y footer), así que añadir una sección obligaba a tocar tres listas.
 */

export type NavItem = {
  href: string
  label: string
}

export const navItems: NavItem[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#expertise", label: "Expertise" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
]
