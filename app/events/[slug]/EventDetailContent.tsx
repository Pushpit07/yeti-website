"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PastProjectsSection } from "@/components/PastProjectsSection"

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
          >
            {/* Luma Event Embed or Event Image */}
            {event.lumaUrl ? (
              <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg mb-12">
                <iframe
                  src={event.lumaUrl}
                  width="100%"
                  height="530"
                  frameBorder="0"
                  style={{ border: 0 }}
                  aria-label="Luma event registration"
                  className="w-full"
                />
              </div>
            ) : event.image ? (
              <div className="relative w-full h-96 md:h-[500px] bg-neutral-200 rounded-xl overflow-hidden shadow-lg mb-12">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}

            {/* Event Details */}
            <div>
              {/* Date & Location */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-base">{event.dateFormatted}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold text-base">{event.location}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                {event.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-600 leading-relaxed mb-8">
                {event.description}
              </p>

              {/* Sponsors */}
              {event.sponsors && event.sponsors.length > 0 && (
                <div className="border-t border-neutral-200 pt-8 mb-8">
                  <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
                    Sponsored By
                  </h2>
                  <div className="space-y-4">
                    {event.sponsors.map((sponsor, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        {sponsor.logo && (
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-lg text-black">{sponsor.name}</div>
                          {sponsor.description && (
                            <div className="text-base text-neutral-600">{sponsor.description}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sponsor Message */}
                  {event.sponsorMessage && (
                    <div className="mt-6">
                      <p className="text-base text-neutral-700 leading-relaxed">
                        {event.sponsorMessage}
                      </p>
                    </div>
                  )}

                  {/* Sponsor Images */}
                  {event.sponsorImages && event.sponsorImages.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {event.sponsorImages.map((image, idx) => (
                        <div key={idx} className="relative w-full h-80 bg-white rounded-xl overflow-hidden shadow-lg p-4">
                          <Image
                            src={image}
                            alt={`Sponsor image ${idx + 1}`}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Links */}
              {event.links && event.links.length > 0 && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {event.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-primary transition-colors font-semibold text-lg"
                    >
                      {link.label}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
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
