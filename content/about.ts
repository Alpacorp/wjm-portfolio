/**
 * Sobre mí.
 *
 * Todo lo que hay aquí procede de contenido ya publicado en el sitio o se
 * deriva de `content/projects.ts`. No se ha redactado ninguna biografía:
 * la narrativa personal la tiene que escribir Wendy, y hasta entonces se
 * marca con <Pending>.
 */

/**
 * Entradilla. Es la descripción que ya estaba publicada en la antigua
 * sección "Sobre Mí", sin la etiqueta "Estratega SEO" que el brief retira.
 */
export const aboutLead =
  "Más de 4 años de experiencia en la optimización de sitios web y el diseño de estrategias digitales enfocadas en el posicionamiento orgánico y el aumento de tráfico."

/**
 * PENDIENTE: la biografía en primera persona.
 *
 * Es lo que lee un reclutador para decidir si encajas en su equipo, así que
 * conviene que lo escribas tú. Al rellenar este campo, el <Pending>
 * desaparece y el texto ocupa su lugar.
 */
export const aboutStory: string | null = null

export const aboutStoryHint =
  "Cómo llegaste al SEO, qué tipo de problemas te gusta resolver, cómo trabajas dentro de un equipo y qué buscas en tu próxima posición. En primera persona y sin métricas que no puedas respaldar."

/**
 * Datos verificables, todos derivados de información ya presente en el
 * repositorio. El número de proyectos se calcula, no se escribe a mano.
 */
export type AboutFact = {
  label: string
  value: string
}
