import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WorkExamples from "@/components/WorkExamples"
import { WORK_BREADCRUMB_SCHEMA } from "@/data/content"

export const metadata: Metadata = {
  title: "Our Work — Town Square Digital",
  description:
    "A few of the sites Town Square Digital has built for tradespeople and small businesses.",
  alternates: {
    canonical: "/work",
  },
}

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WORK_BREADCRUMB_SCHEMA),
        }}
      />
      <Navbar />
      <main className="pt-16">
        <WorkExamples />
      </main>
      <Footer />
    </>
  )
}
