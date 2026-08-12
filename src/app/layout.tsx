import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Lora, Outfit } from "next/font/google"
import "./globals.css"

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.townsquaredigital.co.uk"),
  title: "Town Square Digital — Affordable Websites for Small Businesses",
  description:
    "Affordable, professional websites for tradespeople and small businesses across the UK. Live in days, not weeks — no hidden fees.",
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <body>{children}</body>
      {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
    </html>
  )
}
