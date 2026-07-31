import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'
import { eras, events, people, eraIntros, EventPhoto } from '../data'

interface PhotoWithLink extends EventPhoto {
  href: string
}

export default function Era() {
  const { key } = useParams()
  const era = eras.find(e => e.era === key)

  if (!era || !era.era) {
    return (
      <>
        <Header />
        <Drawer />
        <div className="detail-page">
          <Link to="/" className="back">&larr; Back</Link>
          <h1>Era Not Found</h1>
          <p>This era could not be found. Browse the{' '}
            <Link to="/timeline" style={{ color: '#8b3a2a' }}>full timeline</Link> instead.</p>
        </div>
        <Footer />
      </>
    )
  }

  const eraEvents = events.filter(e => e.era === era.era)
  const eraPeople = people.filter(p => p.era === era.era)

  const photos: PhotoWithLink[] = [
    ...eraEvents.flatMap(e =>
      (e.photos ?? []).map(p => ({ ...p, href: `/event/${e.slug}` })),
    ),
    ...eraPeople.flatMap(p =>
      (p.photos ?? []).map(ph => ({ ...ph, href: `/person/${p.slug}` })),
    ),
  ]
  const seen = new Set<string>()
  const uniquePhotos = photos.filter(p => {
    if (seen.has(p.src)) return false
    seen.add(p.src)
    return true
  })

  return (
    <>
      <Header />
      <Drawer />
      <div className="container era-page">
        <Link to="/" className="back">&larr; Back to timeline</Link>
        <h1 className="era-title">{era.label}</h1>
        <p className="era-intro">{eraIntros[era.era]}</p>

        <div className="content-grid">
          <div>
            <div className="timeline-heading">Events of this Era</div>
            {eraEvents.length === 0 && (
              <p style={{ color: '#6b5d4b' }}>No events recorded for this era.</p>
            )}
            {eraEvents.map(e => (
              <Link className="event-card" to={`/event/${e.slug}`} key={e.id}>
                <div className="year">{e.year}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <div className="tags">
                  {e.tags.map((t, i) => <span key={`${e.id}-tag-${i}`}>{t}</span>)}
                </div>
              </Link>
            ))}
          </div>

          <aside>
            <div className="sidebar-section">
              <div className="label">People of the Era</div>
              {eraPeople.length === 0 && (
                <p style={{ color: '#6b5d4b', fontSize: '0.85rem' }}>No people recorded for this era.</p>
              )}
              <div className="era-people-list">
                {eraPeople.map(p => {
                  const photo = p.photos?.[0]
                  return (
                    <Link className="era-person-card" to={`/person/${p.slug}`} key={p.id}>
                      <div className="era-person-photo">
                        {photo ? (
                          <img src={photo.src} alt={photo.caption} loading="lazy" />
                        ) : (
                          p.name.charAt(0)
                        )}
                      </div>
                      <div className="era-person-info">
                        <h4>{p.name}</h4>
                        <span>{p.role}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>

        {uniquePhotos.length > 0 && (
          <div className="gallery era-photos">
            <h2>Photos from this Era</h2>
            <div className="gallery-grid">
              {uniquePhotos.map((p, i) => (
                <figure key={`${p.src}-${i}`}>
                  <Link to={p.href} style={{ display: 'block' }}>
                    <img src={p.src} alt={p.caption} loading="lazy" />
                  </Link>
                  <figcaption>
                    {p.caption}
                    <span className="photo-credit">{p.credit}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
