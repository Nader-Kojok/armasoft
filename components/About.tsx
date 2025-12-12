'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  const features = [
    {
      icon: faCloud,
      title: "Cloud Computing",
      description: "Infrastructure cloud évolutive et sécurisée pour votre entreprise"
    },
    {
      icon: faShieldHalved,
      title: "Cybersécurité",
      description: "Protection avancée contre les menaces numériques"
    },
    {
      icon: faMobileScreen,
      title: "Applications Modernes",
      description: "Développement d'applications web et mobiles innovantes"
    },
    {
      icon: faGlobe,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique dans votre transition numérique"
    }
  ]

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,146,201,0.02)_1px,transparent_1px),linear_gradient(to_right,rgba(59,146,201,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="section-title relative">
            Notre Expertise
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Des solutions technologiques innovantes pour votre succès
          </p>
        </motion.div>

        {/* Features Grid - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1a1a1a]/60 backdrop-blur-sm border border-[#3B92C9]/20 rounded-2xl p-8 hover:border-[#3B92C9]/40 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-[#3B92C9]/10 border border-[#3B92C9]/30 flex items-center justify-center group-hover:bg-[#3B92C9]/20 transition-colors duration-300">
                <FontAwesomeIcon 
                  icon={feature.icon} 
                  className="text-2xl text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" 
                />
              </div>
              
              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#F49015] transition-colors duration-300">
                {feature.title}
              </h4>
              
              {/* Description */}
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}