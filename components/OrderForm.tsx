'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faGlobe, faHeadset, faGraduationCap, faRocket, faCode, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import OrderFormModal from './OrderFormModal'

interface ServiceType {
  id: string
  name: string
  dimensions: string
  price: number
}

interface ServiceFrame {
  id: string
  name: string
  description: string
  priceMultiplier?: number
}

interface AdditionalServices {
  support: {
    price: number
    freeThreshold: number
    title: string
    icon: string
    description: string
  }
  training: {
    price: number
    freeThreshold: number
    title: string
    icon: string
    description: string
  }
}

interface OrderFormProps {
  sizes: ServiceType[]
  frames: ServiceFrame[]
  additionalServices: AdditionalServices
  onCustomOrder: (size: ServiceType, frame: ServiceFrame, orderType: string) => Promise<boolean>
}

export default function OrderForm({ sizes, frames, additionalServices, onCustomOrder }: OrderFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: faRocket,
      title: "Innovation Continue",
      description: "Des solutions à la pointe de la technologie pour garder votre entreprise compétitive"
    },
    {
      icon: faShieldHalved,
      title: "Sécurité Maximale",
      description: "Protection avancée de vos données et conformité aux normes de sécurité"
    },
    {
      icon: faCode,
      title: "Excellence Technique",
      description: "Développement de haute qualité avec les meilleures pratiques du secteur"
    },
    {
      icon: faMobileScreen,
      title: "Multi-Plateforme",
      description: "Applications performantes sur tous les appareils et systèmes"
    },
    {
      icon: faCloud,
      title: "Solutions Cloud",
      description: "Infrastructure évolutive et hautement disponible"
    },
    {
      icon: faLightbulb,
      title: "Conseil Expert",
      description: "Accompagnement stratégique pour optimiser votre transformation digitale"
    }
  ]

  return (
    <section id="order" className="relative py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transformez Votre Vision Technologique
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Découvrez comment nos solutions innovantes peuvent propulser votre entreprise vers le succès numérique.
              Planifiez une consultation personnalisée avec nos experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card bg-black/20 p-6 rounded-xl border border-[#F49015]/20 hover:border-[#F49015]/40 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F49015]/10 flex items-center justify-center mb-4 mx-auto">
                  <FontAwesomeIcon icon={feature.icon} className="text-[#F49015] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-colors text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FontAwesomeIcon icon={faRocket} className="text-xl" />
              Démarrer Votre Projet
            </motion.button>
            <p className="text-white/50 mt-4 text-sm">
              Consultation gratuite • Devis personnalisé • Réponse sous 24h
            </p>
          </motion.div>
        </div>
      </div>

      <OrderFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sizes={sizes}
        frames={frames}
        additionalServices={additionalServices}
        onCustomOrder={onCustomOrder}
      />
    </section>
  )
}