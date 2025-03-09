"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const cateringServices = [
  {
    id: 1,
    title: "Wedding Receptions",
    description: "Make your special day unforgettable with our elegant wedding catering services.",
    image: "/restaurant.png",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impress your clients and team with professional catering for meetings and corporate functions.",
    image: "/restaurant.png",
  },
  {
    id: 3,
    title: "Private Celebrations",
    description: "From birthdays to anniversaries, we'll make your celebration truly special.",
    image: "/restaurant.png",
  },
]

export default function CateringAndEvents() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="catering" className="section-padding bg-brown-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-gold font-medium mb-2">Services</h3>
          <h2 className="section-title text-2xl font-bold">Catering & Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Let us bring the Lasthour experience to your special occasion. Our catering team creates memorable culinary
            experiences for any event.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cateringServices.map((service) => (
            <motion.div
              key={service.id}
              className="bg-brown-900 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gold border border-gold px-4 py-2 rounded-sm hover:bg-gold/10 transition-colors text-sm"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-brown-900 px-8 py-3 rounded-sm font-medium hover:bg-gold/90 transition-colors"
          >
            <Link href="#contact">
            Request a Quote
            </Link>
         
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

