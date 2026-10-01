import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { JetBrains_Mono, Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { profile } from "@/content/profile"

/** Tipografía de texto y titulares. */
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

/**
 * Monoespaciada para labels, numeración y datos. Es la que da el registro
 * técnico del sitio. Se cargan solo los pesos que se usan.
 */
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description:
    "Portafolio de Wendy Jiménez, estratega SEO: Technical SEO, On-Page, Analytics y AEO / AI Search.",
  authors: [{ name: profile.name }],
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
