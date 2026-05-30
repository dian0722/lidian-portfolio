import Hero from './components/Hero'
import Experience from './components/Experience'
import Competition from './components/Competition'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <Experience />
      <Competition />
      <Portfolio />
      <About />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
