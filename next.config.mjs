/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /*
     * La optimización de imágenes estaba desactivada (`unoptimized: true`),
     * un resto del scaffold de v0.dev. Con el retrato recortado de 2,2 MB
     * eso significaba servir el PNG entero a cada visita, y además es el
     * elemento LCP del hero.
     *
     * Activada, Next sirve AVIF/WebP redimensionado al tamaño real de
     * pantalla. Si alguna vez se despliega como export estático sin
     * optimizador de imágenes, hay que volver a poner `unoptimized: true`.
     */
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
