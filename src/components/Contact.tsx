import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, Download, Copy, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-10 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.95)] tracking-tight">联系方式</h2>
        <p className="text-sm text-[rgba(30,50,90,0.5)] mt-2">期待与您的合作与交流</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8"
        >
          <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)] mb-6">联系信息</h3>

          <div className="space-y-4">
            {/* Email */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl bg-white/30 cursor-pointer hover:bg-white/50 transition-colors group"
              onClick={() => copyToClipboard('857140688@qq.com', 'email')}
            >
              <div className="bg-[rgba(30,50,90,0.05)] p-2.5 rounded-xl">
                <Mail className="w-5 h-5 text-[rgba(30,50,90,0.6)]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[rgba(30,50,90,0.4)] mb-0.5">邮箱</p>
                <p className="text-sm text-[rgba(30,50,90,0.8)]">857140688@qq.com</p>
              </div>
              <div className="shrink-0">
                {copied === 'email' ? (
                  <Check className="w-4 h-4 text-[#27AE60]" />
                ) : (
                  <Copy className="w-4 h-4 text-[rgba(30,50,90,0.3)] group-hover:text-[rgba(30,50,90,0.6)] transition-colors" />
                )}
              </div>
            </div>

            {/* Phone */}
            <a
              href="tel:13164155114"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/30 hover:bg-white/50 transition-colors group"
            >
              <div className="bg-[rgba(30,50,90,0.05)] p-2.5 rounded-xl">
                <Phone className="w-5 h-5 text-[rgba(30,50,90,0.6)]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[rgba(30,50,90,0.4)] mb-0.5">电话</p>
                <p className="text-sm text-[rgba(30,50,90,0.8)]">13164155114</p>
              </div>
            </a>

            {/* WeChat QR placeholder */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/30">
              <div className="w-20 h-20 rounded-xl bg-[rgba(30,50,90,0.05)] flex items-center justify-center shrink-0">
                <span className="text-[11px] text-[rgba(30,50,90,0.3)]">微信二维码</span>
              </div>
              <div>
                <p className="text-xs text-[rgba(30,50,90,0.4)] mb-0.5">微信</p>
                <p className="text-sm text-[rgba(30,50,90,0.8)]">扫码添加</p>
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
          className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 p-6 md:p-8"
        >
          <h3 className="text-lg font-normal text-[rgba(30,50,90,0.95)] mb-6">下载简历</h3>

          <div className="space-y-4">
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="#"
              className="flex items-center gap-4 p-5 rounded-xl bg-[rgba(30,50,90,0.05)] hover:bg-[rgba(30,50,90,0.1)] transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Download className="w-5 h-5 text-[rgba(30,50,90,0.7)]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgba(30,50,90,0.9)]">产品策划版简历</p>
                <p className="text-xs text-[rgba(30,50,90,0.4)] mt-0.5">PDF 格式 · 面向产品策划方向</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[rgba(30,50,90,0.3)] group-hover:text-[rgba(30,50,90,0.6)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="#"
              className="flex items-center gap-4 p-5 rounded-xl bg-[rgba(30,50,90,0.05)] hover:bg-[rgba(30,50,90,0.1)] transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Download className="w-5 h-5 text-[rgba(30,50,90,0.7)]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgba(30,50,90,0.9)]">海外市场版简历</p>
                <p className="text-xs text-[rgba(30,50,90,0.4)] mt-0.5">PDF 格式 · 面向海外市场方向</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[rgba(30,50,90,0.3)] group-hover:text-[rgba(30,50,90,0.6)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[rgba(30,50,90,0.08)] to-[rgba(52,152,219,0.08)]">
            <p className="text-sm text-[rgba(30,50,90,0.7)] leading-relaxed">
              感谢您花时间浏览我的个人网站。如果您对我的经历和能力感兴趣，欢迎通过以上方式联系我，期待与您的交流！
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
        className="mt-20 text-center"
      >
        <p className="text-xs text-[rgba(30,50,90,0.3)]">
          © 2026 李典 · 数据驱动的国际化产品人
        </p>
      </motion.div>
    </section>
  )
}
