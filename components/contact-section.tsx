"use client"

import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-indigo-950 z-0"></div>

      {/* Blur circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] z-0"></div>
      <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] z-0"></div>

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
              Contacto
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Interesado en mis servicios? ¡Contáctame y hablemos de tu proyecto!
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl mt-12">
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-indigo-500/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-500/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <Link
                    href="mailto:wendymotero@gmail.com"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                  >
                    wendymotero@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-500/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                  <Link
                    href="https://wa.me/573147588175"
                    target="_blank"
                    className="text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2"
                  >
                    <span>+57 314 758 8175</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 256 258"
                      className="inline-block"
                    >
                      <defs>
                        <linearGradient id="logosWhatsappIconSmall0" x1="50%" x2="50%" y1="100%" y2="0%">
                          <stop offset="0%" stopColor="#1FAF38" />
                          <stop offset="100%" stopColor="#60D669" />
                        </linearGradient>
                        <linearGradient id="logosWhatsappIconSmall1" x1="50%" x2="50%" y1="100%" y2="0%">
                          <stop offset="0%" stopColor="#F9F9F9" />
                          <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosWhatsappIconSmall0)"
                        d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                      />
                      <path
                        fill="url(#logosWhatsappIconSmall1)"
                        d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"
                      />
                      <path
                        fill="#FFF"
                        d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400">Estoy disponible para nuevos proyectos y colaboraciones.</p>
              <Link
                href="https://wa.me/573147588175"
                target="_blank"
                className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white font-medium hover:from-indigo-600 hover:to-teal-600 transition-all"
              >
                Contáctame ahora
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
