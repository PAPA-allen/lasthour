"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-brown-900 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left side - Logo, Address and Contact */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link className="flex items-center mb-4 justify-center md:justify-start" href="#home">
              <Image src="/logo.svg" alt="Lasthour Logo" width={32} height={32} className="mr-2" />
              <span className="font-heading text-xl font-bold text-gold">Lasthour</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Tema, community 5
              <br />
              Soldier Line, Pentecost Street
            </p>
            <div className="flex flex-col space-y-1">
              <motion.a
                href="mailto:youremail@example.com"
                className="text-gray-400 hover:text-gold transition-colors"
                whileHover={{ y: -3 }}
              >
                <span className="text-sm">Email: youremail@example.com</span>
              </motion.a>

              <motion.a
                href="tel:+233247549825"
                className="text-gray-400 hover:text-gold transition-colors"
                whileHover={{ y: -3 }}
              >
                <span className="text-sm">Phone: +(233) 247-549-825</span>
              </motion.a>
            </div>
          </div>

          {/* Right side - Open Hours */}
          <div className="text-center">
            <h3 className="text-gold text-md font-bold mb-2">OPEN HOURS</h3>
            <p className="text-gray-400 text-sm">
              Monday - Friday: 10 AM - 12 AM
              <br />
              Saturday - Sunday: 9 AM - 1 AM
            </p>
          </div>
        </div>

        <div className="border-t border-brown-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Lasthour. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://portfolio-a8hp.onrender.com"
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                Developed by{" "}
                <span className="font-bold bg-gradient-r from-white to text-gold bg-clip-text bg-transparent">
                  Arcnile
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

