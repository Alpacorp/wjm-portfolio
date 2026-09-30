"use client"

import { motion } from "framer-motion"
import { Search, BarChart3, ShoppingCart, Globe, Link } from "lucide-react"

export function ServicesSection() {
  const serviceItems = [
    {
      icon: <BarChart3 className="h-12 w-12 text-teal-400" />,
      title: "Auditoría SEO",
      items: [
        "Revisión técnica del sitio: velocidad, indexación, errores, rastreo",
        "Análisis de estructura de URLs y arquitectura del sitio",
        "Evaluación de contenido, metadatos, jerarquía de encabezados",
        "Revisión de enlaces internos y externos",
        "Diagnóstico de experiencia móvil",
        "Informe con hallazgos y acciones recomendadas",
      ],
    },
    {
      icon: <Search className="h-12 w-12 text-teal-400" />,
      title: "SEO Técnico",
      items: [
        "Optimización de velocidad (Core Web Vitals, lazy load, compresión)",
        "Mejora de la arquitectura del sitio y URLs",
        "Implementación de datos estructurados con Schema",
        "Configuración de sitemap.xml, robots.txt, canonical y hreflang",
        "Corrección de errores técnicos desde Search Console",
      ],
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-teal-400" />,
      title: "SEO para E-Commerce",
      items: [
        "Optimización de productos: títulos, descripciones, imágenes, rich snippets",
        "Prevención de contenido duplicado en navegación por filtros",
        "Enlazado estratégico entre productos y categorías",
        "Búsqueda de keywords transaccionales y long tail",
        "Medición de rendimiento SEO por categoría",
      ],
    },
    {
      icon: <Globe className="h-12 w-12 text-teal-400" />,
      title: "SEO On Page y Off Page",
      description: "Optimización integral dentro y fuera del sitio web",
      items: [
        "SEO On Page: Redacción y optimización de títulos, metadescripciones, encabezados",
        "Estructura de contenido orientado a intención de búsqueda",
        "Enlazado interno jerárquico",
        "Optimización de imágenes y etiquetas semánticas",
        "SEO Off Page: Estrategias para conseguir enlaces de calidad (link earning)",
        "Monitorización de menciones y backlinks",
        "Eliminación de enlaces tóxicos",
        "Aumento de autoridad mediante colaboraciones estratégicas",
      ],
    },
    {
      icon: <Link className="h-12 w-12 text-teal-400" />,
      title: "Link Building",
      items: [
        "Auditoría de perfil de enlaces",
        "Diseño de estrategias White Hat",
        "Contacto con medios/blogs para generar enlaces relevantes",
        "Creación de recursos enlazables (ebooks, guías, herramientas)",
        "Seguimiento de métricas de autoridad con Ahrefs/Semrush",
      ],
    },
  ]

  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-teal-950 z-0"></div>

      {/* Blur circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-teal-400 text-transparent bg-clip-text">
              Servicios
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soluciones especializadas en SEO y optimización web para potenciar tu presencia digital
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-lg p-6 transition-all hover:border-teal-500/50 hover:bg-black/60 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              {service.description && <p className="text-gray-400 text-sm mb-4">{service.description}</p>}
              <ul className="space-y-2 text-sm text-gray-300">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0 mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
