import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CursorGlow from './components/CursorGlow'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Speaker from './pages/Speaker'
import Articles from './pages/Articles'
import ArticlePage from './pages/ArticlePage'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
