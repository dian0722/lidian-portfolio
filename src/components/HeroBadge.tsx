import { motion } from 'motion/react'

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-5 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/28 px-4 py-2 text-white backdrop-blur-xl mx-auto md:ml-auto md:mr-0"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
      <span className="text-[13px] md:text-[14px] font-normal tracking-wide">数据驱动的国际化产品人</span>
    </motion.div>
  )
}
