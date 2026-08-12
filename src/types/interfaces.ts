export interface IFeature {
  icon: string;
  title: string;
  body: string;
}

export interface IService {
  name: string;
  desc: string;
}

export interface IStep {
  num: string;
  title: string;
  body: string;
}

export interface ITestimonial {
  quote: string;
  name: string;
  trade: string;
  initials: string;
}

export interface IPricingPlan {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  highlight: boolean;
}

export interface IContactDetail {
  icon: string;
  label: string;
  value: string;
}

export interface IContactFormField {
  id: "name" | "email" | "business" | "phone";
  label: string;
  type: string;
  placeholder: string;
}

export interface IContactFormValues {
  name: string;
  email: string;
  business: string;
  phone: string;
  message: string;
}

export interface IContactSubmissionResult {
  isSuccess: boolean;
  errorMessage?: string;
}

export interface IAboutStat {
  value: string;
  label: string;
}

export interface INavLink {
  label: string;
  href: string;
}

export interface IWorkExample {
  name: string;
  url?: string;
  description: string;
  image: string;
}
