import { useEffect } from 'react'
import type { SectionId } from '../data/navigation'

interface UseActiveSectionOptions {
  disabled?: boolean
  sectionIds: readonly SectionId[]
  onChange: (sectionId: SectionId) => void
}

export function useActiveSection({ disabled = false, sectionIds, onChange }: UseActiveSectionOptions) {
  useEffect(() => {
    if (disabled || sectionIds.length === 0 || typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const ratios = new Map<SectionId, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let nextSection: SectionId | null = null
        let maxRatio = 0

        sectionIds.forEach((id) => {
          const ratio = ratios.get(id) ?? 0
          if (ratio > maxRatio) {
            maxRatio = ratio
            nextSection = id
          }
        })

        if (nextSection && maxRatio > 0) {
          onChange(nextSection)
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [disabled, onChange, sectionIds])
}
