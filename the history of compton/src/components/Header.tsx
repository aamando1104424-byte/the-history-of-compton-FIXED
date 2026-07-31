import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="inner">
        <Link to="/" className="logo"><span>//</span> Compton Archive</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/timeline">Timeline</Link>
          <Link to="/people">People</Link>
          <Link to="/category/events">Categories</Link>
          <Link to="/sources">Sources</Link>
        </nav>
      </div>
    </header>
  )
}
