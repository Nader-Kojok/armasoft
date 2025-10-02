import React from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCheck, faBuilding, faIndustry, faShoppingCart, faHeartbeat, faGraduationCap, faLandmark, faPlane, faHome, faGamepad, faUtensils, faRocket } from '@fortawesome/free-solid-svg-icons'
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
  const [currentStep, setCurrentStep] = React.useState(1)
  const [selectedSector, setSelectedSector] = React.useState<ServiceType | null>(null)
  const [selectedServices, setSelectedServices] = React.useState<string[]>([])
  const [otherService, setOtherService] = React.useState('')
  const [projectDescription, setProjectDescription] = React.useState('')
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    emailPro: '',
    phone: '',
    company: ''
  })
  
  const [modalState, setModalState] = React.useState({
    isOpen: false,
    status: 'success' as 'success' | 'error',
    message: ''
  })

  const totalSteps = 4

  const sectors = [
    { id: 'startup', name: 'Startup', dimensions: 'Pour les startups en croissance', price: 0, icon: faRocket },
    { id: 'entreprise', name: 'Entreprise', dimensions: 'Pour les entreprises établies', price: 0, icon: faBuilding },
    { id: 'industrie', name: 'Industrie', dimensions: 'Secteur industriel et manufacturier', price: 0, icon: faIndustry },
    { id: 'commerce', name: 'Commerce', dimensions: 'Commerce et distribution', price: 0, icon: faShoppingCart },
    { id: 'sante', name: 'Santé', dimensions: 'Secteur médical et santé', price: 0, icon: faHeartbeat },
    { id: 'education', name: 'Éducation', dimensions: 'Établissements éducatifs', price: 0, icon: faGraduationCap },
    { id: 'finance', name: 'Finance', dimensions: 'Services financiers et bancaires', price: 0, icon: faLandmark },
    { id: 'transport', name: 'Transport', dimensions: 'Transport et logistique', price: 0, icon: faPlane },
    { id: 'immobilier', name: 'Immobilier', dimensions: 'Secteur immobilier', price: 0, icon: faHome },
    { id: 'loisirs', name: 'Loisirs', dimensions: 'Divertissement et loisirs', price: 0, icon: faGamepad },
    { id: 'restauration', name: 'Restauration', dimensions: 'Hôtellerie et restauration', price: 0, icon: faUtensils }
  ]

  const services = [
    { id: 'web', name: 'Application Web', description: 'Solution web responsive et moderne' },
    { id: 'mobile', name: 'Application Mobile', description: 'Apps iOS et Android natives' },
    { id: 'desktop', name: 'Application Bureau', description: 'Logiciels pour Windows, Mac et Linux' },
    { id: 'cloud', name: 'Solution Cloud', description: 'Infrastructure cloud scalable' },
    { id: 'ecommerce', name: 'E-commerce', description: 'Plateforme de vente en ligne' },
    { id: 'saas', name: 'SaaS', description: 'Software as a Service personnalisé' },
    { id: 'api', name: 'API & Intégration', description: 'Services web et intégrations' },
    { id: 'iot', name: 'IoT', description: 'Solutions connectées intelligentes' },
    { id: 'ai', name: 'Intelligence Artificielle', description: 'ML et IA sur mesure' }
  ]

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setModalState({
      isOpen: true,
      status: 'success',
      message: 'Votre requête a été validée avec succès! Notre équipe vous contactera dans les plus brefs délais.'
    })
    
    // Reset form
    setCurrentStep(1)
    setSelectedSector(null)
    setSelectedServices([])
    setOtherService('')
    setProjectDescription('')
    setContactInfo({
      name: '',
      email: '',
      emailPro: '',
      phone: '',
      company: ''
    })
    
    if (selectedSector) {
      await onCustomOrder(selectedSector, { id: 'multi', name: 'Services multiples', description: selectedServices.join(', ') }, projectDescription)
    }
    onClose()
  }

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1: return selectedSector !== null
      case 2: return selectedServices.length > 0 || otherService.trim() !== ''
      case 3: return projectDescription.trim() !== ''
      case 4: return contactInfo.name && contactInfo.email && contactInfo.phone && contactInfo.company
      default: return false
    }
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            step < currentStep 
              ? 'bg-[#F49015] text-white' 
              : step === currentStep 
                ? 'bg-[#F49015] text-white' 
                : 'bg-black/20 text-white/50 border border-[#F49015]/20'
          }`}>
            {step < currentStep ? <FontAwesomeIcon icon={faCheck} /> : step}
          </div>
          {step < totalSteps && (
            <div className={`w-12 h-0.5 transition-all duration-300 ${
              step < currentStep ? 'bg-[#F49015]' : 'bg-[#F49015]/20'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  )

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Secteur d'activité</h3>
        <p className="text-white/70">Dans quel secteur évolue votre entreprise ?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F49015]/40">
        {sectors.map((sector) => (
          <button
            key={sector.id}
            type="button"
            onClick={() => setSelectedSector(sector)}
            className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
              selectedSector?.id === sector.id
                ? 'bg-[#F49015] border-[#F49015] text-white'
                : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <FontAwesomeIcon icon={sector.icon} className="text-2xl" />
              <div className="font-bold">{sector.name}</div>
              <div className="text-xs opacity-75 text-center">{sector.dimensions}</div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  )

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Type de services</h3>
        <p className="text-white/70">Quels services vous intéressent ? (Sélection multiple possible)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F49015]/40">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => handleServiceToggle(service.id)}
            className={`p-4 rounded-lg text-sm transition-all duration-200 border ${
              selectedServices.includes(service.id)
                ? 'bg-[#F49015] border-[#F49015] text-white'
                : 'bg-black/20 border-[#F49015]/20 hover:border-[#F49015]/40 text-white/90'
            }`}
          >
            <div className="font-bold mb-1">{service.name}</div>
            <div className="text-xs opacity-75">{service.description}</div>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <label className="text-sm text-white/70 mb-2 block">Autres services (si non listés ci-dessus)</label>
        <input
          type="text"
          value={otherService}
          onChange={(e) => setOtherService(e.target.value)}
          className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
          placeholder="Décrivez vos besoins spécifiques..."
        />
      </div>
    </motion.div>
  )

  const renderStep3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Description du projet</h3>
        <p className="text-white/70">Parlez-nous de votre projet en détail</p>
      </div>
      
      <div>
        <label className="text-sm text-white/70 mb-2 block">Description de votre projet</label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors min-h-[200px]"
          placeholder="Décrivez votre projet, vos objectifs, vos besoins spécifiques, votre budget approximatif, vos délais..."
          required
        />
      </div>
    </motion.div>
  )

  const renderStep4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Informations de contact</h3>
        <p className="text-white/70">Comment pouvons-nous vous contacter ?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-white/70 mb-2 block">Nom complet *</label>
          <input
            type="text"
            value={contactInfo.name}
            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
            className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-sm text-white/70 mb-2 block">Email *</label>
          <input
            type="email"
            value={contactInfo.email}
            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
            className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label className="text-sm text-white/70 mb-2 block">Email professionnel (facultatif)</label>
          <input
            type="email"
            value={contactInfo.emailPro}
            onChange={(e) => setContactInfo({ ...contactInfo, emailPro: e.target.value })}
            className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-sm text-white/70 mb-2 block">Téléphone *</label>
          <input
            type="tel"
            value={contactInfo.phone}
            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
            className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-white/70 mb-2 block">Entreprise *</label>
          <input
            type="text"
            value={contactInfo.company}
            onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
            className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
            required
          />
        </div>
      </div>
    </motion.div>
  )

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: return renderStep1()
      case 2: return renderStep2()
      case 3: return renderStep3()
      case 4: return renderStep4()
      default: return null
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-[#1a1a1a] border-[#F49015]/20 overflow-hidden flex flex-col p-0">
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F49015]/40 hover:scrollbar-thumb-[#F49015]/60">
            <div className="p-6 space-y-6">
              {renderStepIndicator()}
              {renderCurrentStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="sticky bottom-0 p-4 bg-[#1a1a1a] border-t border-[#F49015]/20">
              <div className="flex justify-between items-center">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1 
                      ? 'bg-black/20 text-white/30 cursor-not-allowed' 
                      : 'bg-black/40 text-white hover:bg-black/60'
                  }`}
                  whileHover={currentStep > 1 ? { scale: 1.02 } : {}}
                  whileTap={currentStep > 1 ? { scale: 0.98 } : {}}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Précédent
                </motion.button>

                {currentStep < totalSteps ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceedFromStep(currentStep)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      canProceedFromStep(currentStep)
                        ? 'bg-[#F49015] hover:bg-[#F49015]/90 text-white'
                        : 'bg-black/20 text-white/30 cursor-not-allowed'
                    }`}
                    whileHover={canProceedFromStep(currentStep) ? { scale: 1.02 } : {}}
                    whileTap={canProceedFromStep(currentStep) ? { scale: 0.98 } : {}}
                  >
                    Suivant
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={!canProceedFromStep(currentStep)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      canProceedFromStep(currentStep)
                        ? 'bg-[#F49015] hover:bg-[#F49015]/90 text-white'
                        : 'bg-black/20 text-white/30 cursor-not-allowed'
                    }`}
                    whileHover={canProceedFromStep(currentStep) ? { scale: 1.02 } : {}}
                    whileTap={canProceedFromStep(currentStep) ? { scale: 0.98 } : {}}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                    Je valide ma requête
                  </motion.button>
                )}
              </div>
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