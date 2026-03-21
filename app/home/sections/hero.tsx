import Image from 'next/image'
import Link from 'next/link'
import { MapPin, DollarSign, CheckCircle, Users } from 'lucide-react'

const features = [
  { icon: MapPin, title: 'Local Bucks County Service' },
  { icon: DollarSign, title: 'Only $10 Per Week' },
  { icon: CheckCircle, title: 'Reliable Weekly Pickup' },
  { icon: Users, title: 'Perfect for Seniors & Families' },
]

export default function Hero() {
  return (
    <section className="relative pt-[60px] overflow-hidden">

      {/* LCP image — loaded via Next.js Image with priority for fetchpriority=high */}
      <Image
        src="/background/hero-bg-4.webp"
        alt="CanDonkeys hero background"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 640px) 640w, (max-width: 1024px) 1024w, 100vw"
        quality={100}
        className="object-cover object-[70%] md:object-[60%] lg:object-center"
      />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1a4f80] via-[#1a4f80]/75 via-30% to-transparent to-60%" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 pt-28 pb-14 2xl:pt-36 2xl:pb-20">
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            Never Worry About<br />Trash Day Again
          </h1>

          <p className="text-sm md:text-base text-white/90 mb-7 leading-relaxed font-normal max-w-md">
            CanDonkeys rolls your trash and recycling cans to the curb
            and back every week. Reliable service for homeowners, seniors,
            and busy families in Bucks County.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#pricing"
              className="bg-[#6ab04c] hover:bg-[#5a9a3c] text-white font-bold px-6 py-3 rounded-md transition-all hover:scale-105 text-sm shadow"
            >
              Start Weekly Service
            </Link>
            <Link
              href="#service-areas"
              className="bg-transparent hover:bg-white/10 text-white font-bold px-6 py-3 rounded-md border-2 border-white transition-all hover:scale-105 text-sm"
            >
              Check Service Area
            </Link>
          </div>

        </div>
      </div>

      {/* Feature bar — full width strip at bottom of hero */}
      <div className="relative z-10 w-full bg-[#163f63]/90 md:bg-[#163f63]/80 md:backdrop-blur-sm md:border-t md:border-white/10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-white/10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2.5 px-4 py-3">
                <div className="w-7 h-7 bg-[#6ab04c] rounded-full flex items-center justify-center shrink-0">
                  <feature.icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-white font-bold text-xs md:text-sm">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}