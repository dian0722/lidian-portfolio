import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type SpringOptions } from 'motion/react'
import './Dock.css'

interface DockItemData {
  icon: ReactNode
  label: string
  onClick: () => void
  className?: string
}

interface DockProps {
  items?: DockItemData[]
  className?: string
  distance?: number
  panelHeight?: number
  baseItemSize?: number
  dockHeight?: number
  magnification?: number
  spring?: SpringOptions
}

interface DockChildProps {
  isHovered: ReturnType<typeof useMotionValue<number>>
}

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: {
  children: ReactNode
  className?: string
  onClick: () => void
  mouseX: ReturnType<typeof useMotionValue<number>>
  spring: SpringOptions
  distance: number
  magnification: number
  baseItemSize: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isHovered = useMotionValue(0)

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    }
    return val - rect.x - baseItemSize / 2
  })

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize])
  const size = useSpring(targetSize, spring)

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      }}
    >
      {Children.map(children, (child) => {
        if (!isValidElement<DockChildProps>(child)) return child
        return cloneElement(child as ReactElement<DockChildProps>, { isHovered })
      })}
    </motion.div>
  )
}

function DockLabel({ children, className = '', isHovered }: { children: ReactNode; className?: string; isHovered?: ReturnType<typeof useMotionValue<number>> }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isHovered) return
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1)
    })
    return () => unsubscribe()
  }, [isHovered])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.96 }}
          animate={{ opacity: 1, y: -10, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function DockIcon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`dock-icon ${className}`}>{children}</div>
}

export default function Dock({
  items = [],
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 64,
  distance = 180,
  panelHeight = 56,
  dockHeight = 160,
  baseItemSize = 42,
}: DockProps) {
  const mouseX = useMotionValue(Infinity)

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  )

  return (
    <motion.div style={{ height: maxHeight, scrollbarWidth: 'none' }} className="dock-outer">
      <motion.div
        onMouseMove={({ pageX }) => {
          mouseX.set(pageX)
        }}
        onMouseLeave={() => {
          mouseX.set(Infinity)
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="页面导航 Dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={item.label || index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  )
}
