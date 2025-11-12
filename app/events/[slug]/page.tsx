import { notFound } from "next/navigation"
import { EventDetailContent } from "./EventDetailContent"

type Event = {
  slug: string
  title: string
  date: string
  dateFormatted: string
  location: string
  excerpt: string
  description: string
  image?: string
  lumaUrl?: string
  sponsors?: {
    name: string
    logo?: string
    description?: string
  }[]
  sponsorMessage?: string
  sponsorImages?: string[]
  links?: {
    label: string
    href: string
  }[]
}

const events: Record<string, Event> = {
  "6th-dresden-demoday": {
    slug: "6th-dresden-demoday",
    title: "6th Dresden DemoDay",
    date: "2025-07-17",
    dateFormatted: "July 17, 2025",
    location: "HTW Dresden",
    excerpt: "Join us for the 6th DemoDay in Dresden featuring startup pitches and networking.",
    description: "The 6th Dresden DemoDay brings together entrepreneurs, investors, and the startup community for an evening of innovation. Watch as our latest cohort of startups pitch their ideas and connect with industry leaders.",
    image: "/events/dresden-demoday.jpg",
    lumaUrl: "https://lu.ma/embed/event/evt-QaCsaCIBtBq5Soa/simple",
    sponsors: [
      {
        name: "SIB Innovations- und Beteiligungsgesellschaft",
        description: "Supporting innovation and startups in Saxony"
      }
    ],
    sponsorMessage: "The 6th YETI DemoDay is sponsored by the SIB: A huge thank you to SIB Innovations- und Beteiligungsgesellschaft for their support! They're sponsoring our YETI Demo Day #6 event on July 17, 2025, at the Dresden University of Applied Sciences (HTW Dresden). This sponsorship is crucial in helping us make this event a success, and we especially want to thank Sebastian Baumgart, Startup Manager at SIB, for making this collaboration possible.",
    sponsorImages: [
      "/sponsors/demo-day-6/sib-1.png",
      "/sponsors/demo-day-6/sib-2.png",
      "/sponsors/demo-day-6/sib-3.png"
    ],
    links: [
      { label: "Register Now", href: "https://luma.com/jrfyjp95" }
    ]
  },
  "1st-leipzig-demoday": {
    slug: "1st-leipzig-demoday",
    title: "1st Leipzig DemoDay",
    date: "2025-07-18",
    dateFormatted: "July 18, 2025",
    location: "Leipzig",
    excerpt: "The inaugural DemoDay in Leipzig - celebrating our first cohort of Leipzig startups.",
    description: "We're excited to launch our first DemoDay in Leipzig! This milestone event showcases the innovative projects from our inaugural Leipzig cohort. Join us to witness the future of entrepreneurship in Leipzig.",
    image: "/events/leipzig-demoday.jpg",
    lumaUrl: "https://lu.ma/embed/event/evt-gLEukhLSa0hobkt/simple",
    links: [
      { label: "Register Now", href: "https://luma.com/crgnl30x" }
    ]
  }
}

export async function generateStaticParams() {
  return Object.keys(events).map((slug) => ({ slug }))
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events[params.slug]

  if (!event) {
    notFound()
  }

  return <EventDetailContent event={event} />
}

