import React from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ValidationModal from './ValidationModal'

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

interface OrderFormModalProps {
  isOpen: boolean
  onClose: () => void
  sizes: ServiceType[]
  frames: ServiceFrame[]
  additionalServices: AdditionalServices
  onCustomOrder: (size: ServiceType, frame: ServiceFrame, orderType: string) => Promise<boolean>
}

export default function OrderFormModal({ isOpen, onClose, sizes, frames, additionalServices, onCustomOrder }: OrderFormModalProps) {
  const [selectedSize, setSelectedSize] = React.useState<ServiceType>(sizes[0])
  const [selectedFrame, setSelectedFrame] = React.useState<ServiceFrame>(frames[0])
  const [projectDescription, setProjectDescription] = React.useState('')
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  
  const [modalState, setModalState] = React.useState({
    isOpen: false,
    status: 'success' as 'success' | 'error',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setModalState({
      isOpen: true,
      status: 'success',
      message: 'Votre demande a été envoyée avec succès! Notre équipe vous contactera dans les plus brefs délais.'
    })
    
    setProjectDescription('')
    setContactInfo({
      name: '',
      email: '',
      phone: '',
      company: ''
    })
    
    await onCustomOrder(selectedSize, selectedFrame, projectDescription)
    onClose()
  }

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-[#1a1a1a] border-[#F49015]/20 overflow-hidden flex flex-col p-0">
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F49015]/40 hover:scrollbar-thumb-[#F49015]/60">
            <div className="p-4 md:p-6 space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">Demander un devis</h3>
              
              {/* Type de Service */}
              <div>
                <label className="text-sm text-white/70 mb-2 block">Type de Service</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSize({
                      id: 'startup',
                      name: 'Startup',
                      dimensions: 'Pour les startups en croissance',
                      price: 0
                    })}
                    className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
                      selectedSize.id === 'startup'
                        ? 'bg-[#F49015] border-[#F49015] text-white'
                        : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
                    }`}
                  >
                    <div className="font-bold mb-1">Startup</div>
                    <div className="text-xs opacity-75">Pour les startups en croissance</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSize({
                      id: 'entreprise',
                      name: 'Entreprise',
                      dimensions: 'Pour les entreprises établies',
                      price: 0
                    })}
                    className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
                      selectedSize.id === 'entreprise'
                        ? 'bg-[#F49015] border-[#F49015] text-white'
                        : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
                    }`}
                  >
                    <div className="font-bold mb-1">Entreprise</div>
                    <div className="text-xs opacity-75">Pour les entreprises établies</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSize({
                      id: 'custom',
                      name: 'Sur Mesure',
                      dimensions: 'Solution personnalisée',
                      price: 0
                    })}
                    className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
                      selectedSize.id === 'custom'
                        ? 'bg-[#F49015] border-[#F49015] text-white'
                        : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
                    }`}
                  >
                    <div className="font-bold mb-1">Sur Mesure</div>
                    <div className="text-xs opacity-75">Solution personnalisée</div>
                  </button>
                </div>
              </div>

              {/* Type de Solution */}
              <div>
                <label className="text-sm text-white/70 mb-3 block">Type de Solution</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { id: 'web', name: 'Application Web', description: 'Solution web responsive et moderne' },
                    { id: 'mobile', name: 'Application Mobile', description: 'Apps iOS et Android natives' },
                    { id: 'desktop', name: 'Application Bureau', description: 'Logiciels pour Windows, Mac et Linux' },
                    { id: 'cloud', name: 'Solution Cloud', description: 'Infrastructure cloud scalable' },
                    { id: 'ecommerce', name: 'E-commerce', description: 'Plateforme de vente en ligne' },
                    { id: 'saas', name: 'SaaS', description: 'Software as a Service personnalisé' },
                    { id: 'api', name: 'API & Intégration', description: 'Services web et intégrations' },
                    { id: 'iot', name: 'IoT', description: 'Solutions connectées intelligentes' },
                    { id: 'ai', name: 'Intelligence Artificielle', description: 'ML et IA sur mesure' }
                  ].map((frame) => (
                    <button
                      key={frame.id}
                      type="button"
                      onClick={() => setSelectedFrame(frame as ServiceFrame)}
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
            </div>

            {/* Submit Button - Fixed at bottom */}
            <div className="sticky bottom-0 p-4 bg-[#1a1a1a] border-t border-[#F49015]/20">
              <motion.button
                type="submit"
                className="w-full bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Demander un devis
              </motion.button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ValidationModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        status={modalState.status}
        message={modalState.message}
      />
    </>
  )
} 