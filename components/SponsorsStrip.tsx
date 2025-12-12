'use client'

import { getSponsorsData } from '@/lib/sheets'
import { useSheetData } from '@/hooks/useSheetData'

export function SponsorsStrip() {
  const { data: sponsors } = useSheetData(getSponsorsData)

  if (!sponsors || sponsors.length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black py-3 md:py-4">
      <div className="relative overflow-hidden">
        {/* Gradient fade on left side - responsive width */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-gradient-to-r from-black via-black to-transparent md:w-60" />

        <div className="absolute left-2 top-1/2 z-30 -translate-y-1/2 text-[10px] uppercase tracking-wider text-white/30 md:left-4 md:text-xs">
          Our Sponsors
        </div>
        <div className="flex animate-scroll pl-20 md:pl-32">
          {/* First set of sponsors */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`first-${index}`}
              className="mx-4 flex-shrink-0 text-base font-semibold text-white/60 transition-colors hover:text-white md:mx-8 md:text-xl"
            >
              {sponsor.company}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`second-${index}`}
              className="mx-4 flex-shrink-0 text-base font-semibold text-white/60 transition-colors hover:text-white md:mx-8 md:text-xl"
            >
              {sponsor.company}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
