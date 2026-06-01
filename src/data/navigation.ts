export type SectionId = 'hero' | 'experience' | 'competition' | 'portfolio' | 'about' | 'contact'

export interface NavigationItem {
  id: SectionId
  href: `#${SectionId}`
  label: string
  shortLabel: string
  eyebrow: string
  accent: string
  accentRgb: string
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'hero',
    href: '#hero',
    label: '首页',
    shortLabel: 'INTRO',
    eyebrow: '1/6 - INTRODUCTION',
    accent: '#ffffff',
    accentRgb: '255, 255, 255',
  },
  {
    id: 'experience',
    href: '#experience',
    label: '工作经验',
    shortLabel: 'EXPERIENCE',
    eyebrow: '2/6 - CAREER TRACE',
    accent: '#00e5ff',
    accentRgb: '0, 229, 255',
  },
  {
    id: 'competition',
    href: '#competition',
    label: '竞赛经历',
    shortLabel: 'AWARDS',
    eyebrow: '3/6 - ACHIEVEMENTS',
    accent: '#2979ff',
    accentRgb: '41, 121, 255',
  },
  {
    id: 'portfolio',
    href: '#portfolio',
    label: '作品集',
    shortLabel: 'PORTFOLIO',
    eyebrow: '4/6 - SELECTED WORKS',
    accent: '#8fd3ff',
    accentRgb: '143, 211, 255',
  },
  {
    id: 'about',
    href: '#about',
    label: '关于我',
    shortLabel: 'ABOUT',
    eyebrow: '5/6 - GET TO KNOW',
    accent: '#d7e6ff',
    accentRgb: '215, 230, 255',
  },
  {
    id: 'contact',
    href: '#contact',
    label: '联系方式',
    shortLabel: 'CONTACT',
    eyebrow: '6/6 - CONNECT',
    accent: '#f5f7ff',
    accentRgb: '245, 247, 255',
  },
]

export const homeSectionIds = ['hero'] as const
export const detailSectionIds = ['experience', 'competition', 'portfolio', 'about', 'contact'] as const

export type HomeSectionId = (typeof homeSectionIds)[number]
export type DetailSectionId = (typeof detailSectionIds)[number]

export const defaultSectionId: SectionId = 'hero'

export function isHomeSection(id: SectionId): id is HomeSectionId {
  return homeSectionIds.includes(id as HomeSectionId)
}

export function isDetailSection(id: SectionId): id is DetailSectionId {
  return detailSectionIds.includes(id as DetailSectionId)
}

export function getNavigationItem(id: SectionId) {
  return navigationItems.find((item) => item.id === id) ?? navigationItems[0]
}
