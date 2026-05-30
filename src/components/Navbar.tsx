import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '工作经验', href: '#experience' },
  { label: '竞赛经历', href: '#competition' },
  { label: '作品集', href: '#portfolio' },
  { label: '关于我', href: '#about' },
  { label: '联系方式', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
        {/* Left spacer for centering */}
        <div className="flex-1 hidden md:block" />

        {/* Center Menu - Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-[rgb(45,45,45)] font-normal text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Logo */}
        <div className="md:hidden">
          <span className="font-regular tracking-tighter text-xl text-[rgba(30,50,90,0.9)]">
            李典
          </span>
        </div>

        {/* Right Button */}
        <div className="flex-1 flex justify-end">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[rgba(30,50,90,0.9)]"
            onClick={() => setMobileOpen(!mobileOpen)}
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
            className="fixed inset-0 z-50 bg-[rgba(30,50,90,0.95)] backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-white text-2xl font-normal hover:opacity-70 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
