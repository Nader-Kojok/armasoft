'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Types pour nos solutions
type Solution = {
  id: number
  title: string
  category: string
  image: string
  description: string
}

// Solutions et services d'ArmaSOFT
const solutions: Solution[] = [
  {
    id: 1,
    title: "Cloud Migration",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    description: "Migration sécurisée vers le cloud avec optimisation des performances"
  },
  {
    id: 2,
    title: "Cloud Management",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Gestion et optimisation continue de vos ressources cloud"
  },
  {
    id: 3,
    title: "Sécurité Réseau",
    category: "Cybersécurité",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Protection avancée de votre infrastructure réseau"
  },
  {
    id: 4,
    title: "Audit de Sécurité",
    category: "Cybersécurité",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Évaluation complète de votre posture de sécurité"
  },
  {
    id: 5,
    title: "Applications Web",
    category: "Applications",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    description: "Développement d'applications web modernes et évolutives"
  },
  {
    id: 6,
    title: "Applications Mobiles",
    category: "Applications",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Solutions mobiles innovantes pour votre entreprise"
  },
  {
    id: 7,
    title: "Infrastructure IT",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80",
    description: "Conception et gestion d'infrastructures IT robustes"
  },
  {
    id: 8,
    title: "DevOps",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    description: "Automatisation et optimisation de vos processus de développement"
  },
  {
    id: 9,
    title: "Conseil Digital",
    category: "Conseil",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Accompagnement stratégique dans votre transformation digitale"
  }
]

const categories = ["Tous", "Cloud", "Cybersécurité", "Applications", "Infrastructure", "Conseil"]

export default function Catalogue() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredSolutions = solutions.filter(solution => 
    activeCategory === "Tous" ? true : solution.category === activeCategory
  )

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Nos Solutions</h2>
          <p className="text-xl text-white/90">
            Découvrez notre gamme complète de services et solutions technologiques
          </p>
        </motion.div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category
                ? 'bg-[#F49015] text-white'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grille de solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredId(solution.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay avec les informations */}
                <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300 ${
                  hoveredId === solution.id || isMobile ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{solution.title}</h3>
                  <p className="text-sm md:text-base text-white/90 mb-2 md:mb-4">{solution.description}</p>
                  <button className="mt-2 md:mt-4 px-4 md:px-6 py-1.5 md:py-2 bg-[#F49015] text-white rounded-lg hover:bg-[#F49015]/90 transition-colors text-sm md:text-base">
                    En savoir plus
                  </button>
                </div>
              </div>
              {/* Badge de catégorie */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 px-2 md:px-3 py-0.5 md:py-1 bg-black/60 rounded-full text-xs md:text-sm text-white">
                {solution.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucune solution trouvée */}
        {filteredSolutions.length === 0 && (
          <div className="text-center text-white/70 py-12">
            Aucune solution trouvée dans cette catégorie.
          </div>
        )}

        {/* Call to Action pour designs personnalisés */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#F49015]/20 to-[#F49015]/5 rounded-2xl p-8 border border-[#F49015]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Besoin d'une solution sur mesure ?
            </h3>
            <p className="text-white/90 mb-6">
              Nos experts sont là pour vous accompagner dans votre projet
            </p>
            <button className="px-8 py-3 bg-[#F49015] text-white rounded-lg hover:bg-[#F49015]/90 transition-colors">
              Contactez-nous
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}