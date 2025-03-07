"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

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
          <h2 className="section-title">Reservation</h2>
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
      {/* <a
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-10 z-[99999] flex items-center justify-center w-16 h-16  text-white transition-colors"
        title="Text us on WhatsApp"
      >
        <motion.div
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} className="rounded-full"/>
        </motion.div>
      </a> */}
    </section>
  )
}
