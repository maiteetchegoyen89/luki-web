import { phoneScenes, SceneVisual } from '../data/phoneScenes'
import { InicioScreen, LukiIaScreen, MetasScreen } from './PhoneScreens'
import AnalogPhoto from './AnalogPhoto'
import { stockPhotos } from '../data/media'
import { useActiveScene } from '../hooks/useActiveScene'

// One photo per "photo" stage, in stage order (0, 4, 5).
const photosByStage: Record<number, { src: string; alt: string; caption: string }> = {
  0: { src: stockPhotos.reviewingBills, alt: 'Joven revisando cuentas y papeles sobre la mesa', caption: 'verano, 198X' },
  4: { src: stockPhotos.friendsTravel, alt: 'Amigos disfrutando un atardecer de viaje', caption: 'viaje, verano 198X' },
  5: { src: stockPhotos.firstApartment, alt: 'Persona instalándose tranquila en su nuevo espacio', caption: 'domingo, 198X' },
}

function VisualLayer({ visual, stageId, active }: { visual: SceneVisual; stageId: number; active: boolean }) {
  const className = `visual-layer ${visual === 'photo' ? 'photo-layer' : ''} ${active ? 'active' : ''}`
  if (visual === 'photo') {
    const p = photosByStage[stageId]
    return (
      <div className={className}>
        <AnalogPhoto src={p.src} alt={p.alt} caption={p.caption} />
      </div>
    )
  }
  const Screen = visual === 'inicio' ? InicioScreen : visual === 'lukiIa' ? LukiIaScreen : MetasScreen
  return (
    <div className={className}>
      <div className="phone" style={{ width: '100%', height: '100%' }}>
        <div className="phone-notch" />
        <div className="phone-screen"><Screen /></div>
      </div>
    </div>
  )
}

export default function ScrollStory() {
  const { active, refs } = useActiveScene(phoneScenes.length)

  return (
    <section id="story">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Cómo te acompaña Luki</span>
          <h2>De la incertidumbre a la tranquilidad, un scroll a la vez.</h2>
        </div>

        <div className="story-grid">
          <div className="story-visual-col">
            <div className="story-visual-sticky">
              <div className="visual-slot">
                {phoneScenes.map((scene, i) => (
                  <VisualLayer key={scene.id} visual={scene.visual} stageId={scene.id} active={active === i} />
                ))}
              </div>
            </div>
          </div>

          <div className="story-scenes-col">
            {phoneScenes.map((scene, i) => (
              <div
                key={scene.id}
                className={`story-scene ${active === i ? 'active' : ''}`}
                ref={(el) => { refs.current[i] = el }}
              >
                <h3>{scene.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
