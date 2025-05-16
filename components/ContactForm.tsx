'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faEnvelope, 
  faMessage,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = form

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
      reset()
      alert('Message envoyé avec succès!')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  const inputClasses = "w-full px-4 py-3 bg-black/20 border border-[#F49015]/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#F49015] focus:ring-1 focus:ring-[#F49015] transition-colors"
  const labelClasses = "text-white/70 text-sm font-medium"
  const errorClasses = "text-[#F49015] text-sm mt-1"

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className={labelClasses}>
          Nom complet
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faUser} className="text-white/30" />
          </div>
          <input
            type="text"
            id="name"
            placeholder="Votre nom"
            {...register('name')}
            className={`${inputClasses} pl-11`}
          />
        </div>
        {errors.name && (
          <p className={errorClasses}>{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Adresse email
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faEnvelope} className="text-white/30" />
          </div>
          <input
            type="email"
            id="email"
            placeholder="votre@email.com"
            {...register('email')}
            className={`${inputClasses} pl-11`}
          />
        </div>
        {errors.email && (
          <p className={errorClasses}>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <div className="relative mt-1">
          <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
            <FontAwesomeIcon icon={faMessage} className="text-white/30" />
          </div>
          <textarea
            id="message"
            rows={5}
            placeholder="Votre message..."
            {...register('message')}
            className={`${inputClasses} pl-11 resize-none`}
          />
        </div>
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
        {!isSubmitting && (
          <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
        )}
      </motion.button>
    </motion.form>
  )
}