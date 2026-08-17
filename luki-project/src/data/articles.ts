import { stockPhotos } from './media'

export interface Article {
  id: string
  title: string
  description: string
  category: string
  tags: string[] // usados por los filtros de la biblioteca de aprendizaje
  type: 'articulo' | 'video'
  duration: string
  photo?: string // foto real (temporal) con tratamiento Kodak; si falta, se usa un degradado
  source?: string // fuente oficial cuando esté disponible (CMF, Banco Central, SERNAC, etc.)
  url?: string
}

// CONTENIDO DEMOSTRATIVO. Reemplazar por artículos y videos verificados,
// priorizando fuentes oficiales: Comisión para el Mercado Financiero, Banco
// Central de Chile, SERNAC, Ministerio de Educación, Superintendencia de
// Pensiones, OECD, universidades chilenas y sitios oficiales de bancos.
// Las fotos son temporales (Unsplash) y se repiten por falta de tiempo de
// curación; ver README para la lista de reemplazos pendientes.
export const articles: Article[] = [
  {
    id: 'presupuesto-realista',
    title: '¿Cómo crear un presupuesto que realmente puedas cumplir?',
    description: 'Contenido demostrativo. Guía práctica para armar un presupuesto simple con tus propios gastos reales.',
    category: 'Presupuesto',
    tags: ['articulos', 'presupuesto'],
    type: 'articulo',
    duration: '6 min lectura',
    photo: stockPhotos.reviewingBills,
  },
  {
    id: 'pago-minimo-tarjeta',
    title: '¿Qué significa pagar el mínimo de una tarjeta?',
    description: 'Contenido demostrativo. Explicamos el costo real de pagar solo el mínimo mes a mes.',
    category: 'Tarjetas',
    tags: ['articulos', 'tarjetas'],
    type: 'articulo',
    duration: '5 min lectura',
    photo: stockPhotos.firstApartment,
  },
  {
    id: 'ahorro-ingresos-variables',
    title: 'Cómo empezar a ahorrar si tienes ingresos variables.',
    description: 'Contenido demostrativo. Video corto con estrategias simples para ahorrar sin un sueldo fijo.',
    category: 'Ahorro',
    tags: ['videos', 'ahorro'],
    type: 'video',
    duration: '3 min video',
    photo: stockPhotos.friendsTravel,
  },
  {
    id: 'cuotas-sin-interes',
    title: '¿Conviene comprar en cuotas sin interés?',
    description: 'Contenido demostrativo. Lo que hay que revisar antes de aceptar una compra en cuotas.',
    category: 'Créditos',
    tags: ['articulos', 'creditos'],
    type: 'articulo',
    duration: '4 min lectura',
    // Sin foto sourceada aún: se usa un degradado cálido (ver ArticleCard.tsx).
  },
  {
    id: 'tipos-tasa-hipotecaria',
    title: 'Diferencias entre tasa fija, variable y mixta.',
    description: 'Contenido demostrativo. Conceptos base antes de comparar créditos hipotecarios entre bancos.',
    category: 'Hipotecario',
    tags: ['articulos', 'hipotecarios'],
    type: 'articulo',
    duration: '7 min lectura',
    photo: stockPhotos.firstApartment,
  },
  {
    id: 'estres-financiero',
    title: '¿Por qué el dinero puede generar estrés?',
    description: 'Contenido demostrativo. Una mirada simple a la relación entre bienestar emocional y finanzas.',
    category: 'Bienestar',
    tags: ['videos', 'bienestar'],
    type: 'video',
    duration: '2 min video',
    photo: stockPhotos.reviewingBills,
  },
]

export const learningTabs = [
  { label: 'Todos', filter: 'todos' },
  { label: 'Artículos', filter: 'articulos' },
  { label: 'Videos', filter: 'videos' },
  { label: 'Ahorro', filter: 'ahorro' },
  { label: 'Presupuesto', filter: 'presupuesto' },
  { label: 'Créditos', filter: 'creditos' },
  { label: 'Tarjetas', filter: 'tarjetas' },
  { label: 'Créditos hipotecarios', filter: 'hipotecarios' },
  { label: 'Bienestar financiero', filter: 'bienestar' },
]
