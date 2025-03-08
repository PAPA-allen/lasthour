"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Do you accept early reservations?",
    answer:
      "Yes, we accept reservations up to 3 months in advance. You can book through our website or by calling our reservation line.",
  },
  {
    id: 2,
    question: "Do you accept early reservations?",
    answer:
      "Yes, we accept reservations up to 3 months in advance. You can book through our website or by calling our reservation line.",
  },
  {
    id: 3,
    question: "Do you accept early reservations?",
    answer:
      "Yes, we accept reservations up to 3 months in advance. You can book through our website or by calling our reservation line.",
  },
  {
    id: 4,
    question: "Do you accept early reservations?",
    answer:
      "Yes, we accept reservations up to 3 months in advance. You can book through our website or by calling our reservation line.",
  },
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-brown-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-3xl font-bold">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 border-b border-brown-700 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => toggleFaq(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.div animate={{ rotate: activeIndex === index ? 45 : 0 }} transition={{ duration: 0.3 }}>
                  <Plus size={20} className="text-gold" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 pb-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

