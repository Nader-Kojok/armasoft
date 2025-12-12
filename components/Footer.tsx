'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons/index'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons/index'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black" />
      
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/armasoft-logo.svg"
                alt="Armasoft"
                width={100}
                height={33}
                className="w-auto h-6"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Votre partenaire de confiance pour des solutions digitales innovantes. 
              Nous transformons vos idées en applications web et mobiles performantes, 
              en mettant l'accent sur l'expérience utilisateur et la qualité.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-lg font-bold text-white">
              Navigation
            </h3>
            <ul className="space-y-3 min-w-[140px]">
              <li>
                <Link href="#accueil" className="text-white/70 hover:text-[#F49015] transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#apropos" className="text-white/70 hover:text-[#F49015] transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#catalogue" className="text-white/70 hover:text-[#F49015] transition-colors text-sm">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-[#F49015] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-lg font-bold text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-[#F49015] w-4 h-4" />
                <span className="text-white/70 text-sm">+225 07 02 222 220</span>
              </li>
              <li className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#F49015] w-4 h-4" />
                <span className="text-white/70 text-sm">info@armasoft.ci</span>
              </li>
              <li className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-[#F49015] w-4 h-4 mt-1" />
                <span className="text-white/70 text-sm">Carrefour Solibra, Treichville<br/>Abidjan, Côte d'Ivoire</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-lg font-bold text-white">
              Suivez-nous
            </h3>
            <div className="flex flex-col space-y-4">
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F49015]/10 flex items-center justify-center text-[#F49015] hover:bg-[#F49015] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F49015]/10 flex items-center justify-center text-[#F49015] hover:bg-[#F49015] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[#F49015]/10 flex items-center justify-center text-[#F49015] hover:bg-[#F49015] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/22507022222220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <span className="text-sm">Envoyer un message WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {currentYear} ArmaSoft. Tous droits réservés.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6">
                <Link href="/mentions-legales" className="text-white/50 hover:text-[#F49015] transition-colors text-sm">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="text-white/50 hover:text-[#F49015] transition-colors text-sm">
                  Politique de confidentialité
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}