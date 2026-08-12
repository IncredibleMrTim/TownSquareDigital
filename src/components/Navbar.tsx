"use client"

import { useState } from "react"
import { NAV_LINKS } from "@/data/content"
import LogoMark from "./LogoMark"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5">
          <LogoMark size={32} variant="navy" />
          <div>
            <span className="block font-display text-base leading-none font-bold text-brand-navy">
              Town Square
            </span>
            <span className="mt-0.5 block text-xs leading-none font-semibold tracking-widest text-brand-brick uppercase">
              Digital
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((navLink) => (
            <a
              key={navLink.label}
              href={navLink.href}
              className="text-sm font-medium text-stone transition-colors hover:opacity-70"
            >
              {navLink.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact"
          className="hidden items-center rounded-lg bg-brand-brick px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get a free quote
        </a>

        <button
          type="button"
          className="flex h-8 w-8 flex-col justify-center gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-ink transition-all ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`}
          />
          <span className={`block h-0.5 bg-ink transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span
            className={`block h-0.5 bg-ink transition-all ${isMenuOpen ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-line bg-cream px-6 pb-6 md:hidden">
          {NAV_LINKS.map((navLink) => (
            <a
              key={navLink.label}
              href={navLink.href}
              className="py-1 text-sm font-medium text-stone"
              onClick={() => setIsMenuOpen(false)}
            >
              {navLink.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex justify-center rounded-lg bg-brand-brick px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a free quote
          </a>
        </div>
      )}
    </nav>
  )
}
