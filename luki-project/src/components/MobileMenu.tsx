import { navItems } from '../data/nav'
import { useWaitlist } from '../context/WaitlistContext'

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { openWaitlist } = useWaitlist()
  return (
    <div id="mobile-menu" className={open ? 'open' : ''}>
      {navItems.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>
      ))}
      <a href="#" onClick={(e) => { e.preventDefault(); onClose(); openWaitlist() }}>Lista de espera</a>
    </div>
  )
}
