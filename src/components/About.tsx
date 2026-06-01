import { motion } from 'motion/react'
import { Brain, Download, FileText, Gamepad2, GraduationCap, Monitor, Smartphone } from 'lucide-react'
import thesisPdf from '../assets/documents/thesis-latin-america-cross-border-ecommerce.pdf'
import bachelorPhoto from '../assets/photos/bachelor-graduation.jpg'
import graduatePhoto from '../assets/photos/graduate-study.jpg'
import lifePhoto from '../assets/photos/life.jpg'

const education = [
  {
    period: '2024.9 - 2026.6',
    school: '华中科技大学',
    degree: '国际商务硕士',
    tags: ['985', '全日制', '商业分析', '国际金融', '网络平台经济学'],
  },
  {
    period: '2018.9 - 2022.6',
    school: '湖北文理学院',
    degree: '国际经济与贸易、法学双学士',
    tags: ['Python数据分析', '合同法', '宏微观经济学', '投资学', '国际金融', '跨境电商', '知识产权法'],
  },
]

const thesisTags = ['跨境电商', 'KMeans聚类算法', '拉丁美洲']

const pcGames = [
  { name: '守望先锋', meta: 'FPS · 513h' },
  { name: '饥荒联机版', meta: '沙盒冒险 · 171h' },
  { name: '幻兽帕鲁', meta: '捉宠经营 · 160h · 全图鉴' },
]

const pcOtherGames = ['战地5', '怪物猎人·世界', '双人成行（全通关）', '森林（第一人称恐怖）', '王国：两位君主', '胡闹厨房2']

const mobileGames = [
  { name: '洛克王国世界', meta: '开服玩家' },
  { name: '狼人杀', meta: '网易策略社交 · 千场深度玩家' },
  { name: '王牌战士', meta: '腾讯魔方 FPS · 主教一段' },
  { name: '阴阳师', meta: '卡牌策略 · 开服玩家' },
  { name: '明日方舟', meta: '卡牌塔防 · 开服玩家' },
]

const mobileOtherGames = ['王者荣耀', '奥比岛', '阴阳师百闻牌']

const radarSkills = [
  { name: '产品策划', score: 90 },
  { name: '数据分析', score: 90 },
  { name: '海外运营', score: 85 },
  { name: '设计能力', score: 80 },
  { name: '语言能力', score: 85 },
]

const skillCloud = [
  'SQL', 'Python', 'Figma', 'PS', 'PR', 'C4D',
  '英语 CET-6', '商务英语', 'AI Prompt Engineering',
  'claude code', 'vibe coding', '数据分析', 'AI工作流',
]

