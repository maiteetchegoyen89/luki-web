import IosStatusBar from './IosStatusBar'
import BottomNav from './BottomNav'
import { stockPhotos } from '../data/media'

// The four core app screens, rebuilt at high fidelity from the original
// Luki mockup (Inicio, Movimientos, Luki IA, Metas), adapted to the warm
// orange/salmon palette. Reused both in the Hero and in ScrollStory.

export function InicioScreen({ withNav = true }: { withNav?: boolean }) {
  return (
    <>
      <IosStatusBar />
      <div className="screen-body">
        <div className="app-greet"><span>Hola, Felipe</span><span className="ai-badge">✦</span></div>
        <div className="balance-card">
          <div className="lbl">Tu saldo disponible</div>
          <div className="amt">$842.500</div>
          <div className="acct">🏦 Banco Fidelitia CMR Débito · 4821</div>
        </div>
        <div className="split-row">
          <div className="split-card in"><div className="k">↓ Ingresos</div><div className="v">$1.200.000</div></div>
          <div className="split-card out"><div className="k">↑ Gastos</div><div className="v">$357.000</div></div>
        </div>
        <div className="month-card">
          <div className="row"><span>Gasto de mes</span><b>29,75% de tus ingresos</b></div>
          <div className="bar-track"><div className="bar-fill" style={{ width: '30%' }} /></div>
        </div>
        <div className="list-title">Movimientos recientes</div>
        <div className="move-row"><div className="ic" style={{ background: '#F47A3C' }}>L</div><div className="mid"><div className="n">Lider Supermercado</div><div className="c">Hoy · 12:43</div></div><div className="amt neg">-$45.800</div></div>
        <div className="move-row"><div className="ic" style={{ background: '#2A2422' }}>U</div><div className="mid"><div className="n">Uber</div><div className="c">Ayer · 21:37</div></div><div className="amt neg">-$12.300</div></div>
        <div className="move-row"><div className="ic" style={{ background: '#5D9B71' }}>↧</div><div className="mid"><div className="n">Transferencia recibida</div><div className="c">Ingreso · 09:06</div></div><div className="amt pos">+$85.000</div></div>
      </div>
      {withNav && <BottomNav active={0} />}
    </>
  )
}

export function MovimientosScreen() {
  return (
    <>
      <IosStatusBar />
      <div className="screen-body">
        <div className="ai-title" style={{ fontSize: 19 }}>Movimientos</div>
        <div className="search-bar">🔍 Buscar</div>
        <div className="filter-row">
          <span className="filter-pill active">Todos</span>
          <span className="filter-pill">Gastos</span>
          <span className="filter-pill">Ingresos</span>
        </div>
        <div className="date-label">Hoy</div>
        <div className="move-row"><div className="ic" style={{ background: '#F47A3C' }}>L</div><div className="mid"><div className="n">Lider</div><div className="c">Supermercado · 12:43</div></div><div className="amt neg">-$45.800</div></div>
        <div className="move-row"><div className="ic" style={{ background: '#FF9A62' }}>C</div><div className="mid"><div className="n">Copec</div><div className="c">Transporte · 10:18</div></div><div className="amt neg">-$32.000</div></div>
        <div className="date-label">Ayer</div>
        <div className="move-row"><div className="ic" style={{ background: '#2A2422' }}>U</div><div className="mid"><div className="n">Uber</div><div className="c">Transporte · 21:37</div></div><div className="amt neg">-$12.300</div></div>
        <div className="move-row"><div className="ic" style={{ background: '#5D9B71' }}>S</div><div className="mid"><div className="n">Starbucks</div><div className="c">Restaurantes · 17:12</div></div><div className="amt neg">-$6.450</div></div>
      </div>
      <BottomNav active={1} />
    </>
  )
}

export function LukiIaScreen() {
  return (
    <>
      <IosStatusBar />
      <div className="screen-body">
        <div className="ai-title">Luki IA</div>
        <div className="ai-q">¿En qué te ayudo hoy?</div>
        <div className="ai-rec-card">
          <div className="spark">✦</div>
          <p>Puedes gastar hasta <b>$65.000</b> este fin de semana sin afectar tu meta.</p>
        </div>
        <div className="ai-btn-row">
          <button>¿Cómo se calculó esto?</button>
          <button className="solid">Ver mi plan</button>
        </div>
        <div className="ai-input">Escribe tu pregunta…</div>
      </div>
      <BottomNav active={2} />
    </>
  )
}

export function MetasScreen() {
  return (
    <>
      <IosStatusBar />
      <div className="screen-body">
        <div className="ai-title" style={{ fontSize: 19 }}>Metas</div>
        <div className="goal-mini" style={{ background: '#6b5a46' }}>
          <img className="bgimg" src={stockPhotos.friendsTravel} alt="" loading="lazy" />
          <div className="content">
            <div className="n">Viaje a Europa</div>
            <div className="amt">$420.000 de $1.254.000</div>
            <div className="bar-track"><div className="bar-fill" style={{ width: '34%' }} /></div>
          </div>
        </div>
        <div className="goal-mini" style={{ background: '#7a5a2f' }}>
          <img className="bgimg" src={stockPhotos.firstApartment} alt="" loading="lazy" />
          <div className="content">
            <div className="n">Fondo de emergencia</div>
            <div className="amt">$800.000 de $1.530.000</div>
            <div className="bar-track"><div className="bar-fill" style={{ width: '52%' }} /></div>
          </div>
        </div>
        <div className="add-goal">+ Agregar nueva meta</div>
      </div>
      <BottomNav active={3} />
    </>
  )
}

// Order matches the 6 scroll-story stages: stages 1, 4, 5 use a photo instead
// (see ScrollStory.tsx), stages 2/3/4 map to Inicio / Luki IA / Metas.
export const phoneScreens = [InicioScreen, LukiIaScreen, MetasScreen]
