import { education, educationPendingNote, educationStatus } from "@/content/education"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * Formación.
 *
 * Mientras `educationStatus` sea "unverified" la sección NO lista nada: el
 * contenido heredado incluía certificaciones que no se han podido verificar
 * y el brief prohíbe publicar titulaciones inventadas.
 *
 * Al validar el listado en content/education.ts y poner status "verified",
 * la retícula de abajo se renderiza sin tocar este componente.
 */
export function Education() {
  const verified = educationStatus === "verified"

  return (
    <Section id="formacion" ambient="aqua" divider>
      <SectionHeading
        eyebrow="Formación"
        title="Formación continua"
        lead={verified ? "Áreas en las que me he formado." : undefined}
      />

      {verified ? (
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {education.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05} className="bg-surface p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-aqua">
                {group.category}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-aqua/50" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={0.08} className="mt-10">
          <Pending label="formación por validar">{educationPendingNote}</Pending>
        </Reveal>
      )}
    </Section>
  )
}
