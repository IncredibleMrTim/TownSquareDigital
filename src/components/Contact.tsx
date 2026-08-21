"use client"

import { useMemo, useState } from "react"
import { sendContactMessage } from "@/app/actions/contact"
import { CONTACT_DETAILS, CONTACT_FORM_FIELDS } from "@/data/content"
import { trackGAClick } from "@/lib/analytics"
import { contactFormSchema } from "@/lib/contactFormSchema"
import type { IContactFormValues } from "@/types/interfaces"
import LogoMark from "./LogoMark"

const INITIAL_FORM_VALUES: IContactFormValues = {
  name: "",
  email: "",
  business: "",
  phone: "",
  message: "",
}

export default function Contact() {
  const [formValues, setFormValues] =
    useState<IContactFormValues>(INITIAL_FORM_VALUES)
  const [honeypot, setHoneypot] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<keyof IContactFormValues, boolean>>
  >({})

  const validationResult = useMemo(
    () => contactFormSchema.safeParse(formValues),
    [formValues],
  )
  const isFormValid = validationResult.success

  const fieldErrors = useMemo(() => {
    const errors: Partial<Record<keyof IContactFormValues, string>> = {}
    if (!validationResult.success) {
      for (const issue of validationResult.error.issues) {
        const fieldName = issue.path[0] as keyof IContactFormValues
        if (!errors[fieldName]) {
          errors[fieldName] = issue.message
        }
      }
    }
    return errors
  }, [validationResult])

  function handleFieldBlur(fieldId: keyof IContactFormValues) {
    setTouchedFields((previousTouchedFields) => ({
      ...previousTouchedFields,
      [fieldId]: true,
    }))
  }

  function getFieldInputClassName(fieldId: keyof IContactFormValues) {
    const isFieldInvalid = Boolean(touchedFields[fieldId] && fieldErrors[fieldId])
    return `w-full rounded-lg border px-4 py-2.5 text-sm text-ink transition-colors focus:outline-none ${
      isFieldInvalid
        ? "border-red-500 bg-red-50"
        : "border-[#d0c8b8]"
    }`
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsSending(true)
    setErrorMessage(null)

    const result = await sendContactMessage(formValues, honeypot)

    setIsSending(false)
    if (result.isSuccess) {
      trackGAClick("form_submit", { form_name: "contact" })
      setIsSubmitted(true)
    } else {
      setErrorMessage(
        result.errorMessage ?? "Something went wrong. Please try again.",
      )
    }
  }

  return (
    <section id="contact" className="bg-cream-dark px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">
            Let&apos;s get your business online
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-stone">
            Send me a message and I&apos;ll come back to you within one working
            day — usually much sooner. No obligation, no hard sell.
          </p>
          <div className="space-y-5">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-base">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-xs tracking-wide text-muted uppercase">
                    {detail.label}
                  </div>
                  <div className="font-medium text-ink">{detail.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-3">
            <LogoMark size={28} variant="navy" />
            <p className="text-sm text-muted italic">
              &ldquo;Where local business meets digital.&rdquo;
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-8 shadow-sm">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy text-2xl text-white">
                ✓
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-brand-navy">
                Message sent!
              </h3>
              <p className="text-sm text-stone">
                I&apos;ll be in touch within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="mb-6 font-display text-xl font-semibold text-brand-navy">
                Get your free quote
              </h3>
              <input
                type="text"
                name="company_website"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              {CONTACT_FORM_FIELDS.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    {field.label}
                    {field.isRequired && (
                      <span className="text-brand-brick"> *</span>
                    )}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    inputMode={field.id === "phone" ? "numeric" : undefined}
                    placeholder={field.placeholder}
                    value={formValues[field.id]}
                    onChange={(event) =>
                      setFormValues({
                        ...formValues,
                        [field.id]:
                          field.id === "phone"
                            ? event.target.value.replace(/\D/g, "")
                            : event.target.value,
                      })
                    }
                    onBlur={() => handleFieldBlur(field.id)}
                    className={getFieldInputClassName(field.id)}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Tell me a bit about what you need
                  <span className="text-brand-brick"> *</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="e.g. New website for my plumbing business, 4–5 pages, need it to show my services and let customers contact me."
                  value={formValues.message}
                  onChange={(event) =>
                    setFormValues({
                      ...formValues,
                      message: event.target.value,
                    })
                  }
                  onBlur={() => handleFieldBlur("message")}
                  className={`resize-none ${getFieldInputClassName("message")}`}
                />
              </div>
              {errorMessage && (
                <p className="text-sm text-brand-brick-dark">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={isSending || !isFormValid}
                className="w-full rounded-lg bg-brand-brick py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {isSending ? "Sending…" : "Send my free quote request →"}
              </button>
              <p className="text-center text-xs text-muted">
                No obligation. I&apos;ll never spam or hard-sell.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
