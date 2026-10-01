import { expertise, toolbox } from "@/content/expertise"
import { Accent } from "@/components/primitives/accent"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * Áreas de trabajo.
 *
 * Sustituye a la antigua sección "Servicios". El contenido técnico es el
 * mismo, pero la presentación cambia de oferta comercial a demostración de
 * competencia: lista numerada editorial, sin precios, sin CTA de venta.
 *
 * Los números van en turquesa: es uno de los usos de acento que pide el
 * brief y evita tener que colorear superficies.
 */
export function Expertise() {
  return (
    <Section id="expertise" ambient="aqua" divider>
      <SectionHeading
        eyebrow="Expertise"
        title={
          <>
            En qué <Accent>trabajo</Accent>
          </>
        }
        lead="Áreas de práctica, con el detalle de lo que hago dentro de cada una."
      />

      <ul className="mt-14 flex flex-col">
        {expertise.map((area, index) => (
          <Reveal as="li" key={area.id} delay={index * 0.04}>
            <div className="grid gap-5 border-t border-border py-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-aqua">{area.index}</span>
                <h3 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                  {area.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-fg-muted">{area.summary}</p>
              </div>

              {area.pending ? (
                <Pending label={`contenido de ${area.title}`}>{area.pendingNote}</Pending>
              ) : (
                <ul className="flex flex-col gap-3">
                  {area.practices.map((practice) => (
                    <li key={practice} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-aqua/50" />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1} className="mt-6 border-t border-border pt-10">
        <Eyebrow tone="muted">Herramientas</Eyebrow>
        <ul className="mt-5 flex flex-wrap gap-2">
          {toolbox.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-fg-muted transition-colors hover:border-aqua/30 hover:text-fg"
            >
              {tool}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
