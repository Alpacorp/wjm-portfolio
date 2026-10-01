import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"

import { profile } from "@/content/profile"
import { thesis } from "@/content/thesis"
import { AvatarImage } from "@/components/avatar-image"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"

export function Hero() {
  return (
    <Section id="inicio" ambient="aqua" className="pt-14 md:pt-20 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Eyebrow>
                {profile.name} · {profile.role}
              </Eyebrow>
              <span className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-fg-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aqua" />
                </span>
                Disponible
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            {/* El concepto de marca es el titular de la página, no un eslogan secundario. */}
            <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              {thesis.headline.lead}
              <br />
              <span className="text-aqua">{thesis.headline.emphasis}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#proyectos"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-aqua px-6 text-sm font-medium text-ink transition-colors hover:bg-aqua-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Ver proyectos
                <ArrowDown className="h-4 w-4" />
              </Link>

              <Link
                href={`mailto:${profile.links.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-md border border-aqua/25 px-6 text-sm font-medium text-fg transition-colors hover:border-aqua/50 hover:bg-aqua/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Escríbeme
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {profile.links.linkedin ? (
                <Link
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-6 text-sm font-medium text-fg-muted transition-colors hover:border-aqua/40 hover:text-fg"
                >
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : (
                <Pending variant="inline" label="URL de LinkedIn" />
              )}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 font-mono text-xs text-fg-muted">
              <span>{profile.experience}</span>
              <span aria-hidden className="h-3 w-px bg-border" />
              <span>SEO · Technical · On-Page · Analytics</span>
              <span aria-hidden className="h-3 w-px bg-border" />
              <span className="text-iris-soft">AEO / AI Search</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-first justify-self-center lg:order-none">
          <AvatarImage />
        </Reveal>
      </div>
    </Section>
  )
}
