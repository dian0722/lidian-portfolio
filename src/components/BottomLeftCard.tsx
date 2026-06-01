import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '3', label: '段工作经历' },
  { value: '2', label: '项竞赛获奖' },
  { value: '5+', label: '产品功能设计' },
]

export default function BottomLeftCard() {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="glass-strong cyber-panel-line absolute bottom-28 right-4 md:right-8 lg:right-10 md:bottom-28 lg:bottom-32 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2rem] flex flex-col gap-2.5 lg:gap-3 min-w-[150px] md:min-w-[170px] lg:min-w-[200px] w-fit"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-end justify-between gap-5 border-b border-cyan-200/10 pb-2 last:border-b-0 last:pb-0">
          <span className="text-2xl md:text-3xl font-semibold text-gradient-cyber tracking-[-0.05em]">{stat.value}</span>
          <span className="text-[10px] md:text-[12px] font-medium text-[#9FB2D0] uppercase tracking-[0.18em]">{stat.label}</span>
        </div>
      ))}
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#experience"
        className="mt-1 flex items-center rounded-full border border-cyan-200/20 bg-cyan-300/10 pl-1.5 pr-5 py-1.5 gap-2 text-cyan-50 hover:bg-cyan-300/16 transition-colors self-start group"
      >
        <div className="bg-cyan-200/15 p-1 rounded-full flex items-center justify-center">
          <ArrowUpRight className="w-4 h-4 text-cyan-100" />
        </div>
        <span className="text-[13px] font-medium">查看经历</span>
      </motion.a>
    </motion.div>
  )
}
