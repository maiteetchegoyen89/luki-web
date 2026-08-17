import { goals } from '../data/goals'
import AnalogPhoto from './AnalogPhoto'
import { useReveal } from '../hooks/useReveal'

function formatCLP(n: number) {
  return '$' + n.toLocaleString('es-CL')
}

function GoalCard({ g }: { g: typeof goals[number] }) {
  const ref = useReveal<HTMLDivElement>()
  const pct = Math.round((g.saved / g.target) * 100)
  return (
    <div className="goal-card reveal" ref={ref}>
      <AnalogPhoto src={g.photo} gradient={g.gradient} alt={g.name} caption={g.name} />
      <div className="body">
        <h4>{g.name}</h4>
        <div className="amounts"><b>{formatCLP(g.saved)}</b><span>de {formatCLP(g.target)}</span></div>
        <div className="bar-track"><div className="bar-fill" style={{ width: `${pct}%` }} /></div>
        <div className="step" dangerouslySetInnerHTML={{ __html: g.nextStep.replace(/\$[\d.]+(?: al mes)?/, (m) => `<b>${m}</b>`) }} />
      </div>
    </div>
  )
}

export default function GoalsSection() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <section id="metas">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Metas</span>
          <h2>No ahorras solamente por ahorrar.</h2>
          <p>Ahorras para viajar, independizarte, estudiar, sentir seguridad o construir algo que sea importante para ti.</p>
        </div>
        <div className="goals-grid">
          {goals.map((g) => <GoalCard key={g.id} g={g} />)}
        </div>
        <div className="goals-cta">
          <a href="#final-cta" className="btn-primary">Empieza tu primera meta</a>
        </div>
      </div>
    </section>
  )
}
