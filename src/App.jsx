import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ForWho from './components/ForWho'
import KeyQuestions from './components/KeyQuestions'
import MiniDemo from './components/MiniDemo'
import Team from './components/Team'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ForWho />
        <KeyQuestions />
        <MiniDemo />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App