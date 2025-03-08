"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-brown-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.svg" alt="Lasthour Logo" width={32} height={32} className="mr-2" />
              <span className="font-heading text-xl font-bold text-gold">Lasthour</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Tema, community 5
              <br />
              Street 12, Building 42, 45
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={18} />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={18} />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={18} />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -3 }} className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          {[1, 2, 3].map((i) => (
            <div key={i}>
              <h4 className="font-medium text-white mb-4">Menu</h4>
              <ul className="space-y-2">
                {["Home", "Menu", "About", "Contact us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-brown-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Lasthour. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

