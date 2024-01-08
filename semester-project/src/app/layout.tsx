import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Logobar from './components/Logobar'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "PhotonFiberInteractive",
  description: "Gaming Brilliance, One Pixel at a Time",
}

const pages: Record<string, `/${string}`> = {
  home: "/",

  games: "/games",
  assets:"/assets",

  subscribe: "/subscribe",
  support :"/support",
  careers:"/careers",


  signin: "/signin",
}; // ili "as const" ovdje

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Logobar/>
        <Navbar pages={pages}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
