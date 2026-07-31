import { Link, useParams, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'
import QuoteBlock from '../components/QuoteBlock'
import { events, people, categories, getEraLabel } from '../data'

const knownPages: Record<string, string> = {
  timeline: 'Timeline',
  events: 'Events',
  people: 'People',
}

export default function Listing() {
  const { name } = useParams()
  const location = useLocation()
  const pathBase = location.pathname.split('/')[1] || ''

  const effectiveName = (name || pathBase).toLowerCase()
  const displayTitle = knownPages[effectiveName]
    || (effectiveName ? effectiveName.charAt(0).toUpperCase() + effectiveName.slice(1) : 'Timeline')

  // "Events" (as a category or /timeline) and "People" show the full,
  // dedicated listings for that type — same data either way.
  if (effectiveName === 'timeline' || effectiveName === 'events') {
    return (
      <>
        <Header />
        <Drawer />
        <div className="container" style={{ padding: '48px 20px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>{knownPages[effectiveName] ?? 'Timeline'}</h1>
          <p style={{ color: '#6b5d4b', marginBottom: 24 }}>A chronological history of Compton from its founding to the present.</p>
          {events.map(e => (
            <Link className="event-card" to={`/event/${e.slug}`} key={e.id}>
              <div className="year">{e.year}</div>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
              <div className="tags">
                {e.tags.map((t, i) => <span key={`${e.id}-tag-${i}`}>{t}</span>)}
              </div>
            </Link>
          ))}
          <QuoteBlock />
        </div>
        <Footer />
      </>
    )
  }

  if (effectiveName === 'people') {
    return (
      <>
        <Header />
        <Drawer />
        <div className="container" style={{ padding: '48px 20px' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>{knownPages.people}</h1>
          <p style={{ color: '#6b5d4b', marginBottom: 24 }}>Key figures in Compton's history.</p>
          <div style={{ display: 'grid', gap: 16 }}>
            {people.map(p => (
              <Link
                className="listing-card"
                to={`/person/${p.slug}`}
                key={p.id}
                style={{ padding: '16px', borderLeft: '2px solid #8b3a2a', background: '#f0ece4' }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8b3a2a', textTransform: 'uppercase' }}>{p.role}</div>
                <h3 style={{ margin: '4px 0', fontSize: '1.1rem', fontWeight: 700 }}>{p.name}</h3>
                <div style={{ fontSize: '0.7rem', color: '#6b5d4b', marginBottom: 4 }}>{getEraLabel(p.era)}</div>
                <p style={{ fontSize: '0.85rem', color: '#5a4d3c' }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // Any other category name maps onto event tags (case-insensitive), so tag
  // chips from event pages always land on a working filtered listing.
  const catEntries = events.filter(e => e.tags.some(t => t.toLowerCase() === effectiveName))

  return (
    <>
      <Header />
      <Drawer />
      <div className="container" style={{ padding: '48px 20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>{displayTitle}</h1>
        {catEntries.length === 0 ? (
          <p style={{ color: '#6b5d4b' }}>
            No entries in this category yet. Try{' '}
            {categories.map((c, i) => (
              <span key={c}>
                <Link to={`/category/${c.toLowerCase()}`} style={{ color: '#8b3a2a' }}>{c}</Link>
                {i < categories.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        ) : (
          catEntries.map(e => (
            <Link
              className="listing-card"
              to={`/event/${e.slug}`}
              key={e.id}
              style={{ display: 'block', marginBottom: 24, padding: '16px', borderLeft: '2px solid #8b3a2a', background: '#f0ece4' }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#8b3a2a', textTransform: 'uppercase' }}>{getEraLabel(e.era)}</div>
              <h3 style={{ margin: '4px 0', fontSize: '1.1rem', fontWeight: 700 }}>{e.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#5a4d3c' }}>{e.desc}</p>
            </Link>
          ))
        )}
      </div>
      <Footer />
    </>
  )
}
