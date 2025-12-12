'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faIndustry, 
  faBuilding, 
  faCreditCard, 
  faUtensils, 
  faTruck, 
  faShoppingCart, 
  faBoxes,
  faCheckCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import SolutionInterestModal from './SolutionInterestModal'

interface Solution {
  id: string
  title: string
  description: string
  icon: IconDefinition
  features: string[]
}

const solutions: Solution[] = [
  {
    id: 'industrie',
    title: 'Industrie',
    description: 'Logiciel usine de production : rapport entre les matières premières et les produits finis. Optimisez votre chaîne de production avec un suivi en temps réel.',
    icon: faIndustry,
    features: [
      'Suivi de production en temps réel',
      'Gestion des matières premières',
      'Rapports de rendement automatisés',
      'Traçabilité complète des lots',
      'Alertes de maintenance préventive'
    ]
  },
  {
    id: 'batiment',
    title: 'Bâtiment',
    description: 'Suivez l\'avancement et le stock sur les chantiers. Gestion complète des projets de construction avec suivi des ressources et des délais.',
    icon: faBuilding,
    features: [
      'Planification des chantiers',
      'Suivi des ressources et matériaux',
      'Gestion des sous-traitants',
      'Rapports d\'avancement automatiques',
      'Contrôle budgétaire en temps réel'
    ]
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Intégration des services Mobile Money et systèmes bancaires. Solutions de paiement modernes et sécurisées pour votre entreprise.',
    icon: faCreditCard,
    features: [
      'Intégration Mobile Money',
      'Connexion aux systèmes bancaires',
      'Paiements sécurisés',
      'Réconciliation automatique',
      'Rapports financiers détaillés'
    ]
  },
  {
    id: 'restauration',
    title: 'Restauration',
    description: 'Rapport sur le stock des produits en cuisine et tout le système restaurant. Gestion des commandes, tables et inventaire en temps réel.',
    icon: faUtensils,
    features: [
      'Gestion des commandes en cuisine',
      'Suivi des tables en temps réel',
      'Inventaire des produits',
      'Calcul automatique des coûts',
      'Statistiques de vente par plat'
    ]
  },
  {
    id: 'logistique',
    title: 'Logistique',
    description: 'Suivez au millimètre les véhicules et autres engins à moteur. Géolocalisation, maintenance préventive et optimisation des trajets.',
    icon: faTruck,
    features: [
      'Géolocalisation GPS en temps réel',
      'Optimisation des trajets',
      'Maintenance préventive',
      'Suivi de consommation carburant',
      'Historique complet des déplacements'
    ]
  },
  {
    id: 'commerce',
    title: 'Commerce',
    description: 'Logiciel multi-fonction de l\'achat à la vente. Gestion complète du cycle commercial avec caisse, facturation et reporting.',
    icon: faShoppingCart,
    features: [
      'Point de vente (POS)',
      'Facturation automatisée',
      'Gestion des clients',
      'Suivi des achats fournisseurs',
      'Tableaux de bord commerciaux'
    ]
  },
  {
    id: 'stock',
    title: 'Stock',
    description: 'Plus de problème de réapprovisionnement. Alertes automatiques, prévisions et gestion intelligente de vos inventaires.',
    icon: faBoxes,
    features: [
      'Alertes de réapprovisionnement',
      'Prévisions de stock intelligentes',
      'Gestion multi-entrepôts',
      'Inventaires automatisés',
      'Traçabilité des mouvements'
    ]
  }
]

export default function Solutions() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  const handleInterestClick = (solution: Solution) => {
    setSelectedSolution(solution)
    setIsModalOpen(true)
  }

  const activeSolution = solutions[activeTab]

  return (
    <section id="solutions" className="relative py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
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

        {/* Tabs Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {solutions.map((solution, index) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === index
                  ? 'bg-[#F49015] text-white shadow-lg shadow-[#F49015]/30'
                  : 'bg-[#1a1a1a]/80 text-white/70 border border-[#3B92C9]/20 hover:border-[#3B92C9]/50 hover:text-white'
              }`}
            >
              <FontAwesomeIcon 
                icon={solution.icon} 
                className={`text-base ${activeTab === index ? 'text-white' : 'text-[#3B92C9]'}`}
              />
              <span className="hidden sm:inline">{solution.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#3B92C9]/20 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Icon and Title */}
              <div>
                <div className="w-20 h-20 mb-6 rounded-2xl bg-[#3B92C9]/10 border border-[#3B92C9]/30 flex items-center justify-center">
                  <FontAwesomeIcon 
                    icon={activeSolution.icon} 
                    className="text-4xl text-[#3B92C9]" 
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {activeSolution.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {activeSolution.description}
                </p>
                <motion.button
                  onClick={() => handleInterestClick(activeSolution)}
                  className="py-4 px-8 rounded-xl bg-[#F49015] text-white font-semibold text-base hover:bg-[#F49015]/90 transition-all duration-300 shadow-lg shadow-[#F49015]/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Je suis intéressé
                </motion.button>
              </div>

              {/* Right: Features List */}
              <div className="bg-[#0a0a0a]/50 rounded-xl p-6 md:p-8">
                <h4 className="text-lg font-semibold text-[#F49015] mb-6">
                  Fonctionnalités clés
                </h4>
                <ul className="space-y-4">
                  {activeSolution.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-[#3B92C9] mt-1 flex-shrink-0" 
                      />
                      <span className="text-white/80">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
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
