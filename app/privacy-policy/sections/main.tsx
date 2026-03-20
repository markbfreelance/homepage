import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — CanDonkeys',
  description: 'Learn how CanDonkeys collects, uses, and protects your personal information.',
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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

          <Section title="1. Who We Are">
            <p>CanDonkeys is a local trash and recycling can service operating in Bucks County, Pennsylvania. We provide weekly can-rolling services for homeowners, seniors, and families. When we refer to "we," "us," or "our" in this policy, we mean CanDonkeys.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>When you sign up for our service or contact us, we may collect the following information:</p>
            <ul>
              <li><strong>Personal details</strong> — your name, address, email address, and phone number</li>
              <li><strong>Service details</strong> — your trash pickup day, number of cans, and any special instructions</li>
              <li><strong>Payment information</strong> — billing details processed securely through our payment provider. We do not store your full card details on our servers.</li>
              <li><strong>Communications</strong> — any messages or inquiries you send us</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information solely to provide and improve our service:</p>
            <ul>
              <li>To schedule and complete your weekly can service</li>
              <li>To send you service reminders, updates, or schedule changes</li>
              <li>To process payments and send receipts</li>
              <li>To respond to your questions or support requests</li>
              <li>To improve how our service works for you</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Cookies & Website Data">
            <p>Our website may use basic cookies to understand how visitors use the site (e.g. which pages are visited most). This data is aggregated and anonymous. You can disable cookies in your browser settings at any time without affecting your ability to use our service.</p>
          </Section>

          <Section title="5. Data Security">
            <p>We take reasonable steps to protect your information from unauthorized access, loss, or misuse. Payment processing is handled by industry-standard encrypted payment providers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Request a copy of the personal information we hold about you</li>
              <li>Ask us to correct inaccurate information</li>
              <li>Request that we delete your data, subject to any legal obligations</li>
              <li>Opt out of any non-essential communications at any time</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:hello@candonkeys.com" className="text-[#1a4f80] font-bold hover:text-[#6ab04c] transition-colors">hello@candonkeys.com</a>.</p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>Our services are intended for adults. We do not knowingly collect personal information from children under the age of 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically.</p>
          </Section>

          <Section title="9. Contact Us">
            <p>If you have any questions about this Privacy Policy, please reach out:</p>
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