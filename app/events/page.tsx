"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PastProjectsSection } from "@/components/PastProjectsSection"

export const dynamic = "force-static"

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
  links?: {
    label: string
    href: string
  }[]
}

const events: Event[] = [
  {
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
    links: [
      { label: "Register Now", href: "https://luma.com/jrfyjp95" }
    ]
  },
  {
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
]

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.article
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-200 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {/* Luma Event Embed or Event Image */}
      {event.lumaUrl ? (
        <div className="relative w-full bg-white">
          <iframe
            src={event.lumaUrl}
            width="100%"
            height="520"
            frameBorder="0"
            style={{ border: 0 }}
            aria-label="Luma event registration"
            className="w-full"
          />
        </div>
      ) : event.image ? (
        <div className="relative w-full h-64 md:h-80 bg-neutral-200">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Event Content */}
      <div className="p-8 md:p-10">
        {/* Date & Location */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{event.dateFormatted}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">{event.location}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          {event.title}
        </h2>

        {/* Description */}
        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
          {event.description}
        </p>

        {/* Sponsors */}
        {event.sponsors && event.sponsors.length > 0 && (
          <div className="border-t border-neutral-200 pt-6 mb-6">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
              Sponsored By
            </h3>
            <div className="space-y-3">
              {event.sponsors.map((sponsor, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {sponsor.logo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-black">{sponsor.name}</div>
                    {sponsor.description && (
                      <div className="text-sm text-neutral-600">{sponsor.description}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {/* View Event Details Button */}
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-black transition-colors font-medium"
          >
            View Event Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Other Links */}
          {event.links && event.links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-primary transition-colors font-medium"
            >
              {link.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function EventsPage() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingEvents = events.filter(event => new Date(event.date) >= today)
  const pastEvents = events.filter(event => new Date(event.date) < today)

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />

        {/* Happy YETI Image */}
        <motion.div
          className="absolute bottom-0 right-8 md:right-16 w-32 h-32 md:w-48 md:h-48 lg:w-80 lg:h-80 z-10 -mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src="/happy-yeti/1.png"
            alt="Happy YETI mascot"
            fill
            className="object-contain object-bottom opacity-40 -scale-x-100"
          />
        </motion.div>

        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <motion.h1
            className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Events
          </motion.h1>
          <motion.p
            className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Join us for DemoDays, workshops, and networking events that bring together entrepreneurs, investors, and innovators.
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-8 md:px-12">
          {/* Upcoming Events */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Upcoming Events
            </motion.h2>
            {upcomingEvents.length > 0 ? (
              <div className="space-y-12">
                {upcomingEvents.map((event, index) => (
                  <EventCard key={event.slug} event={event} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-12 bg-white rounded-2xl border border-neutral-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-lg text-neutral-600">No upcoming events planned currently. Check back soon!</p>
              </motion.div>
            )}
          </div>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Past Events
              </motion.h2>
              <div className="space-y-12">
                {pastEvents.map((event, index) => (
                  <EventCard key={event.slug} event={event} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Past Projects Section */}
      <PastProjectsSection />
    </div>
  )
}

