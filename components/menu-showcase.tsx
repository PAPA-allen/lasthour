"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, type PanInfo } from "framer-motion"

// Enhanced menu items with categories
const menuItems = [
  // Breakfast items
  {
    id: 1,
    name: "Mediterranean Breakfast",
    description: "Fresh eggs, olives, feta cheese, and pita bread",
    image: "/restaurant.png",
    category: "breakfast",
  },
  {
    id: 2,
    name: "Shakshuka",
    description: "Eggs poached in spiced tomato sauce with herbs",
    image: "/restaurant.png",
    category: "breakfast",
  },
  {
    id: 3,
    name: "Manakish Za'atar",
    description: "Flatbread topped with za'atar herb blend",
    image: "/restaurant.png",
    category: "breakfast",
  },
  // Lunch items
  {
    id: 4,
    name: "Salmon Salamonia",
    description: "Roasted salmon with lemon herb sauce",
    image: "/restaurant.png",
    category: "lunch",
  },
  {
    id: 5,
    name: "Lamb Shawarma",
    description: "Slow-roasted lamb with tahini sauce",
    image: "/restaurant.png",
    category: "lunch",
  },
  {
    id: 6,
    name: "Falafel Plate",
    description: "Crispy chickpea fritters with hummus and salad",
    image: "/restaurant.png",
    category: "lunch",
  },
  // Dessert items
  {
    id: 7,
    name: "Baklava",
    description: "Layered pastry with nuts and honey syrup",
    image: "/restaurant.png",
    category: "dessert",
  },
  {
    id: 8,
    name: "Kunafa",
    description: "Sweet cheese pastry soaked in sugar syrup",
    image: "/restaurant.png",
    category: "dessert",
  },
  {
    id: 9,
    name: "Halva",
    description: "Tahini-based sweet with pistachios",
    image: "/restaurant.png",
    category: "dessert",
  },
  // Supper items
  {
    id: 10,
    name: "Mixed Grill Platter",
    description: "Selection of grilled meats with rice and vegetables",
    image: "/restaurant.png",
    category: "supper",
  },
  {
    id: 11,
    name: "Seafood Tagine",
    description: "Slow-cooked seafood stew with aromatic spices",
    image: "/restaurant.png",
    category: "supper",
  },
  {
    id: 12,
    name: "Stuffed Eggplant",
    description: "Roasted eggplant with spiced meat and pine nuts",
    image: "/restaurant.png",
    category: "supper",
  },
]

// Category types
type Category = "all" | "breakfast" | "lunch" | "dessert" | "supper"

export default function MenuShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  // Filter menu items based on active category
  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  // Determine items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

  const maxIndex = Math.max(0, filteredItems.length - itemsPerView)

  // Auto-swipe functionality
  useEffect(() => {
    if (!autoPlayEnabled || isDragging || filteredItems.length <= itemsPerView) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [autoPlayEnabled, isDragging, maxIndex, itemsPerView, filteredItems.length])

  const changeCategory = (category: Category) => {
    setActiveCategory(category)
  }

  // Handle drag/swipe with Framer Motion
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)

    // If we can't swipe (all items fit in view), don't do anything
    if (filteredItems.length <= itemsPerView) return

    const swipeThreshold = 50 // Minimum distance to trigger a swipe

    if (info.offset.x < -swipeThreshold) {
      // Swipe left -> next slide
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right -> previous slide
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }

  return (
    <section id="menu" className="py-16 bg-brown-800" ref={sectionRef}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our best Menu</h2>
          <p className="text-gray-300 mb-8">
            Made from fresh ingredients, cooked with love and passion by our amazing chefs.
          </p>

          {/* Category filter buttons - scrollable on mobile */}
          <div className="flex overflow-x-auto pb-2 -mx-1 hide-scrollbar">
            <div className="flex px-1 space-x-2">
              {(["all", "breakfast", "lunch", "dessert", "supper"] as Category[]).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => changeCategory(category)}
                  className={`px-4 py-2 rounded-md whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gold text-brown-900 font-medium"
                      : "bg-brown-700 text-gray-300 hover:bg-brown-600"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {filteredItems.length > 0 ? (
          <div className="relative">
            {/* Swipe indicator overlay */}
            {filteredItems.length > itemsPerView && (
              <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brown-800 to-transparent pointer-events-none" />
            )}

            <div className="overflow-hidden" ref={carouselRef}>
              <motion.div
                className="flex gap-4 cursor-grab active:cursor-grabbing"
                initial={{ x: 0 }}
                animate={{
                  x:
                    filteredItems.length <= itemsPerView
                      ? 0
                      : `-${currentIndex * (100 / filteredItems.length) * (filteredItems.length / itemsPerView)}%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag={filteredItems.length > itemsPerView ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragStart={() => {
                  setIsDragging(true)
                  setAutoPlayEnabled(false)
                }}
                onDragEnd={handleDragEnd}
                onMouseEnter={() => setAutoPlayEnabled(false)}
                onMouseLeave={() => setAutoPlayEnabled(true)}
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    style={{
                      width:
                        filteredItems.length <= itemsPerView
                          ? `calc(${100 / filteredItems.length}% - ${((filteredItems.length - 1) * 16) / filteredItems.length}px)`
                          : `calc(${100 / itemsPerView}% - ${((itemsPerView - 1) * 16) / itemsPerView}px)`,
                    }}
                    className="flex-shrink-0"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-brown-700 rounded-lg overflow-hidden h-full">
                      <div className="relative h-48 md:h-56">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading text-xl mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Swipe instruction for mobile */}
            {filteredItems.length > itemsPerView && (
              <div className="mt-4 text-center text-sm text-gray-400">
                <p>Swipe to explore more dishes</p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 bg-brown-700/30 rounded-lg">
            <p className="text-gray-300">No menu items found in this category.</p>
          </div>
        )}

        {/* Indicator dots - only show if we have more items than can fit in view */}
        {filteredItems.length > itemsPerView && (
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? "bg-gold" : "bg-brown-600 hover:bg-gold/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

