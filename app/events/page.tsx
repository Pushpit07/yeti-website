"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PastProjectsSection } from "@/components/PastProjectsSection"
import { getEventsData, type SheetEvent } from "@/lib/sheets"
import { EventsCalendar } from "@/components/EventsCalendar"
import { useSheetData } from "@/hooks/useSheetData"



// --- Types (Same as before) ---
type Event = {
  slug: string
  title: string
  date?: string
  dateFormatted?: string
  location?: string
  excerpt?: string
  description?: string
  image?: string
  sponsors?: { name: string; logo?: string; description?: string }[]
  links?: { label: string; href: string }[]
  registrationStartDate?: string
  registrationEndDate?: string
  registrationLink?: string
  sponsoredBy?: string
  googleMapsLink?: string
}

// --- Helper Functions (Same as before) ---
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
  const native = new Date(raw)
  if (!isNaN(native.getTime())) return native
  const lower = raw.toLowerCase().replace(",", "")
  const dmY = lower.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})$/)
  if (dmY) {
    const day = parseInt(dmY[1], 10)
    const month = parseInt(dmY[2], 10) - 1
    let year = parseInt(dmY[3], 10)
    if (year < 100) year = 2000 + year
    const d = new Date(year, month, day)
    if (!isNaN(d.getTime())) return d
  }
  const monthNames: Record<string, number> = {
    jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2, apr: 3, april: 3,
    may: 4, jun: 5, june: 5, jul: 6, july: 6, aug: 7, august: 7, sep: 8, sept: 8,
    september: 8, oct: 9, october: 9, nov: 10, november: 10, dec: 11, december: 11,
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
  if (!parsed) return { raw: dateStr }
  return {
    raw: dateStr,
    formatted: parsed.toLocaleDateString("en-US", {
      month: "long", day: "numeric", year: "numeric",
    }),
  }
}

function stripIfUrl(text?: string): string | undefined {
  if (!text) return undefined
  const t = text.trim()
  if (/^https?:\/\//i.test(t)) return undefined
  return t
}

function mapSheetEventToEvent(e: SheetEvent): Event {
  const { raw, formatted } = formatDate(e.eventDate)
  const links = e.registrationLink && e.registrationLink.length > 0
    ? [{ label: "Register Now", href: e.registrationLink }]
    : undefined
  const sponsors = e.sponsoredBy && e.sponsoredBy.length > 0
    ? [{ name: e.sponsoredBy }]
    : undefined
  const cleanHeading = stripIfUrl(e.heading)
  const cleanDescription = stripIfUrl(e.description)
  const title = cleanHeading || e.name
  const baseText = cleanHeading || cleanDescription
  const shortExcerpt = baseText && baseText.length > 140
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
      navigator.clipboard.writeText(googleMapsLink).catch(() => { })
    }
    window.open(googleMapsLink, "_blank")
  }
}

// --- SKELETON LOADER COMPONENT ---
// This mimics the shape of the EventCard but is gray and pulsing
function EventCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-200 h-full">
      <div className="w-full h-52 bg-neutral-200 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-4 bg-neutral-200 rounded w-1/3 animate-pulse" />
        <div className="h-8 bg-neutral-200 rounded w-3/4 animate-pulse" />
        <div className="space-y-2">
          <div className="h-3 bg-neutral-200 rounded w-full animate-pulse" />
          <div className="h-3 bg-neutral-200 rounded w-5/6 animate-pulse" />
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-10 w-32 bg-neutral-200 rounded-full animate-pulse" />
          <div className="h-10 w-24 bg-neutral-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// ... imports ...

import { trackEvent } from "@/lib/analytics"

