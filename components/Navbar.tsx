'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faRocket } from '@fortawesome/free-solid-svg-icons'
import OrderFormModal from './OrderFormModal'

// Mock data for the OrderFormModal
const mockSizes = [
  { id: '1', name: 'Basic', dimensions: 'Small', price: 999 },
  { id: '2', name: 'Professional', dimensions: 'Medium', price: 1999 },
  { id: '3', name: 'Enterprise', dimensions: 'Large', price: 2999 }
]

const mockFrames = [
  { id: '1', name: 'Web Application', description: 'Application web moderne et responsive' },
  { id: '2', name: 'Mobile App', description: 'Application mobile native iOS et Android' },
  { id: '3', name: 'E-commerce', description: 'Plateforme de vente en ligne complète' }
]

const mockAdditionalServices = {
  support: {
    price: 299,
    freeThreshold: 1999,
    title: 'Support Premium',
    icon: 'headset',
    description: 'Assistance technique 24/7 et maintenance continue'
  },
  training: {
    price: 499,
    freeThreshold: 2999,
    title: 'Formation',
    icon: 'graduation-cap',
    description: 'Formation complète pour votre équipe'
  }
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              href="/"
              className="relative z-10 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/armasoft-logo.svg"
                alt="Armasoft"
                width={120}
                height={40}
                className="w-auto h-8"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faRocket} className="text-lg" />
                Démarrer Votre Projet
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center text-white hover:text-[#F49015] transition-colors"
            >
              <FontAwesomeIcon 
                icon={isMobileMenuOpen ? faXmark : faBars} 
                className="text-2xl"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Content */}
            <nav className="relative h-full flex flex-col items-center justify-center p-4">
              <div className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-bold text-white hover:text-[#F49015] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="pt-6"
                >
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#F49015] hover:bg-[#F49015]/90 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faRocket} className="text-lg" />
                    Démarrer Votre Projet
                  </motion.button>
                </motion.div>
              </div>

              {/* Brand Watermark */}
              <div className="absolute bottom-8 text-white/10 text-4xl font-bold">
                ArmaSoft
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <OrderFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sizes={mockSizes}
        frames={mockFrames}
        additionalServices={mockAdditionalServices}
        onCustomOrder={async (size, frame, orderType) => {
          // Mock implementation
          return true
        }}
      />
    </>
  )
} 