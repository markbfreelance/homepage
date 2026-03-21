'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      address: (form.elements.namedItem('address') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — info */}
          <div className="lg:w-80 shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-5 bg-[#6ab04c]" />
              <span className="text-[#6ab04c] text-xs font-bold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2d4a] tracking-tight mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Have a question about our service or want to sign up? Fill out the form and we'll get back to you within 24 hours.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#1a4f80]/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#1a4f80]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-sm text-gray-500">Bucks County, PA</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#1a4f80]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#1a4f80]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-0.5">Phone</p>
                  <a href="tel:+12155550000" className="text-sm text-gray-500 hover:text-[#6ab04c] transition-colors">
                    (215) 555-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 bg-[#1a4f80]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#1a4f80]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-0.5">Email</p>
                  <a href="mailto:hello@candonkeys.com" className="text-sm text-gray-500 hover:text-[#6ab04c] transition-colors">
                    hello@candonkeys.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-[#6ab04c]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#6ab04c]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-black text-[#0f2d4a] mb-2 tracking-tight">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-[#1a4f80] font-bold hover:text-[#6ab04c] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-[#6ab04c]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a4f80] focus:ring-2 focus:ring-[#1a4f80]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-1.5">
                        Email <span className="text-[#6ab04c]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a4f80] focus:ring-2 focus:ring-[#1a4f80]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(215) 555-0000"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a4f80] focus:ring-2 focus:ring-[#1a4f80]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-1.5">
                        Service Address <span className="text-[#6ab04c]">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        placeholder="123 Main St, Bensalem PA"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a4f80] focus:ring-2 focus:ring-[#1a4f80]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f2d4a] uppercase tracking-wide mb-1.5">
                      Message <span className="text-[#6ab04c]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your trash pickup day, number of cans, or any questions..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#1a4f80] focus:ring-2 focus:ring-[#1a4f80]/10 transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-bold">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#6ab04c] hover:bg-[#5a9a3c] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-black py-3.5 rounded-lg transition-all hover:scale-105 disabled:hover:scale-100 text-sm tracking-tight shadow-sm flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" strokeWidth={2.5} />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}