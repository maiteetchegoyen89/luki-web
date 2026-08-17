// Recreación en SVG/CSS del símbolo de Luki: 4 cuadrados en grilla 2x2,
// cada uno con un tono de verde distinto y esquinas redondeadas.
// Reemplazar por el archivo de marca definitivo cuando esté disponible
// (ver /public/brand para instrucciones).
export default function LogoMark({ size = 22, spinning = false }: { size?: number; spinning?: boolean }) {
  return (
    <span
      className={spinning ? 'loader-mark' : 'mark'}
      style={!spinning ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <i /><i /><i /><i />
    </span>
  )
}
