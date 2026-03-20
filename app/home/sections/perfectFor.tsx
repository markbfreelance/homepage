import Image from 'next/image'

export default function PerfectFor() {
  const audiences = [
    { title: 'Busy Homeowners', description: 'Never forget trash day', image: '/thumbnails/homeowners.png' },
    { title: 'Seniors', description: 'Safe and convenient service', image: '/thumbnails/seniors.png' },
    { title: 'Rental Properties', description: 'Keep your tenants happy', image: '/thumbnails/properties.png' },
    { title: 'Property Managers', description: 'Reliable service for multiple homes', image: '/thumbnails/managers.png' },
  ]

  return (
    <section className="pb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-0.5 w-5 bg-[#6ab04c]" />
        <h2 className="text-2xl font-black text-[#0f2d4a] tracking-tight">Perfect For</h2>
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all"
          >
            {/* Thumbnail */}
            <div className="relative h-36 overflow-hidden">
              <Image
                src={audience.image}
                alt={audience.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-[#1a4f80]/0 group-hover:bg-[#1a4f80]/10 transition-colors" />
            </div>
            {/* Content */}
            <div className="p-3.5">
              <h3 className="text-lg font-bold text-[#0f2d4a] mb-1 tracking-tight">{audience.title}</h3>
              <p className="text-sm text-gray-400 font-normal leading-relaxed">{audience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}