import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <>
      {/* CTA Band */}
      <section className="bg-gray-50 py-14 text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-2xl font-black text-[#0f2d4a] tracking-tight mb-2">
            Make Trash Day Effortless
          </h2>
          <p className="text-gray-500 text-sm font-normal mb-7 max-w-md mx-auto">
            Join homeowners across Bucks County who never worry about trash day again.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#6ab04c] hover:bg-[#5a9a3c] text-white font-black px-8 py-3.5 rounded-md transition-all hover:scale-105 shadow-md text-sm tracking-tight"
          >
            Get Started — Free 3-Week Trial!
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <div className="container mx-auto px-8">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-50 text-gray-800">
        <div className="container mx-auto px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* Brand column */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <Image
                  src="/logo/logo.webp"
                  alt="CanDonkeys"
                  width={36}
                  height={36}
                  className="h-16 w-auto object-contain"
                />
                {/* <span className="font-black text-lg tracking-tight">
                  <span className="text-white">Can</span>
                  <span className="text-[#a8d45e]">Donkeys</span>
                </span> */}
              </Link>
              <p className="text-xs leading-relaxed mb-6">
                Reliable weekly trash & recycling can service for homeowners, seniors, and families in Bucks County, PA.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-md bg-white/10 hover:bg-[#6ab04c] flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'Service Areas', href: '#service-areas' },
                  { label: 'Contact Us', href: '#contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-[#a8d45e] text-sm font-normal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-4">Service Areas</h4>
              <ul className="space-y-2.5">
                {['Bensalem', 'Langhorne', 'Festerville', 'Trevose', 'Feasterville', 'Penndel'].map((area) => (
                  <li key={area} className="text-sm font-normal">{area}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-black tracking-widest uppercase mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#6ab04c] shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm font-normal">Bucks County, PA</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#6ab04c] shrink-0" strokeWidth={2} />
                  <a href="tel:+12672813939" className="hover:text-[#a8d45e] text-sm font-normal transition-colors">
                    (267) 281-3939
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#6ab04c] shrink-0" strokeWidth={2} />
                  <a href="mailto:support@candonkeys.com" className="hover:text-[#a8d45e] text-sm font-normal transition-colors">
                    support@candonkeys.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs font-normal">
              © {new Date().getFullYear()} CanDonkeys. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="text-xs hover:text-[#a8d45e] transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs hover:text-[#a8d45e] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}