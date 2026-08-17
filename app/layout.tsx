import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const siteUrl = 'https://shanzoo.vercel.app';
const ogImage = {
  url: `${siteUrl}/images/neon-good-vibes.png`,
  width: 1672,
  height: 941,
  alt: "Shanzoo Tanger — Good Vibes Only",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SHANZOO | Tanger — Eat, Drink & Chill',
  description: 'Shanzoo Tanger — Specialized in Spanish & Italian cuisine. Feel the Night. Open all week 16:00 – 04:00. Eat, drink & chill. Good vibes only.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'SHANZOO | Tanger — Eat, Drink & Chill',
    description: 'Specialized in Spanish & Italian cuisine. Feel the Night. Open all week 16:00 – 04:00. Good vibes only.',
    url: siteUrl,
    siteName: 'Shanzoo Tanger',
    images: [ogImage],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SHANZOO | Tanger — Eat, Drink & Chill',
    description: 'Specialized in Spanish & Italian cuisine. Feel the Night. Good vibes only.',
    images: [ogImage.url],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
