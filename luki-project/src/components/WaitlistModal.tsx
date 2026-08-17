import { FormEvent, useEffect, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function WaitlistModal({ open, onClose }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  // Al abrir el modal de nuevo, siempre parte limpio.
  useEffect(() => {
    if (open) {
      setName('')
      setEmail('')
      setErrors({})
      setSubmitted(false)
    }
  }, [open])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors: { name?: string; email?: string } = {}
    if (!name.trim()) nextErrors.name = 'Cuéntanos tu nombre.'
    if (!email.trim()) nextErrors.email = 'Necesitamos tu correo.'
    else if (!isValidEmail(email)) nextErrors.email = 'Ese correo no se ve válido.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // TODO: conectar con el destino real de la lista de espera (por ejemplo,
    // un endpoint propio, Google Sheets vía Apps Script, o un servicio como
    // Formspree/Airtable). Por ahora solo confirma en pantalla, no envía
    // el dato a ninguna parte todavía.
    setSubmitted(true)
  }

  return (
    <div
      id="waitlist-modal"
      className={open ? 'open' : ''}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div className="waitlist-box">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>

        {submitted ? (
          <div className="waitlist-success">
            <div className="waitlist-check">✓</div>
            <h3>¡Listo, {name.split(' ')[0]}!</h3>
            <p>Te avisaremos apenas puedas probar Luki. Gracias por sumarte desde el principio.</p>
            <button className="btn-primary" onClick={onClose} type="button">Cerrar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <span className="eyebrow" style={{ color: '#B8501E' }}>Lista de espera</span>
            <h3 id="waitlist-title">Inscríbete para ser de los primeros en probar Luki.</h3>
            <p className="waitlist-sub">Déjanos tu nombre y correo — te avisamos apenas se abran los cupos.</p>

            <label className="waitlist-field">
              <span>Nombre</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                autoComplete="name"
              />
              {errors.name && <span className="waitlist-error">{errors.name}</span>}
            </label>

            <label className="waitlist-field">
              <span>Correo</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                autoComplete="email"
              />
              {errors.email && <span className="waitlist-error">{errors.email}</span>}
            </label>

            <button className="btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
              Inscribirme
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
