const testimonials = [
  {
    quote: 'I travel often for work and used to stress about trash day constantly. CanDonkeys completely solved that problem.',
    author: 'Sarah L.',
    location: 'Festerville',
    initials: 'SL',
  },
  {
    quote: 'I signed my parents up and they love it. No more worrying about them hauling heavy cans up the driveway.',
    author: 'Mike R.',
    location: 'Bensalem',
    initials: 'MR',
  },
  {
    quote: 'Simple, affordable, and they always show up. Best $10 I spend every week.',
    author: 'David P.',
    location: 'Langhorne',
    initials: 'DP',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#6ab04c]" />
            <span className="text-[#6ab04c] text-xs font-bold tracking-widest uppercase">What Customers Say</span>
            <div className="h-0.5 w-6 bg-[#6ab04c]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#0f2d4a] tracking-tight">
            Trusted by Bucks County Families
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 border border-gray-100"
            >
              {/* Quote text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a4f80] flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-black tracking-tight">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-black text-[#0f2d4a] tracking-tight">{t.author}</p>
                  <p className="text-xs text-gray-400 font-normal">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}