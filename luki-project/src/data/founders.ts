export interface Founder {
  initials: string
  name: string
  role: string
  bio: string
  linkedin?: string
  photoUrl?: string // reemplazar por la foto real cuando esté disponible
}

// IMPORTANTE: no se inventan cargos ni biografías. Reemplazar "role" y "bio"
// con la información real de cada fundador cuando esté disponible.
export const founders: Founder[] = [
  { initials: 'ME', name: 'Maite Etchegoyen', role: 'Fundadora', bio: 'Descripción del fundador próximamente.', linkedin: 'https://www.linkedin.com/in/maite-etchegoyen-gatica-976041355', photoUrl: '/founders/maite-etchegoyen.jpg' },
  { initials: 'FR', name: 'Felipe Román', role: 'Fundador', bio: 'Descripción del fundador próximamente.', linkedin: 'https://www.linkedin.com/in/felipe-rom%C3%A1n-mu%C3%B1oz-706820338', photoUrl: '/founders/felipe-roman.jpg' },
  { initials: 'CB', name: 'Camilo Bresciani', role: 'Fundador', bio: 'Descripción del fundador próximamente.', linkedin: 'https://www.linkedin.com/in/camilo-bresciani-rudolph', photoUrl: '/founders/camilo-bresciani.jpg' },
]
