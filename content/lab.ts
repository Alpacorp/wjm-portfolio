/**
 * SEO Lab.
 *
 * Espacio para pruebas, notas y aprendizajes propios sobre SEO y AEO.
 *
 * ESTADO: vacío a propósito. No existe ni una sola entrada real, y el brief
 * prohíbe inventar contenido, así que la sección se publica con un
 * placeholder visible en lugar de con artículos de relleno.
 *
 * OJO: `components/blog-section.tsx` contiene tres artículos inventados por
 * v0.dev ("Estrategias de Contenido 2024"...). Ese componente sigue sin
 * usarse y su contenido NO debe reciclarse aquí: no lo escribió Wendy.
 *
 * CÓMO PUBLICAR UNA ENTRADA
 * Añadir un objeto a `labEntries`. En cuanto el array deje de estar vacío,
 * la sección renderiza la lista y el placeholder desaparece.
 */

export type LabEntry = {
  id: string
  /** Título de la prueba o la nota. */
  title: string
  /** Qué se probó y qué se aprendió, en una o dos frases. */
  summary: string
  /** Disciplina: "Technical SEO", "AEO / AI Search", "Analytics"... */
  topic: string
  /** Fecha en formato ISO (YYYY-MM) para ordenar y mostrar. */
  date: string
  /** Enlace externo opcional: artículo, repositorio, hoja de cálculo. */
  href?: string
}

export const labEntries: LabEntry[] = []

export const labPendingNote =
  "Aquí van tus pruebas y notas propias: un experimento de datos estructurados, una comparativa de cómo citan los LLMs a una marca, una medición de Core Web Vitals antes y después, lo que aprendiste de un crawl. Es la sección que mejor demuestra criterio propio ante un equipo técnico, y por eso no se rellena automáticamente."
