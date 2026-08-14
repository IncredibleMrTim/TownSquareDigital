import { NAV_LINKS, SOCIAL_LINKS } from "@/data/content"
import FacebookIcon from "./FacebookIcon"
import LinkedInIcon from "./LinkedInIcon"
import LogoMark from "./LogoMark"

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
}

export default function Footer() {
  return (
    <footer className="bg-[#0f1e33] px-6 py-12 text-navy-mist">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <LogoMark size={32} variant="brick" />
            <div>
              <span className="block font-display text-base leading-none font-bold text-white">
                Town Square
              </span>
              <span className="mt-0.5 block text-xs leading-none font-semibold tracking-widest text-[#c8d8ea] uppercase">
                Digital
              </span>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Affordable, professional websites for tradespeople and small
            businesses in Gosport, Portsmouth, Southampton, Fareham and
            surrounding areas — plus UK-wide.
          </p>
          <p className="mt-3 text-xs text-[#4a6080] italic">
            Where local business meets digital.
          </p>
          <div className="mt-4 flex items-center gap-3">
            {SOCIAL_LINKS.map((socialLink) => {
              const SocialIcon = SOCIAL_ICONS[socialLink.platform]
              return (
                <a
                  key={socialLink.platform}
                  href={socialLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-brick text-white transition-opacity hover:opacity-80"
                >
                  <SocialIcon size={20} />
                </a>
              )
            })}
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm font-medium text-white">Navigate</div>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((navLink) => (
              <li key={navLink.label}>
                <a
                  href={navLink.href}
                  className="transition-colors hover:text-white"
                >
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-medium text-white">Contact</div>
          <p className="max-w-xs text-sm leading-relaxed">
            Contact Town Square Digital today to place your order or learn more
            about our services.
          </p>
          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href="mailto:hello@townsquaredigital.co.uk"
              className="transition-colors hover:text-white"
            >
              hello@townsquaredigital.co.uk
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col justify-between gap-2 border-t border-brand-navy pt-6 text-xs text-[#4a6080] md:flex-row">
        <span>© 2025 Town Square Digital. All rights reserved.</span>
        <span>Built with care for UK small businesses.</span>
      </div>
    </footer>
  )
}
