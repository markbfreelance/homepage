export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Quick and easy online setup. Tell us your address and trash day — we handle the rest.',
    },
    {
      number: '2',
      title: 'We Roll Your Cans Out',
      description: 'On your pickup day, we take your trash and recycling cans to the curb before collection.',
    },
    {
      number: '3',
      title: 'We Bring Them Back',
      description: 'After the truck comes, we return your cans neatly back to their spot.',
    },
  ]

  return (
    <section id="how-it-works" className="pt-10 pb-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="h-0.5 w-5 bg-[#6ab04c]" />
        <h2 className="text-2xl font-black text-[#0f2d4a] tracking-tight">How It Works</h2>
      </div>

      {/* Equal-height grid — stretch makes all cards same height */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-stretch">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5">

            {/* Step number badge */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#1a4f80] flex items-center justify-center shrink-0">
                <span className="text-white font-black">{step.number}</span>
              </div>
              {/* Connector line — only on sm+ between cards */}
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute -right-1.5 top-9 w-3 h-0.5 bg-gray-200 z-10" />
              )}
            </div>

            <h3 className="text-lg font-black text-[#1a4f80] mb-2 tracking-tight">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed font-normal flex-1">{step.description}</p>

          </div>
        ))}
      </div>
    </section>
  )
}