import {
  IMG_OUR_WORK_TST,
  IMG_OUR_WORK_TZE,
  IMG_OUR_WORK_WIZZ,
} from "@/lib/theme"
import type {
  IAboutStat,
  IContactDetail,
  IContactFormField,
  IFeature,
  INavLink,
  IPricingPlan,
  IService,
  ISocialLink,
  IStep,
  ITestimonial,
  IWorkExample,
} from "@/types/interfaces"

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "#organization",
      name: "Town Square Digital",
      alternateName: "Town Square Digital UK",
      email: "mailto:hello@townsquaredigital.co.uk",
      telephone: "+447824153228",
      url: "https://www.townsquaredigital.co.uk",
      logo: "https://www.townsquaredigital.co.uk/logo.png",
      image: "https://www.townsquaredigital.co.uk/logo.png",
      description:
        "Town Square Digital designs and builds affordable, professional websites for tradespeople and small businesses in Gosport (PO13), Portsmouth, Southampton, Fareham and the surrounding areas, as well as across the UK.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gosport",
        addressRegion: "Hampshire",
        postalCode: "PO13",
        addressCountry: "GB",
      },
      areaServed: [
        { "@type": "City", name: "Gosport" },
        { "@type": "City", name: "Portsmouth" },
        { "@type": "City", name: "Southampton" },
        { "@type": "City", name: "Fareham" },
        { "@type": "AdministrativeArea", name: "Hampshire" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      sameAs: [
        "https://www.facebook.com/townsquaredigital.local",
        "https://www.linkedin.com/company/town-square-digital",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "#website",
      url: "https://www.townsquaredigital.co.uk",
      name: "Town Square Digital",
      inLanguage: "en-GB",
      publisher: {
        "@id": "#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.townsquaredigital.co.uk",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "#faqpage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What digital marketing services does Town Square Digital offer for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Town Square Digital specializes in small business web design and local SEO. We build fast, mobile-friendly websites for local businesses that are engineered to rank on Google, attract local customers, and convert traffic into real leads.",
          },
        },
        {
          "@type": "Question",
          name: "How can small businesses in the UK benefit from Town Square Digital's services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Small businesses in the UK can benefit from tailored digital marketing strategies that increase online visibility, attract more customers, and improve sales through Town Square Digital's expert services.",
          },
        },
        {
          "@type": "Question",
          name: "What areas does Town Square Digital cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Town Square Digital is based in Gosport (PO13) and works with tradespeople and small businesses across Gosport, Portsmouth, Southampton, Fareham and the surrounding Hampshire areas. Since website design and support can be delivered remotely, we also take on clients across the rest of the UK.",
          },
        },
        {
          "@type": "Question",
          name: "How do I place an order with Town Square Digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can place an order by contacting Town Square Digital via email at hello@townsquaredigital.co.uk or direct from our website.",
          },
        },
        {
          "@type": "Question",
          name: "Is Town Square Digital suitable for startups and small enterprises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Town Square Digital specializes in providing approachable and affordable digital marketing solutions ideal for startups and small enterprises.",
          },
        },
        {
          "@type": "Question",
          name: "Does Town Square Digital provide customized marketing plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, they tailor digital marketing strategies to meet the unique needs and goals of each small business client.",
          },
        },
        {
          "@type": "Question",
          name: "How does Town Square Digital compare to other digital marketing agencies in the UK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Town Square Digital focuses specifically on small businesses with an approachable and affordable service model, which may differ from larger agencies that serve bigger clients or offer less personalized attention.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "#product-starter",
      name: "Starter Website Package",
      description:
        "Perfect for getting online fast. Up to 4 pages, mobile-friendly design, contact form, and Google Maps integration.",
      url: "https://www.townsquaredigital.co.uk/#pricing",
      offers: {
        "@type": "Offer",
        price: "299",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: "https://www.townsquaredigital.co.uk/#pricing",
      },
    },
    {
      "@type": "Product",
      "@id": "#product-professional",
      name: "Professional Website Package",
      description:
        "Everything you need to look great and get found. Up to 8 pages, custom design, SEO setup, and Google My Business listing.",
      url: "https://www.townsquaredigital.co.uk/#pricing",
      offers: {
        "@type": "Offer",
        price: "549",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: "https://www.townsquaredigital.co.uk/#pricing",
      },
    },
    {
      "@type": "Product",
      "@id": "#product-care-plan",
      name: "Care Plan",
      description:
        "Your site looked after, every single month. Managed hosting, unlimited small content updates, and monthly site health checks.",
      url: "https://www.townsquaredigital.co.uk/#pricing",
      offers: {
        "@type": "Offer",
        price: "49",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
        url: "https://www.townsquaredigital.co.uk/#pricing",
      },
    },
  ],
}

export const WORK_BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.townsquaredigital.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Our Work",
      item: "https://www.townsquaredigital.co.uk/work",
    },
  ],
}

export const NAV_LINKS: INavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Our Work", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

export const HERO_BADGES = [
  "No hidden fees",
  "Live in days, not weeks",
  "5★ support",
]

