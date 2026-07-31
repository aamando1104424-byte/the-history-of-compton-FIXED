import { useState } from 'react'

interface Quote {
  text: string
  attribution: string
}

const quotes: Quote[] = [
  {
    text: 'Compton in my soul. A life in pursuit of racial equality.',
    attribution: 'Albert M. Camarillo, Compton in My Soul (2024)',
  },
  {
    text: 'There were acres of vegetables, but now — in their place — we have acres of children.',
    attribution: 'Ardella Tibby, Compton superintendent (1949), quoted in E. Straus, Death of a Suburban Dream (2014)',
  },
  {
    text: 'Not at heart a crisis of schooling, but a long-term crisis of suburban development.',
    attribution: 'Emily E. Straus, Death of a Suburban Dream (2014)',
  },
  {
    text: 'The invalid can find health in Los Angeles; the rich, a life of ease and pleasure in an earthly paradise, devoid of winter cold and summer heat.',
    attribution: 'Archduke Ludwig Louis Salvator, Los Angeles in the Sunny Seventies (1878)',
  },
  {
    text: 'Cleanliness became something more than a way to prevent epidemics... it became a route to citizenship, to becoming American.',
    attribution: 'Natalia Molina, Fit to Be Citizens? (2006)',
  },
  {
    text: 'Home owners do not go about with torch and bomb, bent upon destruction. Men who have roofs of their own do not go about scattering firebrands.',
    attribution: '1920s suburban developer, quoted in B. Nicolaides, My Blue Heaven (2002)',
  },
  {
    text: 'O bury me not in the North countree, but plant me South of the Tehachapi.',
    attribution: 'Carey McWilliams, Southern California: An Island on the Land (1946)',
  },
  {
    text: 'The bright spot of America.',
    attribution: 'L.V. Koos, University of Chicago (1949), quoted in Straus, Death of a Suburban Dream (2014)',
  },
]

export default function QuoteBlock() {
  const [idx, setIdx] = useState(0)

  function randomize() {
    if (quotes.length < 2) return
    let next: number
    do {
      next = Math.floor(Math.random() * quotes.length)
    } while (next === idx)
    setIdx(next)
  }

  const q = quotes[idx]

  return (
    <div className="quote-block">
      <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
      <cite>&mdash; {q.attribution}</cite>
      <button className="rc-btn rc-btn-secondary quote-randomize" onClick={randomize}>
        Randomize
      </button>
    </div>
  )
}
