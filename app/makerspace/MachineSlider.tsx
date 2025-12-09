"use client" // This remains a client component

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { type Machine } from "@/lib/sheets" // Import our new type
import { convertGoogleDriveLink } from "@/lib/utils" // Import our new helper

type MachineSliderProps = {
  machines: Machine[]
}

export function MachineSlider({ machines }: MachineSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // --- Autoplay and Navigation ---
  const nextSlide = useCallback(() => {
    if (!machines || machines.length === 0) return
    setCurrentSlide((prev) => (prev === machines.length - 1 ? 0 : prev + 1))
  }, [machines])

  useEffect(() => {
    if (!machines || machines.length === 0) return
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide, machines])

  // Fallback if no machines are loaded
  if (!machines || machines.length === 0) {
    return (
      <div className="relative w-full rounded-2xl border-2 border-border bg-white shadow-lg overflow-hidden p-12 text-center">
        <h3 className="text-2xl font-bold text-muted-foreground">
          Loading equipment...
        </h3>
        <p className="text-muted-foreground">
          Check back soon to see our full list of tools.
        </p>
      </div>
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? machines.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  // -------------------------------

  return (
    <div className="relative w-full rounded-2xl border-2 border-border bg-white shadow-lg overflow-hidden">
      {/* --- Slider Track --- */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {machines.map((machine, i) => (
          <div
            key={machine.name + i} // Use index for a more stable key
            className="flex-shrink-0 w-full grid md:grid-cols-2"
          >
            {/* Left Column (Image) - UPDATED */}
            <div className="relative w-full h-[300px] md:h-[450px] bg-neutral-100">
              <Image
                src={convertGoogleDriveLink(machine.imageLink)}
                alt={machine.name}
                fill
                className="object-contain" // Changed from object-cover
                priority={i === 0} // Prioritize loading the first image
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Column (Content) - UPDATED */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {machine.name}
              </h3>

              {/* NEW: Conditional list rendering.
                If the 'about' text contains a newline, split it into a list.
                Otherwise, render it as a paragraph.
              */}
              {machine.about.includes("\n") ? (
                <ul className="space-y-2 text-lg text-muted-foreground list-disc pl-5">
                  {machine.about.split("\n").map((line, index) =>
                    // Only render non-empty lines
                    line.trim() ? <li key={index}>{line}</li> : null
                  )}
                </ul>
              ) : (
                <p className="text-lg text-muted-foreground">
                  {machine.about}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- Navigation Buttons (Prev/Next) --- */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight />
      </button>

      {/* --- Navigation Dots --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {machines.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-primary"
                : "bg-black/30 hover:bg-black/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// --- Icon Components (self-contained) ---
function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}