import { createContext, ReactNode, useContext, useState } from 'react'
import WaitlistModal from '../components/WaitlistModal'

interface WaitlistContextValue {
  openWaitlist: () => void
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null)

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <WaitlistContext.Provider value={{ openWaitlist: () => setOpen(true) }}>
      {children}
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error('useWaitlist debe usarse dentro de WaitlistProvider')
  return ctx
}
