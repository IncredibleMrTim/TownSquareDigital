import About from "@/components/About"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing"
import Services from "@/components/Services"
import { ORGANIZATION_SCHEMA } from "@/data/content"
// import Testimonials from "@/components/Testimonials"

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_SCHEMA),
        }}
      />
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
