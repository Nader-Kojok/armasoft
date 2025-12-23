'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faRocket, faBrain, faCode, faServer, faPalette, faChevronDown, faLightbulb } from '@fortawesome/free-solid-svg-icons'
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
      {/* Background image with animations */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
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
            src="/images/hero_bg.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3B92C9] leading-tight py-1 md:py-2 mt-2 max-w-5xl mx-auto"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Prenez les bonnes décisions dès maintenant, dirigez en toute maîtrise
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Dotez vos équipes des outils nécessaires pour que tout le monde puisse s'adapter, évoluer et garantir des résultats concrets.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F49015] hover:bg-[#F49015]/90 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors text-base w-full sm:w-auto sm:min-w-[320px] h-[52px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faRocket} className="text-lg" />
            Démarrer Votre Projet
          </motion.button>
          
          <motion.a
            href="#solutions"
            className="bg-transparent border-2 border-[#3B92C9] hover:bg-[#3B92C9]/20 text-white font-semibold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors text-base w-full sm:w-auto sm:min-w-[320px] h-[52px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faLightbulb} className="text-lg" />
            Découvrir nos solutions métiers
          </motion.a>
        </motion.div>

        {/* Hidden cards - preserved for later use */}
        <div className="hidden">
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
        </div>

        {/* Floating Scroll Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="#about"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FontAwesomeIcon icon={faChevronDown} className="text-white text-xl" />
          </motion.a>
        </motion.div>

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