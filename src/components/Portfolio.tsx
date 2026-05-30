import { motion } from 'motion/react'
import { ExternalLink, FileText, Bot, Palette, Video } from 'lucide-react'

interface PortfolioItem {
  title: string
  description: string
  type: string
  typeIcon: 'doc' | 'ai' | 'design' | 'video'
  url: string
  tags: string[]
}

const portfolios: PortfolioItem[] = [
  {
    title: '产品策划作品（欧莱雅）',
    description: '市场调研报告、产品设计方案（2D/3D 设计图）、产品介绍视频脚本、视频剪辑成品',
    type: '产品策划',
    typeIcon: 'doc',
    url: 'https://kcnj16vgv3hf.feishu.cn/wiki/Q7HDwhOwmip8sSkC2yKczfAvn1e?from=from_copylink',
    tags: ['市场调研', '产品设计', '2D/3D设计', '视频脚本'],
  },
  {
    title: 'AI 工作流搭建',
    description: '电商平台客户忠诚度预测与维护策略方案，KMeans 聚类分群算法应用，提示词优化与温度调节',
    type: 'AI Agent',
    typeIcon: 'ai',
    url: 'https://kcnj16vgv3hf.feishu.cn/docx/XIlYdA7q9oSTJoxXa2pcycG8nny?from=from_copylink',
    tags: ['AI Agent', 'KMeans聚类', '提示词工程'],
  },
  {
    title: '美术设计能力',
    description: '涵盖平面设计、UI 设计、视觉创作等多维度设计作品集',
    type: '设计',
    typeIcon: 'design',
    url: 'https://kcnj16vgv3hf.feishu.cn/docx/Gc9ndD1VuoNraCxeJdDcNvgEnOb?from=from_copylink',
    tags: ['平面设计', 'UI设计', '视觉创作'],
  },
]

const iconMap = {
  doc: FileText,
  ai: Bot,
  design: Palette,
  video: Video,
}

const typeColors: Record<string, string> = {
  '产品策划': 'bg-blue-50 text-blue-700 border-blue-100',
  'AI Agent': 'bg-purple-50 text-purple-700 border-purple-100',
  '设计': 'bg-pink-50 text-pink-700 border-pink-100',
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">作品集</h2>
        <p className="text-sm text-[rgba(30,50,90,0.5)] mt-2">产品策划、AI 工作流、设计作品一览</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolios.map((item, index) => {
          const IconComponent = iconMap[item.typeIcon]
          return (
            <motion.a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8 card-hover flex flex-col"
            >
              {/* Type badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${typeColors[item.type] || 'bg-gray-50 text-gray-700 border-gray-100'}`}>
                  <IconComponent className="w-3 h-3" />
                  {item.type}
                </span>
                <ExternalLink className="w-4 h-4 text-[rgba(30,50,90,0.3)] group-hover:text-[rgba(30,50,90,0.6)] transition-colors" />
              </div>

              <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)] mb-2 group-hover:text-[rgba(30,50,90,1)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[rgba(30,50,90,0.6)] leading-relaxed mb-4 flex-1">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[11px] text-[rgba(30,50,90,0.5)] bg-[rgba(30,50,90,0.05)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
