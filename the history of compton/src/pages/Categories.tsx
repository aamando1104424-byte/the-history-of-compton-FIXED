import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'
import { categories, events, people, allTags, countTagged } from '../data'

const categoryInfo: Record<string, string> = {
  Events: 'Chronological entries covering Compton\'s history from 1781 to the present.',
  People: 'Key figures who shaped the city and the region.',
  Places: 'Locations, neighborhoods, and landmarks central to Compton\'s story.',
  Culture: 'Music, film, religion, and community life.',
  Politics: 'Government, policy, and the struggle over civic power.',
  Science: 'Public health, aviation, and technology in the region.',
}

export default function Categories() {
  const curated = categories.map(c => ({
    name: c,
    count: c === 'Events'
      ? events.length
      : c === 'People'
        ? people.length
        : countTagged(c),
  }))
  const more = allTags.filter(t => !categories.some(c => c.toLowerCase() === t.toLowerCase()))

  return (
    <>
      <Header />
      <Drawer />
      <div className="container" style={{ padding: '48px 20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Categories</h1>
        <p style={{ color: '#6b5d4b', marginBottom: 24 }}>
          Browse the archive by category.
        </p>
        <div style={{ display: 'grid', gap: 16 }}>
          {curated.map(c => (
            <Link
              key={c.name}
              className="listing-card"
              to={`/category/${c.name.toLowerCase()}`}
              style={{ display: 'block', padding: '16px', borderLeft: '2px solid #8b3a2a', background: '#f0ece4' }}
            >
              <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 700 }}>{c.name}</h3>
              <p style={{ fontSize: '0.85rem', color: '#5a4d3c', margin: 0 }}>
                {categoryInfo[c.name] ?? ''} ({c.count} {c.count === 1 ? 'entry' : 'entries'})
              </p>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '32px 0 12px' }}>All Topics</h2>
        <p style={{ color: '#6b5d4b', fontSize: '0.85rem', margin: '0 0 16px' }}>
          Every topic tag used across the archive.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {more.map(t => (
            <Link
              key={t}
              to={`/category/${t.toLowerCase()}`}
              style={{
                padding: '6px 12px',
                background: '#f0ece4',
                border: '1px solid #d9cfc0',
                borderRadius: 4,
                fontSize: '0.85rem',
                color: '#5a4d3c',
              }}
            >
              {t} ({countTagged(t)})
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
