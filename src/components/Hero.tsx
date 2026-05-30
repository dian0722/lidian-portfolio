import { motion } from 'motion/react'
import Navbar from './Navbar'
import HeroBadge from './HeroBadge'
import BottomLeftCard from './BottomLeftCard'
import BottomRightCorner from './BottomRightCorner'

const skillTags = ['产品经理', '海外运营', '数据分析', 'AI 应用', '商业分析', '多语言']

export default function Hero() {
  return (
    <div id="hero" className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          {/* Text Container */}
          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />

            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]"
            >
              李典
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal mb-6"
            >
              以商业分析为底层能力，横跨产品策划、海外市场运营与海外销售，具备从 0 到 1 的市场开拓经验和 AI 工具落地能力。
            </motion.p>

            {/* Skill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-2 mb-8"
            >
              {skillTags.map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-[12px] md:text-[13px] text-[rgba(30,50,90,0.8)] font-normal"
                >
                  {tag}
                </span>
              ))}
            </motion.div>


          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}
