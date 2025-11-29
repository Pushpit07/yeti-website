"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PastProjectsSection } from "@/components/PastProjectsSection"

type Event = {
  slug: string
  title: string
  date?: string
  dateFormatted?: string
  location?: string
  excerpt?: string
  description?: string
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

function handleDetailMapsClick(googleMapsLink: string) {
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

export function EventDetailContent({ event }: { event: Event }) {
  return (
    <div className="font-sans min-h-screen bg-neutral-50">
      {/* Event Content */}
      <div className="container mx-auto px-8 md:px-12 py-40">
        <div className="max-w-5xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-neutral-200"
          >
            {/* Top section with image + meta */}
            <div className="grid md:grid-cols-[2fr,1.5fr] gap-0">
              <div className="p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-neutral-200">
                {/* Back link */}
                <div className="mb-6">
                  <Link
                    href="/events"
                    className="inline-flex items-center text-sm text-neutral-600 hover:text-black"
                  >
                    <svg
                      className="w-4 h-4 mr-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to events
                  </Link>
                </div>

                {/* Meta row: date + location */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-4">
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
                      onClick={() =>
                        event.googleMapsLink
                          ? handleDetailMapsClick(event.googleMapsLink)
                          : undefined
                      }
                      className={`flex items-center gap-1.5 ${
                        event.googleMapsLink
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
                        {event.googleMapsLink && " · Open in Maps"}
                      </span>
                    </button>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                  {event.title}
                </h1>

                {/* Short intro / excerpt */}
                {event.excerpt && (
                  <p className="text-lg text-neutral-600 mb-4">
                    {event.excerpt}
                  </p>
                )}

                {/* Registration window */}
                {(event.registrationStartDate || event.registrationEndDate) && (
                  <p className="text-sm text-neutral-600 mb-6">
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
                  </p>
                )}

                {/* Primary CTA buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {/* Registration link from sheet or luma */}
                  {event.links?.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-black transition-colors"
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

                  {event.lumaUrl && !event.links?.length && (
                    <Link
                      href={event.lumaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-black transition-colors"
                    >
                      Register
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
                  )}
                </div>

                {/* Full description */}
                {event.description && (
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4">
                    {event.description}
                  </p>
                )}

                {/* Sponsor message text (optional) */}
                {event.sponsorMessage && (
                  <p className="text-sm text-neutral-500 mt-2">
                    {event.sponsorMessage}
                  </p>
                )}
              </div>

              {/* Image / side panel */}
              <div className="relative min-h-[260px] md:min-h-full bg-neutral-100">
                {isValidImageUrl(event.image) ? (
                  <Image
                    src={event.image as string}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-neutral-400 text-sm">
                      No event image available
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom section: sponsors + additional links */}
            <div className="p-8 md:p-10 lg:p-12">
              {/* Sponsors */}
              {event.sponsors && event.sponsors.length > 0 && (
                <div className="border-t border-neutral-200 pt-8 mb-10">
                  <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                    Sponsored By
                  </h2>
                  <div className="space-y-4">
                    {event.sponsors.map((sponsor, idx) => (
                      <div
                        key={idx}
                        className="flex flex-wrap items-center gap-4"
                      >
                        {isValidImageUrl(sponsor.logo) && (
                          <div className="relative w-20 h-12 bg-neutral-100 rounded-xl overflow-hidden">
                            <Image
                              src={sponsor.logo as string}
                              alt={sponsor.name}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-neutral-800">
                            {sponsor.name}
                          </div>
                          {sponsor.description && (
                            <p className="text-sm text-neutral-600">
                              {sponsor.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional links (if any besides registration) */}
              {event.links && event.links.length > 0 && (
                <div className="border-t border-neutral-200 pt-8">
                  <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                    Useful Links
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {event.links.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-300 text-sm text-neutral-800 hover:bg-neutral-100 transition-colors"
                      >
                        {link.label}
                        <svg
                          className="w-3.5 h-3.5"
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
              )}
            </div>
          </motion.article>
        </div>
      </div>

      {/* Past Projects Section */}
      <PastProjectsSection />
    </div>
  )
}
