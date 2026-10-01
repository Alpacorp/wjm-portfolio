import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { getProject, projects } from "@/content/projects"
import { profile } from "@/content/profile"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Pending } from "@/components/primitives/pending"
import { Reveal } from "@/components/primitives/reveal"

type Params = { params: { id: string } }

/** Prerenderiza las seis fichas en build: menos trabajo en runtime. */
export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }))
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.id)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.title} — ${profile.name}`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />

      <main className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 ambient-aqua" />

        <article className="relative mx-auto w-full max-w-5xl px-5 py-16 md:px-6 md:py-24">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-fg-muted transition-colors hover:text-aqua"
          >
            <ArrowLeft className="h-4 w-4" />
            Proyectos
          </Link>

          <header className="mt-10 flex flex-col gap-5 border-b border-border pb-10">
            <span className="w-fit rounded-full border border-iris/25 px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-iris-soft">
              {project.badge}
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-fg md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-fg-muted">
              {project.description}
            </p>
          </header>

          <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div className="flex flex-col gap-10">
              <Reveal>
                <p className="text-pretty text-base leading-relaxed text-fg-muted md:text-lg">
                  {project.fullDescription}
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <Eyebrow>Actividades realizadas</Eyebrow>
                <ul className="mt-5 flex flex-col gap-3">
                  {project.activities.map((activity) => (
                    <li key={activity} className="flex gap-3 text-sm leading-relaxed text-fg-muted">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-aqua/50" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {project.images ? (
                <Reveal delay={0.1}>
                  <Eyebrow>Imágenes</Eyebrow>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.images.map((src, index) => (
                      <div
                        key={src}
                        className="relative h-52 overflow-hidden rounded-lg border border-border"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} — imagen ${index + 1}`}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.1}>
                  <Pending label={`capturas de ${project.title}`}>
                    Añade las rutas de las imágenes en el campo{" "}
                    <code className="text-iris-soft">images</code> de content/projects.ts y la
                    galería se renderiza aquí.
                  </Pending>
                </Reveal>
              )}
            </div>

            <aside className="flex flex-col gap-8 md:border-l md:border-border md:pl-10">
              {project.cms && (
                <div>
                  <Eyebrow tone="muted">CMS</Eyebrow>
                  <p className="mt-2 text-sm text-fg">{project.cms}</p>
                </div>
              )}

              {project.role && (
                <div>
                  <Eyebrow tone="muted">Rol</Eyebrow>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-fg">{project.role}</p>
                </div>
              )}

              <div>
                <Eyebrow tone="muted">Herramientas</Eyebrow>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-fg-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <nav className="mt-16 border-t border-border pt-10">
            <Eyebrow tone="muted">Otros proyectos</Eyebrow>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {projects
                .filter((other) => other.id !== project.id)
                .map((other) => (
                  <li key={other.id}>
                    <Link
                      href={`/proyectos/${other.id}`}
                      className="text-sm text-fg-muted transition-colors hover:text-aqua"
                    >
                      {other.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
