import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing"
import { PRICING_BREADCRUMB_SCHEMA } from "@/data/content"

export const metadata: Metadata = {
  title: "Pricing — Town Square Digital",
  description:
    "Simple, upfront website pricing for tradespeople and small businesses. Starter and Professional packages, plus a monthly Care Plan.",
  alternates: {
    canonical: "/pricing",
  },
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PRICING_BREADCRUMB_SCHEMA),
        }}
      />
      <Navbar />
      <main className="pt-16">
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
