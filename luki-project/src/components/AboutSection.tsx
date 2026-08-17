import { useReveal } from '../hooks/useReveal'
import FoundersSection from './FoundersSection'
import AnalogPhoto from './AnalogPhoto'
import { stockPhotos } from '../data/media'

export default function AboutSection() {
  const introRef = useReveal<HTMLDivElement>()
  const visualRef = useReveal<HTMLDivElement>()
  const textRef = useReveal<HTMLDivElement>()

  return (
    <section id="nosotros">
      <div className="wrap">
        <div className="about-hero-text reveal" ref={introRef}>
          <span className="eyebrow">Nosotros</span>
          <h2>Queremos que entender la plata deje de ser un privilegio.</h2>
        </div>

        <div className="about-block">
          <div className="reveal" ref={visualRef}>
            <AnalogPhoto src={stockPhotos.reviewingBills} alt="Joven organizando sus finanzas personales" />
          </div>
          <div className="reveal" ref={textRef}>
            <h3>Nuestra misión</h3>
            <p>Creemos que la educación financiera debería comenzar desde pequeños y acompañarnos durante toda la vida. No para convertirnos en expertos, sino para tomar decisiones con más tranquilidad, autonomía y confianza.</p>
            <h3 style={{ marginTop: 26 }}>Nuestra visión</h3>
            <p>Queremos que cada joven pueda construir hábitos que le permitan cumplir sus sueños y metas, sin sentir que necesita ser experto en finanzas.</p>
          </div>
        </div>

        <FoundersSection />
      </div>
    </section>
  )
}
