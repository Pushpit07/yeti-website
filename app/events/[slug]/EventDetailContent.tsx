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
  if (url.length < 5) return false
  return true
}

function handleDetailMapsClick(googleMapsLink: string) {
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

export function EventDetailContent({ event }: { event: Event }) {
  return (
    <div className="font-sans min-h-screen bg-neutral-50">
      {/* Event Content */}
      <div className="container mx-auto px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/events"
              className="inline-flex items-center text-sm text-neutral-600 hover:text-black transition-colors"
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

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-neutral-200"
          >
            {/* Hero Image */}
            {isValidImageUrl(event.image) && (
              <div className="relative w-full h-72 md:h-96 bg-neutral-200">
                <Image
                  src={event.image as string}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {event.dateFormatted && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary"
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
                    <span className="font-semibold text-sm text-neutral-800">
                      {event.dateFormatted}
                    </span>
                  </div>
                )}

                {event.location && event.googleMapsLink && (
                  <button
                    type="button"
                    onClick={() => handleDetailMapsClick(event.googleMapsLink!)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-black transition-all hover:scale-105"
                  >
                    <svg
                      className="w-5 h-5"
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
                    <span className="font-semibold text-sm">{event.location}</span>
                  </button>
                )}

                {event.location && !event.googleMapsLink && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary"
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
                    <span className="font-semibold text-sm text-neutral-800">
                      {event.location}
                    </span>
                  </div>
                )}
              </div>

              {/* Event Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
                {event.title}
              </h1>

              {/* Registration window */}
              {(event.registrationStartDate || event.registrationEndDate) && (
                <div className="mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm text-neutral-700">
                    <span className="font-bold text-neutral-900">Registration:</span>{" "}
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

                  {event.registrationLink && (
                    <Link
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-black transition-colors shadow-sm"
                    >
                      Register Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              )}

              {/* Full description */}
              {event.description && (
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-neutral-700 leading-relaxed whitespace-pre-wrap">
                    {event.description}
                  </p>
                </div>
              )}

              {/* Primary CTA buttons */}
              {event.links && event.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {event.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-base font-semibold hover:bg-primary transition-all hover:scale-105"
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
              )}

              {/* Sponsors */}
              {event.sponsors && event.sponsors.length > 0 && (
                <div className="border-t border-neutral-200 pt-8">
                  <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
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
                          <div className="font-semibold text-lg text-neutral-800">
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
            </div>
          </motion.article>
        </div>
      </div>

      {/* Past Projects Section */}
      <PastProjectsSection />
    </div>
  )
}
