'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faServer } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
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
          className="text-2xl sm:text-4xl md:text-7xl font-bold mb-3 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#3B92C9] leading-tight py-1 md:py-2 mt-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Votre Partenaire de la
          <br />
          Transformation Digitale
        </motion.h1>
        
        <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-12 max-w-2xl mx-auto text-white/90">
          Leader dans le cloud, la cybersécurité et les applications modernes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-12 max-w-5xl mx-auto">
          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faCloud} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg">Cloud Computing</h3>
            <p className="text-xs md:text-sm text-white/70">Solutions cloud innovantes et évolutives</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faShieldHalved} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg">Cybersécurité</h3>
            <p className="text-xs md:text-sm text-white/70">Protection avancée des données</p>
          </motion.div>

          <motion.div
            className="card group transition-colors duration-300 bg-[#3B92C9]/10 hover:bg-[#F49015]/20 border-1 border-[#3B92C9] hover:border-[#F49015] shadow-lg rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <FontAwesomeIcon icon={faMobileScreen} className="text-2xl md:text-3xl mb-3 md:mb-4 text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" />
            <h3 className="font-bold text-white text-base md:text-lg">Applications Modernes</h3>
            <p className="text-xs md:text-sm text-white/70">Solutions digitales sur mesure</p>
          </motion.div>
        </div>

        <motion.a
          href="#catalogue"
          className="inline-block bg-[#F49015] hover:bg-[#F49015]/90 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg text-sm md:text-lg shadow-lg shadow-[#F49015]/20 hover:shadow-xl hover:shadow-[#F49015]/30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir nos solutions
        </motion.a>
      </motion.div>
    </section>
  )
}