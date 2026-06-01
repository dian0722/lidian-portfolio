import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import DetailPageShell from './components/DetailPageShell'
import CatGreetingLoader from './components/CatGreetingLoader'
import PageTransition, { type TransitionVariant } from './components/PageTransition'
import './components/NavigationEffects.css'
import {
  defaultSectionId,
  getNavigationItem,
  homeSectionIds,
  isDetailSection,
  isHomeSection,
  type DetailSectionId,
  type SectionId,
} from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'

function scrollToElement(sectionId: SectionId, behavior: ScrollBehavior = 'smooth') {
  const target = document.getElementById(sectionId)
  if (!target) return false

  target.scrollIntoView({ block: 'start', behavior })
  window.history.replaceState(null, '', `#${sectionId}`)
  return true
}

const Experience = lazy(() => import('./components/Experience'))
const Competition = lazy(() => import('./components/Competition'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

const transitionVariants: TransitionVariant[] = ['look', 'ai-video']
const TRANSITION_DURATION_MS = 1500
const TRANSITION_COMMIT_DELAY_MS = 1280

type TransitionState = {
  id: number
  variant: TransitionVariant
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'detail'>('home')
  const [detailSection, setDetailSection] = useState<DetailSectionId | null>(null)
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSectionId)
  const [hoveredSection, setHoveredSection] = useState<SectionId | null>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [showLoader, setShowLoader] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [transitionState, setTransitionState] = useState<TransitionState | null>(null)

  const transitionIdRef = useRef(0)
  const transitionCommitTimerRef = useRef<number | null>(null)
  const transitionClearTimerRef = useRef<number | null>(null)

  const setSection = useCallback((sectionId: SectionId) => {
    setActiveSection(sectionId)
    const item = getNavigationItem(sectionId)
    document.documentElement.style.setProperty('--section-accent', item.accent)
    document.documentElement.style.setProperty('--section-accent-rgb', item.accentRgb)
    document.documentElement.style.setProperty('--section-accent-soft', `rgba(${item.accentRgb}, 0.16)`)
  }, [])

  useEffect(() => {
    setSection(defaultSectionId)
  }, [setSection])

  useEffect(() => {
    let raf = 0

    const handlePointerMove = (event: PointerEvent) => {
      window.cancelAnimationFrame(raf)
      raf = window.requestAnimationFrame(() => {
        const x = event.clientX - window.innerWidth / 2
        const y = event.clientY - window.innerHeight / 2
        setParallax({ x: x * 0.02, y: y * 0.02 })
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    return () => {
      if (transitionCommitTimerRef.current !== null) {
        window.clearTimeout(transitionCommitTimerRef.current)
      }
      if (transitionClearTimerRef.current !== null) {
        window.clearTimeout(transitionClearTimerRef.current)
      }
    }
  }, [])

  const cancelTransition = useCallback(() => {
    if (transitionCommitTimerRef.current !== null) {
      window.clearTimeout(transitionCommitTimerRef.current)
      transitionCommitTimerRef.current = null
    }
    if (transitionClearTimerRef.current !== null) {
      window.clearTimeout(transitionClearTimerRef.current)
      transitionClearTimerRef.current = null
    }
    setTransitionState(null)
  }, [])

  useActiveSection({
    disabled: currentView !== 'home',
    sectionIds: homeSectionIds,
    onChange: (sectionId) => {
      setSection(sectionId)
      if (window.location.hash !== `#${sectionId}`) {
        window.history.replaceState(null, '', `#${sectionId}`)
      }
    },
  })

  const playTransition = useCallback((commitNavigation: () => void) => {
    if (transitionCommitTimerRef.current !== null) {
      window.clearTimeout(transitionCommitTimerRef.current)
    }
    if (transitionClearTimerRef.current !== null) {
      window.clearTimeout(transitionClearTimerRef.current)
    }

    const variant = transitionVariants[Math.floor(Math.random() * transitionVariants.length)]
    setTransitionState({ id: ++transitionIdRef.current, variant })

    transitionCommitTimerRef.current = window.setTimeout(() => {
      commitNavigation()
      transitionCommitTimerRef.current = null
    }, TRANSITION_COMMIT_DELAY_MS)

    transitionClearTimerRef.current = window.setTimeout(() => {
      setTransitionState(null)
      transitionClearTimerRef.current = null
    }, TRANSITION_DURATION_MS)
  }, [])

  const navigateToSection = useCallback(
    (sectionId: SectionId) => {
      setHoveredSection(null)

      const commitNavigation = () => {
        if (isHomeSection(sectionId) && currentView === 'home') {
          scrollToElement(sectionId)
          setSection(sectionId)
          return
        }

        if (isDetailSection(sectionId)) {
          setCurrentView('detail')
          setDetailSection(sectionId)
          setSection(sectionId)
          window.scrollTo({ top: 0, behavior: 'auto' })
          window.history.replaceState(null, '', `#${sectionId}`)
          return
        }

        setCurrentView('home')
        setDetailSection(null)
        setSection(sectionId)
        window.requestAnimationFrame(() => {
          const previousScrollBehavior = document.documentElement.style.scrollBehavior
          document.documentElement.style.scrollBehavior = 'auto'
          scrollToElement(sectionId, 'auto')
          document.documentElement.style.scrollBehavior = previousScrollBehavior
        })
      }

      if (isHomeSection(sectionId)) {
        cancelTransition()
        commitNavigation()
        return
      }

      if (currentView === 'home' && isDetailSection(sectionId)) {
        if (prefersReducedMotion) {
          cancelTransition()
          commitNavigation()
          return
        }

        playTransition(commitNavigation)
        return
      }

      commitNavigation()
    },
    [cancelTransition, currentView, playTransition, prefersReducedMotion, setSection]
  )

  const detailContent = detailSection === 'experience'
    ? <Experience />
    : detailSection === 'competition'
      ? <Competition />
      : detailSection === 'portfolio'
        ? <Portfolio />
        : detailSection === 'about'
          ? <About />
          : detailSection === 'contact'
            ? <Contact />
            : null

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#EAF2FF]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(5,5,5,0)_0%,rgba(5,5,5,0.86)_72%,#030303_100%)]" />
      <div className="relative z-10">
        {showLoader && <CatGreetingLoader onComplete={() => setShowLoader(false)} />}
        {transitionState && (
          <PageTransition
            key={transitionState.id}
            durationMs={TRANSITION_DURATION_MS}
            variant={transitionState.variant}
          />
        )}
        {currentView === 'home' ? (
          <>
            <Hero
              activeSection={activeSection}
              hoveredSection={hoveredSection}
              onHoverSection={setHoveredSection}
              onNavigate={navigateToSection}
              parallax={parallax}
            />
            <ScrollToTop />
          </>
        ) : detailSection ? (
          <DetailPageShell activeSection={detailSection} onNavigate={navigateToSection}>
            <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
              {detailContent}
            </Suspense>
          </DetailPageShell>
        ) : null}
      </div>
    </main>
  )
}
