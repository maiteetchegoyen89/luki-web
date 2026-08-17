import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import { navItems } from '../data/nav'
import { useWaitlist } from '../context/WaitlistContext'

export default function Header() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header id="site-header">
        <div className="header-inner">
          <a href="#top" className="logo" aria-label="Luki, inicio">
            Luki
          </a>
          <nav className="pill" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={active === item.href ? 'active' : ''}>
                {item.label}
              </a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button className="btn-glass" onClick={openWaitlist} type="button">Lista de espera</button>
            <button
              className="burger"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
