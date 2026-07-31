import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Drawer from '../components/Drawer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import RandomCard from '../components/RandomCard'
import TimelineFeed from '../components/TimelineFeed'
import Sidebar from '../components/Sidebar'
import QuoteBlock from '../components/QuoteBlock'
import Footer from '../components/Footer'

export default function Home() {
  const [searchParams] = useSearchParams()
  const eraFilter = searchParams.get('era') || ''
  const [search, setSearch] = useState('')

  return (
    <>
      <Drawer />
      <Header />
      <Hero />
      <SearchBar value={search} onChange={setSearch} />
      <main className="container">
        <div className="content-grid">
          <TimelineFeed era={eraFilter} search={search} limit={5} />
          <aside>
            <RandomCard />
            <Sidebar />
          </aside>
        </div>
        <QuoteBlock />
      </main>
      <Footer />
    </>
  )
}
