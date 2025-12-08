'use client'

import React from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faIndustry, faBuilding, faCreditCard, faUtensils, faTruck, faShoppingCart, faBoxes, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import ValidationModal from './ValidationModal'

interface SolutionInterestModalProps {
  isOpen: boolean
  onClose: () => void
  solutionType: {
    id: string
    title: string
    icon: IconDefinition
  } | null
}

export default function SolutionInterestModal({ isOpen, onClose, solutionType }: SolutionInterestModalProps) {
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
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
      message: `Merci ! Votre demande pour la solution ${solutionType?.title} a bien été envoyée. Notre équipe vous contactera très rapidement.`
    })
    
    // Reset form
    setContactInfo({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
    
    onClose()
  }

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }))
  }

  const canSubmit = contactInfo.name && contactInfo.email && contactInfo.phone

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-lg max-h-[90vh] bg-[#1a1a1a] border-[#F49015]/20 overflow-hidden flex flex-col p-0">
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-[#F49015]/40 hover:scrollbar-thumb-[#F49015]/60">
            <div className="p-6 space-y-6">
              {/* Header with solution type */}
              <div className="text-center">
                {solutionType && (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#3B92C9]/20 border border-[#3B92C9]/30 flex items-center justify-center">
                    <FontAwesomeIcon icon={solutionType.icon} className="text-2xl text-[#3B92C9]" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  Solution {solutionType?.title}
                </h3>
                <p className="text-white/70">
                  Remplissez ce formulaire et nous vous contacterons pour discuter de votre projet
                </p>
              </div>
              
              {/* Form fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Nom complet *</label>
                  <input
                    type="text"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                    placeholder="Votre nom"
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
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Téléphone *</label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                    placeholder="+XXX XX XX XX XX"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Entreprise (facultatif)</label>
                  <input
                    type="text"
                    value={contactInfo.company}
                    onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                    className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Message (facultatif)</label>
                  <textarea
                    value={contactInfo.message}
                    onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })}
                    className="w-full bg-black/20 border border-[#F49015]/20 rounded-lg px-4 py-3 text-white focus:border-[#F49015] focus:outline-none transition-colors min-h-[100px]"
                    placeholder="Décrivez brièvement vos besoins..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="sticky bottom-0 p-4 bg-[#1a1a1a] border-t border-[#F49015]/20">
              <motion.button
                type="submit"
                disabled={!canSubmit}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  canSubmit
                    ? 'bg-[#F49015] hover:bg-[#F49015]/90 text-white'
                    : 'bg-black/20 text-white/30 cursor-not-allowed'
                }`}
                whileHover={canSubmit ? { scale: 1.02 } : {}}
                whileTap={canSubmit ? { scale: 0.98 } : {}}
              >
                <FontAwesomeIcon icon={faCheck} />
                Envoyer ma demande
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
