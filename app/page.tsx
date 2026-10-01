import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/sections/hero"
import { Thesis } from "@/components/sections/thesis"
import { Expertise } from "@/components/sections/expertise"
import { Projects } from "@/components/sections/projects"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"

/**
 * Home.
 *
 * Orden narrativo: quién soy y cuál es mi posición (Hero) → por qué esa
 * posición (Enfoque) → qué sé hacer (Expertise) → dónde lo he hecho
 * (Proyectos) → Formación → Contacto.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Thesis />
        <Expertise />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
