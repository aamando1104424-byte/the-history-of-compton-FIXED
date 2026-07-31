import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Drawer from '../components/Drawer'

export default function NotFound() {
  return (
    <>
      <Header />
      <Drawer />
      <div className="not-found">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/" style={{ color: '#8b3a2a' }}>Go home</Link>
      </div>
      <Footer />
    </>
  )
}
