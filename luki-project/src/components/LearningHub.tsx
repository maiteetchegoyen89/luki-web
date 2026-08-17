import { useState } from 'react'
import { articles, learningTabs, Article } from '../data/articles'
import ArticleCard from './ArticleCard'
import ContentModal from './ContentModal'
import { useReveal } from '../hooks/useReveal'

export default function LearningHub() {
  const [filter, setFilter] = useState('todos')
  const [openItem, setOpenItem] = useState<Article | null>(null)
  const headRef = useReveal<HTMLDivElement>()

  const visible = filter === 'todos' ? articles : articles.filter((a) => a.tags.includes(filter))

  return (
    <section id="aprendizaje">
      <div className="wrap">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow">Aprendizaje</span>
          <h2>Contenido claro, justo cuando lo necesitas.</h2>
          <p>Contenido demostrativo — se reemplazará por artículos verificados con fuentes oficiales (CMF, Banco Central, SERNAC, Superintendencia de Pensiones, entre otras).</p>
        </div>

        <div className="tabs" role="tablist">
          {learningTabs.map((t) => (
            <button
              key={t.filter}
              className={`tab ${filter === t.filter ? 'active' : ''}`}
              onClick={() => setFilter(t.filter)}
              role="tab"
              aria-selected={filter === t.filter}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="article-grid">
          {visible.map((a) => (
            <ArticleCard key={a.id} article={a} onOpen={setOpenItem} />
          ))}
        </div>
      </div>

      <ContentModal item={openItem} onClose={() => setOpenItem(null)} />
    </section>
  )
}
