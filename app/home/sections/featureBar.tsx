export default function FeaturesBar() {
  const features = [
    { icon: '📍', title: 'Local Bucks County Service' },
    { icon: '💵', title: 'Only $10 Per Week' },
    { icon: '✅', title: 'Reliable Weekly Pickup' },
    { icon: '👴', title: 'Perfect for Seniors & Families' },
  ]

  return (
    <section className="bg-[#1a4d78] py-3.5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#6ab04c] rounded-full flex items-center justify-center shrink-0 text-xs">
                {feature.icon}
              </div>
              <span className="text-white font-semibold text-sm">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}