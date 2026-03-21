import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — CanDonkeys',
  description: 'Read the terms and conditions for using CanDonkeys weekly trash and recycling can service.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page hero — matches site theme */}
      <div className="relative pt-[60px] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#1a4f80] via-[#1e5a8e] to-[#2a6fa0]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)',
          }}
        />
        {/* Green accent glow bottom-left */}
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#6ab04c] rounded-full blur-3xl opacity-10" />
        <div className="relative container mx-auto px-8 py-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#6ab04c]" />
            <span className="text-[#6ab04c] text-xs font-bold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 py-14 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-10">

          <Section title="1. Acceptance of Terms">
            <p>By signing up for or using CanDonkeys services, you agree to these Terms of Service. If you do not agree, please do not use our service. We reserve the right to update these terms at any time, and continued use of our service constitutes acceptance of any changes.</p>
          </Section>

          <Section title="2. Our Service">
            <p>CanDonkeys provides a weekly can-rolling service in Bucks County, Pennsylvania. Our service includes:</p>
            <ul>
              <li>Moving your trash and/or recycling cans from your designated storage area to the curb before your scheduled pickup</li>
              <li>Returning your cans to their storage area after the municipal pickup is complete</li>
            </ul>
            <p>Service availability is limited to areas we currently serve. You can verify your address qualifies before signing up.</p>
          </Section>

          <Section title="3. Scheduling & Service Days">
            <p>Service is performed on your municipal trash pickup day. It is your responsibility to provide us with your correct pickup day during signup. CanDonkeys is not responsible for missed pickups caused by incorrect information provided by the customer.</p>
            <p>In the event of extreme weather, public holidays, or circumstances beyond our control, service may be delayed or rescheduled. We will make reasonable efforts to notify you in advance.</p>
          </Section>

          <Section title="4. Payment & Billing">
            <ul>
              <li>Service is billed at <strong>$10 per week</strong>, with Free 3-Week Trial!</li>
              <li>Billing occurs on a recurring weekly basis via the payment method on file</li>
              <li>All payments are processed securely. We do not store full card details on our servers</li>
              <li>If a payment fails, we will notify you and attempt to retry. Continued non-payment may result in suspension of service</li>
            </ul>
          </Section>

          <Section title="5. Cancellation">
            <p>You may cancel your service at any time with no penalty. Cancellations must be submitted at least <strong>48 hours before your next scheduled service day</strong> to avoid being charged for that week. To cancel, contact us by email or phone.</p>
          </Section>

          <Section title="6. Your Responsibilities">
            <p>To ensure smooth service, you agree to:</p>
            <ul>
              <li>Provide accurate address and pickup day information</li>
              <li>Ensure cans are accessible on your scheduled service day</li>
              <li>Designate a clear storage location for your cans</li>
              <li>Notify us of any changes to your address, pickup day, or access</li>
              <li>Not overload cans beyond their intended capacity</li>
            </ul>
          </Section>

          <Section title="7. Property & Liability">
            <p>CanDonkeys will take reasonable care when handling your cans and property. However, we are not liable for:</p>
            <ul>
              <li>Pre-existing damage to cans or property</li>
              <li>Damage caused by municipal waste collectors</li>
              <li>Delays or missed service due to circumstances beyond our control (severe weather, road closures, etc.)</li>
              <li>Any indirect or consequential losses arising from the use of our service</li>
            </ul>
            <p>If you believe our team has caused damage during service, please notify us within 24 hours and we will work with you to resolve it fairly.</p>
          </Section>

          <Section title="8. Service Modifications">
            <p>CanDonkeys reserves the right to modify, suspend, or discontinue service with reasonable notice. In the event we discontinue service in your area, you will receive a prorated refund for any prepaid weeks.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>These Terms of Service are governed by the laws of the Commonwealth of Pennsylvania. Any disputes arising from these terms shall be resolved in the courts of Bucks County, Pennsylvania.</p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have any questions about these Terms of Service, please reach out:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:hello@candonkeys.com" className="text-[#1a4f80] font-bold hover:text-[#6ab04c] transition-colors">hello@candonkeys.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+12155550000" className="text-[#1a4f80] font-bold hover:text-[#6ab04c] transition-colors">(215) 555-0000</a></li>
              <li><strong>Address:</strong> Bucks County, PA</li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-black text-[#1a4f80] mb-4 tracking-tight pb-2 border-b-2 border-[#6ab04c]/30">
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3 [&_ul]:space-y-2 [&_ul]:mt-2 [&_ul]:pl-5 [&_ul]:list-disc [&_strong]:text-gray-800 [&_strong]:font-bold">
        {children}
      </div>
    </div>
  )
}