import { motion } from 'motion/react'
import { catHandPath, catPaths } from './catArtwork'

const FPS = 30
const DURATION_SECONDS = 1.5
const DURATION_FRAMES = FPS * DURATION_SECONDS
const frame = (value: number) => value / FPS


interface CatGreetingLoaderProps {
  onComplete: () => void
}

export default function CatGreetingLoader({ onComplete }: CatGreetingLoaderProps) {
  return (
    <motion.div
      className="cat-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: DURATION_SECONDS, times: [0, 0.86, 1], ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      aria-label="页面加载中"
      role="status"
    >
      <div className="cat-loader__grid" />
      <motion.div
        className="cat-loader__card"
        initial={{ y: 18, scale: 0.94, opacity: 0 }}
        animate={{ y: 0, scale: [0.94, 1.04, 1], opacity: 1 }}
        transition={{ duration: frame(18), ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="cat-loader__meta">
          <span>REMOTION</span>
          <span>{DURATION_FRAMES}F / {FPS}FPS</span>
        </div>

        <motion.svg
          className="cat-loader__cat"
          width="148"
          height="196"
          viewBox="0 0 74 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ rotate: -2 }}
          animate={{ rotate: [-2, 2.5, -1, 0], y: [0, -4, 1, 0] }}
          transition={{ duration: DURATION_SECONDS, times: [0, 0.32, 0.68, 1], ease: 'easeInOut' }}
        >
          <g className="cat-loader__stroke-group">
            {catPaths.map((d, index) => (
              <motion.path
                key={d}
                d={d}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: frame(18), delay: frame(index * 2), ease: 'easeInOut' }}
              />
            ))}
          </g>

          <motion.path
            className="cat-loader__hand"
            d={catHandPath}
            initial={{ pathLength: 0, opacity: 0, rotate: -12 }}
            animate={{ pathLength: 1, opacity: 1, rotate: [-12, 14, -10, 12, 0] }}
            transition={{ duration: frame(32), delay: frame(8), ease: 'easeInOut' }}
            style={{ transformOrigin: '55px 66px' }}
          />
        </motion.svg>

        <motion.div
          className="cat-loader__hello"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -8] }}
          transition={{ duration: DURATION_SECONDS, times: [0, 0.28, 0.78, 1], ease: 'easeOut' }}
        >
          小猫正在打招呼
        </motion.div>

        <div className="cat-loader__bar" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: DURATION_SECONDS, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
