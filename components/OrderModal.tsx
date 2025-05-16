'use client'

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faImage, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone'
import Image from 'next/image'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  orderType: 'upload' | 'describe'
  selectedItem: {
    id: string
    size: {
      name: string
      dimensions: string
    }
    frame: {
      name: string
    }
  }
  onUpdateItem: (itemId: string, updates: {
    orderType: 'upload' | 'describe'
    images?: File[]
    description?: string
    status: 'ready'
  }) => void
}

interface CustomerInfo {
  firstName: string
  lastName: string
  address: string
  phone: string
}

const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  orderType,
  selectedItem,
  onUpdateItem
}) => {
  const [images, setImages] = useState<File[]>([])
  const [description, setDescription] = useState('')
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [error, setError] = useState('')
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    address: '',
    phone: ''
  })
  const [step, setStep] = useState<'content' | 'info'>('content')

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    // Handle rejected files
    if (rejectedFiles.length > 0) {
      const errorMessages = rejectedFiles.map(file => {
        if (file.errors[0]?.code === 'file-too-large') {
          return 'Le fichier est trop volumineux (max 5MB)'
        }
        if (file.errors[0]?.code === 'file-invalid-type') {
          return 'Format de fichier non supporté'
        }
        return 'Erreur lors du téléchargement'
      })
      setError(errorMessages[0])
      return
    }

    // Clear any previous errors
    setError('')

    // Check total number of files
    if (images.length + acceptedFiles.length > 5) {
      setError('Maximum 5 images autorisées')
      return
    }

    const newFiles = acceptedFiles.filter(file => file.type.startsWith('image/'))
    setImages(prev => [...prev, ...newFiles])
    
    // Create preview URLs
    const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file))
    setPreviewUrls(prev => [...prev, ...newPreviewUrls])
  }, [images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxSize: 5242880, // 5MB
    maxFiles: 5
  })

  const removeImage = (index: number) => {
    URL.revokeObjectURL(previewUrls[index])
    setImages(prev => prev.filter((_, i) => i !== index))
    setPreviewUrls(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (orderType === 'upload' && images.length === 0) {
      setError('Veuillez sélectionner au moins une image')
      return
    }

    if (orderType === 'describe' && description.trim().length < 10) {
      setError('Veuillez fournir une description plus détaillée (minimum 10 caractères)')
      return
    }

    // Clear any previous errors
    setError('')

    if (step === 'content') {
      setStep('info')
      return
    }

    // Validate customer info
    if (!customerInfo.firstName.trim()) {
      setError('Veuillez entrer votre prénom')
      return
    }
    if (!customerInfo.lastName.trim()) {
      setError('Veuillez entrer votre nom')
      return
    }
    if (!customerInfo.address.trim()) {
      setError('Veuillez entrer votre adresse')
      return
    }
    if (!customerInfo.phone.trim()) {
      setError('Veuillez entrer votre numéro de téléphone')
      return
    }

    // Update the cart item
    onUpdateItem(selectedItem.id, {
      orderType,
      images: orderType === 'upload' ? images : undefined,
      description: orderType === 'describe' ? description : undefined,
      status: 'ready'
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-black/40 rounded-2xl border border-[#F49015]/20 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#F49015] mb-2">
                {orderType === 'upload' ? 'Envoyer vos images' : 'Décrivez votre idée'}
              </h3>
              <p className="text-white/70 mb-6">
                Taille sélectionnée: {selectedItem.size.name} ({selectedItem.size.dimensions})<br />
                Cadre sélectionné: {selectedItem.frame.name}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 'content' ? (
                  orderType === 'upload' ? (
                    <div className="space-y-4">
                      {/* Dropzone */}
                      {error && (
                        <div className="text-red-500 text-sm mb-4">
                          {error}
                        </div>
                      )}
                      <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                          isDragActive
                            ? 'border-[#F49015] bg-[#F49015]/5'
                            : 'border-[#F49015]/20 hover:border-[#F49015]/40'
                        }`}
                      >
                        <input {...getInputProps()} />
                        <FontAwesomeIcon
                          icon={faImage}
                          className={`text-4xl mb-4 ${
                            isDragActive ? 'text-[#F49015]' : 'text-[#F49015]/50'
                          }`}
                        />
                        <p className="text-white/90">
                          {isDragActive
                            ? 'Déposez vos images ici...'
                            : 'Glissez-déposez vos images ici, ou cliquez pour sélectionner'}
                        </p>
                        <p className="text-white/50 text-sm mt-2">
                          Formats acceptés: JPG, PNG, WebP (max 5MB)
                        </p>
                      </div>

                      {/* Image Previews */}
                      {previewUrls.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {previewUrls.map((url, index) => (
                            <div key={url} className="relative group aspect-square">
                              <Image
                                src={url}
                                alt={`Preview ${index + 1}`}
                                fill
                                className="object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/80 text-white/70 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <FontAwesomeIcon icon={faTrash} className="text-sm" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Décrivez votre idée en détail..."
                        className="w-full h-40 bg-black/20 border border-[#F49015]/20 rounded-xl p-4 text-white placeholder-white/50 focus:border-[#F49015] transition-colors"
                        required
                      />
                    </div>
                  )
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Prénom</label>
                        <input
                          type="text"
                          value={customerInfo.firstName}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, firstName: e.target.value }))}
                          className="w-full bg-black/20 border border-[#F49015]/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-[#F49015] transition-colors"
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">Nom</label>
                        <input
                          type="text"
                          value={customerInfo.lastName}
                          onChange={(e) => setCustomerInfo(prev => ({ ...prev, lastName: e.target.value }))}
                          className="w-full bg-black/20 border border-[#F49015]/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-[#F49015] transition-colors"
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Adresse</label>
                      <input
                        type="text"
                        value={customerInfo.address}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full bg-black/20 border border-[#F49015]/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-[#F49015] transition-colors"
                        placeholder="Votre adresse complète"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-2 block">Téléphone</label>
                      <input
                        type="tel"
                        value={customerInfo.phone}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-black/20 border border-[#F49015]/20 rounded-xl p-3 text-white placeholder-white/50 focus:border-[#F49015] transition-colors"
                        placeholder="Votre numéro de téléphone"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  {step === 'info' && (
                    <button
                      type="button"
                      onClick={() => {
                        setStep('content')
                        setError('')
                      }}
                      className="btn-secondary"
                    >
                      Retour
                    </button>
                  )}
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={step === 'content' && orderType === 'upload' && images.length === 0}
                  >
                    {step === 'content' ? 'Continuer' : 'Valider la commande'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default OrderModal