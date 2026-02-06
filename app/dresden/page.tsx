"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/Hero"
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
      {/* Hero Section - Keep existing */}
      <Hero
        title="We are YETI Dresden"
        subtitle="Young Entrepreneurs in Tech and Innovation"
        cta={{ label: "Apply now", href: "/application/dresden" }}
        backgroundVideoUrl="/demo-day-recap.mp4"
      />

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
