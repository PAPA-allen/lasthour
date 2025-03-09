"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section id="about" className="section-padding bg-brown-900" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-lg overflow-hidden"
            >
              <Image
                src="/restaurant.png"
                alt="People enjoying food at Lasthour"
                width={800}
                height={600}
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-gold mb-2 text-3xl font-bold">Our story</h3>
              <h2 className="section-title">Lasthour 1994</h2>
              <p className="text-gray-300 mb-6">
                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gold border border-gold px-6 py-2 rounded-sm hover:bg-gold/10 transition-colors"
                onClick={openModal}
              >
                Read more
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-brown-800 rounded-lg max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-gold text-2xl font-bold">The Complete Lasthour Story</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gold"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="text-gray-300 space-y-4">
                <p>
                  Founded in 1994, Lasthour began as a small family-owned restaurant in the heart of Tema. What started
                  as a modest establishment with just five tables has grown into one of the most beloved culinary
                  destinations in the region.
                </p>

                <div className="my-4 rounded-lg overflow-hidden">
                  <Image
                    src="/restaurant.png"
                    alt="Historical photo of Lasthour"
                    width={600}
                    height={300}
                    className="w-full object-cover"
                  />
                </div>

                <p>
                  The founder, Chef Emmanuel Addo, brought his grandmother's secret recipes from the northern regions,
                  creating a unique fusion of traditional flavors with modern culinary techniques. His vision was
                  simple: to create a place where people could enjoy exceptional food in a warm, welcoming atmosphere.
                </p>

                <p>
                  Through the years, Lasthour has weathered economic challenges, adapted to changing tastes, and
                  continuously reinvented itself while staying true to its roots. The restaurant has been passed down
                  through two generations, with each new steward adding their own touch while preserving the original
                  essence.
                </p>

                <p>
                  In 2010, we underwent a major renovation, expanding our dining area and modernizing our kitchen while
                  carefully preserving the historic elements of our building. The iconic wooden beams and stone
                  fireplace that have witnessed countless celebrations remain intact.
                </p>

                <p>
                  Today, Lasthour continues to serve the community with the same passion and dedication as on the first
                  day. Our commitment to sourcing local ingredients, supporting regional farmers, and creating memorable
                  dining experiences remains unwavering.
                </p>

                <p>
                  We're proud of our heritage and excited about our future. As we look ahead, we remain committed to
                  honoring our past while embracing innovation and excellence in everything we do.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

