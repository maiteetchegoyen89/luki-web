import { useReveal } from '../hooks/useReveal'
import { founders, Founder } from '../data/founders'

function FounderCard({ f }: { f: Founder }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div className="founder-card reveal" ref={ref}>
      <div className="founder-photo">{f.photoUrl ? <img src={f.photoUrl} alt={f.name} /> : f.initials}</div>
      <h4>{f.name}</h4>
      <div className="role">{f.role}</div>
      {f.linkedin && <a href={f.linkedin} className="li-link" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
    </div>
  )
}

export default function FoundersSection() {
  const headRef = useReveal<HTMLDivElement>()
  return (
    <div style={{ marginTop: 100 }}>
      <div className="section-head reveal" style={{ marginBottom: 36 }} ref={headRef}>
        <span className="eyebrow">Fundadores</span>
        <h2 style={{ fontSize: 32 }}>Las personas detrás de Luki.</h2>
      </div>
      <div className="founders-grid">
        {founders.map((f) => <FounderCard key={f.name} f={f} />)}
      </div>
    </div>
  )
}
