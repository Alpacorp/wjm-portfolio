"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { AvatarImage } from "./avatar-image"

export function HeroSection() {
  return (
    <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-indigo-950 z-0"></div>

      {/* Blur circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-white to-teal-400 text-transparent bg-clip-text">
                Hola, soy Wendy Jiménez
              </h1>
              <p className="text-xl text-teal-400">Estratega SEO</p>
              <p className="text-gray-400 max-w-[600px] mt-4">
                Más de 4 años de experiencia en posicionamiento orgánico, optimización web y estrategias digitales que
                generan resultados medibles y escalables para tu negocio.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
              <Link href="#proyectos">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 text-white border-0"
                >
                  Ver Proyectos
                </Button>
              </Link>
              <Link href="https://wa.me/573147588175" target="_blank">
                <Button size="lg" variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-950/30">
                  Contáctame
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AvatarImage />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
