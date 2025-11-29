"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PastProjectsSection } from "@/components/PastProjectsSection"
import { getEventsData, type SheetEvent } from "@/lib/sheets"

export const dynamic = "force-static"

type Event = {
  slug: string
  title: string
  date?: string
  dateFormatted?: string
  location?: string
  excerpt?: string
  description?: string
  image?: string
  sponsors?: {
    name: string
    logo?: string
    description?: string
  }[]
  links?: {
    label: string
    href: string
  }[]
  registrationStartDate?: string
  registrationEndDate?: string
  registrationLink?: string
  sponsoredBy?: string
  googleMapsLink?: string
}

function isValidImageUrl(url?: string): boolean {
  if (!url) return false
  const trimmed = url.trim()
  if (!trimmed) return false
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return true
  if (trimmed.startsWith("/")) return true
  return false
}

function parseFlexibleDate(input?: string): Date | null {
  if (!input) return null
  const raw = input.trim()
  if (!raw) return null

  // Try native Date first (ISO, etc.)
  const native = new Date(raw)
  if (!isNaN(native.getTime())) return native

  const lower = raw.toLowerCase().replace(",", "")

  // 1) d.m.yy or d/m/yy or d-m-yy (day first)
  const dmY = lower.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/)
  if (dmY) {
    const day = parseInt(dmY[1], 10)
    const month = parseInt(dmY[2], 10) - 1
    let year = parseInt(dmY[3], 10)
    if (year < 100) year = 2000 + year
    const d = new Date(year, month, day)
    if (!isNaN(d.getTime())) return d
  }

  // 2) d monthname yyyy (1 january 2025 / 1 jan 25 / 1 jan)
  const monthNames: Record<string, number> = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    sept: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11,
  }

  const parts = lower.split(/\s+/)
  if (parts.length >= 2) {
    const day = parseInt(parts[0], 10)
    const monthStr = parts[1]
    const month = monthNames[monthStr]
    if (!isNaN(day) && month !== undefined) {
      let year = new Date().getFullYear()
      if (parts[2]) {
        let y = parseInt(parts[2], 10)
        if (!isNaN(y)) {
          if (y < 100) y = 2000 + y
          year = y
        }
      }
      const d = new Date(year, month, day)
      if (!isNaN(d.getTime())) return d
    }
  }

  return null
}

function formatDate(dateStr?: string): { raw?: string; formatted?: string } {
  if (!dateStr) return {}
  const parsed = parseFlexibleDate(dateStr)
  if (!parsed) {
    return { raw: dateStr }
  }
  return {
    raw: dateStr,
    formatted: parsed.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  }
}

