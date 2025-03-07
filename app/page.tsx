import Hero from "@/components/hero"
import MenuShowcase from "@/components/menu-showcase"
import OurStory from "@/components/our-story"
import MeetOurChefs from "@/components/meet-our-chefs"
import Faq from "@/components/faq"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MenuShowcase />
      <OurStory />
      <MeetOurChefs />
      <Faq />
      <ContactUs />
      <Footer />
    </main>
  )
}

