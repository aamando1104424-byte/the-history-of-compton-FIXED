import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { allEntries, Entry, getEraLabel } from '../data'

export default function RandomCard() {
  const [entry, setEntry] = useState<Entry>(() => allEntries[Math.floor(Math.random() * allEntries.length)])
  const navigate = useNavigate()

  function shuffle() {
    if (allEntries.length === 0) return
    let next: Entry
    do {
      next = allEntries[Math.floor(Math.random() * allEntries.length)]
    } while (next.slug === entry.slug && allEntries.length > 1)
    setEntry(next)
  }

  const title = 'title' in entry ? entry.title : entry.name
  const label = entry.type === 'person' ? 'Person' : 'Event'
  const photos = 'photos' in entry ? (entry.photos ?? []) : []
  const hero = photos.length > 0 ? photos[0] : null

  return (
    <div className="random-card">
      <div className="random-card-image">
        {hero
          ? <img src={hero.src} alt={hero.caption} loading="lazy" />
          : <span className="random-card-no-photo">No photo could be found</span>}
      </div>
      <div className="random-card-body">
        <div className="random-card-label">{label}</div>
        <h3>{title}</h3>
        <div className="random-card-era">{getEraLabel(entry.era)}</div>
        <p>{entry.desc}</p>
        <div className="random-card-actions">
          <button className="rc-btn rc-btn-primary" onClick={() => navigate(`/${entry.type}/${entry.slug}`)}>
            View Page
          </button>
          <button className="rc-btn rc-btn-secondary" onClick={shuffle}>
            Shuffle
          </button>
        </div>
      </div>
    </div>
  )
}
