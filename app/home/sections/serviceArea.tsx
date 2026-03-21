import { MapPin } from 'lucide-react'

const areas = [
  { name: 'Bensalem', zip: '19020' },
  { name: 'Langhorne', zip: '19047' },
  { name: 'Festerville', zip: '19053' },
  { name: 'Trevose', zip: '19053' },
  { name: 'Feasterville', zip: '19053' },
  { name: 'Penndel', zip: '19047' },
  { name: 'Levittown', zip: '19054' },
  { name: 'Bristol', zip: '19007' },
  { name: 'Newtown', zip: '18940' },
  { name: 'Yardley', zip: '19067' },
  { name: 'Morrisville', zip: '19067' },
  { name: 'Churchville', zip: '18966' },
]

export default function ServiceArea() {
  return (
    <section id="service-areas" className="py-16 bg-white scroll-mt-16">
      <div className="container mx-auto px-8">

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — text + area list */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-5 bg-[#6ab04c]" />
              <span className="text-[#6ab04c] text-xs font-bold tracking-widest uppercase">Where We Operate</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f2d4a] tracking-tight mb-4">
              Serving Bucks County, PA
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              We currently provide weekly trash and recycling can service across the following communities in Bucks County. Don't see your area? Reach out — we're always expanding.
            </p>

            {/* Area grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2.5 bg-gray-50 hover:bg-[#1a4f80]/5 border border-gray-100 hover:border-[#1a4f80]/20 rounded-lg px-3.5 py-2.5 transition-colors group"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#6ab04c] shrink-0 group-hover:text-[#1a4f80] transition-colors" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-bold text-[#0f2d4a] leading-none">{area.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{area.zip}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="bg-[#6ab04c] hover:bg-[#5a9a3c] text-white font-bold px-6 py-3 rounded-md transition-all hover:scale-105 text-sm shadow"
              >
                Contact Us
              </a>
              <p className="text-xs text-gray-400">Not sure? Just ask — we'll let you know!</p>
            </div>
          </div>

          {/* Right — map */}
          <div className="w-full lg:w-[420px] shrink-0">
            <div className="relative h-64 lg:h-full min-h-[320px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97690.3!2d-75.0588!3d40.2468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CanDonkeys Service Area — Bucks County PA"
                className="absolute inset-0"
              />
              {/* Overlay badge */}
              <div className="absolute top-3 left-3 bg-[#0f2d4a]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#6ab04c]" strokeWidth={2.5} />
                Bucks County, PA
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}