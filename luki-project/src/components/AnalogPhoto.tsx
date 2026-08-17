interface Props {
  src?: string
  alt: string
  caption?: string
  gradient?: string // fallback when there's no real photo yet
  className?: string
}

/**
 * Reusable "Kodak 80s" photo treatment: warm overlay + SVG film grain +
 * soft vignette, applied consistently to every photograph on the site.
 * Pass either `src` (a real photo) or `gradient` (a CSS gradient) as a
 * temporary stand-in when no photo has been sourced yet for that spot.
 */
export default function AnalogPhoto({ src, alt, caption, gradient, className = '' }: Props) {
  return (
    <div className={`kodak-photo ${className}`} style={!src && gradient ? { background: gradient } : undefined}>
      {src && <img src={src} alt={alt} loading="lazy" />}
      <div className="vignette" />
      {caption && <span className="kodak-caption">{caption}</span>}
    </div>
  )
}
