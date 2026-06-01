import { AnimatePresence, motion } from 'motion/react'
import type { NavigationItem } from '../data/navigation'

interface SectionIndicatorProps {
  item: NavigationItem
}

export default function SectionIndicator({ item }: SectionIndicatorProps) {
  return (
    <div className="section-indicator" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(8px)' }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.2 }}
            className="section-indicator__eyebrow"
          >
            {item.eyebrow}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.24 }}
            className="section-indicator__label"
          >
            {item.shortLabel}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
