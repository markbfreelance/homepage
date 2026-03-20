import Link from 'next/link'

export default function Pricing() {
  const features = [
    'Weekly trash & recycling service',
    'Cans rolled to curb & returned',
    'Reliable local service',
    'No long-term contracts',
  ]

  return (
    <section id="pricing" className="pt-10 pb-10 lg:pl-6">

      <div className="flex items-center gap-2 mb-5">
        <div className="h-0.5 w-5 bg-[#6ab04c]" />
        <h2 className="text-2xl font-black text-[#0f2d4a] tracking-tight">Simple Weekly Pricing</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Price header */}
        <div className="bg-[#1a4f80] px-6 pt-6 pb-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-5xl font-black text-white leading-none">$10</span>
                <span className="text-white/70 text-base font-normal">/ week</span>
              </div>
              <p className="text-white/60 text-xs mt-1.5 font-normal">
                Trash & Recycling •{' '}
                <span className="text-[#a8d45e] font-bold">First Week Free!</span>
              </p>
            </div>
            {/* Map */}
            <div className="shrink-0 w-24 h-16 rounded-xl overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97690.3!2d-75.0588!3d40.2468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bucks County Service Area"
              />
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="px-6 py-5">
          <ul className="space-y-2.5 mb-6">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600 font-normal">
                <div className="w-4 h-4 rounded-full bg-[#6ab04c]/15 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-[#6ab04c]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="block w-full bg-[#6ab04c] hover:bg-[#5a9a3c] text-white font-black py-3.5 rounded-lg text-center transition-all hover:scale-105 text-sm tracking-tight shadow-sm"
          >
            Start Service
          </Link>

          <p className="text-center text-xs text-gray-400 mt-3 font-normal">
            No contracts · Cancel anytime
          </p>
        </div>

      </div>
    </section>
  )
}