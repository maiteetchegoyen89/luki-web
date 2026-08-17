import { mortgageGuides } from '../data/mortgageGuides'

export default function MortgageGuideCard() {
  return (
    <div className="mortgage-panel">
      <div className="head">
        <div>
          <span className="eyebrow" style={{ color: 'var(--orange-soft)' }}>Guías hipotecarias</span>
          <h3 style={{ marginTop: 12 }}>Compara condiciones de créditos hipotecarios.</h3>
        </div>
        <div className="warn">Las condiciones pueden cambiar. Esta información es referencial: revisa siempre la fuente oficial de cada banco antes de decidir.</div>
      </div>
      <table className="mortgage-table">
        <thead>
          <tr><th>Banco</th><th>Tipo de crédito</th><th>Tasa referencial</th><th>Plazo</th><th>Actualizado</th></tr>
        </thead>
        <tbody>
          {mortgageGuides.map((g, i) => (
            <tr key={i}>
              <td>{g.bank}</td>
              <td>{g.creditType}</td>
              <td className="upd">{g.referenceRate}</td>
              <td>{g.term}</td>
              <td className="upd">{g.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