const personalPhotos = [
  { label: '本科毕业', src: bachelorPhoto, objectPosition: '50% 50%' },
  { label: '读研中', src: graduatePhoto, objectPosition: '50% 42%' },
  { label: '生活中', src: lifePhoto, objectPosition: '50% 50%' },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="section-eyebrow">Identity Matrix</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-[#EAF2FF] tracking-[-0.05em]">关于我</h2>
        <p className="text-sm md:text-base text-readable mt-3 max-w-2xl">MBTI: ENTJ · 数据驱动的国际化产品人，用商业分析、设计表达和 AI 工具连接机会与执行。</p>
      </motion.div>

      {/* Personal intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-strong cyber-panel-line rounded-lg p-6 md:p-10 mb-8"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="cyber-icon p-3 rounded-md shrink-0">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#F4F8FF] mb-3 tracking-tight">如何理解李典</h3>
            <p className="text-sm md:text-[15px] text-readable leading-[1.9]">
              QQ空间曾经有一个“算命”小游戏，可以翻出一张卡片写着一句描述我的话，卡片上写着“当她回过头，发现自己已经一个人走了很远很远”。有点心酸有点孤单的一句话呢，但那好像就是无数昼夜轮转里仰望着天空独行的我，我想一路坚持着走到这里已经很棒了。虽然我还在一个人探寻着摸索着，但我的生命里越来越充满了期待，过去只是我自己期待着未来，这两年甚至还多了一些“等着我好消息”的人。我会继续走下去，期待着更多这样宝贵美好的相遇，期待着有一天能与这些宝贵的人分享我生命中的美好。
            </p>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {personalPhotos.map((photo, index) => (
            <figure key={photo.label} className={`group relative aspect-[3/4] rounded-md overflow-hidden border border-cyan-200/10 bg-[rgba(255,255,255,0.035)] ${index === 2 ? 'hidden md:block' : ''}`}>
              <img
                src={photo.src}
                alt={photo.label}
                className="h-full w-full object-cover opacity-90 saturate-[0.92] contrast-[1.04] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-110"
                style={{ objectPosition: photo.objectPosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(3,6,15,0.78)),linear-gradient(90deg,rgba(0,229,255,0.08),transparent_35%,rgba(255,43,214,0.08))]" />
              <figcaption className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-50 drop-shadow-[0_0_12px_rgba(0,229,255,0.45)]">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Education Timeline */}
          <div className="glass cyber-panel-line rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="cyber-icon rounded-md p-2.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-[#F4F8FF] tracking-tight">教育背景</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.period} className="relative pl-6 border-l border-cyan-200/18">
                  <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-cyan-300 -translate-x-[5px] shadow-[0_0_14px_rgba(0,229,255,0.9)]" />
                  <p className="font-mono text-xs tracking-[0.14em] text-muted-cyber mb-1">{edu.period}</p>
                  <h4 className="text-sm font-semibold text-[#F4F8FF]">{edu.school}</h4>
                  <p className="text-sm text-[#A8BAD8]">{edu.degree}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {edu.tags.map((tag) => {
                      const isHighlightTag = tag === '985' || tag === '全日制'
                      return (
                        <span key={tag} className={`cyber-pill px-2.5 py-1 text-[11px] ${isHighlightTag ? 'education-highlight-pill' : ''}`}>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="thesis-card mt-6">
              <div className="thesis-card__icon">
                <FileText className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-cyber">Master Thesis</p>
                <h4 className="mt-1 text-sm font-semibold leading-relaxed text-[#F4F8FF]">
                  拉美国家贸易便利化水平对中国跨境电商出口的影响研究
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {thesisTags.map((tag) => (
                    <span key={tag} className="cyber-pill thesis-card__tag px-2.5 py-1 text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={thesisPdf}
                download="拉美国家贸易便利化水平对中国跨境电商出口的影响研究.pdf"
                className="thesis-card__download"
                aria-label="下载硕士毕业论文"
              >
                <Download className="h-4 w-4" />
                下载
              </a>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Radar Skills */}
          <div className="glass cyber-panel-line rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[#F4F8FF] mb-6 tracking-tight">技能矩阵</h3>
            <div className="space-y-4">
              {radarSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-sm text-[#C6D6F1] w-20 shrink-0">{skill.name}</span>
                  <div className="flex-1 h-2 rounded-full overflow-hidden bg-white/8 border border-cyan-200/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 shadow-[0_0_18px_rgba(0,229,255,0.45)]"
                    />
                  </div>
                  <span className="font-mono text-xs text-cyan-100 w-8 text-right">{skill.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Cloud */}
          <div className="glass cyber-panel-line rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[#F4F8FF] mb-4 tracking-tight">技能标签</h3>
            <div className="flex flex-wrap gap-2">
              {skillCloud.map((skill) => (
                <span
                  key={skill}
                  className="cyber-pill px-3 py-1.5 text-[13px] hover:border-cyan-200/40 hover:bg-cyan-300/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gaming Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="glass cyber-panel-line rounded-lg p-6 md:p-8 mt-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="cyber-icon rounded-md p-2.5">
            <Gamepad2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#F4F8FF] tracking-tight">游戏经历</h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-cyber">Player Archive</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          <div className="game-experience__block">
            <div className="game-experience__heading">
              <Monitor className="h-4 w-4" />
              <span>PC</span>
            </div>
            <div className="space-y-2.5">
              {pcGames.map((game) => (
                <div key={game.name} className="game-experience__row">
                  <strong>{game.name}</strong>
                  <span>{game.meta}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {pcOtherGames.map((game) => (
                <span key={game} className="cyber-pill px-2.5 py-1 text-[11px]">{game}</span>
              ))}
            </div>
          </div>

          <div className="game-experience__block">
            <div className="game-experience__heading">
              <Smartphone className="h-4 w-4" />
              <span>手游</span>
            </div>
            <div className="space-y-2.5">
              {mobileGames.map((game) => (
                <div key={game.name} className="game-experience__row">
                  <strong>{game.name}</strong>
                  <span>{game.meta}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {mobileOtherGames.map((game) => (
                <span key={game} className="cyber-pill px-2.5 py-1 text-[11px]">{game}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
