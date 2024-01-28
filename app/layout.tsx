import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Concerts R Us',
  description: 'Europes #1 concert apparel brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="https://concerts-r-abdej6hgd-dzlau.vercel.app/api/og" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
