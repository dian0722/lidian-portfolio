import { motion } from 'motion/react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import type { SectionId } from '../data/navigation'

interface BottomRightCornerProps {
  onNavigate: (sectionId: SectionId) => void
}

export default function BottomRightCorner({ onNavigate }: BottomRightCornerProps) {
  return (
    <motion.button
      type="button"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      onClick={() => onNavigate('contact')}
      className="absolute bottom-6 right-6 flex cursor-pointer items-center gap-3 rounded-lg border border-white/12 bg-black/18 px-4 py-3 text-left text-white shadow-[0_24px_90px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-3xl backdrop-saturate-150 transition-all hover:border-white/22 hover:bg-white/10 sm:bottom-8 sm:right-8 sm:gap-4 sm:px-5 sm:py-4 md:bottom-10 md:right-10 md:gap-5 md:px-6 md:py-5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/14 bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl md:h-12 md:w-12">
        <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
      </div>

      <div className="flex flex-col gap-1 pr-1">
        <span className="text-[16px] font-semibold tracking-tight text-white md:text-[20px]">下载简历</span>
        <div className="flex cursor-pointer items-center gap-1 text-white/58 transition-colors hover:text-white/82">
          <span className="text-[12px] font-normal md:text-[15px]">产品策划 / 海外市场</span>
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
        </div>
      </div>
    </motion.button>
  )
}
