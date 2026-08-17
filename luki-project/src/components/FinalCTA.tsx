import { useReveal } from '../hooks/useReveal'
import { useWaitlist } from '../context/WaitlistContext'

export default function FinalCTA() {
  const ref = useReveal<HTMLDivElement>()
  const { openWaitlist } = useWaitlist()
  return (
    <section style={{ padding: '0 0 110px' }}>
      <div id="final-cta" className="wrap reveal" ref={ref}>
        <span className="eyebrow" style={{ color: 'var(--orange-soft)' }}>Empieza hoy</span>
        <h2>Empieza por una meta. Luki te ayuda con el camino.</h2>
        <p>Ordena tus finanzas, construye hábitos y avanza con claridad hacia lo que realmente quieres.</p>
        <div className="ctas">
          <button className="btn-primary" onClick={openWaitlist} type="button">Lista de espera</button>
        </div>
      </div>
    </section>
  )
}
