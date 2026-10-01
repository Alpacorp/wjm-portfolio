import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { projects } from "@/content/projects"
import { Accent } from "@/components/primitives/accent"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"
import { Section } from "@/components/primitives/section"
import { SectionHeading } from "@/components/primitives/section-heading"

/**
 * Proyectos.
 *
 * El diseño anterior reservaba una imagen de 240px por tarjeta, pero todas
 * apuntaban a `/placeholder.svg`: seis bloques vacíos. Aquí la jerarquía es
 * tipográfica, de modo que la sección funciona hoy sin capturas y seguirá
 * funcionando cuando existan (ver `images` en content/projects.ts).
 */
export function Projects() {
  return (
    <Section id="proyectos" tone="alt" ambient="iris" divider>
      <SectionHeading
        eyebrow="Proyectos"
        title={
          <>
            Trabajo <Accent>real</Accent>, con nombre y stack
          </>
        }
        lead="Clientes y plataformas en los que he trabajado. Cada ficha detalla las actividades realizadas y las herramientas utilizadas."
      />

      <ul className="mt-14 flex flex-col">
        {projects.map((project, index) => (
          <Reveal as="li" key={project.id} delay={index * 0.04}>
            <Link
              href={`/proyectos/${project.id}`}
              className="group grid gap-4 border-t border-border py-8 transition-colors hover:border-aqua/30 md:grid-cols-[1fr_auto] md:items-start md:gap-10"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-aqua md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-iris/25 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-iris-soft">
                    {project.badge}
                  </span>
                </div>

                <p className="max-w-xl text-pretty text-sm leading-relaxed text-fg-muted">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-fg-muted/80">
                  {project.tools.slice(0, 4).map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                  {project.tools.length > 4 && <li>+{project.tools.length - 4}</li>}
                </ul>
              </div>

              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted transition-colors group-hover:text-aqua md:pt-2">
                Ver ficha
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1} className="mt-10">
        <Pending label="capturas de los proyectos">
          Las fichas de detalle muestran actividades y herramientas, pero todavía no hay
          imágenes reales. Al añadir rutas en el campo <code className="text-iris-soft">images</code> de
          content/projects.ts, la galería aparece automáticamente.
        </Pending>
      </Reveal>
    </Section>
  )
}
