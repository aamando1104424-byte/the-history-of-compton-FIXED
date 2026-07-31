import { Link } from 'react-router-dom'
import { categories, people } from '../data'

const featured = people.find(p => p.slug === 'albert-camarillo') || people[0]
const featuredPhoto = featured.photos?.[0]

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar-section">
        <div className="label">Categories</div>
        <ul className="cat-list">
          {categories.map(c => (
            <li key={c}><Link to={`/category/${c.toLowerCase()}`}>{c}</Link></li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <div className="label">Featured Figure</div>
        <Link to={`/person/${featured.slug}`} className="featured-figure">
          <div className="portrait">
            {featuredPhoto ? (
              <img src={featuredPhoto.src} alt={featuredPhoto.caption} loading="lazy" />
            ) : (
              featured.name.charAt(0)
            )}
          </div>
          <h4>{featured.name}</h4>
          <span className="era-tag">{featured.role}</span>
          <p>{featured.desc}</p>
        </Link>
      </div>
    </div>
  )
}
