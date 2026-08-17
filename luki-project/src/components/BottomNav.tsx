const items = ['Inicio', 'Movim.', 'Luki IA', 'Metas']

export default function BottomNav({ active }: { active: 0 | 1 | 2 | 3 }) {
  return (
    <div className="bottom-nav">
      {items.map((label, i) => (
        <div key={label} className={`nitem ${active === i ? 'active' : ''}`}>
          <span className="dot-ico" />{label}
        </div>
      ))}
    </div>
  )
}
