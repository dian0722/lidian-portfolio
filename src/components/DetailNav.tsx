import { useState, type CSSProperties } from 'react'
import {
  isDetailSection,
  navigationItems,
  type DetailSectionId,
  type SectionId,
} from '../data/navigation'

interface DetailNavProps {
  activeSection: DetailSectionId
  onNavigate: (sectionId: SectionId) => void
  onNavigateStart?: () => void
}

// Follow the same ordering as the home navigation, minus the hero entry.
const detailItems = navigationItems.filter((item) => isDetailSection(item.id))

export default function DetailNav({ activeSection, onNavigate, onNavigateStart }: DetailNavProps) {
  const [hoveredSection, setHoveredSection] = useState<DetailSectionId | null>(null)
  const previewSection = hoveredSection ?? activeSection
  const activeIndex = detailItems.findIndex((item) => item.id === activeSection)

  return (
    <nav className="cyber-nav" role="navigation" aria-label="子页面导航">
      <span className="cyber-nav__rail" aria-hidden="true" />
      <ol className="cyber-nav__list">
        {detailItems.map((item, index) => {
          const sectionId = item.id as DetailSectionId
          const isActive = sectionId === activeSection
          const isPreview = sectionId === previewSection
          const style = {
            '--item-accent': item.accent,
            '--item-accent-rgb': item.accentRgb,
          } as CSSProperties

          return (
            <li key={sectionId} className="cyber-nav__cell">
              <button
                type="button"
                className="cyber-nav__btn"
                style={style}
                data-active={isActive}
                data-preview={isPreview}
                onMouseEnter={() => setHoveredSection(sectionId)}
                onMouseLeave={() => setHoveredSection(null)}
                onFocus={() => setHoveredSection(sectionId)}
                onBlur={() => setHoveredSection(null)}
                onClick={(event) => {
                  event.currentTarget.blur()
                  setHoveredSection(null)
                  onNavigateStart?.()
                  onNavigate(sectionId)
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="cyber-nav__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="cyber-nav__label">{item.label}</span>
                <span className="cyber-nav__tag" aria-hidden="true">
                  {item.shortLabel}
                </span>
                <span className="cyber-nav__scan" aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ol>
      <span
        className="cyber-nav__readout"
        style={{ '--item-accent-rgb': detailItems[activeIndex]?.accentRgb } as CSSProperties}
        aria-hidden="true"
      >
        <span className="cyber-nav__readout-dot" />
        {`SEC ${String(activeIndex + 1).padStart(2, '0')} / ${String(detailItems.length).padStart(2, '0')}`}
      </span>
    </nav>
  )
}
