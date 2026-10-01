import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { labEntries, labPendingNote } from "@/content/lab"
import { Accent } from "@/components/primitives/accent"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * SEO Lab: pruebas y notas propias.
 *
 * Mientras `labEntries` esté vacío la sección muestra un <Pending> en lugar
 * de artículos de relleno. Al añadir la primera entrada en content/lab.ts,
 * la lista aparece sola y el placeholder desaparece.
 */
export function Lab() {
  return (
    <Section id="seo-lab" ambient="aqua" divider>
      <SectionHeading
        eyebrow="SEO Lab"
        title={
          <>
            Lo que <Accent>pruebo</Accent> por mi cuenta
          </>
        }
        lead="Experimentos, mediciones y notas sobre SEO técnico y visibilidad en sistemas de IA."
      />

      {labEntries.length === 0 ? (
        <Reveal delay={0.08} className="mt-10">
          <Pending label="entradas del laboratorio">{labPendingNote}</Pending>
        </Reveal>
      ) : (
        <ul className="mt-14 flex flex-col">
          {labEntries.map((entry, index) => {
            const content = (
              <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_auto] md:items-start md:gap-10">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-aqua md:text-3xl">
                      {entry.title}
                    </h3>
                    <span className="rounded-full border border-aqua/25 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-aqua">
                      {entry.topic}
                    </span>
                  </div>
                  <p className="max-w-xl text-pretty text-sm leading-relaxed text-fg-muted">
                    {entry.summary}
                  </p>
                </div>

                <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted md:pt-2">
                  {entry.date}
                  {entry.href && (
                    <ArrowUpRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </span>
              </div>
            )

            return (
              <Reveal as="li" key={entry.id} delay={index * 0.04}>
                {entry.href ? (
                  <Link
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block transition-colors hover:border-aqua/30"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="group">{content}</div>
                )}
              </Reveal>
            )
          })}
        </ul>
      )}
    </Section>
  )
}
