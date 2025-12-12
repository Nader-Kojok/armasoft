'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock,
  faHeadset,
  faComments
} from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm'

export default function Contact() {
  const contactInfo = [
    {
      icon: faPhone,
      title: "Téléphone",
      content: "+225 07 02 222 220",
      delay: 0.1
    },
    {
      icon: faEnvelope,
      title: "Email",
      content: "info@armasoft.ci",
      delay: 0.2
    },
    {
      icon: faLocationDot,
      title: "Adresse",
      content: "Carrefour Solibra, Treichville\nAbidjan, Côte d'Ivoire",
      delay: 0.3
    }
  ]

  const openingHours = [
    { day: "Lundi - Vendredi", hours: "8h - 18h" },
    { day: "Samedi", hours: "9h - 13h" },
    { day: "Dimanche", hours: "Fermé" }
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,146,201,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(59,146,201,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Contactez-nous
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Un projet digital ? Une idée à concrétiser ? Notre équipe d'experts est là pour vous accompagner dans la réalisation de vos projets numériques.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Why Contact Us */}
            <div className="card bg-black/40 p-8">
              <h3 className="text-2xl font-bold text-[#F49015] mb-6">
                Pourquoi nous contacter ?
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F49015]/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faHeadset} className="text-[#F49015] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Support technique</h4>
                    <p className="text-white/70 text-sm">Notre équipe d'experts est à votre disposition pour vous accompagner dans vos projets digitaux.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F49015]/10 flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faComments} className="text-[#F49015] text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Conseils d'experts</h4>
                    <p className="text-white/70 text-sm">Bénéficiez de conseils professionnels pour optimiser votre présence digitale.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: info.delay }}
                  viewport={{ once: true }}
                  className={`card bg-black/40 p-6 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3B92C9]/10 flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={info.icon} className="text-[#3B92C9] text-xl" />
                  </div>
                  <h4 className="text-white font-bold mb-2">{info.title}</h4>
                  <p className="text-white/70 whitespace-pre-line">{info.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="card bg-black/40 p-8">
              <h3 className="text-2xl font-bold text-[#F49015] mb-8">
                Envoyez-nous un message
              </h3>
              <ContactForm />
            </div>

            {/* Opening Hours - Moved from left column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card bg-black/40 p-6"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B92C9]/10 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faClock} className="text-[#3B92C9] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Horaires d'ouverture</h4>
                </div>
              </div>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/70">{schedule.day}</span>
                    <span className="text-white font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}