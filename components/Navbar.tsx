'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-50/98 backdrop-blur-xl shadow-sm border-b border-neutral-200/40'
          : 'bg-neutral-50/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Logo - Transparent only, no text */}
          <Link href="/" className="group">
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <Image
                src="/logo1.png"
                alt="The Vega Wealth"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-90"
                priority
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 font-medium text-sm transition-all duration-300 rounded-lg ${
                  pathname === link.href
                    ? 'text-primary-navy bg-neutral-100'
                    : 'text-neutral-600 hover:text-primary-navy hover:bg-neutral-50/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="ml-6 px-7 py-2.5 bg-accent-gold text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow-md hover:bg-accent-gold-dark transition-all duration-300"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100"
          >
            <div className="container-custom py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2.5 font-medium text-base ${
                    pathname === link.href
                      ? 'text-primary-navy'
                      : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary inline-block"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

