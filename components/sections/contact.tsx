import Link from "next/link"
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react"

import { profile } from "@/content/profile"
import { Accent } from "@/components/primitives/accent"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * Contacto.
 *
 * Orientado a oportunidades laborales, que es el objetivo declarado del
 * sitio: no hay "¿te interesa un servicio?" ni lenguaje de cotización.
 */
export function Contact() {
  return (
    <Section id="contacto" tone="alt" ambient="iris" divider>
      <SectionHeading
        eyebrow="Contacto"
        title={
          <>
            {profile.availability}
            <Accent>.</Accent>
          </>
        }
        lead="Si estás formando un equipo de SEO o buscas a alguien que se ocupe del lado técnico y de medición, escríbeme."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        <Reveal className="bg-surface">
          <Link
            href={`mailto:${profile.links.email}`}
            className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-surface-raised md:p-8"
          >
            <span className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-aqua">
              <Mail className="h-4 w-4" />
              Email
            </span>
            <span className="flex items-center gap-2 text-lg text-fg transition-colors group-hover:text-aqua">
              {profile.links.email}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </Link>
        </Reveal>

        <Reveal delay={0.06} className="bg-surface">
          <Link
            href={profile.links.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-surface-raised md:p-8"
          >
            <span className="flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-aqua">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </span>
            <span className="flex items-center gap-2 text-lg text-fg transition-colors group-hover:text-aqua">
              {profile.links.whatsapp.label}
              <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </Link>
        </Reveal>
      </div>

      {(!profile.links.linkedin || !profile.links.cv) && (
        <Reveal delay={0.12} className="mt-6 flex flex-wrap gap-3">
          {!profile.links.linkedin && <Pending variant="inline" label="URL de LinkedIn" />}
          {!profile.links.cv && <Pending variant="inline" label="CV en PDF" />}
        </Reveal>
      )}
    </Section>
  )
}
