import Link from "next/link"

import { navItems } from "@/content/nav"
import { profile } from "@/content/profile"
import { Pending } from "@/components/primitives/pending"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-ink">
      <div className="mx-auto w-full max-w-5xl px-5 py-14 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              aria-label="Ir al inicio"
              className="font-mono text-sm font-medium tracking-[0.2em] text-fg transition-colors hover:text-aqua"
            >
              {profile.initials}
              <span className="text-aqua">.</span>
            </Link>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-fg-muted">
              {profile.name} — {profile.tagline}. {profile.availability}.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3 md:grid-cols-2">
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

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-fg-muted">
              Contacto
            </p>
            <Link
              href={`mailto:${profile.links.email}`}
              className="text-sm text-fg-muted transition-colors hover:text-aqua"
            >
              {profile.links.email}
            </Link>
            <Link
              href={profile.links.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-muted transition-colors hover:text-aqua"
            >
              {profile.links.whatsapp.label}
            </Link>
            {profile.links.linkedin ? (
              <Link
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg-muted transition-colors hover:text-aqua"
              >
                LinkedIn
              </Link>
            ) : (
              <Pending variant="inline" label="LinkedIn" className="self-start" />
            )}
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 font-mono text-xs text-fg-muted">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
