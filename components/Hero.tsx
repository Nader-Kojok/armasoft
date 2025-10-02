'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faRocket, faBrain, faCode, faServer } from '@fortawesome/free-solid-svg-icons'
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
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity">
        <motion.div
          className="w-full h-full"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Hero background - Modern digital technology"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      
      {/* Modern glass effect and pattern */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(59,146,201,0.1)_0%,_rgba(244,144,21,0.1)_100%)]" />
      
      <motion.div 
        className="relative z-10 text-center text-white px-3 max-w-5xl mx-auto"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-6 md:mb-12 max-w-7xl mx-auto">
          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faServer} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center">Infrastructure Cloud</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Solutions cloud évolutives</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faShieldHalved} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center">Cyber Sécurité & Virtualisation</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Protection et virtualisation</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faBrain} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center">Intelligence Artificielle</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Solutions IA innovantes</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faCode} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center">Solution Logiciel</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Développement sur mesure</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faMobileScreen} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg text-center">Application Web & Mobile</h3>
            <p className="text-xs md:text-sm text-white/70 text-center">Apps modernes et responsives</p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FontAwesomeIcon icon={faRocket} className="text-xl" />
            Démarrer Votre Projet
          </motion.button>
        </div>
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