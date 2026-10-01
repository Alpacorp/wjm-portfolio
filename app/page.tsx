import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/sections/hero"
import { Thesis } from "@/components/sections/thesis"
import { Expertise } from "@/components/sections/expertise"
import { Projects } from "@/components/sections/projects"
import { Lab } from "@/components/sections/lab"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Contact } from "@/components/sections/contact"

/**
 * Home.
 *
 * El orden sigue el del menú —Enfoque, Proyectos, SEO Lab, Sobre mí,
 * Formación, Contacto— con Expertise intercalada tras Enfoque.
 *
 * Expertise es la única sección que no aparece en la navegación: no estaba
 * en el listado pedido para el menú. Sigue siendo accesible al hacer scroll
 * y por su ancla #expertise, pero conviene decidir si entra en el menú o se
 * funde con Sobre mí.
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
        <Lab />
        <About />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
