"use client"

import Image from "next/image"
import { FadeIn } from "./FadeIn"
import { Button } from "./Button"

interface ApplicationCTAProps {
  city: "dresden" | "leipzig"
}

export function ApplicationCTA({ city }: ApplicationCTAProps) {
  return (
    <FadeIn>
      <section className="relative bg-black text-white overflow-hidden">
        {/* Full-width Image */}
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src="/application.jpg"
            alt="YETI Application"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 z-10 px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-2">
              Application
            </h2>
            <p className="text-lg md:text-lg text-white/90 mb-8 max-w-3xl mx-auto text-center">
              FAQs, Zoom-Info-Calls, Application Timeline, Tips & Tricks...
            </p>
            <Button
              href={`/application/${city}`}
              variant="rounded"
            >
              Click here for more
            </Button>
          </div>
        </div>
      </section>
    </FadeIn>
  )
}
