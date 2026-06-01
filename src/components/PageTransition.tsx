import type { CSSProperties } from 'react'
import lookText from '../assets/transition-look.svg'
import aiVideoText from '../assets/transition-ai-video.svg'
import { catHandPath, catPaths } from './catArtwork'

type TransitionVariant = 'look' | 'ai-video'

type PageTransitionProps = {
  durationMs: number
  variant: TransitionVariant
}

const textAssets: Record<TransitionVariant, string> = {
  look: lookText,
  'ai-video': aiVideoText,
}

export default function PageTransition({ durationMs, variant }: PageTransitionProps) {
  const style = {
    '--page-transition-duration': `${durationMs}ms`,
  } as CSSProperties

  return (
    <div className="page-transition" style={style} aria-hidden="true">
      <div className="page-transition__grid" />
      <div className="page-transition__text-wrap">
        <img className="page-transition__text" src={textAssets[variant]} alt="" decoding="async" />
      </div>
      <div className="page-transition__track">
        <svg
          className="page-transition__cat"
          width="148"
          height="196"
          viewBox="0 0 74 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {catPaths.map((d) => (
            <path key={d} d={d} />
          ))}
          <path className="page-transition__cat-hand" d={catHandPath} />
        </svg>
      </div>
    </div>
  )
}

export type { TransitionVariant }
