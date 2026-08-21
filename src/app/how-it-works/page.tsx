import type { Metadata } from "next"
import Footer from "@/components/Footer"
import HowItWorks from "@/components/HowItWorks"
import Navbar from "@/components/Navbar"
import { HOW_IT_WORKS_BREADCRUMB_SCHEMA } from "@/data/content"

export const metadata: Metadata = {
  title: "How It Works — Town Square Digital",
  description:
    "From a quick call to a live website in days, not weeks — see how Town Square Digital builds your site.",
  alternates: {
    canonical: "/how-it-works",
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(HOW_IT_WORKS_BREADCRUMB_SCHEMA),
        }}
      />
      <Navbar />
      <main className="pt-16">
        <HowItWorks />
      </main>
      <Footer />
    </>
  )
}
