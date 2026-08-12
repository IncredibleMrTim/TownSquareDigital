import type { Metadata } from "next"
import { Lora, Outfit } from "next/font/google"
import "./globals.css"

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
  title: "Town Square Digital — Affordable Websites for Small Businesses",
  description:
    "This platform offers affordable website building services tailored for small businesses, emphasizing quick turnaround times and exceptional support.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
