import { motion } from 'motion/react'
import Navbar from './Navbar'
import HeroBadge from './HeroBadge'
import HeroDock from './HeroDock'
import BottomRightCorner from './BottomRightCorner'
import type { SectionId } from '../data/navigation'

const skillTags = ['产品经理', '海外运营', '数据分析', 'AI 应用', '商业分析', '多语言']

interface HeroProps {
  activeSection: SectionId
  hoveredSection: SectionId | null
  onHoverSection: (sectionId: SectionId | null) => void
  onNavigate: (sectionId: SectionId) => void
  parallax?: { x: number; y: number }
}

export default function Hero({ activeSection, hoveredSection, onHoverSection, onNavigate, parallax }: HeroProps) {
  return (
    <div id="hero" className="w-full h-screen bg-[#050711]">
      <section className="relative w-full h-full overflow-hidden flex flex-col items-center bg-black group">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source
            src={`${import.meta.env.BASE_URL}hero-video.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Cinematic readability overlays */}
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.41)_0%,rgba(0,0,0,0)_28%,rgba(0,0,0,0)_72%,rgba(0,0,0,0.43)_100%)]" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent_44%,rgba(0,0,0,0.29)_100%),linear-gradient(90deg,rgba(0,0,0,0.37)_0%,rgba(0,0,0,0)_24%,rgba(0,0,0,0)_76%,rgba(0,0,0,0.23)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[4] w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_34%,rgba(0,0,0,0.34)_64%,rgba(0,0,0,0.68)_100%)] md:w-[72%]" />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar activeSection={activeSection} onNavigate={onNavigate} />

          {/* Text Container */}
          <div className="ml-auto flex w-full max-w-[680px] flex-1 flex-col items-center justify-center px-6 pb-28 pt-2 text-center md:items-end md:px-10 md:text-right lg:mr-16 lg:max-w-[640px] lg:px-0 xl:mr-28 2xl:mr-36">
            <HeroBadge />

            <motion.h1
              title="跟高兴见到你"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 cursor-help text-4xl font-semibold leading-[0.9] tracking-[-0.04em] text-white/66 drop-shadow-[0_8px_34px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl lg:text-[88px] xl:text-[104px]"
            >
              李典
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-7 max-w-[34rem] text-sm font-normal leading-relaxed text-white/76 drop-shadow-[0_2px_18px_rgba(0,0,0,0.72)] sm:text-base md:text-lg lg:text-xl"
            >
              以商业分析为底层能力，横跨产品策划、海外市场运营与海外销售，具备从 0 到 1 的市场开拓经验和 AI 工具落地能力。
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8 flex max-w-[34rem] flex-wrap items-center justify-center gap-2 md:justify-end"
            >
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/14 bg-black/24 px-3.5 py-1.5 text-[12px] md:text-[13px] font-normal tracking-wide text-white/78 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <HeroDock
            activeSection={activeSection}
            hoveredSection={hoveredSection}
            onHoverSection={onHoverSection}
            onNavigate={onNavigate}
            parallax={parallax}
          />
          <BottomRightCorner onNavigate={onNavigate} />
        </div>
      </section>
    </div>
  )
}
