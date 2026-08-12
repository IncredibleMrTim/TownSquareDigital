"use client"

import { useState } from "react"
import { CONTACT_DETAILS, CONTACT_FORM_FIELDS } from "@/data/content"
import type { IContactFormValues } from "@/types/interfaces"
import LogoMark from "./LogoMark"

const INITIAL_FORM_VALUES: IContactFormValues = { name: "", business: "", phone: "", message: "" }

export default function Contact() {
  const [formValues, setFormValues] = useState<IContactFormValues>(INITIAL_FORM_VALUES)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream-dark px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">
            Let&apos;s get your business online
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-stone">
            Send me a message and I&apos;ll come back to you within one working day — usually much sooner. No
            obligation, no hard sell.
          </p>
          <div className="space-y-5">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-base">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-xs tracking-wide text-muted uppercase">{detail.label}</div>
                  <div className="font-medium text-ink">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-3">
            <LogoMark size={28} variant="navy" />
            <p className="text-sm text-muted italic">&ldquo;Where local business meets digital.&rdquo;</p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-8 shadow-sm">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-2xl text-white">
                ✓
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-brand-navy">Message sent!</h3>
              <p className="text-sm text-stone">I&apos;ll be in touch within one working day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="mb-6 font-display text-xl font-semibold text-brand-navy">
                Get your free quote
              </h3>
              {CONTACT_FORM_FIELDS.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-ink">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formValues[field.id]}
                    onChange={(event) => setFormValues({ ...formValues, [field.id]: event.target.value })}
                    className="w-full rounded-lg border border-[#d0c8b8] px-4 py-2.5 text-sm text-ink transition-colors focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Tell me a bit about what you need
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="e.g. New website for my plumbing business, 4–5 pages, need it to show my services and let customers contact me."
                  value={formValues.message}
                  onChange={(event) => setFormValues({ ...formValues, message: event.target.value })}
                  className="w-full resize-none rounded-lg border border-[#d0c8b8] px-4 py-2.5 text-sm text-ink transition-colors focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-brick py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Send my free quote request →
              </button>
              <p className="text-center text-xs text-muted">No obligation. I&apos;ll never spam or hard-sell.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
