'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faCode, faBrain, faPalette } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  const features = [
    {
      icon: faCode,
      title: "Solutions Logicielles",
      description: "Développement de logiciels métiers adaptés à vos besoins spécifiques. ERP, CRM et outils de gestion personnalisés."
    },
    {
      icon: faMobileScreen,
      title: "Applications Web & Mobile",
      description: "Applications performantes et responsives sur tous les appareils. Technologies modernes pour une expérience utilisateur optimale."
    },
    {
      icon: faPalette,
      title: "UI/UX Design",
      description: "Interfaces modernes et intuitives centrées sur l'utilisateur. Nous créons des expériences digitales mémorables qui convertissent."
    },
    {
      icon: faCloud,
      title: "Infrastructure Cloud",
      description: "Solutions cloud évolutives et sécurisées. Nous concevons des architectures performantes qui s'adaptent à la croissance de votre entreprise."
    },
    {
      icon: faShieldHalved,
      title: "Cybersécurité & Virtualisation",
      description: "Protection avancée de vos données et systèmes. Audits de sécurité, mise en place de pare-feux et solutions de virtualisation complètes."
    },
    {
      icon: faBrain,
      title: "Intelligence Artificielle",
      description: "Solutions IA sur mesure pour automatiser vos processus. Machine learning, analyse prédictive et chatbots intelligents."
    }
  ]

  return (
    <section id="about" className="relative py-16 md:py-20 overflow-hidden">
      
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

        {/* Features Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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