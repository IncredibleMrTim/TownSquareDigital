import About from "@/components/About"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing"
import Services from "@/components/Services"
// import Testimonials from "@/components/Testimonials"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <HowItWorks />
        <Pricing />
        {/* <Testimonials /> */}
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
