import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Services from "@/components/Services"
import { SERVICES_BREADCRUMB_SCHEMA } from "@/data/content"

export const metadata: Metadata = {
  title: "Services — Town Square Digital",
  description:
    "Website design, site refreshes, content updates, Google My Business setup and SEO basics for tradespeople and small businesses.",
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SERVICES_BREADCRUMB_SCHEMA),
        }}
      />
      <Navbar />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </>
  )
}
