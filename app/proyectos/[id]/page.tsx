import { Navbar } from "@/components/navbar"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Datos de ejemplo para los proyectos
const projectsData = {
  desprendarte: {
    title: "Desprendarte",
    badge: "WordPress + SEO",
    description: "Gestión de contenido, maquetación visual y SEO",
    fullDescription:
      "Proyecto integral de desarrollo web para Desprendarte utilizando WordPress y Elementor. Se enfocó en crear una experiencia de usuario optimizada para conversión, implementando las mejores prácticas de SEO desde el inicio del proyecto.",
    image: "/placeholder.svg?height=600&width=1200",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    cms: "WordPress + Elementor",
    rol: "Gestión de contenido, maquetación visual y SEO",
    descripcionDetallada: [
      "Maquetación del sitio completo con Elementor",
      "Organización del contenido orientado a conversión",
      "Implementación SEO On Page (metadatos, encabezados, enlazado interno)",
      "Optimización de imágenes (formato, atributos ALT y title)",
      "Configuración de plugins SEO (Yoast o Rank Math)",
      "Integración con Search Console para seguimiento de resultados",
    ],
    tools: ["WordPress", "Elementor Pro", "Yoast SEO", "Google Search Console", "Google Analytics"],
  },
  "ehunting-latam": {
    title: "eHunting Latam",
    badge: "SEO & Marketing",
    description: "Estrategia digital integral para empresa de reclutamiento",
    fullDescription:
      "Implementación de una estrategia digital integral para eHunting Latam, empresa especializada en reclutamiento y selección de personal. El proyecto incluyó gestión de contenido en WordPress, optimización SEO y campañas publicitarias en redes sociales.",
    image: "/placeholder.svg?height=600&width=1200",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    descripcionDetallada: [
      "Gestión de contenido en WordPress",
      "Optimización SEO on-page y off-page",
      "Campañas en Facebook, Instagram y LinkedIn Ads",
      "Análisis de métricas y optimización continua",
      "Mejora de posicionamiento orgánico",
    ],
    tools: ["WordPress", "Google Analytics", "Google Search Console", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
  },
  servientrega: {
    title: "Servientrega",
    badge: "SEO",
    description: "Estrategia SEO y gestión de contenidos",
    fullDescription:
      "Implementación de una estrategia integral de SEO para Servientrega, enfocada en mejorar la visibilidad en buscadores y aumentar el tráfico orgánico al sitio web. El proyecto incluyó auditoría técnica, optimización on-page, creación de contenido y seguimiento de métricas.",
    image: "/placeholder.svg?height=600&width=1200",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    descripcionDetallada: [
      "Estrategias avanzadas de SEO en blogs",
      "Moderación de contenido en redes sociales",
      "Maquetación y optimización de contenido",
      "Implementación de schema.org",
      "Análisis de datos para mejorar posicionamiento",
    ],
    tools: ["SEMrush", "Google Analytics", "Google Search Console", "HCL Web Content Manager", "Schema.org"],
  },
  "toc-toc-aseo": {
    title: "Toc Toc Aseo",
    badge: "WordPress",
    description: "Optimización de blogs y contenido web",
    fullDescription:
      "Proyecto de optimización de contenido para Toc Toc Aseo, enfocado en mejorar la estructura del blog corporativo y aumentar su visibilidad en buscadores mediante WordPress y YoastSEO.",
    image: "/placeholder.svg?height=600&width=1200",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    descripcionDetallada: [
      "Actualización y optimización de blogs",
      "Implementación de WordPress y YoastSEO",
      "Mejora del posicionamiento de la marca",
      "Estrategia de contenidos",
      "Optimización de palabras clave",
    ],
    tools: ["WordPress", "YoastSEO", "Google Analytics", "Google Search Console", "Ubersuggest"],
  },
  tabcin: {
    title: "Tabcin Centro América",
    badge: "Drupal",
    description: "Administración de contenido y SEO",
    fullDescription:
      "Gestión y optimización de contenido para los portales web de Tabcin Centro América utilizando CMS Drupal, con enfoque en mejorar el posicionamiento orgánico en los mercados centroamericanos.",
    image: "/placeholder.svg?height=600&width=1200",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    descripcionDetallada: [
      "Administración de contenido con CMS Drupal",
      "Optimización SEO de contenido",
      "Mejora de visibilidad y tráfico",
      "Gestión de portales web",
      "Estrategia de palabras clave",
    ],
    tools: ["Drupal", "SEMrush", "Google Analytics", "Google Search Console", "Ahrefs"],
  },
  "mopa-moda": {
    title: "Mopa Moda",
    badge: "E-commerce",
    description: "Administración de tienda online y SEO",
    fullDescription:
      "Gestión integral de la tienda online Mopa Moda en WordPress y WooCommerce, con enfoque en la optimización SEO y la mejora de la experiencia de usuario para aumentar las ventas.",
    image: "/placeholder.svg?height=600&width=1200",
    additionalImages: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    descripcionDetallada: [
      "Administración y optimización de contenido en WordPress y WooCommerce",
      "Implementación de YoastSEO para mejorar posicionamiento",
      "Actualización constante de productos y precios",
      "Mejora de experiencia de usuario",
      "Optimización para motores de búsqueda",
    ],
    tools: ["WordPress", "WooCommerce", "YoastSEO", "Google Analytics", "Google Search Console"],
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Link href="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="relative">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-indigo-950 z-0"></div>

        {/* Blur circles */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>

        <div className="container px-4 md:px-6 py-12 relative z-10">
          <Link href="/#proyectos">
            <Button variant="outline" className="mb-8 border-teal-500/30 text-teal-400 hover:bg-teal-950/30">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a proyectos
            </Button>
          </Link>

          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <Badge className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-2">
                {project.badge}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
              <p className="text-gray-300 max-w-3xl">{project.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Descripción del Proyecto</h2>
              <p className="text-gray-300 mb-6">{project.fullDescription}</p>

              {"cms" in project && project.cms && (
                <>
                  <h3 className="text-xl font-bold text-white mb-2">CMS</h3>
                  <p className="text-gray-300 mb-4">{project.cms}</p>
                </>
              )}

              {"rol" in project && project.rol && (
                <>
                  <h3 className="text-xl font-bold text-white mb-2">Rol</h3>
                  <p className="text-gray-300 mb-6">{project.rol}</p>
                </>
              )}

              <h3 className="text-xl font-bold text-white mb-4">Actividades Realizadas</h3>
              <div className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-6">
                <ul className="space-y-3">
                  {project.descripcionDetallada.map((actividad, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-gray-300">{actividad}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 mb-6">
                <TrendingUp className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} className="bg-teal-500/10 text-teal-400 border border-teal-500/30">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Imágenes del Proyecto</h2>
              <div className="grid gap-4">
                {project.additionalImages.map((image, index) => (
                  <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Imagen ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link href="https://wa.me/573147588175" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600"
              >
                ¿Te interesa un proyecto similar? Contáctame <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  )
}
