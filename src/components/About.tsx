import { motion } from 'motion/react'
import { GraduationCap, Award, Brain } from 'lucide-react'

const education = [
  {
    period: '2024.9 - 2026.6',
    school: '华中科技大学',
    degree: '国际商务硕士',
    tags: ['商业分析', '国际金融', '网络平台经济学'],
  },
  {
    period: '2018.9 - 2022.6',
    school: '湖北文理学院',
    degree: '国际经济与贸易、法学双学士',
    tags: ['Python数据分析', '合同法', '知识产权法'],
  },
]

const certificates = [
  { name: '英语六级', icon: '🎯' },
  { name: '计算机二级', icon: '💻' },
  { name: '普通话二甲', icon: '🎤' },
  { name: 'POCIB 全国外贸从业大赛', icon: '🏆', detail: '个人三等奖 / 团队二等奖' },
]

const radarSkills = [
  { name: '产品策划', score: 85 },
  { name: '数据分析', score: 80 },
  { name: '海外运营', score: 90 },
  { name: '设计能力', score: 70 },
  { name: '语言能力', score: 85 },
]

const skillCloud = [
  'SQL', 'Python', 'Figma', 'PS', 'PR', 'C4D',
  '英语 CET-6', '商务英语', 'POCIB 外贸大赛获奖',
  '墨刀', '飞书', 'AI Prompt Engineering',
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">关于我</h2>
        <p className="text-sm text-[rgba(30,50,90,0.5)] mt-2">MBTI: ENTJ · 数据驱动的国际化产品人</p>
      </motion.div>

      {/* Personal intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-10 mb-8"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-[rgba(30,50,90,0.05)] p-3 rounded-xl shrink-0">
            <Brain className="w-6 h-6 text-[rgba(30,50,90,0.6)]" />
          </div>
          <div>
            <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)] mb-2">自我评价</h3>
            <p className="text-sm text-[rgba(30,50,90,0.7)] leading-[1.8]">
              QQ 空间曾经有一个"算命"小游戏，可以翻出一张卡片写着一句描述我的话，卡片上写着"当她回过头，发现自己已经一个人走了很远很远"。有点心酸有点孤单的一句话呢，但那好像就是无数昼夜轮转里仰望着天空独行的我，我想一路坚持着走到这里已经很棒了。虽然我还在一个人探寻着摸索着，但我的生命里越来越充满了期待，过去只是我自己期待着未来，这两年甚至还多了一两个"等着我好消息"的人。我会继续走下去，期待着更多这样宝贵美好的相遇，期待着有一天能与这些宝贵的人分享我生命中的美好。
            </p>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[rgba(30,50,90,0.05)] flex items-center justify-center">
            <span className="text-xs text-[rgba(30,50,90,0.3)]">本科毕业</span>
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[rgba(30,50,90,0.05)] flex items-center justify-center">
            <span className="text-xs text-[rgba(30,50,90,0.3)]">读研中</span>
          </div>
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[rgba(30,50,90,0.05)] flex items-center justify-center hidden md:flex">
            <span className="text-xs text-[rgba(30,50,90,0.3)]">生活中</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-[rgba(30,50,90,0.6)]" />
            <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)]">教育背景</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.period} className="relative pl-6 border-l border-[rgba(30,50,90,0.15)]">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#2C3E50] -translate-x-[5px]" />
                <p className="text-xs text-[rgba(30,50,90,0.4)] mb-1">{edu.period}</p>
                <h4 className="text-sm font-medium text-[rgba(30,50,90,0.9)]">{edu.school}</h4>
                <p className="text-sm text-[rgba(30,50,90,0.6)]">{edu.degree}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[11px] text-[rgba(30,50,90,0.5)] bg-[rgba(30,50,90,0.05)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Radar Skills */}
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8">
            <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)] mb-6">技能矩阵</h3>
            <div className="space-y-3">
              {radarSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <span className="text-sm text-[rgba(30,50,90,0.7)] w-20 shrink-0">{skill.name}</span>
                  <div className="flex-1 h-2 bg-[rgba(30,50,90,0.08)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[rgba(30,50,90,0.4)] to-[rgba(52,152,219,0.6)] rounded-full"
                    />
                  </div>
                  <span className="text-xs text-[rgba(30,50,90,0.4)] w-8 text-right">{skill.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Cloud */}
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8">
            <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)] mb-4">技能标签</h3>
            <div className="flex flex-wrap gap-2">
              {skillCloud.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-[rgba(30,50,90,0.05)] text-[13px] text-[rgba(30,50,90,0.7)] hover:bg-[rgba(30,50,90,0.1)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[rgba(30,50,90,0.6)]" />
              <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)]">证书与荣誉</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {certificates.map((cert) => (
                <div key={cert.name} className="flex items-center gap-2 p-3 rounded-xl bg-white/30">
                  <span className="text-lg">{cert.icon}</span>
                  <div>
                    <p className="text-sm text-[rgba(30,50,90,0.8)]">{cert.name}</p>
                    {cert.detail && (
                      <p className="text-[11px] text-[rgba(30,50,90,0.4)]">{cert.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
