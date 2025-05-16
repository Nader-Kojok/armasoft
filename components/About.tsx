'use client'

import Image from 'next/image'
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,146,201,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(59,146,201,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Glowing background effect for the title */}
          <div className="absolute inset-0 bg-[#3B92C9]/5 blur-3xl rounded-full transform -translate-y-1/2" />
          
          <h2 className="section-title relative">
            Notre Expertise
          </h2>
          <div className="card inline-block">
            <p className="text-xl text-white/90 font-medium">
              Des solutions technologiques innovantes pour votre succès
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[#F49015]/20 shadow-[0_0_30px_rgba(244,144,21,0.1)]">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Technologies modernes et innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent mix-blend-multiply" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#3B92C9]">
              Excellence Technologique
            </h3>
            <p className="text-white/90 text-lg">
              ArmaSOFT est un leader reconnu dans la transformation digitale, offrant des solutions
              innovantes en cloud computing, cybersécurité et développement d'applications modernes.
              Notre expertise technique approfondie nous permet d'accompagner les entreprises dans
              leur évolution numérique.
            </p>
            <p className="text-white/90 text-lg">
              Nous nous engageons à fournir des solutions intégrées de haute qualité, adaptées aux
              besoins spécifiques de chaque secteur. Notre approche combine innovation technologique
              et excellence opérationnelle pour garantir le succès de vos projets digitaux.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className="text-[#F49015] text-xl mb-2 group-hover:scale-110 transition-transform" 
                  />
                  <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}