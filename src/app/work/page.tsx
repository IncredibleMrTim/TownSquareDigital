import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WorkExamples from "@/components/WorkExamples"

export const metadata: Metadata = {
  title: "Our Work — Town Square Digital",
  description: "A few of the sites Town Square Digital has built for tradespeople and small businesses.",
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <WorkExamples />
      </main>
      <Footer />
    </>
  )
}
