import { useEffect, useRef } from 'react'

// Fondo animado de puntos ("halftone") en los colores de marca de Luki.
// Vive fijo detrás de toda la página (ver .animated-bg en index.css).
// Respeta prefers-reduced-motion: si está activado, dibuja un solo frame
// estático en vez de animar en loop.

const BG = { r: 245, g: 243, b: 238 }
const PALETTE = [
  { r: 156, g: 185, b: 167 },
  { r: 252, g: 159, b: 55 },
  { r: 249, g: 121, b: 76 },
]

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}
function mixColor(c0: typeof PALETTE[0], c1: typeof PALETTE[0], t: number) {
  return { r: lerp(c0.r, c1.r, t), g: lerp(c0.g, c1.g, t), b: lerp(c0.b, c1.b, t) }
}
function paletteColor(phase: number) {
  const p = ((phase % 1) + 1) % 1
  const scaled = p * PALETTE.length
  const i0 = Math.floor(scaled) % PALETTE.length
  const i1 = (i0 + 1) % PALETTE.length
  return mixColor(PALETTE[i0], PALETTE[i1], scaled - Math.floor(scaled))
}

const SPACING = 11
const OCTAVES = [
  { fx: 0.01, fy: 0.006, sx: 0.3, sy: -0.18, w: 1.0, phase: 0.0 },
  { fx: -0.017, fy: 0.013, sx: -0.22, sy: 0.27, w: 0.62, phase: 2.1 },
  { fx: 0.028, fy: -0.022, sx: 0.15, sy: 0.2, w: 0.38, phase: 4.4 },
  { fx: -0.041, fy: -0.033, sx: -0.12, sy: -0.16, w: 0.24, phase: 1.3 },
]
let totalW = 0
for (const o of OCTAVES) totalW += o.w

function noiseAt(x: number, y: number, t: number) {
  let sum = 0
  for (const o of OCTAVES) {
    const ang = x * o.fx + y * o.fy + t * (o.sx * 0.00002) + o.phase
    const ang2 = x * o.fy - y * o.fx + t * (o.sy * 0.00002) + o.phase * 1.7
    sum += Math.sin(ang) * Math.cos(ang2) * o.w
  }
  return (sum / totalW + 1) / 2
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0
    let H = 0
    let DPR = 1
    let raf = 0

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth
      H = window.innerHeight
      canvas!.width = W * DPR
      canvas!.height = H * DPR
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    function frame(t: number) {
      ctx!.fillStyle = `rgb(${BG.r},${BG.g},${BG.b})`
      ctx!.fillRect(0, 0, W, H)

      const time = (reduced ? 40000 : t) * 1.6
      const cols = Math.ceil(W / SPACING)
      const rows = Math.ceil(H / SPACING)
      const colorDrift = time * 0.000015

      for (let iy = 0; iy <= rows; iy++) {
        for (let ix = 0; ix <= cols; ix++) {
          const x = ix * SPACING + (iy % 2 ? SPACING / 2 : 0)
          const y = iy * SPACING

          const raw = noiseAt(x, y, time)
          const eps = 6
          const gx = noiseAt(x + eps, y, time) - raw
          const gy = noiseAt(x, y + eps, time) - raw
          const pull = 5.5
          const px = x + gx * pull * 20
          const py = y + gy * pull * 20

          let n = Math.pow(raw, 1.1)
          if (n < 0.14) n = 0
          else n = (n - 0.14) / 0.86

          const col = paletteColor((x + y) * 0.0006 + colorDrift)
          const rr = Math.round(lerp(BG.r, col.r, n))
          const gg = Math.round(lerp(BG.g, col.g, n))
          const bb = Math.round(lerp(BG.b, col.b, n))
          const alpha = 0.12 + n * 0.88
          const radius = 0.9 + n * 4.4

          if (alpha < 0.03) continue

          ctx!.beginPath()
          ctx!.fillStyle = `rgba(${rr},${gg},${bb},${alpha})`
          ctx!.arc(px, py, radius, 0, Math.PI * 2)
          ctx!.fill()
        }
      }

      if (!reduced) raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(frame)

    return () => {
      window.removeEventListener('resize', resize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="animated-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
