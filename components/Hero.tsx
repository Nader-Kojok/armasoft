'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faRocket, faBrain, faCode, faServer, faPalette } from '@fortawesome/free-solid-svg-icons'
import OrderFormModal from './OrderFormModal'
import { useState } from 'react'

// Mock data for the OrderFormModal
const mockSizes = [
  { id: 'startup', name: 'Startup', dimensions: 'Pour les startups en croissance', price: 999 },
  { id: 'professional', name: 'Professional', dimensions: 'Medium', price: 1999 },
  { id: 'enterprise', name: 'Enterprise', dimensions: 'Large', price: 2999 }
]

const mockFrames = [
  { id: 'web', name: 'Web Application', description: 'Application web moderne et responsive' },
  { id: 'mobile', name: 'Mobile App', description: 'Application mobile native iOS et Android' },
  { id: 'ecommerce', name: 'E-commerce', description: 'Plateforme de vente en ligne complète' }
]

const mockAdditionalServices = {
  support: {
    price: 299,
    freeThreshold: 1999,
    title: 'Support Premium',
    icon: 'headset',
    description: 'Assistance technique 24/7 et maintenance continue'
  },
  training: {
    price: 499,
    freeThreshold: 2999,
    title: 'Formation',
    icon: 'graduation-cap',
    description: 'Formation complète pour votre équipe'
  }
}

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-12">
      {/* Subtle animated gradient orbs for visual interest */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#3B92C9]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#F49015]/10 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-2xl sm:text-4xl md:text-7xl font-bold mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3B92C9] leading-tight py-1 md:py-2 mt-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Votre solution sur mesure
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-5 md:p-8 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faCode} className="text-2xl md:text-3xl mb-4 md:mb-5 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center mb-2">Solution Logiciel</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Logiciels adaptés à vos besoins</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-5 md:p-8 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faMobileScreen} className="text-2xl md:text-3xl mb-4 md:mb-5 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center mb-2">Application Web & Mobile</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Apps modernes et responsives</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-5 md:p-8 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faPalette} className="text-2xl md:text-3xl mb-4 md:mb-5 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center mb-2">UI/UX Design</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Interfaces modernes et intuitives</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-5 md:p-8 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faServer} className="text-2xl md:text-3xl mb-4 md:mb-5 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center mb-2">Infrastructure Cloud</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Solutions cloud évolutives</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-5 md:p-8 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faShieldHalved} className="text-2xl md:text-3xl mb-4 md:mb-5 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center mb-2">Cyber Sécurité & Virtualisation</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Protection et virtualisation</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-5 md:p-8 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faBrain} className="text-2xl md:text-3xl mb-4 md:mb-5 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center mb-2">Intelligence Artificielle</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Solutions IA innovantes</p>
          </motion.div>
        </div>

        <motion.p 
          className="text-base md:text-lg text-white/80 max-w-3xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Chaque projet est unique. Nous concevons des solutions 100% sur mesure, adaptées à vos besoins spécifiques et à votre vision.
        </motion.p>
      </motion.div>

      <OrderFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sizes={mockSizes}
        frames={mockFrames}
        additionalServices={mockAdditionalServices}
        onCustomOrder={async (size, frame, orderType) => {
          // Mock implementation
          return true
        }}
      />
    </section>
  )
}