'use client'

import { useState } from "react"

type JourneyCardType = {
  id: string
  title: string
  subtitle: string
  detailedContent: string
}

const journeyCards: JourneyCardType[] = [
  {
    id: 'innovation',
    title: 'Innovation Project',
    subtitle: 'Ideation & Validation',
    detailedContent: 'In your first semester, you receive a topic from our coaches and learn design thinking by working on real challenges. At the end of the semester, showcase your project on stage at our Demo Day in front of a large audience of entrepreneurs, investors, and community members.'
  },
  {
    id: 'industry',
    title: 'Industry Project',
    subtitle: 'Real-world Application',
    detailedContent: 'Partner with real industry companies and apply your design thinking knowledge from the first semester. Build actual solutions for industry partners and get validation directly from the companies you\'re working with.'
  },
  {
    id: 'founding',
    title: 'Start-up Project / Social Innovation',
    subtitle: 'Launch & Impact',
    detailedContent: 'It\'s go-time! Work on your own startup idea while learning everything about founding a company in Germany. This semester culminates with Business Angel Day, where you pitch your startup to real investors and business angels.'
  },
  {
    id: 'internal',
    title: 'Internal Projects',
    subtitle: 'Leadership & Skills',
    detailedContent: 'Take on leadership roles like Team Lead or Semester Lead throughout the 18-month program. Learn skills outside your field of study—sales, branding, recruiting, and more. YETI is student-run, so you\'re building the organization while building yourself.'
  },
  {
    id: 'events',
    title: 'Workshops, Mentoring, Coaching, Events & more…',
    subtitle: 'Continuous Development',
    detailedContent: 'Throughout each semester, attend workshops and fireside chats with successful entrepreneurs who share their real journeys. Get regular coaching sessions, mentoring support, and join fun events that make your YETI experience unforgettable.'
  }
]

