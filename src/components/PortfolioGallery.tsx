import { motion } from 'motion/react'
import { ArrowLeft, Image, Maximize2 } from 'lucide-react'

interface PortfolioGalleryProps {
  onBack: () => void
}

const galleryImages = [
  { src: '/portfolio-gallery/插画1.jpg', title: '插画 01', category: 'Illustration' },
  { src: '/portfolio-gallery/插画2.jpg', title: '插画 02', category: 'Illustration' },
  { src: '/portfolio-gallery/插画3.jpg', title: '插画 03', category: 'Illustration' },
  { src: '/portfolio-gallery/插画4.jpg', title: '插画 04', category: 'Illustration' },
  { src: '/portfolio-gallery/插画5.jpg', title: '插画 05', category: 'Illustration' },
  { src: '/portfolio-gallery/建模1.png', title: '建模 01', category: '3D Modeling' },
  { src: '/portfolio-gallery/建模2.png', title: '建模 02', category: '3D Modeling' },
  { src: '/portfolio-gallery/AI生图1.png', title: 'AI 生图 01', category: 'AI Image' },
  { src: '/portfolio-gallery/AI生图2.png', title: 'AI 生图 02', category: 'AI Image' },
  { src: '/portfolio-gallery/原型1.png', title: '原型 01', category: 'Prototype' },
  { src: '/portfolio-gallery/原型2.png', title: '原型 02', category: 'Prototype' },
  { src: '/portfolio-gallery/原型3.png', title: '原型 03', category: 'Prototype' },
]

export default function PortfolioGallery({ onBack }: PortfolioGalleryProps) {
  return (
    <section id="portfolio-gallery" className="portfolio-gallery relative min-h-screen px-6 py-20 md:px-10 md:py-32">
      <div className="portfolio-gallery__halo" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        <motion.button
          type="button"
          onClick={onBack}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="group detail-nav__back mb-10"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          返回作品集
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end"
        >
          <div>
            <span className="section-eyebrow">Visual Archive</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-[#EAF2FF] md:text-6xl">
              美术设计作品画廊
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-readable md:text-base">
              汇集插画、建模、AI 生图与产品原型作品，以沉浸式暗场画廊展示视觉创作与界面表达能力。
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.045 }}
              className="portfolio-gallery__card group"
            >
              <div className="portfolio-gallery__image-wrap">
                <img
                  src={item.src}
                  alt={item.title}
                  className="portfolio-gallery__image"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1280px) 310px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
                <div className="portfolio-gallery__overlay">
                  <span className="portfolio-gallery__chip">{item.category}</span>
                  <Maximize2 className="h-4 w-4 text-cyan-100/80" />
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
    </section>
  )
}
