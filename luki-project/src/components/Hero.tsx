import { useEffect, useRef } from 'react'
import { LukiIaScreen } from './PhoneScreens'

// Hero con "phone reveal": al cargar, el teléfono está muy acercado
// (zoom in, casi solo se ve la pantalla, que se funde con el fondo
// animado de la página). A medida que se hace scroll, el teléfono se
// aleja, gira en diagonal hacia la derecha y su pantalla revela la
// app real (Luki IA) con un crossfade.

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const phoneRef = useRef<HTMLDivElement | null>(null)
  const heroCopyRef = useRef<HTMLDivElement | null>(null)
  const blankLayerRef = useRef<HTMLDivElement | null>(null)
  const appLayerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function update() {
      const section = sectionRef.current
      const phone = phoneRef.current
      const heroCopy = heroCopyRef.current
      const blankLayer = blankLayerRef.current
      const appLayer = appLayerRef.current
      if (!section || !phone || !heroCopy || !blankLayer || !appLayer) return

      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const scrolled = -rect.top
      let p = total > 0 ? scrolled / total : 0
      p = Math.min(1, Math.max(0, p))
      const ease = easeInOutCubic(p)

      const scale = lerp(2.3, 0.9, ease)
      const rotateX = lerp(8, 6, ease)
      const rotateY = lerp(0, -22, ease)
      const rotateZ = lerp(0, 10, ease)
      const translateX = lerp(0, 50, ease)

      phone.style.transform =
        `translateX(${translateX}px) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`

      heroCopy.style.opacity = String(lerp(1, 0, Math.min(1, p * 2.2)))

      const revealStart = 0.55
      const revealP = p > revealStart ? (p - revealStart) / (1 - revealStart) : 0
      const revealEase = easeInOutCubic(Math.min(1, revealP))
      appLayer.style.opacity = String(revealEase)
      blankLayer.style.opacity = String(1 - revealEase)
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section id="hero" className="reveal-hero" ref={sectionRef}>
      <div className="reveal-stage">
        <div className="hero-copy reveal-copy" ref={heroCopyRef}>
          <h1>Aprende finanzas<br />mientras vives.</h1>
        </div>

        <div className="reveal-phone-wrap">
          <div className="phone reveal-phone" ref={phoneRef}>
            <div className="reveal-edge right" />
            <div className="reveal-edge left" />
            <div className="phone-notch" />
            <div className="phone-screen reveal-screen">
              <div className="reveal-layer reveal-blank" ref={blankLayerRef} />
              <div className="reveal-layer reveal-app" ref={appLayerRef}>
                <LukiIaScreen />
              </div>
              <div className="reveal-glare" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
