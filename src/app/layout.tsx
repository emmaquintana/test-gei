import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '¿Eres gei?',
  description: 'Descubre si eres gei o no!',
  authors: {name: 'Emmanuel Quintana'},  
}

export const viewport: Viewport = {
  themeColor: '#ff2890'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Head>
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
