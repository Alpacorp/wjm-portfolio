"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { navItems } from "@/content/nav"
import { profile } from "@/content/profile"

/**
 * Navegación principal.
 *
 * Los enlaces vienen de content/nav.ts: antes la misma lista estaba escrita
 * tres veces (desktop, móvil y footer).
 *
 * El menú móvil usa AnimatePresence para que la animación de salida llegue a
 * ejecutarse; en la versión anterior había un `exit` que no se aplicaba nunca
 * porque el nodo se desmontaba de golpe.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 md:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-[0.2em] text-fg transition-colors hover:text-aqua"
        >
          {profile.initials}
          <span className="text-aqua">.</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-movil"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-fg-muted transition-colors hover:text-fg md:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">{isMenuOpen ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-ink md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-5xl flex-col px-5 py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-sm text-fg-muted transition-colors hover:text-aqua"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
