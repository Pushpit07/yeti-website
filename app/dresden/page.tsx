import { Hero } from "@/components/Hero"
import { OverviewSection } from "@/components/OverviewSection"
import { HeadquartersSection } from "@/components/HeadquartersSection"
import { MakerspaceSummarySection } from "@/components/MakerspaceSummarySection"
import { GallerySection } from "@/components/GallerySection"
import { ContactSection } from "@/components/ContactSection"
import { getLocationData } from "@/lib/sheets"

export const revalidate = 60

export default async function DresdenPage() {
  // Fetch location-specific data from Google Sheets
  const locationDataArray = await getLocationData("Dresden")
  const locationData = locationDataArray[0] || {
    location: "Dresden",
    yearStarted: "2019",
    yetiCounts: "200+",
    yetiGenerations: "10",
    innovationProjects: "50+",
    industryProjects: "30+",
    foundingProjects: "15+",
    hqAddress: "Leubnitzer Str. 28, 01069 Dresden",
    emailId: "info@yeti-dresden.org",
    contentFolder: ""
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
      <MakerspaceSummarySection />

      {/* Gallery Section */}
      <GallerySection
        contentFolder={locationData.contentFolder}
        location="Dresden"
      />

      {/* Contact Section */}
      <ContactSection
        hqAddress={locationData.hqAddress}
        emailId={locationData.emailId}
        city="Dresden"
      />
    </div>
  )
}
