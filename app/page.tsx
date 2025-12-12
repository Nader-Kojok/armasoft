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
    <main className="relative min-h-screen">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-10" />


      {/* Accent gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#3B92C9]/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#F49015]/10 via-transparent to-transparent pointer-events-none" />

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