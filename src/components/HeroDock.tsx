import { motion } from 'motion/react'
import { getNavigationItem, navigationItems, type SectionId } from '../data/navigation'
import SectionIndicator from './SectionIndicator'

interface HeroDockProps {
  activeSection: SectionId
  hoveredSection: SectionId | null
  onHoverSection: (sectionId: SectionId | null) => void
  onNavigate: (sectionId: SectionId) => void
  parallax?: { x: number; y: number }
}

export default function HeroDock({
  activeSection,
  hoveredSection,
  onHoverSection,
  onNavigate,
  parallax = { x: 0, y: 0 },
}: HeroDockProps) {
  const previewSection = hoveredSection ?? activeSection
  const previewItem = getNavigationItem(previewSection)

  return (
    <aside className="vertical-nav-shell hidden md:flex" aria-label="页面垂直导航">
      <motion.div className="vertical-nav-inner" style={{ x: parallax.x * 0.08, y: parallax.y * 0.08 }}>
        <SectionIndicator item={previewItem} />

        <nav className="vertical-nav" role="navigation" aria-label="作品集区块导航">
          {navigationItems.map((item) => {
            const isActive = item.id === activeSection
            const isPreview = item.id === previewSection

            return (
              <button
                key={item.id}
                type="button"
                className="vertical-nav__item"
                data-active={isActive}
                data-preview={isPreview}
                onMouseEnter={() => onHoverSection(item.id)}
                onMouseLeave={() => onHoverSection(null)}
                onFocus={() => onHoverSection(item.id)}
                onBlur={() => onHoverSection(null)}
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="vertical-nav__bar" />
                <span className="vertical-nav__index">{item.eyebrow.slice(0, 3)}</span>
                <span className="vertical-nav__text">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </motion.div>
    </aside>
  )
}
