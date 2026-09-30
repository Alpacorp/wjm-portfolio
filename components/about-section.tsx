"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-indigo-950 z-0"></div>

      {/* Blur circles */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
              Sobre Mí
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estratega SEO con más de 4 años de experiencia en la optimización de sitios web y el
              diseño de estrategias digitales enfocadas en el posicionamiento orgánico y el aumento de tráfico.
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl py-12">
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-teal-500/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-6 text-center">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                SEO On-Page
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                SEO Off-Page
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Posicionamiento Web
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Marketing Digital
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Optimización de Conversiones
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Facebook Ads
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Instagram Ads
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                LinkedIn Ads
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                TikTok Ads
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Google Analytics 4
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Google Tag Manager
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                WordPress
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                WooCommerce
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                WIX
              </Badge>
              <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2">
                Drupal
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
