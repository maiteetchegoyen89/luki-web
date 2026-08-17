import { stockPhotos } from './media'

export interface Goal {
  id: string
  name: string
  saved: number
  target: number
  photo?: string
  gradient?: string // used when no real photo has been sourced yet
  nextStep: string
}

// CONTENIDO DEMOSTRATIVO. No prometas resultados garantizados: los montos y
// tiempos estimados son ilustrativos, listos para conectarse a datos reales
// del usuario.
export const goals: Goal[] = [
  { id: 'europa', name: 'Viaje a Europa', saved: 420000, target: 1254000, photo: stockPhotos.friendsTravel, nextStep: 'Ahorrando $52.000 al mes podrías completar tu meta en aproximadamente 16 meses.' },
  { id: 'depto', name: 'Primer departamento', saved: 1100000, target: 3500000, photo: stockPhotos.firstApartment, nextStep: 'Próximo paso: separar $40.000 esta semana para el fondo de mudanza.' },
  { id: 'estudios', name: 'Curso de especialización', saved: 180000, target: 600000, photo: stockPhotos.studentsLearning, nextStep: 'Próximo paso: revisar becas disponibles antes de seguir ahorrando.' },
  { id: 'emergencia', name: 'Fondo de emergencia', saved: 800000, target: 1530000, gradient: 'linear-gradient(150deg,var(--peach),var(--salmon))', nextStep: 'Próximo paso: mantener el aporte automático de $60.000 al mes.' },
  { id: 'compu', name: 'Computador nuevo', saved: 260000, target: 650000, gradient: 'linear-gradient(150deg,#d9c2a8,var(--peach))', nextStep: 'Próximo paso: comparar 3 modelos antes de definir el monto final.' },
  { id: 'bici', name: 'Bicicleta para moverme', saved: 95000, target: 240000, gradient: 'linear-gradient(150deg,var(--orange-soft),var(--coral))', nextStep: 'Próximo paso: sumar $20.000 este fin de semana.' },
]
