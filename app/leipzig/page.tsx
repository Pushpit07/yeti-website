"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/Button"
import { OverviewSection } from "@/components/OverviewSection"
import { HeadquartersSection } from "@/components/HeadquartersSection"
import { MakerspaceSummarySection } from "@/components/MakerspaceSummarySection"
import { GallerySection } from "@/components/GallerySection"
import { ContactSection } from "@/components/ContactSection"
import { getLocationData, getMediaContent, type LocationData, type MediaContent } from "@/lib/sheets"

export default function LeipzigPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [locationData, setLocationData] = useState<LocationData>({
    location: "Leipzig",
    yearStarted: "2023",
    yetiCounts: "30+",
    yetiGenerations: "2",
    innovationProjects: "10+",
    industryProjects: "5+",
    foundingProjects: "3+",
    hqAddress: "SpinLab, Spinnereistraße 7, 04179 Leipzig",
    emailId: "info@yeti-leipzig.org",
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
          getLocationData("Leipzig"),
          getMediaContent()
        ])

        if (locData && locData[0]) {
          setLocationData(locData[0])
        }
        if (medData) {
          setMediaContent(medData)
        }
      } catch (err) {
        console.error("Failed to fetch Leipzig data:", err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

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
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/yeti-leipzig.jpg"
            alt="YETI Leipzig"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative z-10 flex min-h-screen flex-col items-start justify-end p-8 md:p-12">
          <h1 className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">YETI is now in Leipzig!</h1>
          <p className="mb-6 max-w-md text-lg text-white opacity-90 md:text-xl">Young Entrepreneurs in Tech and Innovation</p>
          <Button
            href="/application/leipzig"
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
        city="Leipzig"
      />

      {/* Makerspace Section */}
      <MakerspaceSummarySection location="Leipzig" />

      {/* Gallery Section */}
      <GallerySection
        images={mediaContent.leipzigGeneral}
        location="Leipzig"
      />

      {/* Contact Section */}
      <ContactSection
        hqAddress={locationData.hqAddress}
        emailId={locationData.emailId}
        city="Leipzig"
      />
    </div>
  )
}
