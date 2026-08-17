export type SceneVisual = 'photo' | 'inicio' | 'lukiIa' | 'metas'

export interface PhoneScene {
  id: number
  eyebrow: string
  title: string
  visual: SceneVisual
}

// Narrativa de scroll reducida a las 3 etapas centrales: claridad ->
// acompañamiento -> hábitos. "photo" stages renderizan una fotografía real
// (temporal) con el tratamiento Kodak en vez de una pantalla de teléfono;
// ver ScrollStory.tsx.
export const phoneScenes: PhoneScene[] = [
  { id: 1, eyebrow: 'Etapa 02 · Claridad', title: 'Luki reúne tus movimientos y te muestra lo importante sin complicaciones.', visual: 'inicio' },
  { id: 2, eyebrow: 'Etapa 03 · Acompañamiento', title: 'No necesitas saberlo todo. Solo necesitas una guía que entienda tu realidad.', visual: 'lukiIa' },
  { id: 3, eyebrow: 'Etapa 04 · Hábitos', title: 'Las metas grandes se construyen con decisiones pequeñas y posibles.', visual: 'metas' },
]
