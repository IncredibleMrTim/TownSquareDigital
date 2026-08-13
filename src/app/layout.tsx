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

const SITE_TITLE =
  "Town Square Digital UK — Affordable Websites for Tradespeople & Small Businesses"
const SITE_DESCRIPTION =
  "UK web design for tradespeople and small businesses. Affordable, professional websites live in days, not weeks — no hidden fees, no agency contracts."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.townsquaredigital.co.uk"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Town Square Digital",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <body>{children}</body>
      {gaMeasurementId && <GoogleAnalytics gaId={gaMeasurementId} />}
    </html>
  )
}
