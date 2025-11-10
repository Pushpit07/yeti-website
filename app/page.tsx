import Link from "next/link"
import Header from "@/components/Header"
import { SponsorsStrip } from "@/components/SponsorsStrip"

export const dynamic = "force-static"

export default async function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <Header variant="black" />
      {/* Full viewport split layout */}
      <div className="group/container flex min-h-screen pt-16 pb-14">
        {/* Dresden Section */}
        <Link
          href="/dresden"
          className="group relative flex flex-1 items-end overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 p-8 transition-all duration-700 ease-in-out hover:flex-[4] md:p-12"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover opacity-80 transition-opacity group-hover:opacity-100"
            style={{
              backgroundImage:
                'url("https://visitsaxony.com/fileadmin/Mediendatenbank_EN/Bilder/Staedte/Dresden/BruehlscheTerrasse_DD__c__pixdd.jpg")',
              backgroundPosition: '10% center',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 text-white transition-all duration-700 group-has-[:hover]/container:translate-y-8 group-has-[:hover]/container:opacity-0 group-hover:translate-y-0! group-hover:opacity-100!">
            <div className="mb-4 text-xl font-medium uppercase tracking-wider">
              YETI
            </div>
            <h1 className="mb-2 text-5xl font-bold md:text-6xl lg:text-7xl">
              DRESDEN
            </h1>
            <p className="mb-6 max-w-md text-lg opacity-90 md:text-xl">
              Young Entrepreneurs in Tech and Innovation
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold transition-colors group-hover:bg-white group-hover:text-black">
              Explore Dresden
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
            </div>
          </div>
        </Link>

        {/* Middle non-hoverable area - removed from flex */}

        {/* Leipzig Section */}
        <Link
          href="/leipzig"
          className="group relative flex flex-1 items-end overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 p-8 transition-all duration-700 ease-in-out hover:flex-[3] md:p-12"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity group-hover:opacity-100"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1595867818082-083862f3d630?q=80&w=2000")',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 text-white transition-all duration-700 group-has-[:hover]/container:translate-y-8 group-has-[:hover]/container:opacity-0 group-hover:translate-y-0! group-hover:opacity-100!">
            <div className="mb-4 text-xl font-medium uppercase tracking-wider">
              YETI
            </div>
            <h1 className="mb-2 text-5xl font-bold md:text-6xl lg:text-7xl">
              LEIPZIG
            </h1>
            <p className="mb-6 max-w-md text-lg opacity-90 md:text-xl">
              Young Entrepreneurs in Tech and Innovation
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold transition-colors group-hover:bg-white group-hover:text-black">
              Explore Leipzig
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
            </div>
          </div>
        </Link>
      </div>

      {/* Fixed center transparent overlay with 7.5% overlap on each side */}
      <div className="fixed left-1/2 top-0 z-10 h-screen w-[15%] -translate-x-1/2" />

      {/* Sponsors strip at bottom */}
      <SponsorsStrip />
    </div>
  )
}

