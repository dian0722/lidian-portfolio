import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, Download, Copy, Check } from 'lucide-react'
import productResume from '../assets/documents/resume-product-planning.pdf'
import overseasResume from '../assets/documents/resume-overseas-market.pdf'
import wechatQr from '../assets/photos/wechat-qr.png'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_50%_100%,rgba(0,229,255,0.16),transparent_34rem)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mb-16"
      >
        <span className="section-eyebrow">Signal Channel</span>
        <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-[#EAF2FF] tracking-[-0.05em]">联系方式</h2>
        <p className="text-sm md:text-base text-readable mt-3 max-w-2xl">期待与您的合作与交流。无论是产品策划、海外增长还是 AI 应用落地，都欢迎发起连接。</p>
      </motion.div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass cyber-panel-line rounded-lg p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-[#F4F8FF] tracking-tight mb-6">联系信息</h3>

          <div className="space-y-4">
            {/* Email */}
            <button
              type="button"
              className="flex w-full items-center gap-4 p-4 rounded-md border border-cyan-200/10 bg-white/[0.035] text-left cursor-pointer hover:bg-cyan-300/8 hover:border-cyan-200/24 transition-colors group"
              onClick={() => copyToClipboard('857140688@qq.com', 'email')}
            >
              <div className="cyber-icon p-2.5 rounded-md">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-cyber mb-0.5">邮箱</p>
                <p className="text-sm text-[#DCEAFF]">857140688@qq.com</p>
              </div>
              <div className="shrink-0">
                {copied === 'email' ? (
                  <Check className="w-4 h-4 text-cyan-200" />
                ) : (
                  <Copy className="w-4 h-4 text-[#7F93B7] group-hover:text-cyan-200 transition-colors" />
                )}
              </div>
            </button>

            {/* Phone */}
            <a
              href="tel:13164155114"
              className="flex items-center gap-4 p-4 rounded-md border border-cyan-200/10 bg-white/[0.035] hover:bg-cyan-300/8 hover:border-cyan-200/24 transition-colors group"
            >
              <div className="cyber-icon p-2.5 rounded-md">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-cyber mb-0.5">电话</p>
                <p className="text-sm text-[#DCEAFF]">13164155114</p>
              </div>
            </a>

            {/* WeChat QR */}
            <div className="flex items-center gap-4 p-4 rounded-md border border-cyan-200/10 bg-white/[0.035]">
              <div className="w-24 h-24 rounded-md overflow-hidden border border-cyan-200/18 bg-white p-1.5 shadow-[0_0_24px_rgba(0,229,255,0.12)] shrink-0">
                <img
                  src={wechatQr}
                  alt="微信二维码"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-cyber mb-0.5">微信</p>
                <p className="text-sm text-[#DCEAFF]">扫码添加</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong cyber-panel-line rounded-lg p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-[#F4F8FF] tracking-tight mb-6">下载简历</h3>

          <div className="space-y-4">
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={productResume}
              download="李典的简历-产品策划2.pdf"
              className="flex items-center gap-4 p-5 rounded-md border border-cyan-200/10 bg-white/[0.035] hover:bg-cyan-300/8 hover:border-cyan-200/24 transition-colors group"
            >
              <div className="cyber-icon p-3 rounded-md">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#F4F8FF]">产品策划版简历</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-cyber mt-1">PDF · Product Direction</p>
              </div>
              <Download className="w-5 h-5 text-[#7F93B7] group-hover:text-cyan-200 transition-colors" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href={overseasResume}
              download="李典简历-海外市场.pdf"
              className="flex items-center gap-4 p-5 rounded-md border border-violet-200/10 bg-white/[0.035] hover:bg-violet-300/8 hover:border-violet-200/24 transition-colors group"
            >
              <div className="cyber-icon p-3 rounded-md">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#F4F8FF]">海外市场版简历</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-cyber mt-1">PDF · Global Growth</p>
              </div>
              <Download className="w-5 h-5 text-[#7F93B7] group-hover:text-violet-200 transition-colors" />
            </motion.a>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-md border border-cyan-200/12 bg-[radial-gradient(circle_at_20%_0%,rgba(0,229,255,0.14),transparent_34%),linear-gradient(135deg,rgba(0,229,255,0.08),rgba(255,43,214,0.06))] p-6">
            <p className="text-sm text-readable leading-relaxed">
              谢谢你看到这里！期待成为你的同事^^
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-20 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-cyber">
          © 2026 李典 · 数据驱动的国际化产品人
        </p>
      </motion.div>
    </section>
  )
}
