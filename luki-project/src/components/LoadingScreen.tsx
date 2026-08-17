import { useEffect, useState } from 'react'
import LogoMark from './LogoMark'

const STORAGE_KEY = 'luki_loaded'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    let alreadyLoaded = false
    try {
      alreadyLoaded = sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      /* sessionStorage unavailable, fall back to always showing it once */
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (alreadyLoaded || reduced) {
      setVisible(false)
      return
    }

    const t1 = setTimeout(() => setHiding(true), 1500)
    const t2 = setTimeout(() => {
      setVisible(false)
      try {
        sessionStorage.setItem(STORAGE_KEY, '1')
      } catch {
        /* ignore */
      }
    }, 2250)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!visible) return null

  return (
    <div id="loading" className={hiding ? 'hide' : ''} aria-hidden="true">
      <LogoMark spinning />
      <div className="loader-word">Luki</div>
    </div>
  )
}
