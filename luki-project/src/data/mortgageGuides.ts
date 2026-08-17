export interface MortgageGuide {
  bank: string
  creditType: string
  referenceRate: string
  term: string
  requirements?: string
  financingPercent?: string
  operationalCosts?: string
  insurance?: string
  updatedAt: string
  sourceUrl?: string
}

// NO SE INVENTAN TASAS NI CONDICIONES. Estos son campos de ejemplo listos
// para ser completados con datos reales y su fecha de actualización, o
// conectados a una base de datos / API. Mostrar siempre la advertencia de
// que las condiciones pueden cambiar y remitir a la fuente oficial del banco.
export const mortgageGuides: MortgageGuide[] = [
  { bank: '— Por definir —', creditType: 'Tasa fija', referenceRate: 'Dato pendiente', term: 'Dato pendiente', updatedAt: '--/--/2026' },
  { bank: '— Por definir —', creditType: 'Tasa variable', referenceRate: 'Dato pendiente', term: 'Dato pendiente', updatedAt: '--/--/2026' },
  { bank: '— Por definir —', creditType: 'Tasa mixta', referenceRate: 'Dato pendiente', term: 'Dato pendiente', updatedAt: '--/--/2026' },
]
