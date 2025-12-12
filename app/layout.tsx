import type { Metadata, Viewport } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: '#F49015',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://armasoft.com'),
  title: {
    default: 'ArmaSoft - Solutions Digitales Innovantes en Côte d\'Ivoire | Développement Web & Mobile',
    template: '%s | ArmaSoft'
  },
  description: 'ArmaSoft est votre partenaire de confiance pour des solutions digitales innovantes. Développement web, applications mobiles, et solutions sur mesure pour transformer vos idées en réalité.',
  keywords: ['développement web', 'applications mobiles', 'solutions digitales', 'Côte d\'Ivoire', 'Abidjan', 'innovation', 'technologie', 'transformation digitale'],
  authors: [{ name: 'ArmaSoft', url: 'https://armasoft.com' }],
  creator: 'ArmaSoft',
  publisher: 'ArmaSoft',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://armasoft.com',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: 'https://armasoft.com',
    siteName: 'ArmaSoft',
    title: 'ArmaSoft - Solutions Digitales Innovantes en Côte d\'Ivoire',
    description: 'Transformez vos idées en applications web et mobiles performantes avec ArmaSoft. Expertise en développement et solutions sur mesure.',
    images: [
      {
        url: 'https://armasoft.com/card_ok.png',
        width: 1200,
        height: 630,
        alt: 'ArmaSoft - Solutions Digitales Innovantes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArmaSoft - Solutions Digitales Innovantes en Côte d\'Ivoire',
    description: 'Développement web et mobile, solutions sur mesure. Transformez vos idées en applications performantes avec ArmaSoft.',
    images: ['https://armasoft.com/card_ok.png'],
    creator: '@ArmaSoft',
    site: '@ArmaSoft'
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${rajdhani.variable} ${inter.variable} font-body antialiased selection:bg-[#F49015] selection:text-white`}>
        {/* Global gradient background extending from top to bottom */}
        <div className="fixed inset-0 bg-[linear-gradient(180deg,_rgba(59,146,201,0.1)_0%,_rgba(244,144,21,0.1)_100%)] pointer-events-none z-0"></div>
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none z-0"></div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}