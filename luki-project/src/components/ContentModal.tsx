import { Article } from '../data/articles'

export default function ContentModal({ item, onClose }: { item: Article | null; onClose: () => void }) {
  return (
    <div id="video-modal" className={item ? 'open' : ''} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, textAlign: 'center', padding: 20 }}>
          {item ? (
            item.type === 'video' && item.url ? (
              // Lazy-loaded iframe, only mounted once the user opens the modal.
              <iframe
                width="100%"
                height="100%"
                src={item.url}
                title={item.title}
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              `Contenido demostrativo: "${item.title}". Aquí se incrustará el artículo o video real.`
            )
          ) : null}
        </div>
      </div>
    </div>
  )
}
