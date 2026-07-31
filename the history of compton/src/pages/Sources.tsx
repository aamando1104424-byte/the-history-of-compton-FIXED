import type { CSSProperties } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const bibliography = [
  { author: 'Austin Janisch', title: 'Soaring into Los Angeles: The 1910 Los Angeles International Aviation Meet', year: '2020', type: 'Senior Honors Thesis, UC Santa Barbara' },
  { author: 'Darnell Hunt & Ana-Christina Ramon (eds.)', title: 'Black Los Angeles: American Dreams and Racial Realities', year: '2010', type: 'NYU Press' },
  { author: 'California State Auditor', title: 'City of Compton Financial Mismanagement Report (Report 2021-802)', year: '2022', type: 'Government Audit' },
  { author: 'Albert M. Camarillo', title: 'Compton in My Soul: A Life in Pursuit of Racial Equality', year: '2024', type: 'Stanford University Press' },
  { author: 'Emily E. Straus', title: 'Death of a Suburban Dream: Race and Schools in Compton, California', year: '2014', type: 'University of Pennsylvania Press' },
  { author: 'John Mack Faragher', title: 'Eternity Street: Violence and Justice in Frontier Los Angeles', year: '2016', type: 'W. W. Norton & Company' },
  { author: 'Natalia Molina', title: 'Fit to Be Citizens? Public Health and Race in Los Angeles, 1879-1939', year: '2006', type: 'University of California Press' },
  { author: 'Ludwig Louis Salvator', title: 'Los Angeles in the Sunny Seventies: A Flower from the Golden Land', year: '1878 (transl. 1929)', type: 'Historical Travelogue' },
  { author: 'Marne L. Campbell', title: 'Making Black Los Angeles: Class, Gender, and Community, 1850-1917', year: '2016', type: 'University of North Carolina Press' },
  { author: 'Becky M. Nicolaides', title: 'My Blue Heaven: Life and Politics in the Working-Class Suburbs of Los Angeles, 1920-1965', year: '2002', type: 'University of Chicago Press' },
  { author: 'Carey McWilliams', title: 'Southern California: An Island on the Land', year: '1946', type: 'Peregrine Smith, Inc.' },
  { author: 'Jules Tygiel', title: 'The Great Los Angeles Swindle: Oil, Stocks, and Scandal During the Roaring Twenties', year: '1994', type: 'Oxford University Press' },
  { author: 'William Marshall Jr.', title: 'The Los Angeles Domino Effect: Ethnic Shifts in Compton and Leimert Park', year: 'n.d.', type: 'Student Research Paper, CSU Dominguez Hills' },
]

const archives = [
  {
    name: 'Compton Communicative Arts Academy Collection',
    url: 'https://calisphere.org/collections/4891/?q=&sort=a',
    desc: 'A Calisphere digital archive of roughly 200 photographs documenting African American art and community-based art-making in Compton and Los Angeles in the early 1970s.',
  },
  {
    name: 'South Bay Photograph Collection',
    url: 'https://digitalcollections.archives.csudh.edu/digital/collection/southbay/search/searchterm/South%20Bay%20Photograph%20Collection/field/source/mode/exact/conn/and',
    desc: 'CSU Dominguez Hills photographs of people, businesses, churches, schools, and daily life across Compton, Torrance, Carson, Lynwood, and neighboring South Bay communities.',
  },
]

const cardStyle: CSSProperties = {
  display: 'block',
  padding: '14px 16px',
  borderLeft: '2px solid #8b3a2a',
  background: '#f0ece4',
}

export default function Sources() {
  return (
    <>
      <Header />
      <div className="container" style={{ padding: '48px 20px' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 12 }}>Sources &amp; Further Reading</h1>
        <p style={{ color: '#6b5d4b', marginBottom: 24 }}>
          This archive draws on the following primary and secondary sources, plus the digital
          photo collections below for anyone who wants to go deeper.
        </p>

        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '24px 0 12px' }}>Bibliography</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bibliography.map(b => (
            <li key={b.title} style={cardStyle}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{b.title}</div>
              <div style={{ fontSize: '0.85rem', color: '#5a4d3c', marginTop: 2 }}>
                {b.author} &middot; {b.year} &middot; {b.type}
              </div>
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '32px 0 12px' }}>Digital Archives</h2>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {archives.map(a => (
            <li key={a.name} style={cardStyle}>
              <a href={a.url} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: '#8b3a2a', fontSize: '0.95rem' }}>
                {a.name} &rarr;
              </a>
              <div style={{ fontSize: '0.85rem', color: '#5a4d3c', marginTop: 4 }}>{a.desc}</div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}
