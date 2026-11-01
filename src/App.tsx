import { useReveal } from './hooks/useSite'
import { useCountUp, useScrollProgress, useSpotlight, useTilt } from './hooks/useEffects'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Services from './components/Services'
import Awards from './components/Awards'
import Faq from './components/Faq'
import News from './components/News'
import Footer from './components/Footer'

export default function App() {
  useReveal()
  useSpotlight()
  useScrollProgress()
  useTilt('.news-card, .work-cell, .award-row')
  useCountUp()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <Awards />
        <Faq />
        <News />
      </main>
      <Footer />
    </>
  )
}
