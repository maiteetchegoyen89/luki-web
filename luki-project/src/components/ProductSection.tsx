import { useReveal } from '../hooks/useReveal'
import LukiMethod from './LukiMethod'

export default function ProductSection() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="producto">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Producto</span>
          <h2>Claridad para tomar mejores decisiones.</h2>
          <p>Luki transforma tus movimientos, gastos y metas en información simple que puedes utilizar en tu vida diaria.</p>
        </div>
        <LukiMethod />
      </div>
    </section>
  )
}