function EventCard({
  event,
  index,
  isPast = false,
  isExpanded,
  onToggle,
  cardRef,
}: {
  event: Event
  index: number
  isPast?: boolean
  isExpanded: boolean
  onToggle: () => void
  cardRef?: (el: HTMLElement | null) => void
}) {
  const hasMapsLink = !!event.googleMapsLink

  // Filter links: if isPast, remove 'Register' links
  const visibleLinks = isPast
    ? event.links?.filter(l => l.label !== "Register" && l.label !== "Register Now")
    : event.links

  const detailText = event.description || event.excerpt

  return (
    <motion.article
      id={`event-${event.slug}`}
      ref={cardRef}
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all scroll-mt-24 ${
        isExpanded ? 'border-primary shadow-md' : 'border-neutral-200'
      } ${isPast ? 'opacity-75 hover:opacity-100' : 'hover:shadow-md'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Collapsed header — always visible, clickable to toggle */}
      <button
        type="button"
        onClick={() => {
          onToggle()
          trackEvent('select_content', 'event_list_toggle', event.slug)
        }}
        aria-expanded={isExpanded}
        aria-controls={`event-${event.slug}-details`}
        className="w-full text-left p-4 md:p-5 flex items-center gap-4 hover:bg-neutral-50/60 transition-colors"
      >
        <div className="flex-1 min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600">
            {event.dateFormatted && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">{event.dateFormatted}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">{event.location}</span>
              </div>
            )}
            {isPast && (
              <span className="bg-neutral-200 text-neutral-600 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Finished
              </span>
            )}
          </div>
          <h2 className="text-lg md:text-xl font-bold text-black">{event.title}</h2>
        </div>
        <span
          className={`shrink-0 p-2 rounded-full border transition-all duration-300 ${
            isExpanded
              ? 'bg-primary text-white border-primary rotate-180'
              : 'bg-white text-neutral-400 border-neutral-300'
          }`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Expanded details — animated grid-rows trick (matches Past Events pattern in this file) */}
      <div
        id={`event-${event.slug}-details`}
        className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-neutral-200">
            {isValidImageUrl(event.image) && (
              <div className="relative w-full h-48 md:h-64 bg-neutral-200">
                <Image src={event.image as string} alt={event.title} fill className={`object-cover ${isPast ? 'grayscale' : ''}`} />
              </div>
            )}
            <div className="p-4 md:p-6 space-y-3">
              {!isPast && (event.registrationStartDate || event.registrationEndDate) && (
                <div className="text-xs text-neutral-600">
                  <span className="font-semibold">Registration:</span>{" "}
                  {event.registrationStartDate && <span>from {event.registrationStartDate}</span>}
                  {event.registrationEndDate && <span> {event.registrationStartDate ? " until " : "until "} {event.registrationEndDate}</span>}
                </div>
              )}

              {detailText && <p className="text-sm md:text-base text-neutral-700 leading-relaxed whitespace-pre-line">{detailText}</p>}

              {event.sponsoredBy && (
                <p className="text-xs text-neutral-500">
                  <span className="font-semibold">Sponsored by</span> {event.sponsoredBy}
                </p>
              )}

              <div className="flex flex-wrap gap-2 pt-1">
                {hasMapsLink && (
                  <button
                    type="button"
                    onClick={() => handleMapsClick(event.googleMapsLink!)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-neutral-100 text-black text-sm rounded-full hover:bg-neutral-200 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Open in Maps
                  </button>
                )}
                {visibleLinks && visibleLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white text-sm rounded-full hover:bg-black transition-colors font-medium"
                    onClick={() => trackEvent('click_external_link', 'event_external_link', `${link.label} - ${event.slug}`)}
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function PaginationControl({
  currentPage,
  totalPages,
  onPageChange
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null

  // Generate page numbers to show (e.g., 1, 2, 3, 4, 5)
  // Simple logic: show all for now, or sliding window if many pages
  // For simplicity given typical event counts, we'll show up to 7 pages.
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-12 pt-4 border-t border-neutral-200">
      {/* Previous Arrow */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous Page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-all ${currentPage === page
              ? "bg-black text-white scale-110 shadow-sm"
              : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Arrow */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next Page"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default function EventsPage() {
  const { data: sheetEvents, isLoading: loading } = useSheetData("events", getEventsData)
  const [showPastEvents, setShowPastEvents] = useState(false)
  const [pastEventsPage, setPastEventsPage] = useState(1)
  const [upcomingEventsPage, setUpcomingEventsPage] = useState(1)
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)
  const cardRefs = useRef<Record<string, HTMLElement | null>>({})
  const PAST_EVENTS_PER_PAGE = 3
  const UPCOMING_EVENTS_PER_PAGE = 5

  const expandAndScroll = (slug: string) => {
    setExpandedSlug(slug)
    // Wait one frame so the card is in the DOM (and any past-events accordion has time to open)
    setTimeout(() => {
      const el = cardRefs.current[slug]
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  // Handle deep links like /events#event-some-slug — auto-expand and scroll to that event
  useEffect(() => {
    if (loading) return
    const hash = window.location.hash
    if (!hash.startsWith('#event-')) return
    const slug = hash.slice('#event-'.length)
    if (!slug) return
    // Make sure the past-events drawer is open if the target is a past event
    const isPast = sheetEvents.some(e => {
      if (e.slug !== slug) return false
      const d = parseFlexibleDate(e.eventDate)
      return d ? d < new Date(new Date().setHours(0, 0, 0, 0)) : false
    })
    if (isPast) setShowPastEvents(true)
    expandAndScroll(slug)
  }, [loading, sheetEvents])

  // Memoize mapped events to prevent recalculation on every render
  const events = useMemo(() => {
    return sheetEvents.map(mapSheetEventToEvent)
  }, [sheetEvents])


  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const withDate = events.filter((e: Event) => e.date)
  const withoutDate = events.filter((e: Event) => !e.date)

  const upcomingEvents = withDate.filter((event: Event) => {
    const parsed = parseFlexibleDate(event.date)
    return parsed ? parsed >= today : false
  })

  // Sort upcoming events: soonest first
  upcomingEvents.sort((a: Event, b: Event) => {
    const dateA = a.date ? parseFlexibleDate(a.date)?.getTime() || 0 : 0
    const dateB = b.date ? parseFlexibleDate(b.date)?.getTime() || 0 : 0
    return dateA - dateB
  })

  const pastEvents = withDate.filter((event: Event) => {
    const parsed = parseFlexibleDate(event.date)
    return parsed ? parsed < today : false
  })

  // Sort past events: most recent past event first (descending)
  pastEvents.sort((a: Event, b: Event) => {
    const dateA = a.date ? parseFlexibleDate(a.date)?.getTime() || 0 : 0
    const dateB = b.date ? parseFlexibleDate(b.date)?.getTime() || 0 : 0
    return dateB - dateA
  })

  // Pagination Logic - Past Events
  const totalPastEventsPages = Math.ceil(pastEvents.length / PAST_EVENTS_PER_PAGE)
  const paginatedPastEvents = pastEvents.slice(
    (pastEventsPage - 1) * PAST_EVENTS_PER_PAGE,
    pastEventsPage * PAST_EVENTS_PER_PAGE
  )

  // Pagination Logic - Upcoming Events
  const allUpcoming = [...upcomingEvents, ...withoutDate]
  const totalUpcomingPages = Math.ceil(allUpcoming.length / UPCOMING_EVENTS_PER_PAGE)
  const paginatedUpcomingEvents = allUpcoming.slice(
    (upcomingEventsPage - 1) * UPCOMING_EVENTS_PER_PAGE,
    upcomingEventsPage * UPCOMING_EVENTS_PER_PAGE
  )

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
          <Image src="/happy-yeti/1.png" alt="Happy YETI mascot" fill className="object-contain object-bottom opacity-40 -scale-x-100" />
        </motion.div>
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <motion.h1 className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            Upcoming Events
          </motion.h1>
          <motion.p className="max-w-3xl text-xl md:text-2xl text-white/90 leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
            Join us for DemoDays, workshops, and networking events that bring together entrepreneurs, investors, and innovators.
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container mx-auto px-8 md:px-12">

          {/* CALENDAR - Render Always (shows empty grid while loading) */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <EventsCalendar
                events={events}
                onSelectEvent={(slug) => {
                  // If it's a past event, open the past-events section first
                  const target = events.find(e => e.slug === slug)
                  if (target) {
                    const parsed = parseFlexibleDate(target.date)
                    if (parsed && parsed < today) setShowPastEvents(true)
                  }
                  expandAndScroll(slug)
                  trackEvent('select_content', 'event_calendar_tooltip', slug)
                }}
              />
            </motion.div>
          </div>

          {/* Upcoming Events List */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-black" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              Our Events
            </motion.h2>

            {/* CONDITIONAL RENDERING: Skeletons vs Real Data */}
            {loading ? (
              <div className="space-y-8">
                {/* Render 3 fake skeleton cards while loading */}
                <EventCardSkeleton />
                <EventCardSkeleton />
                <EventCardSkeleton />
              </div>
            ) : (
              // Real Data Loaded
              <>
                {upcomingEvents.length > 0 || withoutDate.length > 0 ? (
                  <>
                    <div className="space-y-4">
                      {paginatedUpcomingEvents.map((event, index) => (
                        <EventCard
                          key={event.slug}
                          event={event}
                          index={index}
                          isExpanded={expandedSlug === event.slug}
                          onToggle={() => setExpandedSlug(expandedSlug === event.slug ? null : event.slug)}
                          cardRef={(el) => { cardRefs.current[event.slug] = el }}
                        />
                      ))}
                    </div>

                    {/* Pagination Controls for Upcoming Events */}
                    <PaginationControl
                      currentPage={upcomingEventsPage}
                      totalPages={totalUpcomingPages}
                      onPageChange={setUpcomingEventsPage}
                    />
                  </>
                ) : (
                  <div className="text-center py-10 bg-white rounded-2xl border border-neutral-200">
                    <p className="text-base md:text-lg text-neutral-600 px-4">
                      No upcoming events planned currently. Check back soon!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>


          {/* Past Events Section */}
          {!loading && pastEvents.length > 0 && (
            <div className="max-w-5xl mx-auto border-t border-neutral-200 pt-16">
              <button
                onClick={() => setShowPastEvents(!showPastEvents)}
                className="flex items-center justify-between w-full group"
              >
                <motion.h2 className="text-3xl md:text-4xl font-bold text-neutral-400 group-hover:text-black transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  Past Events
                </motion.h2>
                <div className={`p-2 rounded-full border transition-all duration-300 ${showPastEvents ? 'bg-primary text-white border-primary rotate-180' : 'bg-white text-neutral-400 border-neutral-300 group-hover:border-black group-hover:text-black'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${showPastEvents ? 'grid-rows-[1fr] mt-8' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="space-y-4">
                    {paginatedPastEvents.map((event, index) => (
                      <EventCard
                        key={event.slug}
                        event={event}
                        index={index}
                        isPast={true}
                        isExpanded={expandedSlug === event.slug}
                        onToggle={() => setExpandedSlug(expandedSlug === event.slug ? null : event.slug)}
                        cardRef={(el) => { cardRefs.current[event.slug] = el }}
                      />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  <PaginationControl
                    currentPage={pastEventsPage}
                    totalPages={totalPastEventsPages}
                    onPageChange={setPastEventsPage}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section >

      <PastProjectsSection />
    </div >
  )
}