import { Link } from 'react-router-dom'
import { events, searchEntries, getEraLabel } from '../data'

interface TimelineFeedProps {
  era?: string
  search?: string
  limit?: number
}

export default function TimelineFeed({ era, search, limit }: TimelineFeedProps) {
  const q = (search || '').trim()

  // When there's an active search, look across events AND people (the search
  // box says "Search events, people, eras…", so it should actually do that).
  if (q) {
    const results = searchEntries(q).filter(e => !era || e.era === era)

    return (
      <div>
        <div className="timeline-heading">Search Results</div>
        {results.length === 0 && (
          <p style={{ color: '#6b5d4b' }}>No events or people match your search.</p>
        )}
        {results.map(e => {
          const title = 'title' in e ? e.title : e.name
          const badge = 'year' in e ? e.year : getEraLabel(e.era)
          const chips = 'tags' in e ? e.tags : [e.role]
          return (
            <Link className="event-card" key={e.id} to={`/${e.type}/${e.slug}`}>
              <div className="year">{badge}</div>
              <h3>{title}</h3>
              <p>{e.desc}</p>
              <div className="tags">
                {chips.map((t, i) => <span key={`${e.id}-tag-${i}`}>{t}</span>)}
              </div>
            </Link>
          )
        })}
      </div>
    )
  }

  const filtered = events.filter(e => !era || e.era === era)
  const visible = limit ? filtered.slice(0, limit) : filtered

  return (
    <div>
      <div className="timeline-heading">Compton Timeline</div>
      {filtered.length === 0 && (
        <p style={{ color: '#6b5d4b' }}>No events match this era.</p>
      )}
      {visible.map(e => (
        <Link className="event-card" to={`/event/${e.slug}`} key={e.id}>
          <div className="year">{e.year}</div>
          <h3>{e.title}</h3>
          <p>{e.desc}</p>
          <div className="tags">
            {e.tags.map((t, i) => <span key={`${e.id}-tag-${i}`}>{t}</span>)}
          </div>
        </Link>
      ))}
      {limit && filtered.length > visible.length && (
        <Link to="/timeline" className="timeline-more">View full timeline &rarr;</Link>
      )}
    </div>
  )
}
