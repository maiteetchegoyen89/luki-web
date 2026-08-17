import { useEffect, useRef, useState } from 'react'
import { methodSteps } from '../data/method'

export default function LukiMethod() {
  const bandRef = useRef<HTMLDivElement | null>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = bandRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTriggered(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="method-band" ref={bandRef}>
      <div className="method-title">El método Luki</div>
      <div className="method-steps">
        {methodSteps.map((step, i) => (
          <div key={step.n} style={{ display: 'contents' }}>
            <div
              className={`method-step ${triggered ? 'in' : ''}`}
              style={{ transitionDelay: triggered ? `${i * 130}ms` : '0ms' }}
            >
              <div className="n">{step.n}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
            {i < methodSteps.length - 1 && <span className="method-arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
