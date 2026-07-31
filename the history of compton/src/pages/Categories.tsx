import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { categories, events, people } from '../data'

const categoryInfo: Record<string, string> = {
  Events: 'Chronological entries covering Compton\'s history from 1781 to the present.',
  People: 'Key figures who shaped the city and the region.',
  Places: 'Locations, neighborhoods, and landmarks central to Compton\'s story.',
  Culture: 'Music, film, religion, and community life.',
  Politics: 'Government, policy, and the struggle over civic power.',
  Science: 'Public health, aviation, and technology in the region.',
}

export default function Categories() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '48px 20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Categories</h1>
        <p style={{ color: '#6b5d4b', marginBottom: 24 }}>
          Browse the archive by category.
        </p>
        <div style={{ display: 'grid', gap: 16 }}>
          {categories.map(c => {
            const count = c === 'Events'
              ? events.length
              : c === 'People'
                ? people.length
                : events.filter(e => e.tags.some(t => t.toLowerCase() === c.toLowerCase())).length
            return (
              <Link
                key={c}
                className="listing-card"
                to={`/category/${c.toLowerCase()}`}
                style={{ display: 'block', padding: '16px', borderLeft: '2px solid #8b3a2a', background: '#f0ece4' }}
              >
                <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 700 }}>{c}</h3>
                <p style={{ fontSize: '0.85rem', color: '#5a4d3c', margin: 0 }}>
                  {categoryInfo[c] ?? ''} ({count} {count === 1 ? 'entry' : 'entries'})
                </p>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
