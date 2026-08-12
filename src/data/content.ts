import type {
  IAboutStat,
  IContactDetail,
  IContactFormField,
  IFeature,
  IPricingPlan,
  IService,
  IStep,
  ITestimonial,
} from "@/types/interfaces";

export const NAV_LINKS = [
  "Services",
  "Pricing",
  "How It Works",
  "About",
  "Contact",
];

export const HERO_BADGES = [
  "No hidden fees",
  "Live in days, not weeks",
  "5★ support",
];

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
];

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
];

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
];

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
];

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
];

export const CONTACT_DETAILS: IContactDetail[] = [
  { icon: "📞", label: "Phone", value: "07824 153 228" },
  { icon: "✉️", label: "Email", value: "hello@townsquaredigital.co.uk" },
  { icon: "🕐", label: "Hours", value: "Mon–Fri, 8am–6pm" },
];

export const CONTACT_FORM_FIELDS: IContactFormField[] = [
  { id: "name", label: "Your name", type: "text", placeholder: "John Smith" },
  {
    id: "email",
    label: "Your email",
    type: "email",
    placeholder: "john@smithplumbing.co.uk",
  },
  {
    id: "business",
    label: "Business name",
    type: "text",
    placeholder: "Smith Plumbing Ltd",
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "07700 000000",
  },
];

export const ABOUT_STATS: IAboutStat[] = [
  { value: "200+", label: "sites built" },
  { value: "4.9★", label: "avg. rating" },
  { value: "24h", label: "support" },
];
