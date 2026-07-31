import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Listing from './pages/Listing'
import Era from './pages/Era'
import Sources from './pages/Sources'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/timeline" element={<Listing />} />
      <Route path="/people" element={<Listing />} />
      <Route path="/era/:key" element={<Era />} />
      <Route path="/category/:name" element={<Listing />} />
      <Route path="/sources" element={<Sources />} />
      <Route path="/random" element={<Detail random />} />
      <Route path="/event/:slug" element={<Detail />} />
      <Route path="/person/:slug" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
