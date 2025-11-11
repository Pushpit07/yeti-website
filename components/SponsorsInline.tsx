'use client'

export function SponsorsInline() {
  const sponsors = [
    'TechCorp',
    'InnovateLabs',
    'FutureTech',
    'StartupHub',
    'VentureCapital',
    'DigitalWorks',
    'CloudSystems',
    'DataDrive',
    'NextGen',
    'SmartSolutions',
  ]

  return (
    <div className="border-t border-b border-white/5 bg-black py-4">
      <div className="relative overflow-hidden">
        {/* Gradient fade on left side */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-50 bg-gradient-to-r from-black via-black to-transparent" />

        <div className="absolute left-4 top-1/2 z-30 -translate-y-1/2 text-xs uppercase tracking-wider text-white/30">
          Sponsors
        </div>
        <div className="flex animate-scroll pl-32">
          {/* First set of sponsors */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`first-${index}`}
              className="mx-8 flex-shrink-0 text-xl font-semibold text-white/60 transition-colors hover:text-white"
            >
              {sponsor}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {sponsors.map((sponsor, index) => (
            <div
              key={`second-${index}`}
              className="mx-8 flex-shrink-0 text-xl font-semibold text-white/60 transition-colors hover:text-white"
            >
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
