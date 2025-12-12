'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'AB Plus Group', logo: '/images/abplusgroup.png' },
  { name: 'Aichti Hotel', logo: '/images/aichtihotel.png' },
  { name: 'Carredor', logo: '/images/carredor.jpg' },
  { name: 'Copaci', logo: '/images/copaci.png' },
  { name: 'DMD', logo: '/images/dmd.png' },
  { name: 'EPCI', logo: '/images/epci.png' },
  { name: 'Foire de Chine', logo: '/images/foiredechine.jpeg' },
  { name: 'Ingco', logo: '/images/ingco.png' },
  { name: 'Orca', logo: '/images/orca.png' },
  { name: 'Palais d\'Akwa', logo: '/images/palaisdakwa.jpeg' },
  { name: 'Sky Fitness', logo: '/images/skyfitness.png' },
]

export default function ClientsMarquee() {
  return (
    <section id="clients" className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Des entreprises de tous secteurs nous font confiance pour leurs projets digitaux.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="relative w-32 h-20 flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F49015]/30 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="relative w-32 h-20 flex items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#F49015]/30 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain max-h-12 w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: "50+", label: "Clients satisfaits" },
            { value: "98%", label: "Taux de satisfaction" },
            { value: "150+", label: "Projets livrés" },
            { value: "5 ans", label: "D'expérience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#F49015]">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
