"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-brown-900 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center text-center">
          <div className="">
            <div className="flex items-center mb-4 text-center justify-center">
              <Image src="/logo.svg" alt="Lasthour Logo" width={32} height={32} className="mr-2" />
              <span className="font-heading text-xl font-bold text-gold">Lasthour</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Tema, community 5
              <br />
              Street 12, Building 42, 45
            </p>
            <div className="flex space-x-4 flex-col md:flex-row">
              <motion.a
                href="mailto:youremail@example.com"
                className="text-gray-400 hover:text-gold transition-colors"
                whileHover={{ y: -3 }}
              >
                <span className="text-sm">Email: youremail@example.com</span>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-gold transition-colors"
                whileHover={{ y: -3 }}
              >
                <span className="text-sm">Phone: +233 (234) 567-890</span>
              </motion.a>
            </div>

          </div>
        </div>

        <div className="border-t border-brown-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lasthour. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="https://portfolio-a8hp.onrender.com" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Developed by <span className="font-bold bg-gradient-r from-white to text-gold bg-clip-text bg-transparent">Arcnile</span>
              </Link>
          
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

