"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return
      const scrollPosition = window.scrollY
      if (scrollPosition < window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleParallax)
    return () => window.removeEventListener("scroll", handleParallax)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 z-0">
        <Image
          src="/restaurant.png"
          alt="Levantine cuisine"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Taste the authentic <br />
              <span className="text-gold">Restaurant cuisine</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              Among the best Levantine chefs in the world, serving you something beyond flavor
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
              See Menu
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-1/3 md:w-1/4 h-1/3 z-10">
        <Image
          src="/restaurant.png"
          alt="Featured dish"
          fill
          className="object-cover rounded-tl-lg"
        />
      </div>
    </section>
  )
}

