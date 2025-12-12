'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Solutions from '@/components/Solutions'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import OrderForm from '@/components/OrderForm'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* Unified continuous background - single source of truth */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] pointer-events-none" />
      
      {/* Subtle accent gradients for visual interest */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(59,146,201,0.15),_transparent)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,_rgba(244,144,21,0.08),_transparent)] pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-10" />

      {/* Content sections */}
      <div className="relative z-20">
        <Hero />
        
        <About />
        <Solutions />

        <OrderForm 
          sizes={[
            { id: 'startup', name: 'Startup', dimensions: 'Pour les startups en croissance', price: 150000 },
            { id: 'business', name: 'Business', dimensions: 'Pour les PME', price: 300000 },
            { id: 'enterprise', name: 'Enterprise', dimensions: 'Pour les grandes entreprises', price: 500000 },
            { id: 'custom', name: 'Sur Mesure', dimensions: 'Solution personnalisée', price: 0 }
          ]}
          frames={[
            { id: 'cloud', name: 'Cloud', description: 'Infrastructure cloud et services managés', priceMultiplier: 1 },
            { id: 'security', name: 'Sécurité', description: 'Solutions de cybersécurité avancées', priceMultiplier: 1.2 },
            { id: 'full', name: 'Full Stack', description: 'Solution complète cloud et sécurité', priceMultiplier: 1.5 }
          ]}
          additionalServices={{
            support: {
              price: 50000,
              freeThreshold: 2,
              title: 'Support 24/7',
              icon: 'faHeadset',
              description: 'Support technique disponible 24h/24 et 7j/7'
            },
            training: {
              price: 75000,
              freeThreshold: 1,
              title: 'Formation',
              icon: 'faGraduationCap',
              description: 'Formation complète et accompagnement personnalisé'
            }
          }}
          onCustomOrder={async (size, frame, orderType) => {
            console.log('Consultation demandée:', { size, frame, orderType })
            return true // Return a successful result
          }}
        />
        
        {/* Clients section */}
        <Clients />
        
        {/* Contact and Footer sections */}
        <Contact />
        <Footer />
      </div>
    </main>
  )
}