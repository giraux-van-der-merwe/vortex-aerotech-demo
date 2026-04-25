import type { Metadata } from 'next'
import { bricolage, dmSans, rethinkSans, playfair, plusJakarta } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vortex Aerotech — Precision Agricultural Drone Services',
  description: 'SACAA licensed precision agricultural drone services in South Africa. Crop spraying, granular spreading, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${rethinkSans.variable} ${playfair.variable} ${plusJakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
