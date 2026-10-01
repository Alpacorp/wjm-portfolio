import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"

import { profile } from "@/content/profile"
import { thesis } from "@/content/thesis"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Section } from "@/components/primitives/section"
import { HeroPortrait } from "@/components/sections/hero-portrait"

/**
 * Hero.
 *
 * No usa <Reveal>: su contenido está sobre la línea de flotación y se pinta
 * visible en el primer frame, sin depender de que React hidrate. Eso deja
 * además el hero entero como server component, sin JS de cliente.
 *
 * Las animaciones de entrada por scroll se reservan para las secciones de
 * abajo, que es donde tienen sentido.
 */
export function Hero() {
  return (
    <Section id="inicio" ambient="aqua" className="pt-12 md:pt-16 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-14">
        <div className="flex flex-col gap-7">
          <Eyebrow>
            {profile.name} · {profile.tagline}
          </Eyebrow>

          {/* El concepto de marca es el titular de la página. */}
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {thesis.headline.lead}
            <br />
            <span className="text-aqua">{thesis.headline.emphasis}</span>
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link
              href="#proyectos"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-aqua px-6 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-aqua-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Ver mi trabajo
              <ArrowDown className="h-4 w-4" />
            </Link>

            <Link
              href="#enfoque"
              className="group inline-flex h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-fg"
            >
              Conocer mi perfil
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="order-first lg:order-none">
          <HeroPortrait />
        </div>
      </div>

      {/* Franja de disciplinas */}
      <div className="mt-16 md:mt-20">
        <div aria-hidden className="h-px rule-fade" />
        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-fg-muted">
          {profile.pillars.map((pillar, index) => (
            <li key={pillar} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden className="text-fg-muted/40">
                  ·
                </span>
              )}
              {/* El último pilar en violeta: es la dirección hacia la que evoluciona el perfil. */}
              <span className={index === profile.pillars.length - 1 ? "text-iris-soft" : undefined}>
                {pillar}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
