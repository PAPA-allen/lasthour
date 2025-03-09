import Hero from "@/components/hero"
import MenuShowcase from "@/components/menu-showcase"
import OurStory from "@/components/our-story"
import Faq from "@/components/faq"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import CateringAndEvents from "@/components/Services"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <MenuShowcase />
      <OurStory />
      <CateringAndEvents/>
      <Faq />
      <ContactUs />
      <Footer />
    </main>
  )
}

