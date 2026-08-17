import { useReveal } from '../hooks/useReveal'
import AnalogPhoto from './AnalogPhoto'
import { stockPhotos } from '../data/media'

export default function SchoolsSection() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div className="schools reveal" ref={ref}>
      <AnalogPhoto src={stockPhotos.studentsLearning} alt="Estudiantes en un taller de educación financiera" />
      <div>
        <span className="eyebrow">Educación financiera para la vida real</span>
        <h3 style={{ marginTop: 14 }}>La educación financiera también comienza en la sala de clases.</h3>
        <p>Queremos llevar herramientas prácticas a colegios, universidades y comunidades, conectando el aprendizaje con las decisiones que las personas enfrentan todos los días.</p>
      </div>
    </div>
  )
}
