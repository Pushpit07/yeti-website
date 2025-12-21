import Link from "next/link"
import { DynamicHeader } from "@/components/DynamicHeader"
import { SponsorsStrip } from "@/components/SponsorsStrip"
import { Button } from "@/components/Button"
import DomainRedirect from "@/components/DomainRedirect"

export const dynamic = "force-static"

export default async function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <DomainRedirect />
      <DynamicHeader />
      {/* Full viewport split layout */}
      <div className="group/container flex min-h-screen md:flex-row flex-col pt-16 md:pb-14 pb-12">
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
                'url("/dresden.webp")',
              backgroundPosition: '10% center',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 text-white md:transition-all md:duration-700 md:group-has-[:hover]/container:translate-y-8 md:group-has-[:hover]/container:opacity-0 md:group-hover:translate-y-0! md:group-hover:opacity-100!">
            <div className="text-base font-medium uppercase tracking-wider md:mb-4 md:text-xl">
              YETI
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-6xl lg:text-7xl">
              DRESDEN
            </h1>
            <p className="mb-4 max-w-md text-base opacity-90 md:mb-6 md:text-xl">
              Young Entrepreneurs in Tech and Innovation
            </p>
            <Button
              variant="rounded-full"
              useGroupHover
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
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
              Explore Dresden
            </Button>
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
              backgroundImage: 'url("/leipzig.jpg")',
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 text-white md:transition-all md:duration-700 md:group-has-[:hover]/container:translate-y-8 md:group-has-[:hover]/container:opacity-0 md:group-hover:translate-y-0! md:group-hover:opacity-100!">
            <div className="text-base font-medium uppercase tracking-wider md:mb-4 md:text-xl">
              YETI
            </div>
            <h1 className="mb-2 text-4xl font-bold md:text-6xl lg:text-7xl">
              LEIPZIG
            </h1>
            <p className="mb-4 max-w-md text-base opacity-90 md:mb-6 md:text-xl">
              Young Entrepreneurs in Tech and Innovation
            </p>
            <Button
              variant="rounded-full"
              useGroupHover
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 md:w-5 md:h-5"
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
              Explore Leipzig
            </Button>
          </div>
        </Link>
      </div>

      {/* Fixed center transparent overlay with 7.5% overlap on each side */}
      <div className="fixed left-1/2 top-0 z-10 h-screen w-[15%] -translate-x-1/2 hidden md:block" />

      {/* Sponsors strip at bottom */}
      <SponsorsStrip />
    </div>
  )
}

