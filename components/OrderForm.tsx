'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faShieldHalved, faMobileScreen, faGlobe, faHeadset, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

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
  priceMultiplier: number
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
  onCustomOrder: (size: ServiceType, frame: ServiceFrame, orderType: string) => void
}

export default function OrderForm({ sizes, frames, additionalServices, onCustomOrder }: OrderFormProps) {
  const [selectedSize, setSelectedSize] = useState<ServiceType>(sizes[0])
  const [selectedFrame, setSelectedFrame] = useState<ServiceFrame>(frames[0])
  const [projectDescription, setProjectDescription] = useState('')
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onCustomOrder(selectedSize, selectedFrame, projectDescription)
  }

  return (
    <section id="order" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title leading-tight py-2">
            Transformez Votre Vision Technologique
          </h2>
          <p className="section-subtitle">
            Découvrez comment nos solutions innovantes peuvent propulser votre entreprise vers le succès numérique.
            Planifiez une consultation personnalisée avec nos experts.
          </p>
          <div className="flex gap-6 justify-center mb-12 w-full">
            <div className="card flex items-center gap-3 flex-1 max-w-[300px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-white/90">Solutions sur mesure</span>
            </div>
            <div className="card flex items-center gap-3 flex-1 max-w-[300px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-white/90">Sécurité maximale</span>
            </div>
            <div className="card flex items-center gap-3 flex-1 max-w-[300px]">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white/90">Performance optimale</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Demander un devis</h3>
            {/* Type de Service */}
            <div>
              <label className="text-sm text-white/70 mb-3 block">Type de Service</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
                      selectedSize.id === size.id
                        ? 'bg-[#F49015] border-[#F49015] text-white'
                        : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
                    }`}
                  >
                    <div className="font-bold mb-1">{size.name}</div>
                    <div className="text-xs opacity-75">{size.dimensions}</div>
                    {size.price > 0 && (
                      <div className={`text-sm font-bold mt-2 ${selectedSize.id === size.id ? 'text-white' : 'text-[#F49015]'}`}>
                        À partir de {size.price.toLocaleString('fr-FR')} F CFA
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Cadre de Service */}
            <div>
              <label className="text-sm text-white/70 mb-3 block">Cadre de Service</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {frames.map((frame) => (
                  <button
                    key={frame.id}
                    type="button"
                    onClick={() => setSelectedFrame(frame)}
                    className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
                      selectedFrame.id === frame.id
                        ? 'bg-[#F49015] border-[#F49015] text-white'
                        : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
                    }`}
                  >
                    <div className="font-bold mb-1">{frame.name}</div>
                    <div className="text-xs opacity-75">{frame.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Informations de Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-white/70 mb-2 block">Nom complet</label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-2 block">Email professionnel</label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-2 block">Téléphone</label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-2 block">Entreprise</label>
                <input
                  type="text"
                  value={contactInfo.company}
                  onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                  className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Description du Projet */}
            <div>
              <label className="text-sm text-white/70 mb-2 block">Description de votre projet</label>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors min-h-[120px]"
                placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
                required
              />
            </div>

            {/* Services Additionnels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-black/20 p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F49015]/10 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faHeadset} className="text-[#F49015] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{additionalServices.support.title}</h4>
                  <p className="text-sm text-white/70">{additionalServices.support.description}</p>
                </div>
              </div>
              <div className="card bg-black/20 p-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F49015]/10 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-[#F49015] text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{additionalServices.training.title}</h4>
                  <p className="text-sm text-white/70">{additionalServices.training.description}</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 mt-8 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Demander un devis
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}