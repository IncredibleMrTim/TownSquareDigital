import type { Metadata } from "next"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { CONTACT_BREADCRUMB_SCHEMA } from "@/data/content"

export const metadata: Metadata = {
  title: "Contact — Town Square Digital",
  description:
    "Get a free quote from Town Square Digital. Serving tradespeople and small businesses in Gosport, Portsmouth, Southampton, Fareham and UK-wide.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(CONTACT_BREADCRUMB_SCHEMA),
        }}
      />
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
