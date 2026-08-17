import { ReactNode, useRef } from 'react'

interface Props {
  children: ReactNode
  tilt?: boolean
  className?: string
}

/**
 * Reusable phone frame. Pass any screen content as children. When tilt is
 * true (used in the Hero), it responds subtly to mouse movement.
 */
export default function PhoneMockup({ children, tilt = false, className = '' }: Props) {
  const stageRef = useRef<HTMLDivElement | null>(null)
  const phoneRef = useRef<HTMLDivElement | null>(null)

  function handleMove(e: React.MouseEvent) {
    if (!tilt || !phoneRef.current || !stageRef.current) return
    if (!window.matchMedia('(pointer:fine)').matches) return
    const r = stageRef.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    phoneRef.current.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`
  }
  function handleLeave() {
    if (phoneRef.current) phoneRef.current.style.transform = 'rotateY(0) rotateX(0)'
  }

  return (
    <div
      className="hero-phone-stage"
      ref={stageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={`phone ${className}`} ref={phoneRef}>
        <div className="phone-notch" />
        <div className="phone-screen">{children}</div>
      </div>
    </div>
  )
}