// Hide obvious URLs from being used as title / excerpt
function stripIfUrl(text?: string): string | undefined {
  if (!text) return undefined
  const t = text.trim()
  if (/^https?:\/\//i.test(t)) return undefined
  return t
}

function mapSheetEventToEvent(e: SheetEvent): Event {
  const { raw, formatted } = formatDate(e.eventDate)

  const links =
    e.registrationLink && e.registrationLink.length > 0
      ? [{ label: "Register", href: e.registrationLink }]
      : undefined

  const sponsors =
    e.sponsoredBy && e.sponsoredBy.length > 0
      ? [{ name: e.sponsoredBy }]
      : undefined

  const cleanHeading = stripIfUrl(e.heading)
  const cleanDescription = stripIfUrl(e.description)

  const title = cleanHeading || e.name
  const baseText = cleanHeading || cleanDescription
  const shortExcerpt =
    baseText && baseText.length > 140
      ? baseText.slice(0, 140) + "…"
      : baseText || ""

  return {
    slug: e.slug,
    title,
    date: raw,
    dateFormatted: formatted || raw,
    location: e.location,
    excerpt: shortExcerpt || undefined,
    description: cleanDescription,
    image: e.image,
    sponsors,
    links,
    registrationStartDate: e.registrationStartDate,
    registrationEndDate: e.registrationEndDate,
    registrationLink: e.registrationLink,
    sponsoredBy: e.sponsoredBy,
    googleMapsLink: e.googleMapsLink,
  }
}

function handleMapsClick(googleMapsLink: string) {
  if (typeof window === "undefined") return

  const isMobile = /Mobi|Android/i.test(navigator.userAgent)

  if (isMobile) {
    window.open(googleMapsLink, "_blank")
  } else {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(googleMapsLink).catch(() => {})
    }
    window.open(googleMapsLink, "_blank")
  }
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const hasMapsLink = !!event.googleMapsLink

  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {/* Image if present and valid */}
      {isValidImageUrl(event.image) && (
        <div className="relative w-full h-52 md:h-56 bg-neutral-200">
          <Image
            src={event.image as string}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Event Content */}
      <div className="p-6 md:p-7 space-y-3">
        {/* Date & Location */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600">
          {event.dateFormatted && (
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">{event.dateFormatted}</span>
            </div>
          )}

          {event.location && (
            <button
              type="button"
              disabled={!hasMapsLink}
              onClick={
                hasMapsLink
                  ? () => handleMapsClick(event.googleMapsLink!)
                  : undefined
              }
              className={`flex items-center gap-1.5 ${
                hasMapsLink
                  ? "cursor-pointer hover:underline"
                  : "cursor-default"
              }`}
            >
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">
                {event.location}
                {hasMapsLink }
              </span>
            </button>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-black">
          {event.title}
        </h2>

        {/* Registration window */}
        {(event.registrationStartDate || event.registrationEndDate) && (
          <div className="text-xs text-neutral-600">
            <span className="font-semibold">Registration:</span>{" "}
            {event.registrationStartDate && (
              <span>from {event.registrationStartDate}</span>
            )}
            {event.registrationEndDate && (
              <span>
                {" "}
                {event.registrationStartDate ? " until " : "until "}{" "}
                {event.registrationEndDate}
              </span>
            )}
          </div>
        )}

        {/* Short description / heading */}
        {event.excerpt && (
          <p className="text-sm text-neutral-700 leading-relaxed">
            {event.excerpt}
          </p>
        )}

        {/* Sponsor (simple text) */}
        {event.sponsoredBy && (
          <p className="text-xs text-neutral-500">
            <span className="font-semibold">Sponsored by</span>{" "}
            {event.sponsoredBy}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          {/* Details */}
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white text-sm rounded-full hover:bg-black transition-colors font-medium"
          >
            View details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          {/* Registration link from sheet (if provided) */}
          {event.links &&
            event.links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-black text-white text-sm rounded-full hover:bg-primary transition-colors font-medium"
              >
                {link.label}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const sheetEvents = await getEventsData()
        const mapped = sheetEvents.map(mapSheetEventToEvent)
        setEvents(mapped)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const withDate = events.filter((e) => e.date)
  const withoutDate = events.filter((e) => !e.date)

  const upcomingEvents = withDate.filter((event) => {
    const parsed = parseFlexibleDate(event.date)
    return parsed ? parsed >= today : false
  })

  const pastEvents = withDate.filter((event) => {
    const parsed = parseFlexibleDate(event.date)
    return parsed ? parsed < today : false
  })

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />

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
            Upcoming Events
          </motion.h1>
          <motion.p
            className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Join us for DemoDays, workshops, and networking events that bring
            together entrepreneurs, investors, and innovators.
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-8 md:px-12">
          {/* Loading state */}
          {loading && events.length === 0 && (
            <div className="max-w-5xl mx-auto mb-12 text-center text-neutral-500 text-sm">
              Loading events…
            </div>
          )}

          {/* Upcoming Events */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Upcoming Events
            </motion.h2>
            {upcomingEvents.length > 0 || withoutDate.length > 0 ? (
              <div className="space-y-8">
                {upcomingEvents.concat(withoutDate).map((event, index) => (
                  <EventCard key={event.slug} event={event} index={index} />
                ))}
              </div>
            ) : (
              !loading && (
                <motion.div
                  className="text-center py-10 bg-white rounded-2xl border border-neutral-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-base md:text-lg text-neutral-600 px-4">
                    No upcoming events planned currently. Check back soon!
                  </p>
                </motion.div>
              )
            )}
          </div>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <div className="max-w-5xl mx-auto">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Past Events
              </motion.h2>
              <div className="space-y-8">
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
