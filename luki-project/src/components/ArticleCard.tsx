import { Article } from '../data/articles'
import AnalogPhoto from './AnalogPhoto'

const fallbackGradients: Record<string, string> = {
  Presupuesto: 'linear-gradient(135deg,var(--orange),var(--salmon))',
  Tarjetas: 'linear-gradient(135deg,var(--salmon),var(--peach))',
  Ahorro: 'linear-gradient(135deg,var(--orange-soft),var(--coral))',
  Créditos: 'linear-gradient(135deg,var(--salmon),var(--peach))',
  Hipotecario: 'linear-gradient(135deg,var(--coral),var(--orange))',
  Bienestar: 'linear-gradient(135deg,var(--peach),var(--salmon))',
}

export default function ArticleCard({ article, onOpen }: { article: Article; onOpen: (a: Article) => void }) {
  return (
    <article className="article-card" data-cat={article.tags.join(' ')}>
      <div className={`article-thumb ${article.type === 'video' ? 'video' : ''}`}>
        <AnalogPhoto
          src={article.photo}
          gradient={fallbackGradients[article.category]}
          alt={article.title}
        />
        <span className="cat">{article.category}</span>
      </div>
      <div className="article-body">
        <h4>{article.title}</h4>
        <p>{article.description}</p>
        <div className="article-meta">
          <span>{article.duration}</span>
          <a href="#" onClick={(e) => { e.preventDefault(); onOpen(article) }}>Ver contenido →</a>
        </div>
      </div>
    </article>
  )
}
