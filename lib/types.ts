export type SocialLinks = {
  linkedin?: string
  instagram?: string
  youtube?: string
  whatsapp?: string
}

export type SiteSettings = {
  site: {
    title: string
    tagline?: string
    description?: string
    url?: string
    locale?: string
  }
  organization: {
    name: string
    email?: string
    address?: string
  }
  social?: SocialLinks
}

export type NavItem = {
  label: string
  href?: string
  children?: NavItem[]
}

export type Navigation = {
  main: NavItem[]
  footer: NavItem[]
}

export type CTA = { label: string; href: string }

export type Hero = {
  title: string
  subtitle?: string
  cta?: CTA
}

export type PageLink = { label: string; href: string }

export type CityPage = {
  hero: Hero
  intro?: string
  links?: PageLink[]
}

export type HomeSection =
  | {
      id: string
      title: string
      richText: string
    }
  | {
      id: 'curriculum'
      title: string
      bullets: { icon?: string; title: string; text?: string }[]
    }

export type HomePage = {
  hero: Hero
  sections: HomeSection[]
}

export type FAQ = { question: string; answer: string }
export type TimelineItem = { date?: string; title: string; text?: string }
export type ResourceLink = { label: string; href: string }

export type ApplyPage = {
  title: string
  cta?: CTA
  timeline: TimelineItem[]
  faqs: FAQ[]
  resources: ResourceLink[]
}

export type EventItem = {
  slug: string
  title: string
  date: string
  location?: string
  excerpt?: string
  links?: ResourceLink[]
}
export type EventsIndex = { items: EventItem[] }

export type Project = {
  slug?: string
  title: string
  team?: string
  blurb?: string
  links?: ResourceLink[]
}
export type ProjectsIndex = { items: Project[] }

export type Contributor = {
  name: string
  role?: string
  avatar?: string
  links?: SocialLinks & { website?: string }
}
export type ContributorsIndex = { items: Contributor[] }

export type LegalPage = {
  title: string
  richText: string
}

