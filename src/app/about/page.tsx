import type { Metadata } from "next"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ABOUT_BREADCRUMB_SCHEMA } from "@/data/content"

export const metadata: Metadata = {
  title: "About — Town Square Digital",
  description:
    "Town Square Digital builds affordable, professional websites for tradespeople and small businesses in Gosport, Portsmouth, Southampton, Fareham and UK-wide.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ABOUT_BREADCRUMB_SCHEMA),
        }}
      />
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </>
  )
}
