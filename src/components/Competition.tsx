import { motion } from 'motion/react'
import { Trophy, ExternalLink } from 'lucide-react'

interface CompetitionItem {
  name: string
  role: string
  field: string
  duration: string
  result: string
  highlights: string[]
}

const competitions: CompetitionItem[] = [
  {
    name: '全国人工智能应用创新大赛',
    role: 'AI Agent 工作流搭建',
    field: 'AI',
    duration: '2025.04 - 2025.06',
    result: '湖北赛区 - 研究生组三等奖',
    highlights: [
      '捕捉电商流量红利消退后"用户分层运营难"的核心痛点，锚定"AI 驱动客户忠诚度管理"目标，构建完整需求框架',
      '规划三大核心模块——"批量预测与策略生成"、"单客分群与策略推荐"、"运营知识问答"，覆盖多业务场景',
      '联动计科专业同学落地 KMeans 聚类分群，以数据平均值为基准制定 8 类用户的分群阈值',
      '个人负责：商业策略建议、AI Agent 分支二工作流搭建，整体提示词优化、温度调节、输出结果测试',
    ],
  },
  {
    name: '欧莱雅 BrandStorm 品牌挑战赛',
    role: '产品负责人',
    field: '美妆',
    duration: '2025.01 - 2025.03',
    result: '中国区 Top100（参赛队伍 8600+，前 1.2%）',
    highlights: [
      '聚焦美发造型产品，提炼"即用即卸""科技赋能"核心卖点，明确"快速造型+头皮 0 负担"差异化定位',
      '将"AI 发型分析+AR 操作指引"等科技概念转化为具体产品方案，独立产出 2D/3D 产品设计图',
      '撰写产品介绍视频脚本，围绕核心卖点与场景化需求设计叙事逻辑，完成视频剪辑',
    ],
  },
]

export default function Competition() {
  return (
    <section id="competition" className="py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">竞赛经历</h2>
        <p className="text-sm text-[rgba(30,50,90,0.5)] mt-2">以赛代练，验证产品思维与创新能力</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competitions.map((comp, index) => (
          <motion.div
            key={comp.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8 card-hover"
          >
            {/* Result badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#E74C3C]/10 p-2 rounded-full">
                <Trophy className="w-4 h-4 text-[#E74C3C]" />
              </div>
              <span className="text-xs font-medium text-[#E74C3C] bg-red-50 px-3 py-1 rounded-full">
                {comp.result}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-normal text-[rgba(30,50,90,0.95)] mb-1">{comp.name}</h3>
            <p className="text-sm text-[rgba(30,50,90,0.6)] mb-1">{comp.role} · {comp.field}</p>
            <p className="text-xs text-[rgba(30,50,90,0.4)] mb-5">{comp.duration}</p>

            <div className="space-y-3">
              {comp.highlights.map((h, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-[rgba(30,50,90,0.3)] mt-1 shrink-0">•</span>
                  <p className="text-sm text-[rgba(30,50,90,0.7)] leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
