import { aboutLead, aboutStory, aboutStoryHint } from "@/content/about"
import { profile, skills } from "@/content/profile"
import { projects } from "@/content/projects"
import { Accent } from "@/components/primitives/accent"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * Sobre mí.
 *
 * Los datos de la ficha se derivan del propio repositorio —el número de
 * proyectos se cuenta, no se escribe— para que no puedan quedarse
 * desactualizados respecto a content/projects.ts.
 *
 * La biografía en primera persona todavía no existe: hasta que Wendy la
 * escriba se muestra un <Pending>, nunca un texto inventado.
 */
export function About() {
  // "Más de 4 años de experiencia" -> "+4 años": la ficha ya lleva la
  // etiqueta "Experiencia", asi que repetirla resultaria redundante. Se
  // deriva del campo original para que no puedan desincronizarse.
  const facts = [
    {
      label: "Experiencia",
      value: profile.experience.replace("Más de ", "+").replace(" de experiencia", ""),
    },
    { label: "Proyectos", value: `${projects.length} clientes` },
    { label: "Disciplinas", value: profile.pillars.length.toString() },
    { label: "Situación", value: profile.availability },
  ]

  return (
    <Section id="sobre-mi" tone="alt" ambient="iris" divider>
      <SectionHeading
        eyebrow="Sobre mí"
        title={
          <>
            Quién hay detrás del <Accent>trabajo</Accent>
          </>
        }
        lead={aboutLead}
      />

      <div className="mt-14 grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        <div className="flex flex-col gap-8">
          {aboutStory ? (
            <p className="text-pretty text-base leading-relaxed text-fg-muted md:text-lg">
              {aboutStory}
            </p>
          ) : (
            <Reveal>
              <Pending label="biografía en primera persona">{aboutStoryHint}</Pending>
            </Reveal>
          )}

          <Reveal delay={0.06}>
            <Eyebrow tone="muted">Competencias</Eyebrow>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-fg-muted transition-colors hover:border-aqua/30 hover:text-fg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="flex flex-col gap-px overflow-hidden rounded-lg border border-border bg-border">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1 bg-surface p-5">
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.15em] text-fg-muted">
                  {fact.label}
                </dt>
                <dd className="text-pretty text-base text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
