import { ArrowLeft } from 'lucide-react'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import type { DetailSectionId, SectionId } from '../data/navigation'
import DetailNav from './DetailNav'

interface DetailPageShellProps {
  activeSection: DetailSectionId
  children: ReactNode
  onNavigate: (sectionId: SectionId) => void
}

// Collapse the fixed nav once the page is scrolled past this offset.
const COLLAPSE_AFTER = 64

export default function DetailPageShell({ activeSection, children, onNavigate }: DetailPageShellProps) {
  const [collapsed, setCollapsed] = useState(false)

  const updateCollapsed = useCallback(() => {
    setCollapsed(window.scrollY > COLLAPSE_AFTER)
  }, [])

  useEffect(() => {
    updateCollapsed()
    window.addEventListener('scroll', updateCollapsed, { passive: true })
    return () => window.removeEventListener('scroll', updateCollapsed)
  }, [updateCollapsed])

  useEffect(() => {
    updateCollapsed()
  }, [activeSection, updateCollapsed])

  // Portal the bar to <body> so no ancestor transform/overflow can break its
  // viewport-fixed positioning (framer-motion adds transforms during navigation).
  const navBar = (
    <div className="detail-nav__bar pointer-events-none fixed inset-x-0 top-0 z-40" data-collapsed={collapsed}>
      <div className="detail-nav__inner mx-auto w-full max-w-7xl px-5 md:px-8">
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          className="group detail-nav__back pointer-events-auto"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          返回首页
        </button>
        <div className="detail-nav__slot pointer-events-auto">
          <DetailNav activeSection={activeSection} onNavigate={onNavigate} onNavigateStart={updateCollapsed} />
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen pt-6">
      {typeof document !== 'undefined' ? createPortal(navBar, document.body) : null}
      {children}
    </div>
  )
}
