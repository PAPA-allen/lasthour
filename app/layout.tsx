import type { Metadata } from "next"
import { Playfair_Display, Poppins } from 'next/font/google'
import "./globals.css"
import Navbar from "@/components/navbar"

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Lasthour Restaurant",
  description: "Among the best Levantine chefs in the world, serving you something beyond flavor",
  icons: {
    icon: '/favicon.ico',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-brown-900 text-white overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}