// Reusable component for embedding a YouTube video with lazy loading.
// Renders a thumbnail + play button; the real <iframe> is only created once
// the user clicks (see ContentModal.tsx), so it never autoplays or slows
// down the initial page load.
export interface VideoData {
  title: string
  channel?: string
  youtubeId?: string // e.g. "dQw4w9WgXcQ"
  duration?: string
  category?: string
  description?: string
}

export default function VideoCard({ video, onOpen }: { video: VideoData; onOpen: (v: VideoData) => void }) {
  return (
    <button
      onClick={() => onOpen(video)}
      className="article-card"
      style={{ textAlign: 'left', border: 'none', width: '100%' }}
    >
      <div className="article-thumb video" style={{ background: 'linear-gradient(135deg,#3F6B45,#AEDB3C)' }}>
        {video.category && <span className="cat">{video.category}</span>}
      </div>
      <div className="article-body">
        <h4>{video.title}</h4>
        {video.description && <p>{video.description}</p>}
        <div className="article-meta">
          <span>{video.duration ?? 'Video'}</span>
          <span>{video.channel ?? 'YouTube'}</span>
        </div>
      </div>
    </button>
  )
}
