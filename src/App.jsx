import { motion } from 'framer-motion'
import { Send, ArrowRight } from 'lucide-react'
import { FaCoins } from 'react-icons/fa6'
import logo from './assets/logo.png'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col px-4 overflow-hidden relative">

      {/* Background blurs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={-1}
        className="flex items-center justify-center gap-3 pt-8 pb-4"
      >
        <img src={logo} alt="Logo" className="h-14 w-auto" />
        <span className="text-2xl font-bold text-gray-900">Milliy Jamoasi</span>
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
      <div className="relative w-full max-w-lg text-center">

        {/* Badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="inline-flex items-center gap-4 mb-8 bg-red-50 border border-red-200 rounded-2xl px-5 py-4"
          style={{ boxShadow: '0 0 32px rgba(34,197,94,0.12)' }}
        >
          <div className="flex items-center justify-center bg-red-100 rounded-xl w-12 h-12 flex-shrink-0">
            <FaCoins className="w-5 h-5 text-red-500" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">Har 1 ovoz uchun</p>
            <p className="text-4xl font-black text-red-500 leading-none">
              35 000 <span className="text-xl font-bold text-red-400">so'm</span>
            </p>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight mb-4"
        >
          Har bitta ovoz<br />
          <span className="text-red-500">uchun 35 000 so'm!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-lg text-gray-400 mb-8"
        >
          Telegram'da ovoz bering va pul mukofotini oling.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="https://t.me/Openbudgetchibot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold text-2xl rounded-2xl px-12 py-6 transition-colors shadow-lg shadow-red-200"
          >
            <Send className="w-5 h-5" />
            Ovoz berish
            <ArrowRight className="w-5 h-5" />
          </a>

        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={4}
          className="text-xs text-gray-400 mt-8"
        >
          To'lovlar Telegram bot orqali amalga oshiriladi
        </motion.p>
      </div>
      </div>
    </div>
  )
}
