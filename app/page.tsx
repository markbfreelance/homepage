import Header from './components/header'
import Hero from './home/sections/hero'
import HowItWorks from './home/sections/howItWorks'
import PerfectFor from './home/sections/perfectFor'
import Pricing from './home/sections/pricing'
import Testimonials from './home/sections/testimonials'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Two-column middle section: How It Works + Perfect For (left) | Pricing (right) */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row gap-0">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            <HowItWorks />
            <PerfectFor />
          </div>
          {/* Right column */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <Pricing />
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  )
}