import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, Image, Maximize2, X } from 'lucide-react'
import illustration1 from '../assets/portfolio/illustration-1.jpg'
import illustration2 from '../assets/portfolio/illustration-2.jpg'
import illustration3 from '../assets/portfolio/illustration-3.jpg'
import illustration4 from '../assets/portfolio/illustration-4.jpg'
import illustration5 from '../assets/portfolio/illustration-5.jpg'
import modeling1 from '../assets/portfolio/modeling-1.png'
import modeling2 from '../assets/portfolio/modeling-2.png'
import aiImage1 from '../assets/portfolio/ai-image-1.png'
import aiImage2 from '../assets/portfolio/ai-image-2.png'
import aiImage3 from '../assets/portfolio/ai-image-3.png'
import prototype1 from '../assets/portfolio/prototype-1.png'
import prototype2 from '../assets/portfolio/prototype-2.png'
import prototype3 from '../assets/portfolio/prototype-3.png'

const galleryImages = [
  { src: illustration1, title: '插画 01', category: 'Illustration' },
  { src: illustration2, title: '插画 02', category: 'Illustration' },
  { src: illustration3, title: '插画 03', category: 'Illustration' },
  { src: illustration4, title: '插画 04', category: 'Illustration' },
  { src: illustration5, title: '插画 05', category: 'Illustration' },
  { src: modeling1, title: '建模 01', category: '3D Modeling' },
  { src: modeling2, title: '建模 02', category: '3D Modeling' },
  { src: aiImage1, title: 'AI 生图 01', category: 'AI Image' },
  { src: aiImage2, title: 'AI 生图 02', category: 'AI Image' },
  { src: aiImage3, title: 'AI 生图 03', category: 'AI Image' },
  { src: prototype1, title: '原型 01', category: 'Prototype' },
  { src: prototype2, title: '原型 02', category: 'Prototype' },
  { src: prototype3, title: '原型 03', category: 'Prototype' },
]

export default function Portfolio() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const activeImage = activeImageIndex !== null ? galleryImages[activeImageIndex] : null

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex
      return (currentIndex - 1 + galleryImages.length) % galleryImages.length
    })
  }, [])

  const showNextImage = useCallback(() => {
    setActiveImageIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex
      return (currentIndex + 1) % galleryImages.length
    })
  }, [])

  useEffect(() => {
    if (!activeImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveImageIndex(null)
      }
      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }
      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage, showNextImage, showPreviousImage])

  return (
    <section id="portfolio" className="portfolio-gallery relative min-h-screen px-6 py-20 md:px-10 md:py-32">
      <div className="portfolio-gallery__halo" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <span className="section-eyebrow">Visual Archive</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-[#EAF2FF] md:text-6xl">
              作品集
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-readable md:text-base">
              汇集插画、建模、AI 生图与产品原型作品，以沉浸式暗场画廊展示视觉创作与界面表达能力。游戏经历在[关于我]页面。
            </p>
          </div>
          <div className="portfolio-gallery__stat glass cyber-panel-line rounded-lg p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-cyber">Gallery Count</p>
                <p className="mt-2 text-3xl font-semibold text-cyan-100">{galleryImages.length}</p>
              </div>
              <div className="cyber-icon rounded-lg p-3">
                <Image className="h-5 w-5" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="portfolio-gallery__grid">
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.045 }}
              className="portfolio-gallery__card group"
            >
              <div className="portfolio-gallery__image-wrap">
                <img src={item.src} alt={item.title} className="portfolio-gallery__image" loading="lazy" />
                <div className="portfolio-gallery__overlay">
                  <span className="portfolio-gallery__chip">{item.category}</span>
                  <button
                    type="button"
                    className="portfolio-gallery__zoom"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`放大查看 ${item.title}`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="portfolio-gallery__meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.title}</strong>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="portfolio-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.title} 完整图片预览`}
            onClick={() => setActiveImageIndex(null)}
          >
            <div className="portfolio-lightbox__grid" aria-hidden="true" />
            <button
              type="button"
              className="portfolio-lightbox__nav portfolio-lightbox__nav--prev"
              onClick={(event) => {
                event.stopPropagation()
                showPreviousImage()
              }}
              aria-label="查看上一张作品"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="portfolio-lightbox__nav portfolio-lightbox__nav--next"
              onClick={(event) => {
                event.stopPropagation()
                showNextImage()
              }}
              aria-label="查看下一张作品"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              className="portfolio-lightbox__panel"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="portfolio-lightbox__header">
                <div>
                  <span>{activeImage.category}</span>
                  <strong>{activeImage.title} · {String((activeImageIndex ?? 0) + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}</strong>
                </div>
                <button
                  type="button"
                  className="portfolio-lightbox__close"
                  onClick={() => setActiveImageIndex(null)}
                  aria-label="关闭完整图片预览"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="portfolio-lightbox__image-shell">
                <img src={activeImage.src} alt={activeImage.title} className="portfolio-lightbox__image" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
