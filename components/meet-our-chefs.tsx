"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const chefs = [
  {
    id: 1,
    name: "Gordon Ramzi",
    position: "Master chef",
    image: "/chef.png",
  },
  {
    id: 2,
    name: "Andrea Checchini",
    position: "Master chef",
    image: "/chef.png",
  },
  {
    id: 3,
    name: "Lorenzo Ramzi",
    position: "Master chef",
    image: "/chef.png",
  },
  {
    id: 4,
    name: "Andrea Checchini",
    position: "Master chef",
    image: "/chef.png",
  },
  {
    id: 5,
    name: "Gordon Ramzi",
    position: "Master chef",
    image: "/chef.png",
  },
  {
    id: 6,
    name: "Lorenzo Ramzi",
    position: "Master chef",
    image: "/chef.png",
  },
]

export default function MeetOurChefs() {
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
    <section id="about-us" className="section-padding bg-brown-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-gold font-medium mb-2">Team</h3>
          <h2 className="section-title text-2xl font-bold">Meet Our Chefs</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {chefs.map((chef) => (
            <motion.div
              key={chef.id}
              className="text-center"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-80 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-xl font-medium">{chef.name}</h3>
              <p className="text-gold text-sm">{chef.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

