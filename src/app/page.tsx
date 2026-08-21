import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { ORGANIZATION_SCHEMA } from "@/data/content"

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
      </main>
      <Footer />
    </>
  )
}
