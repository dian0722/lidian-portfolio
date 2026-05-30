import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, ExternalLink } from 'lucide-react'

interface Highlight {
  title: string
  description: string
  metrics?: string
  tools?: string
}

interface ExperienceItem {
  company: string
  position: string
  duration: string
  industry: string
  function_: string
  tags: string[]
  highlights: Highlight[]
}

const experiences: ExperienceItem[] = [
  {
    company: '游族网络股份有限公司',
    position: '海外运营/商务实习',
    duration: '2025.06 - 2025.09',
    industry: '互联网 / 游戏',
    function_: '运营 / 商务',
    tags: ['渠道运营', '数据分析', '项目管理', '产品评估'],
    highlights: [
      {
        title: '渠道运营',
        description: '协助 ONEStore、三星、华为等平台资源位全周期管理，含申请策略制定、日常维护及数据监控。通过多维度数据体系（曝光、点击、转化等）分析投放效果，向内输出产品优化建议，为产品策划提供市场反馈，强化产品渠道竞争力。',
        tools: '数据分析、渠道管理',
      },
      {
        title: '游戏项目管理',
        description: '负责项目版本迭代全流程管控，以产品目标制定进度规划。联动研发、运营，推动功能落地与体验优化。通过需求同步与风险预警机制，确保版本匹配市场诉求，保障迭代质量与市场响应速度，提升用户留存。',
        tools: '项目管理、跨部门协同',
      },
      {
        title: '游戏外放发行/引入评估',
        description: '构建产品评估体系，结合外部测评数据，拆解玩法、美术、数值等维度，输出 20+份测评报告。报告含优劣势与潜力分析，更针对产品策划提出优化方向，助力筛选高潜力产品、降低风险。',
        metrics: '20+份测评报告',
        tools: '产品评估、市场分析',
      },
    ],
  },
  {
    company: '北京源码视界科技有限公司',
    position: '产品实习生',
    duration: '2025.03 - 2025.06',
    industry: '互联网',
    function_: '产品',
    tags: ['数据分析', '需求设计', '原型设计', '功能验收'],
    highlights: [
      {
        title: '产品需求设计与迭代',
        description: '对接泰国门店运营团队，深入挖掘并系统梳理高频业务需求，辅助输出产品需求文档。',
        tools: '需求分析、PRD',
      },
      {
        title: '原型设计与体验优化',
        description: '独立完成 5+个核心功能的墨刀高保真交互原型设计，通过重构页面信息架构与操作流程，显著优化用户界面布局，实现用户核心操作路径效率提升。',
        metrics: '效率提升 35%，5+个核心功能',
        tools: '墨刀、Figma',
      },
      {
        title: '数据驱动门店运营',
        description: '独立负责 SNOWTEE APP 月度运营报告，通过深度分析门店流水、支付转化率等核心数据，定位 8 家低效门店的症结，并协同区域总监制定针对性优化方案。',
        metrics: '8 家低效门店定位优化',
        tools: '数据分析、运营报告',
      },
      {
        title: '产品功能验收',
        description: '负责会员模块的功能验收测试，基于用户视角验证需求实现度与流程闭环。系统性地执行测试用例，累计发现并推动解决包括交互逻辑、显示异常在内的 10 余项软件使用问题。',
        metrics: '10+项问题推动解决',
        tools: '功能测试、用例设计',
      },
    ],
  },
  {
    company: '中国重汽集团湖北华威专用汽车有限公司',
    position: '海外销售',
    duration: '2022.01 - 2023.05',
    industry: '汽车制造',
    function_: '销售',
    tags: ['市场开拓', '供应链管理', '跨部门协同', '全链路操盘'],
    highlights: [
      {
        title: '全链路订单操盘',
        description: '独立主导商用车出口全流程，覆盖获客、报价、还盘、合同拟定、生产安排、物流安排、货代海关事务，成功将自卸车落地俄罗斯。独立对接海外用户，完成商务环节并捕捉潜在需求。',
        tools: '国际贸易、商务谈判',
      },
      {
        title: '市场 0-1 突破',
        description: '运营 Alibaba 国际站，深度调研俄罗斯商用车市场（用户需求、竞品、本地政策），定位空白点，设计「整车+配件+售后」一体化方案，实现市场 0-1 突破。',
        tools: 'Alibaba国际站、市场调研',
      },
      {
        title: '跨部门协同',
        description: '提炼需求到跨部门转化，结合用户需求与工程设计部门合作拟定车辆设计方案。',
        tools: '跨部门协作、需求转化',
      },
      {
        title: '供应链需求匹配',
        description: '按用户需求对接配件供应商，磋商价格、签订合同，监控物流确保交付，兼顾需求与成本。',
        tools: '供应链管理、成本控制',
      },
    ],
  },
]

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(false)

  const industryColors: Record<string, string> = {
    '互联网 / 游戏': 'bg-blue-100 text-blue-800',
    '互联网': 'bg-indigo-100 text-indigo-800',
    '汽车制造': 'bg-amber-100 text-amber-800',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative pl-8 md:pl-16 ${expanded ? 'md:col-span-2' : ''}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[#2C3E50] border-2 border-[#f0f0f0] z-10" />

      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8 card-hover"
        whileHover={{ scale: expanded ? 1 : 1.01 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${industryColors[item.industry] || 'bg-gray-100 text-gray-700'}`}>
                {item.industry}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-[rgba(30,50,90,0.2)] text-[rgba(30,50,90,0.7)]">
                {item.function_}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)]">{item.company}</h3>
            <p className="text-sm text-[rgba(30,50,90,0.6)] mt-0.5">{item.position} · {item.duration}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-[rgba(30,50,90,0.4)]" />
          </motion.div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded text-[11px] text-[rgba(30,50,90,0.5)] bg-[rgba(30,50,90,0.05)]">
              {tag}
            </span>
          ))}
        </div>

        {/* Summary - always visible */}
        <div className="space-y-2">
          {item.highlights.slice(0, 2).map((h) => (
            <div key={h.title} className="flex gap-2">
              <span className="text-[rgba(30,50,90,0.3)] mt-1 shrink-0">•</span>
              <p className="text-sm text-[rgba(30,50,90,0.7)] leading-relaxed">
                <span className="font-medium text-[rgba(30,50,90,0.85)]">{h.title}：</span>
                {h.description.slice(0, 60)}...
              </p>
            </div>
          ))}
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-white/20 space-y-4">
                {item.highlights.map((h) => (
                  <div key={h.title} className="bg-white/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-[rgba(30,50,90,0.9)]">{h.title}</h4>
                      {h.metrics && (
                        <span className="text-xs font-medium text-[#E74C3C] bg-red-50 px-2 py-0.5 rounded-full">
                          {h.metrics}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[rgba(30,50,90,0.7)] leading-relaxed">{h.description}</p>
                    {h.tools && (
                      <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[rgba(30,50,90,0.4)]">
                        <span>工具/方法：</span>
                        <span>{h.tools}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">工作经验</h2>
        <p className="text-sm text-[rgba(30,50,90,0.5)] mt-2">三段工作经历，横跨产品策划、海外运营与海外销售</p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-6 bottom-6 w-px bg-[rgba(30,50,90,0.15)]" />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <ExperienceCard key={item.company} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
