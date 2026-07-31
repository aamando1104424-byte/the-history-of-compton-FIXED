import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'
import { getEntryBySlug, getEraLabel, allEntries, events, Event, getRelatedEventsForPerson, getRelatedPeopleForEvent } from '../data'

interface DetailProps {
  random?: boolean
}

export default function Detail({ random }: DetailProps) {
  const { slug } = useParams()

  let entry = slug ? getEntryBySlug(slug) : null

  if (random) {
    entry = allEntries[Math.floor(Math.random() * allEntries.length)]
  }

  if (!entry) {
    return (
      <>
        <Header />
        <Drawer />
        <div className="detail-page">
          <Link to="/" className="back">&larr; Back</Link>
          <h1>Not Found</h1>
          <p>This entry could not be found.</p>
        </div>
        <Footer />
      </>
    )
  }

  const title = 'title' in entry ? entry.title : entry.name
  const backTo = entry.type === 'person' ? '/people' : '/timeline'
  const backLabel = entry.type === 'person' ? 'Back to people' : 'Back to timeline'
  const label = entry.type === 'person' ? 'Person' : 'Event'
  const role = entry.type === 'person' ? entry.role : ''
  const photos = 'photos' in entry ? (entry.photos ?? []) : []
  const sections = 'sections' in entry ? (entry.sections ?? []) : []
  const sources = 'sources' in entry ? (entry.sources ?? []) : []
  const tags = entry.type === 'event' && 'tags' in entry ? entry.tags : []
  const year = entry.type === 'event' && 'year' in entry ? entry.year : ''
  const eraLabel = getEraLabel(entry.era)
  const hero = photos.length > 0 ? photos[0] : null
  const gallery = photos.length > 1 ? photos.slice(1) : []

  const related = allEntries.filter(e => e.era === entry!.era && e.id !== entry!.id).slice(0, 4)
  const relatedEvents = entry.type === 'person' ? getRelatedEventsForPerson(entry) : []
  const relatedPeople = entry.type === 'event' ? getRelatedPeopleForEvent(entry) : []

  let prevEvent: Event | null = null
  let nextEvent: Event | null = null
  if (entry.type === 'event') {
    const idx = events.findIndex(e => e.slug === entry.slug)
    if (idx > 0) prevEvent = events[idx - 1]
    if (idx >= 0 && idx < events.length - 1) nextEvent = events[idx + 1]
  }

  return (
    <>
      <Header />
      <Drawer />
      <div className="detail-page">
        <Link to={backTo} className="back">&larr; {backLabel}</Link>

        <div className="label">{label}{year ? ` · ${year}` : role ? ` · ${role}` : ''}</div>
        <h1>{title}</h1>
        <div className="meta">
          <Link className="era-chip" to={`/era/${entry!.era}`}>{eraLabel}</Link>
          {tags.map((t, i) => (
            <Link key={`${entry!.id}-tag-${i}`} className="tag-chip" to={`/category/${t.toLowerCase()}`}>{t}</Link>
          ))}
        </div>

        {hero && (
          <figure className="detail-hero">
            <img src={hero.src} alt={hero.caption} loading="lazy" />
            <figcaption>
              {hero.caption}
              <span className="photo-credit">{hero.credit}</span>
            </figcaption>
          </figure>
        )}

        <p className="lede">{entry.desc}</p>

        {sections.length > 0 && (
          <div className="article">
            {sections.map(s => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.text}</p>
              </section>
            ))}
          </div>
        )}

        {gallery.length > 0 && (
          <div className="gallery">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {gallery.map((p, i) => (
                <figure key={i}>
                  <img src={p.src} alt={p.caption} loading="lazy" />
                  <figcaption>
                    {p.caption}
                    <span className="photo-credit">{p.credit}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {sources.length > 0 && (
          <div className="sources-block">
            <h2>Sources</h2>
            <ul>
              {sources.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}

        {entry.type === 'person' && relatedEvents.length > 0 && (
          <div className="related">
            <h2>Related Events</h2>
            <div className="related-grid">
              {relatedEvents.map(e => (
                <Link className="related-card" to={`/event/${e.slug}`} key={e.id}>
                  <span className="related-year">{e.year}</span>
                  <span>{e.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {entry.type === 'event' && relatedPeople.length > 0 && (
          <div className="related">
            <h2>Related People</h2>
            <div className="related-grid">
              {relatedPeople.map(p => (
                <Link className="related-card" to={`/person/${p.slug}`} key={p.id}>
                  <span className="related-year">{p.role}</span>
                  <span>{p.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && entry.type === 'event' && (
          <div className="related">
            <h2>Related Entries</h2>
            <div className="related-grid">
              {related.map(e => {
                const t = 'title' in e ? e.title : e.name
                const y = 'year' in e ? e.year : e.era
                return (
                  <Link className="related-card" to={`/${e.type}/${e.slug}`} key={e.id}>
                    <span className="related-year">{y}</span>
                    <span>{t}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {entry.type === 'person' && relatedEvents.length === 0 && related.length > 0 && (
          <div className="related">
            <h2>Related Entries</h2>
            <div className="related-grid">
              {related.map(e => {
                const t = 'title' in e ? e.title : e.name
                const y = 'year' in e ? e.year : e.era
                return (
                  <Link className="related-card" to={`/${e.type}/${e.slug}`} key={e.id}>
                    <span className="related-year">{y}</span>
                    <span>{t}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
        {entry.type === 'event' && (
          <nav className="timeline-nav" aria-label="Timeline navigation">
            {prevEvent ? (
              <Link className="timeline-nav-link prev" to={`/event/${prevEvent.slug}`}>
                <span className="timeline-nav-direction">&larr; Previous</span>
                <span className="related-year">{prevEvent.year}</span>
                <span className="timeline-nav-title">{prevEvent.title}</span>
              </Link>
            ) : (
              <span className="timeline-nav-link timeline-nav-disabled prev">
                <span className="timeline-nav-direction">&larr; Previous</span>
                <span className="timeline-nav-title">First entry in the timeline</span>
              </span>
            )}
            {nextEvent ? (
              <Link className="timeline-nav-link next" to={`/event/${nextEvent.slug}`}>
                <span className="timeline-nav-direction">Next &rarr;</span>
                <span className="related-year">{nextEvent.year}</span>
                <span className="timeline-nav-title">{nextEvent.title}</span>
              </Link>
            ) : (
              <span className="timeline-nav-link timeline-nav-disabled next">
                <span className="timeline-nav-direction">Next &rarr;</span>
                <span className="timeline-nav-title">Latest entry in the timeline</span>
              </span>
            )}
          </nav>
        )}
      </div>
      <Footer />
    </>
  )
}
