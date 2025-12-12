'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const clients = [
  {
    name: "Groupe Solibra",
    industry: "Industrie Agroalimentaire",
    testimonial: "ArmaSoft a transformé notre gestion de production avec une solution sur mesure qui a augmenté notre efficacité de 40%.",
    logo: "S"
  },
  {
    name: "Banque Atlantique",
    industry: "Services Financiers",
    testimonial: "Une équipe professionnelle qui comprend les enjeux de sécurité du secteur bancaire. Excellent travail sur notre plateforme digitale.",
    logo: "BA"
  },
  {
    name: "Port Autonome d'Abidjan",
    industry: "Logistique & Transport",
    testimonial: "Le système de suivi logistique développé par ArmaSoft nous permet de gérer nos opérations avec une précision remarquable.",
    logo: "PAA"
  },
  {
    name: "Pharmacie Centrale",
    industry: "Santé & Pharmacie",
    testimonial: "Grâce à leur solution de gestion de stock, nous n'avons plus jamais de rupture sur nos produits essentiels.",
    logo: "PC"
  },
  {
    name: "Hôtel Ivoire",
    industry: "Hôtellerie & Tourisme",
    testimonial: "L'application de réservation et de gestion développée par ArmaSoft a révolutionné notre service client.",
    logo: "HI"
  },
  {
    name: "SODECI",
    industry: "Services Publics",
    testimonial: "Un partenaire technologique fiable qui nous accompagne dans notre transformation digitale depuis 3 ans.",
    logo: "SD"
  }
]

const stats = [
  { value: "50+", label: "Clients satisfaits" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "150+", label: "Projets livrés" },
  { value: "5 ans", label: "D'expérience" }
]

export default function Clients() {
  return (
    <section id="clients" className="relative py-32 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B92C9]/5 to-transparent" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nos Clients
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Ils nous font confiance pour leurs projets digitaux. Découvrez les témoignages de nos partenaires.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-[#1a1a1a]/40 border border-[#3B92C9]/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#F49015] mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a1a1a]/60 backdrop-blur-sm border border-[#3B92C9]/20 rounded-2xl p-8 hover:border-[#F49015]/40 transition-all duration-300"
            >
              {/* Quote Icon */}
              <FontAwesomeIcon 
                icon={faQuoteLeft} 
                className="absolute top-6 right-6 text-2xl text-[#3B92C9]/20 group-hover:text-[#F49015]/30 transition-colors duration-300" 
              />
              
              {/* Client Logo/Initial */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-[#3B92C9]/20 to-[#F49015]/20 border border-[#3B92C9]/30 flex items-center justify-center group-hover:from-[#F49015]/30 group-hover:to-[#3B92C9]/20 transition-all duration-300">
                <span className="text-xl font-bold text-white">
                  {client.logo}
                </span>
              </div>
              
              {/* Testimonial */}
              <p className="text-white/70 leading-relaxed mb-6 text-sm">
                "{client.testimonial}"
              </p>
              
              {/* Client Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-bold group-hover:text-[#F49015] transition-colors duration-300">
                  {client.name}
                </h4>
                <p className="text-[#3B92C9] text-sm">
                  {client.industry}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1a1a]/60 border border-[#F49015]/20">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B92C9] to-[#F49015] border-2 border-[#1a1a1a] flex items-center justify-center"
                >
                  <span className="text-xs font-bold text-white">
                    {['A', 'B', 'C', 'D'][i]}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-white/70 text-sm">
              Rejoignez nos <span className="text-[#F49015] font-semibold">50+ clients</span> satisfaits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
