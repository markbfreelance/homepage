import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'CanDonkeys - Never Worry About Trash Day Again',
  description: 'Weekly trash and recycling can service for Bucks County homeowners, seniors, and busy families. Only $10 per week.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className}>{children}</body>
    </html>
  )
}