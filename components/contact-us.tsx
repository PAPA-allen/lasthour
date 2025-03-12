"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {  PhoneIcon as WhatsApp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="section-padding bg-brown-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-3xl font-bold">Reservations</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-3 bg-transparent border border-brown-600 rounded-sm focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-transparent border border-brown-600 rounded-sm focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 bg-transparent border border-brown-600 rounded-sm focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-transparent border border-brown-600 rounded-sm focus:border-gold focus:outline-none transition-colors"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold text-brown-900 font-medium py-3 rounded-sm hover:bg-gold/90 transition-colors"
              type="submit"
            >
              Submit
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 1,
  }}
  className="fixed bottom-6 right-6 z-50"
>
  <motion.a
    href="https://wa.me/+233247549825" 
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-all cursor-pointer"
    aria-label="Contact us on WhatsApp"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0 0 rgba(37, 211, 102, 0.5)",
          "0 0 0 10px rgba(37, 211, 102, 0)",
          "0 0 0 0 rgba(37, 211, 102, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
      className="absolute inset-0 rounded-full"
    />
    <FaWhatsapp className="h-8 w-8 text-white" />
  </motion.a>
</motion.div>
    </section>
  )
}
