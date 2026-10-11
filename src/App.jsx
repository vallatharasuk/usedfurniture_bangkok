import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Piece from './pages/Piece'
import Sell from './pages/Sell'
import Showroom from './pages/Showroom'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Areas from './pages/Areas'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="collection/:slug" element={<Piece />} />
          <Route path="sell" element={<Sell />} />
          <Route path="showroom" element={<Showroom />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="areas" element={<Areas />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
