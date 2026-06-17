import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

import { CartProvider } from '@/components/cart/cart-provider'
import { CartSidebar } from '@/components/cart/cart-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const spaceGrotesk = Space_Grotesk({
  variable: '--font-heading',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ZoneTech | iPhone & Accesorios en Maschwitz',
  description:
    'iPhones sellados, seminuevos y accesorios Apple en Maschwitz. Tomamos tu usado como parte de pago. +600 ventas concretadas.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0d12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-background font-sans antialiased">
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CartSidebar />
          <WhatsAppFab />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
