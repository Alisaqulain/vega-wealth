import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Chatbot from '@/components/Chatbot'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import FinancialBackground from '@/components/FinancialBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Vega Wealth - Your Path to Prosperity | Financial Advisory Dubai',
  description: 'Premium wealth management, financial planning, and investment advisory services in Dubai, UAE. Expert financial advisors for NRI investors, professionals, and HNIs.',
  keywords: 'Wealth Management Dubai, Financial Advisor Dubai, Investment Advisory UAE, Financial Planning Dubai, NRI Wealth Management UAE',
  authors: [{ name: 'The Vega Wealth' }],
  openGraph: {
    title: 'The Vega Wealth - Your Path to Prosperity',
    description: 'Premium wealth management and financial advisory services in Dubai, UAE',
    url: 'https://vegawalth.com',
    siteName: 'The Vega Wealth',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Vega Wealth - Your Path to Prosperity',
    description: 'Premium wealth management and financial advisory services in Dubai, UAE',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "The Vega Wealth",
              "description": "Premium wealth management and financial advisory services in Dubai, UAE",
              "url": "https://vegawalth.com",
              "logo": "https://vegawalth.com/logo1.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Arab Emirates"
              },
              "serviceType": [
                "Wealth Management",
                "Financial Planning",
                "Investment Advisory",
                "Insurance Planning",
                "Estate Planning",
                "Mortgage Advisory"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "The Vega Wealth",
              "url": "https://vegawalth.com",
              "logo": "https://vegawalth.com/logo1.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic", "Hindi"]
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <FinancialBackground />
        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
        <ScrollProgress />
        <ScrollToTop />
      </body>
    </html>
  )
}