export const FEATURES: IFeature[] = [
  {
    icon: "£",
    title: "No overblown packages",
    body: "Agencies love to bundle you into contracts full of features you'll never use — then charge a fortune for the privilege. My promise is simple: you get exactly what you need and nothing you don't. No filler, no fluff.",
  },
  {
    icon: "⚡",
    title: "Fast turnaround, no waiting",
    body: "Most sites are live within 5–10 working days. I know time costs money when you're running a small business — so I move quickly, keep you in the loop, and don't disappear for weeks on end.",
  },
  {
    icon: "☎",
    title: "You deal with me, directly",
    body: "No helpdesk tickets, no account managers, no being passed around. You speak to me — the person who actually builds your site. If something needs changing, just ask. I'm not going to charge you for every small tweak.",
  },
]

export const SERVICES: IService[] = [
  {
    name: "New Website",
    desc: "Built from scratch, mobile-ready, and optimised for Google.",
  },
  {
    name: "Site Refresh",
    desc: "Modernise an outdated site without starting over.",
  },
  {
    name: "Content Updates",
    desc: "New photos, updated pricing, fresh copy — done quickly.",
  },
  {
    name: "Google My Business",
    desc: "Get found locally with a properly set-up business listing.",
  },
  {
    name: "SEO Basics",
    desc: "Make sure local customers can actually find you online.",
  },
  {
    name: "Ongoing Care",
    desc: "Monthly plans so your site stays fast, secure, and current.",
  },
]

export const STEPS: IStep[] = [
  {
    num: "01",
    title: "Tell me what you need",
    body: "A quick call or message is all it takes. I'll ask a few simple questions about your business and what you want your site to do.",
  },
  {
    num: "02",
    title: "I build it",
    body: "You'll get a draft to review, usually within a few days. Tell me what you think — I tweak until it's right.",
  },
  {
    num: "03",
    title: "Go live",
    body: "I handle the technical side — hosting, domain setup, everything. Your site goes live and starts working for you.",
  },
]

export const TESTIMONIALS: ITestimonial[] = [
  {
    quote:
      "I was quoted £3,500 by a local agency. Town Square Digital did a better job for a fraction of the price, and it was live in a week.",
    name: "Dave Henson",
    trade: "Plumber, Manchester",
    initials: "DH",
  },
  {
    quote:
      "Anytime I need something changed — new prices, a photo, anything — it's done the same day. That's the kind of service I needed.",
    name: "Sandra Mills",
    trade: "Electrician, Bristol",
    initials: "SM",
  },
  {
    quote:
      "I didn't think I needed a website but now I get 3–4 enquiries a week from it. Paid for itself in the first month.",
    name: "Tom Rafferty",
    trade: "Builder & Decorator, Leeds",
    initials: "TR",
  },
]

export const PRICING: IPricingPlan[] = [
  {
    name: "Starter",
    price: "£299",
    period: "one-off",
    desc: "Perfect for getting online fast.",
    features: [
      "Up to 4 pages",
      "Mobile-friendly design",
      "Contact form",
      "Google Maps integration",
      "1 round of revisions",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "£549",
    period: "one-off",
    desc: "Everything you need to look great and get found.",
    features: [
      "Up to 8 pages",
      "Custom design",
      "SEO setup",
      "Google My Business listing",
      "Photo gallery",
      "2 rounds of revisions",
    ],
    highlight: true,
  },
  {
    name: "Care Plan",
    price: "£49",
    period: "per month",
    desc: "Your site looked after, every single month.",
    features: [
      "Managed hosting included",
      "Unlimited small content updates",
      "Monthly site health check",
      "Security scans & backups",
      "Performance monitoring",
      "Priority support — speak to me directly",
    ],
    highlight: false,
  },
]

export const CONTACT_DETAILS: IContactDetail[] = [
  { icon: "📞", label: "Phone", value: "07824 153 228" },
  { icon: "✉️", label: "Email", value: "hello@townsquaredigital.co.uk" },
  { icon: "🕐", label: "Hours", value: "Mon–Fri, 8am–6pm" },
]

export const CONTACT_FORM_FIELDS: IContactFormField[] = [
  {
    id: "name",
    label: "Your name",
    type: "text",
    placeholder: "John Smith",
    isRequired: true,
  },
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "john@smithplumbing.co.uk",
    isRequired: true,
  },
  {
    id: "business",
    label: "Business name",
    type: "text",
    placeholder: "Smith Plumbing Ltd",
    isRequired: false,
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "07700 000000",
    isRequired: false,
  },
]

export const SOCIAL_LINKS: ISocialLink[] = [
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/townsquaredigital.local",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/town-square-digital",
  },
]

export const ABOUT_STATS: IAboutStat[] = [
  // { value: "200+", label: "sites built" },
  // { value: "4.9★", label: "avg. rating" },
  { value: "24h", label: "support" },
]

// TODO: add more real client sites here as they go live.
export const WORK_EXAMPLES: IWorkExample[] = [
  {
    name: "Tauranga Electroplaters",
    url: "https://tze-web.vercel.app/",
    description:
      "Zinc electroplating specialist in Tauranga — site built to showcase their process and bring in trade enquiries.",
    image: IMG_OUR_WORK_TZE,
  },
  {
    name: "Wizzington Moos UK",
    description:
      "Dancewear and pageant couture specialist in the UK — site built to showcase their costumes and bring in performer enquiries.",
    image: IMG_OUR_WORK_WIZZ,
  },
  {
    name: "Tim Smart Technology",
    url: "https://timsmarttechnology.co.uk",
    description:
      "Frontend software engineer consultant — site built to showcase experience and bring in contract enquiries.",
    image: IMG_OUR_WORK_TST,
  },
]
