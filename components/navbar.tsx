"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About us", href: "#about" },
  { name: "Services", href: "#catering" },
  { name: "Reservations", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isMobile, setIsMobile] = useState(false)

 
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""))

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    }
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Active section:", entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }
    
    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  const isLinkActive = (href: string) => {
    const section = href.replace("#", "")
    return section === activeSection
  }


  const handleLinkClick = (href: string) => {
    if (isMobile) {
      setActiveSection(href.replace("#", "")) 
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brown-900/95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center">
          <span className=" text-xl font-bold text-gold">L a s t <span className="text-gold">H <span> 🍽️</span> u r </span>
           </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative text-sm transition-colors duration-300 ${
                isLinkActive(link.href) ? "text-gold" : "text-white hover:text-gold"
              }`}
            >
              {link.name}
              {isLinkActive(link.href) && (
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold"
                  layoutId="activeIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}

          <Link
            href="#contact"
            className="bg-gold text-brown-900 px-4 py-2 rounded-sm hover:bg-gold/90 transition-colors duration-300 text-sm font-medium"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brown-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)} // Update active section on mobile
                  className={`relative py-2 pl-3 transition-colors duration-300 ${
                    isLinkActive(link.href)
                      ? "text-gold border-l-2 border-gold bg-brown-700/30"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-gold text-brown-900 px-4 py-2 rounded-sm hover:bg-gold/90 transition-colors duration-300 text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