export function Curriculum() {
  const [selectedCard, setSelectedCard] = useState<JourneyCardType | null>(null)

  return (
    <>
      <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-neutral-50/50 p-2 md:p-5 shadow-sm h-full">
        <div className="grid grid-cols-4 gap-1.5 md:gap-3">
          {/* Headers */}
          <div className="group relative rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-1.5 py-1.5 md:px-3 md:py-3 text-center border border-neutral-200">
            <div className="absolute -top-1.5 -right-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-primary text-white text-[8px] md:text-[10px] font-bold shadow-sm">
              1
            </div>
            <div className="text-xs md:text-base font-bold mt-1.5 md:mt-2">Semester 1</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground mt-0.5">Learn</div>
          </div>
          <div className="group relative rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-1.5 py-1.5 md:px-3 md:py-3 text-center border border-neutral-200">
            <div className="absolute -top-1.5 -right-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-primary text-white text-[8px] md:text-[10px] font-bold shadow-sm">
              2
            </div>
            <div className="text-xs md:text-base font-bold mt-1.5 md:mt-2">Semester 2</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground mt-0.5">Apply</div>
          </div>
          <div className="group relative rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-1.5 py-1.5 md:px-3 md:py-3 text-center border border-neutral-200">
            <div className="absolute -top-1.5 -right-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-primary text-white text-[8px] md:text-[10px] font-bold shadow-sm">
              3
            </div>
            <div className="text-xs md:text-base font-bold mt-1.5 md:mt-2">Semester 3</div>
            <div className="text-[8px] md:text-[10px] text-muted-foreground mt-0.5">Launch</div>
          </div>
          <div className="group relative rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 px-1.5 py-1.5 md:px-3 md:py-3 text-center border border-primary/30">
            <div className="absolute -top-1.5 -right-1.5 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-white text-[8px] md:text-[10px] font-bold shadow-sm">
              ∞
            </div>
            <div className="text-xs md:text-base font-bold text-primary mt-1.5 md:mt-2">Alumni</div>
            <div className="text-[8px] md:text-[10px] text-primary/70 mt-0.5">Forever</div>
          </div>

          {/* Top Row - Project Types - CLICKABLE */}
          <div
            onClick={() => setSelectedCard(journeyCards[0])}
            className="group rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 px-1.5 py-3 md:px-3 md:py-5 text-center border border-primary/20 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute top-1 left-1 px-1 py-0.5 bg-white/50 backdrop-blur-sm rounded-full text-[6px] md:text-[9px] font-medium text-primary">
              Semester 1
            </div>
            <div className="text-[10px] md:text-sm font-bold mt-1.5">Innovation Project</div>
            <div className="text-[7px] md:text-[10px] text-muted-foreground mt-0.5 md:mt-1">Ideation & Validation</div>
          </div>
          <div
            onClick={() => setSelectedCard(journeyCards[1])}
            className="group rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 px-1.5 py-3 md:px-3 md:py-5 text-center border border-primary/20 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute top-1 left-1 px-1 py-0.5 bg-white/50 backdrop-blur-sm rounded-full text-[6px] md:text-[9px] font-medium text-primary">
              Semester 2
            </div>
            <div className="text-[10px] md:text-sm font-bold mt-1.5">Industry Project</div>
            <div className="text-[7px] md:text-[10px] text-muted-foreground mt-0.5 md:mt-1">Real-world Application</div>
          </div>
          <div
            onClick={() => setSelectedCard(journeyCards[2])}
            className="group rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 px-1.5 py-3 md:px-3 md:py-5 text-center border border-primary/20 relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute top-1 left-1 px-1 py-0.5 bg-white/50 backdrop-blur-sm rounded-full text-[6px] md:text-[9px] font-medium text-primary">
              Semester 3
            </div>
            <div className="text-[10px] md:text-sm font-bold leading-tight mt-1.5">
              Start-up Project /<br />
              Social Innovation
            </div>
            <div className="text-[7px] md:text-[10px] text-muted-foreground mt-0.5 md:mt-1">Launch & Impact</div>
          </div>

          {/* Alumni Tall Card (spans 2 rows) - NOT clickable */}
          <div className="rounded-xl bg-gradient-to-br from-primary via-primary to-primary-hover text-white px-2 py-4 md:px-4 md:py-8 text-center row-span-2 shadow-lg relative overflow-hidden border border-primary-hover">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-10 h-10 md:w-20 md:h-20 bg-white/10 rounded-full -translate-y-5 translate-x-5 md:-translate-y-10 md:translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 md:w-24 md:h-24 bg-white/5 rounded-full translate-y-6 -translate-x-6 md:translate-y-12 md:-translate-x-12"></div>

            <div className="relative z-10 space-y-1 md:space-y-2">
              <div className="text-[10px] md:text-lg font-bold leading-tight">
                Network<br />
                &<br />
                Mentoring
              </div>
              <div className="text-[7px] md:text-xs text-white/80 max-w-[80px] md:max-w-[140px] mx-auto">
                Continuous support throughout your journey
              </div>
              <div className="flex items-center justify-center gap-0.5 md:gap-1 mt-1">
                <div className="h-0.5 w-0.5 rounded-full bg-white/40"></div>
                <div className="h-0.5 w-0.5 rounded-full bg-white/60"></div>
                <div className="h-0.5 w-0.5 rounded-full bg-white/80"></div>
                <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Middle Row - Internal Projects - CLICKABLE (all 3 open same modal) */}
          <div
            onClick={() => setSelectedCard(journeyCards[3])}
            className="group rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white px-1.5 py-3 md:px-3 md:py-5 text-center shadow-md relative overflow-hidden border border-primary-hover cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[10px] md:text-sm font-bold">Internal Projects</div>
              <div className="text-[7px] md:text-[10px] text-white/70 mt-0.5">Hands-on Learning</div>
            </div>
          </div>
          <div
            onClick={() => setSelectedCard(journeyCards[3])}
            className="group rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white px-1.5 py-3 md:px-3 md:py-5 text-center shadow-md relative overflow-hidden border border-primary-hover cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[10px] md:text-sm font-bold">Internal Projects</div>
              <div className="text-[7px] md:text-[10px] text-white/70 mt-0.5">Creative Solutions</div>
            </div>
          </div>
          <div
            onClick={() => setSelectedCard(journeyCards[3])}
            className="group rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white px-1.5 py-3 md:px-3 md:py-5 text-center shadow-md relative overflow-hidden border border-primary-hover cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[10px] md:text-sm font-bold">Internal Projects</div>
              <div className="text-[7px] md:text-[10px] text-white/70 mt-0.5">Team Collaboration</div>
            </div>
          </div>

          {/* Bottom Banner - CLICKABLE */}
          <div
            onClick={() => setSelectedCard(journeyCards[4])}
            className="rounded-xl bg-gradient-to-r from-black via-neutral-900 to-black text-white px-2 py-2 md:px-4 md:py-4 text-center col-span-4 shadow-lg relative overflow-hidden border border-neutral-800 cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-[9px] md:text-sm font-semibold">
                Workshops, Mentoring, Coaching, Events &amp; more…
              </div>
              <div className="text-[7px] md:text-[10px] text-neutral-400 mt-0.5 md:mt-1">
                Continuous Development Throughout Your Journey
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{selectedCard.title}</h3>
              <p className="text-sm text-primary font-semibold">{selectedCard.subtitle}</p>
            </div>

            <p className="text-gray-700 leading-relaxed text-base">
              {selectedCard.detailedContent}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
