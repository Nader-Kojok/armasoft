'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faIndustry, 
  faBuilding, 
  faCreditCard, 
  faUtensils, 
  faTruck, 
  faShoppingCart, 
  faBoxes,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import SolutionInterestModal from './SolutionInterestModal'

interface Solution {
  id: string
  title: string
  description: string
  icon: IconDefinition
}

const solutions: Solution[] = [
  {
    id: 'industrie',
    title: 'Industrie',
    description: 'Logiciel usine de production : rapport entre les matières premières et les produits finis. Optimisez votre chaîne de production avec un suivi en temps réel.',
    icon: faIndustry
  },
  {
    id: 'batiment',
    title: 'Bâtiment',
    description: 'Suivez l\'avancement et le stock sur les chantiers. Gestion complète des projets de construction avec suivi des ressources et des délais.',
    icon: faBuilding
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Intégration des services Mobile Money et systèmes bancaires. Solutions de paiement modernes et sécurisées pour votre entreprise.',
    icon: faCreditCard
  },
  {
    id: 'restauration',
    title: 'Restauration',
    description: 'Rapport sur le stock des produits en cuisine et tout le système restaurant. Gestion des commandes, tables et inventaire en temps réel.',
    icon: faUtensils
  },
  {
    id: 'logistique',
    title: 'Logistique',
    description: 'Suivez au millimètre les véhicules et autres engins à moteur. Géolocalisation, maintenance préventive et optimisation des trajets.',
    icon: faTruck
  },
  {
    id: 'commerce',
    title: 'Commerce',
    description: 'Logiciel multi-fonction de l\'achat à la vente. Gestion complète du cycle commercial avec caisse, facturation et reporting.',
    icon: faShoppingCart
  },
  {
    id: 'stock',
    title: 'Stock',
    description: 'Plus de problème de réapprovisionnement. Alertes automatiques, prévisions et gestion intelligente de vos inventaires.',
    icon: faBoxes
  }
]

export default function Solutions() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null)

  const handleInterestClick = (solution: Solution) => {
    setSelectedSolution(solution)
    setIsModalOpen(true)
  }

  return (
    <section id="solutions" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nos Solutions Métiers
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Des solutions logicielles adaptées à chaque secteur d'activité pour optimiser votre productivité
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="group relative bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#3B92C9]/20 rounded-2xl p-6 hover:border-[#3B92C9]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-5 rounded-xl bg-[#3B92C9]/10 border border-[#3B92C9]/30 flex items-center justify-center group-hover:bg-[#3B92C9]/20 transition-colors duration-300">
                <FontAwesomeIcon 
                  icon={solution.icon} 
                  className="text-2xl text-[#3B92C9] group-hover:text-[#F49015] transition-colors duration-300" 
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F49015] transition-colors duration-300">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {solution.description}
              </p>

              {/* CTA Button */}
              <motion.button
                onClick={() => handleInterestClick(solution)}
                className="w-full py-3 px-4 rounded-lg bg-[#F49015]/10 border border-[#F49015]/30 text-[#F49015] font-medium text-sm hover:bg-[#F49015] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Je suis intéressé
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interest Modal */}
      <SolutionInterestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        solutionType={selectedSolution}
      />
    </section>
  )
}
