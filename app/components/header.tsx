'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a4f80]/40 backdrop-blur-md">
      <nav className="container mx-auto px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.webp"
            alt="CanDonkeys Logo"
            width={60}
            height={60}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-white font-bold hover:text-[#a8d45e] transition-colors drop-shadow">
            How It Works
          </Link>
          <Link href="#pricing" className="text-white font-bold hover:text-[#a8d45e] transition-colors drop-shadow">
            Pricing
          </Link>
          <Link href="#service-areas" className="text-white font-bold hover:text-[#a8d45e] transition-colors drop-shadow">
            Service Areas
          </Link>
          <Link href="#contact" className="text-white font-bold hover:text-[#a8d45e] transition-colors drop-shadow">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1a4f80]/90 backdrop-blur-md md:hidden">
            <div className="flex flex-col py-4">
              <Link href="#how-it-works" className="px-8 py-3 text-white text-sm font-bold hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
              <Link href="#pricing" className="px-8 py-3 text-white text-sm font-bold hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link href="#service-areas" className="px-8 py-3 text-white text-sm font-bold hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>Service Areas</Link>
              <Link href="#contact" className="px-8 py-3 text-white text-sm font-bold hover:bg-white/10 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}