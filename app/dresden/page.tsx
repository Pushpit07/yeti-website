"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/Button"
import { OverviewSection } from "@/components/OverviewSection"
import { HeadquartersSection } from "@/components/HeadquartersSection"
import { MakerspaceSummarySection } from "@/components/MakerspaceSummarySection"
import { GallerySection } from "@/components/GallerySection"
import { ContactSection } from "@/components/ContactSection"
import { getLocationData, getMediaContent, type LocationData, type MediaContent } from "@/lib/sheets"

export default function DresdenPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [locationData, setLocationData] = useState<LocationData>({
    location: "Dresden",
    yearStarted: "2019",
    yetiCounts: "200+",
    yetiGenerations: "10",
    innovationProjects: "50+",
    industryProjects: "30+",
    foundingProjects: "15+",
    hqAddress: "Leubnitzer Str. 28, 01069 Dresden",
    emailId: "info@yeti-dresden.org",
    contentFolder: "",
    hqContent: ""
  })
  const [mediaContent, setMediaContent] = useState<MediaContent>({
    dresdenHQ: [],
    leipzigHQ: [],
    dresdenGeneral: [],
    leipzigGeneral: []
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const [locData, medData] = await Promise.all([
          getLocationData("Dresden"),
          getMediaContent()
        ])

        if (locData && locData[0]) {
          setLocationData(locData[0])
        }
        if (medData) {
          setMediaContent(medData)
        }
      } catch (err) {
        console.error("Failed to fetch Dresden data:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  // Handle hash navigation for smooth scrolling to sections
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }

    // Handle on mount and when loading completes
    if (!isLoading) {
      handleHashNavigation()
    }

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation)
    return () => window.removeEventListener('hashchange', handleHashNavigation)
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          {(() => {
            const mediaUrl = (locationData?.backgroundMedia && locationData.backgroundMedia.startsWith('http')) ? locationData.backgroundMedia : "/demo-day-recap.mp4"
            const isVideo = mediaUrl.match(/\.(mp4|webm|ogg)$/i) !== null

            if (isVideo) {
              return (
                <video
                  aria-hidden
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={mediaUrl}
                  preload="none"
                />
              )
            }

            return (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={mediaUrl}
                alt="YETI Dresden"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
                loading="lazy"
                decoding="async"
              />
            )
          })()}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 flex min-h-screen flex-col items-start justify-end p-8 md:p-12">
          <h1 className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">We are YETI Dresden</h1>
          <p className="mb-6 max-w-md text-lg text-white opacity-90 md:text-xl">Young Entrepreneurs in Tech and Innovation</p>
          <Button
            href="/application/dresden"
            variant="rounded-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            }
          >
            Apply now
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <OverviewSection locationData={locationData} />

      {/* Headquarters Section */}
      <HeadquartersSection
        hqAddress={locationData.hqAddress}
        city="Dresden"
      />

      {/* Makerspace Section */}
      <MakerspaceSummarySection location="Dresden" />

      {/* Gallery Section */}
      <GallerySection
        images={mediaContent.dresdenGeneral}
        location="Dresden"
      />

      {/* Contact Section */}
      <ContactSection
        hqAddress={locationData.hqAddress}
        emailId={locationData.emailId}
      />
    </div>
  )
}
