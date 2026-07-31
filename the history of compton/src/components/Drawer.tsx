import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { eras, events } from '../data'

export default function Drawer() {
  const [open, setOpen] = useState(false)
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const [active, setActive] = useState(searchParams.get('era') || '')
  const navigate = useNavigate()

  useEffect(() => {
    const eraParam = searchParams.get('era') || ''
    const pathEra = location.pathname.startsWith('/era/') ? location.pathname.slice(5) : ''
    setActive(eraParam || pathEra)
  }, [searchParams, location.pathname])

  function toggle(open?: boolean) {
    setOpen(prev => open ?? !prev)
  }

  function select(era: string) {
    setActive(era)
    toggle(false)
    if (era) navigate(`/era/${era}`)
    else navigate('/')
  }

  return (
    <>
      <button
        className="drawer-btn"
        onClick={() => toggle()}
        aria-expanded={open}
        aria-controls="era-drawer"
      >ERAS</button>

      <aside id="era-drawer" className={`drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <h3>Browse by Era</h3>
        <ul className="era-list">
          {eras.map(e => (
            <li key={e.era}>
              <button
                className={active === e.era ? 'active' : ''}
                onClick={() => select(e.era)}
              >
                {e.label} {e.era ? `(${events.filter(ev => ev.era === e.era).length})` : ''}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div
        className={`drawer-overlay${open ? ' visible' : ''}`}
        onClick={() => toggle(false)}
        aria-hidden={!open}
      />
    </>
  )
}
