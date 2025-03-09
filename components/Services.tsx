"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, Calendar, Users, Utensils, DollarSign, MapPin, Clock, Mail, Phone } from "lucide-react"
import Link from "next/link"

const cateringServices = [
  {
    id: 1,
    title: "Wedding Receptions",
    description: "Make your special day unforgettable with our elegant wedding catering services.",
    image: "/wedding.png",
    details: {
      fullDescription:
        "Our wedding reception catering service is designed to make your special day truly memorable. We understand that your wedding day is one of the most important days of your life, which is why our team of experienced chefs and event planners work closely with you to create a customized menu that reflects your taste and style.",
      features: [
        "Customized menu planning with personal consultation",
        "Elegant presentation and professional service staff",
        "Options for plated dinners, buffets, or food stations",
        "Special dietary accommodations (vegetarian, vegan, gluten-free)",
        "Cake cutting and dessert service",
        "Champagne toast and beverage packages",
      ],
      capacity: "50-300 guests",
      pricing: "Affordable",
      testimonial: {
        text: "Lasthour catered our wedding and exceeded all our expectations. The food was exceptional, the service impeccable, and they handled every detail perfectly.",
        author: "Sarah & Michael Johnson",
      },
      gallery: [
        "/wedding.png",
        "/wedding.png",
        "/wedding.png",
      ],
    },
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Impress your clients and team with professional catering for meetings and corporate functions.",
    image: "/private.png",
    details: {
      fullDescription:
        "Elevate your corporate events with our professional catering services. Whether you're hosting a business meeting, conference, product launch, or company celebration, our corporate catering packages are designed to impress your clients and team members alike.",
      features: [
        "Breakfast, lunch, dinner, and break options",
        "Executive boxed lunches for meetings",
        "Interactive food stations for networking events",
        "Full-service bar and beverage packages",
        "Audiovisual equipment coordination",
        "Corporate branding opportunities",
      ],
      capacity: "10-500 attendees",
      pricing: "Affordable",
      testimonial: {
        text: "We've used Lasthour for all our quarterly meetings and client events. Their attention to detail and quality of food has helped us make a great impression every time.",
        author: "Robert Chen, CEO of TechGrowth Inc.",
      },
      gallery: [
        "/private.png",
       "/private.png",
        "/private.png",
      ],
    },
  },
  {
    id: 3,
    title: "Private Celebrations",
    description: "From birthdays to anniversaries, we'll make your celebration truly special.",
    image: "/restaurant.png",
    details: {
      fullDescription:
        "Celebrate life's special moments with our private event catering services. From milestone birthdays and anniversaries to family reunions and holiday parties, we bring the exceptional Lasthour dining experience to your chosen venue or home.",
      features: [
        "Personalized menu planning for your occasion",
        "Themed food and beverage options",
        "Passed hors d'oeuvres and appetizer displays",
        "Chef's action stations and live cooking demonstrations",
        "Dessert tables and specialty cakes",
        "Full setup and cleanup services",
      ],
      capacity: "20-150 guests",
      pricing: "Affordable",
      testimonial: {
        text: "The team at Lasthour made my 50th birthday celebration absolutely perfect. The food was amazing, and they took care of everything so I could enjoy my party.",
        author: "Patricia Osei",
      },
      gallery: [
        "/restaurant.png",
        "/restaurant.png",
        "/restaurant.png",
      ],
    },
  },
]

export default function CateringAndEvents() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [selectedService, setSelectedService] = useState<number | null>(null)
  // Add a new state for the contact modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openModal = (id: number) => setSelectedService(id)
  const closeModal = () => setSelectedService(null)

  // Add functions to open and close the contact modal
  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

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

  const getSelectedService = () => {
    if (selectedService === null) return null
    return cateringServices.find((service) => service.id === selectedService)
  }

  return (
    <>
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
              Let us bring the Lasthour experience to your special occasion. Our catering team creates memorable
              culinary experiences for any event.
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
                    onClick={() => openModal(service.id)}
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

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-brown-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {getSelectedService() && (
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closeModal}
                      className="bg-brown-800/80 text-gray-300 hover:text-gold p-2 rounded-full"
                    >
                      <X size={24} />
                    </motion.button>
                  </div>

                  <div className="relative h-64 w-full">
                    <Image
                      src={getSelectedService()?.image || "/placeholder.svg"}
                      alt={getSelectedService()?.title || ""}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-3xl font-bold text-white">{getSelectedService()?.title}</h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-300 mb-6">{getSelectedService()?.details.fullDescription}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center space-x-3 bg-brown-800 p-4 rounded-lg">
                        <Users className="text-gold" size={20} />
                        <div>
                          <p className="text-sm text-gray-400">Capacity</p>
                          <p className="text-white">{getSelectedService()?.details.capacity}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-brown-800 p-4 rounded-lg">
                      ₵
                        <div>
                          <p className="text-sm text-gray-400">Pricing</p>
                          <p className="text-white">{getSelectedService()?.details.pricing}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 bg-brown-800 p-4 rounded-lg">
                        <Calendar className="text-gold" size={20} />
                        <div>
                          <p className="text-sm text-gray-400">Availability</p>
                          <p className="text-white">Year-round</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-medium mb-3 flex items-center">
                        <Utensils className="text-gold mr-2" size={20} />
                        <span>What We Offer</span>
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {getSelectedService()?.details.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gold mr-2">•</span>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-medium mb-3">Gallery</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {getSelectedService()?.details.gallery.map((image, index) => (
                          <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${getSelectedService()?.title} gallery image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* <div className="bg-brown-800 p-4 rounded-lg mb-6">
                      <h3 className="text-lg font-medium mb-2">Client Testimonial</h3>
                      <p className="text-gray-300 italic text-sm mb-2">
                        "{getSelectedService()?.details.testimonial.text}"
                      </p>
                      <p className="text-gold text-sm">— {getSelectedService()?.details.testimonial.author}</p>
                    </div> */}

                    <div className="flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold text-brown-900 px-8 py-3 rounded-sm font-medium hover:bg-gold/90 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          openContactModal()
                        }}
                      >
                        Book This Service
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              closeContactModal()
            }}
          >
            <motion.div
              className="bg-brown-900 rounded-lg max-w-md w-full p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-4">
                  <Calendar className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Book Your Event</h3>
                <p className="text-gray-300 mb-6">
                  Contact our events team to book {getSelectedService()?.title.toLowerCase()} or customize a package for
                  your special occasion.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center space-x-3 p-3 bg-brown-800 rounded-lg">
                    <Mail className="text-gold flex-shrink-0" size={20} />
                    <span className="text-gray-300">events@lasthour.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 p-3 bg-brown-800 rounded-lg">
                    <Phone className="text-gold flex-shrink-0" size={20} />
                    <span className="text-gray-300">+(233) 247-549-825</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-brown-800 text-gray-300 px-4 py-3 rounded-sm font-medium hover:bg-brown-700 transition-colors"
                    onClick={closeContactModal}
                  >
                    Close
                  </motion.button>
                  <motion.a
                    href="tel:+233247549825"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gold text-brown-900 px-4 py-3 rounded-sm font-medium hover:bg-gold/90 transition-colors text-center"
                  >
                    Call Now
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

