import { thesis } from "@/content/thesis"
import { Accent } from "@/components/primitives/accent"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * Sección de posicionamiento.
 *
 * Desarrolla "Search is evolving. So am I." sin recurrir al discurso de que
 * el SEO ha muerto: primero afirma los fundamentos, después describe el
 * cambio de ecosistema, y solo entonces introduce AEO.
 */
export function Thesis() {
  return (
    <Section id="enfoque" tone="alt" ambient="iris" divider>
      <SectionHeading
        eyebrow="Enfoque"
        title={
          <>
            Los fundamentos del SEO siguen siendo{" "}
            <Accent>fundamentales</Accent>.
          </>
        }
        lead={thesis.premise}
      />

      {/* Fundamentos: retícula de labels, registro técnico */}
      <Reveal delay={0.08} className="mt-12">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {thesis.fundamentals.map((item) => (
            <li
              key={item}
              className="bg-surface px-4 py-5 font-mono text-xs uppercase tracking-[0.12em] text-fg-muted transition-colors hover:text-aqua"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* El cambio */}
      <Reveal delay={0.12} className="mt-14 grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
        <Eyebrow tone="muted" className="md:pt-1">
          Lo que cambió
        </Eyebrow>
        <div className="flex flex-col gap-5">
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-fg md:text-xl">
            {thesis.shift}
          </p>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-fg-muted">
            {thesis.conclusion}
          </p>
        </div>
      </Reveal>

      {/* Par conceptual SEO / AEO */}
      <Reveal delay={0.16} className="mt-16">
        <div className="rounded-xl border border-border bg-surface/60 p-8 md:p-12">
          <dl className="flex flex-col gap-8">
            {thesis.pairing.map((pair) => (
              <div key={pair.term} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                <dt
                  className={
                    pair.tone === "aqua"
                      ? "w-24 shrink-0 text-4xl font-semibold tracking-tight text-aqua md:text-5xl"
                      : "w-24 shrink-0 text-4xl font-semibold tracking-tight text-iris-soft md:text-5xl"
                  }
                >
                  {pair.term}
                </dt>
                <dd className="text-balance text-2xl font-light leading-snug text-fg md:text-3xl">
                  {pair.purpose}
                </dd>
              </div>
            ))}
          </dl>

          {/*
            Requisito del brief: dejar claro que es una formulación propia
            y no una definición académica del sector.
          */}
          <p className="mt-8 border-t border-border pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-fg-muted">
            {thesis.disclaimer}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
