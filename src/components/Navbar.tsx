import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navigationItems, type SectionId } from '../data/navigation'

interface NavbarProps {
  activeSection: SectionId
  onNavigate: (sectionId: SectionId) => void
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between py-5 px-5 md:px-10 w-full relative z-10">
        {/* Mobile Logo */}
        <div className="md:hidden">
          <span className="font-semibold tracking-[-0.06em] text-2xl text-white">
            李典
          </span>
        </div>

        {/* Desktop spacer keeps the hero top clean after moving Dock to the bottom */}
        <div className="hidden md:block flex-1" />

        {/* Right Button */}
        <div className="flex-1 flex justify-end">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full border border-cyan-200/20 bg-[#050711]/45 text-cyan-100 backdrop-blur-xl transition-colors hover:bg-cyan-300/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#03050b]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,229,255,0.18),transparent_22rem),radial-gradient(circle_at_80%_80%,rgba(255,43,214,0.14),transparent_20rem)]" />
            <button
              className="absolute top-6 right-6 rounded-full border border-cyan-200/20 bg-white/5 p-3 text-cyan-100"
              onClick={() => setMobileOpen(false)}
              aria-label="关闭菜单"
            >
              <X className="w-7 h-7" />
            </button>
            {navigationItems.map((item, i) => (
              <motion.button
                key={item.href}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`relative text-2xl font-semibold tracking-tight transition-colors ${
                  item.id === activeSection ? 'text-white' : 'text-white/40 hover:text-white/75'
                }`}
                onClick={() => {
                  setMobileOpen(false)
                  onNavigate(item.id)
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
