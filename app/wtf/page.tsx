'use client'

import { Section } from "@/components/Section"
import Link from "next/link"
import { CurriculumInfoSection } from "@/components/CurriculumInfoSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { MissionSection } from "@/components/MissionSection"
import { getCityInfo, PROGRAM_INFO, getTestimonialsConfig } from "@/lib/constants"
import { useState, useEffect } from "react"
import type { Testimonial } from "@/lib/sheets"

const cityInfo = getCityInfo('dresden')

type TestimonialsData = {
  title: string
  highlightWord: string
  subtitle: string
  row1: Testimonial[]
  row2: Testimonial[]
}

type OfferingType = {
  emoji: string
  title: string
  shortDescription: string
  detailedContent: string
  color: 'primary' | 'black' | 'white'
}

const offerings: OfferingType[] = [
  {
    emoji: '🚀',
    title: 'Prototyping Resources',
    shortDescription: 'Access to HQ and Makerspace to build your ideas.',
    detailedContent: 'Each project gets a budget of €300 to bring your ideas to life. You can develop and test your prototypes risk-free with our full support. Build, iterate, and experiment without worrying about costs.',
    color: 'primary'
  },
  {
    emoji: '👥',
    title: 'Expert Mentorship',
    shortDescription: 'Guidance from successful entrepreneurs.',
    detailedContent: 'Every YETI gets paired with a personal mentor—successful entrepreneurs and CEOs who share their real-world experience. Get guidance from people who have been there and done it.',
    color: 'black'
  },
  {
    emoji: '🎓',
    title: 'Skills Training',
    shortDescription: 'Workshops on business and leadership.',
    detailedContent: 'We offer free workshops on everything you need to know about founding a company—from business strategy to leadership skills. Learn the practical knowledge that will help you throughout your entrepreneurial journey.',
    color: 'white'
  },
  {
    emoji: '🌐',
    title: 'Network',
    shortDescription: 'Alumni, partners, and investors.',
    detailedContent: 'Join a powerful startup network. Connect with investors, successful founders, and CEOs who can help fast-track your growth. Your YETI network becomes a lifelong asset.',
    color: 'black'
  },
  {
    emoji: '💡',
    title: 'Project Support',
    shortDescription: 'Help from ideation to launch.',
    detailedContent: 'Every Thursday, our coaches work with you on your project\'s next steps and provide valuable feedback. Plus, you have constant support from your mentors whenever you get stuck.',
    color: 'white'
  },
  {
    emoji: '🏢',
    title: 'Workspace',
    shortDescription: 'Co-working space at YETI HQ.',
    detailedContent: 'Get 24/7 access to our headquarters and makerspace. Work anytime in a cozy, inspiring environment designed to boost your productivity and creativity.',
    color: 'primary'
  }
]

export default function WTFPage() {
  const [selectedOffering, setSelectedOffering] = useState<OfferingType | null>(null)
  const [testimonials, setTestimonials] = useState<TestimonialsData>({
    title: "What YETIs say",
    highlightWord: "YETIs",
    subtitle: "Hear from our community of entrepreneurs and innovators who have been part of the YETI journey.",
    row1: [],
    row2: []
  })

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const data = await getTestimonialsConfig()
        setTestimonials(data)
      } catch (err) {
        console.error("Failed to fetch testimonials:", err)
      }
    }
    loadTestimonials()
  }, [])

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-primary font-bold text-sm uppercase tracking-wider">
                The Real Question
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                WTF is YETI?
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-[28px] text-white/75 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              No fluff. No BS. Just the honest answer.
            </p>
          </div>

          {/* Video Container at Start */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/t0opx3NiUH8?si=VyVNI45VbsCROKfa"
                title="WTF is YETI?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-center text-white/50 mt-4 text-sm font-light">
              Watch the video to understand what YETI is all about.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/application/dresden"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
            >
              Apply for Dresden
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/application/leipzig"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-colors gap-2 border border-white/20"
            >
              Apply for Leipzig
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection
        mission={{
          pretitle: "Our",
          title: "Mission",
          description: "We empower young people to become entrepreneurial role models through networking, training and resources.",
          buttonText: "How it started",
          buttonHref: "/how-it-started"
        }}
        about={{
          title: "What is YETI?",
          paragraphs: [
            "<strong>Y</strong>oung <strong>E</strong>ntrepreneurs, in <strong>T</strong>ech and <strong>I</strong>nnovation Dresden is an educational initiative which aims to support the participants in becoming entrepreneurial role models and influential figures for society.",
            `The ${PROGRAM_INFO.duration.months}-month program enables students to develop business ideas and leadership skills.`,
            `Participants are mentored by the start-up community and ${cityInfo.mentorOrganization}.`
          ]
        }}
      />

      {/* What We Provide Section - Compact but Stylish */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            <span className="underline decoration-wavy underline-offset-8 decoration-primary">What</span> we provide
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {offerings.map((offering, index) => {
            const cardClasses = offering.color === 'primary'
              ? "bg-gradient-to-br from-primary to-primary-hover text-white"
              : offering.color === 'black'
                ? "bg-black text-white"
                : "bg-white border border-border";

            return (
              <div
                key={index}
                onClick={() => setSelectedOffering(offering)}
                className={`${cardClasses} rounded-xl p-4 md:p-5 relative overflow-hidden group cursor-pointer transition-transform hover:scale-105`}
              >
                {offering.color === 'primary' && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
                )}
                {offering.color === 'black' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <div className="relative z-10">
                  <span className="text-2xl">{offering.emoji}</span>
                  <h3 className={`font-bold text-sm md:text-base mt-2 mb-1 ${offering.color === 'white' ? '' : ''}`}>
                    {offering.title}
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${offering.color === 'primary' ? 'text-white/90' :
                    offering.color === 'black' ? 'text-white/80' :
                      'text-muted-foreground'
                    }`}>
                    {offering.shortDescription}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </Section>

      {/* Modal */}
      {selectedOffering && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedOffering(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedOffering(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center mb-6">
              <span className="text-5xl mb-4 block">{selectedOffering.emoji}</span>
              <h3 className="text-2xl font-bold mb-2">{selectedOffering.title}</h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-base">
              {selectedOffering.detailedContent}
            </p>
          </div>
        </div>
      )}

      {/* The Journey */}
      <CurriculumInfoSection
        title="Your 18-month journey"
        details={[
          {
            title: `${PROGRAM_INFO.duration.semesters} semesters`,
            description: PROGRAM_INFO.duration.description
          },
          {
            title: `${PROGRAM_INFO.timeCommitment.hoursPerWeek} hours/week`,
            description: PROGRAM_INFO.timeCommitment.description
          },
          {
            title: `${PROGRAM_INFO.yetiDay.day} is YETI-Day`,
            description: PROGRAM_INFO.yetiDay.description
          },
          {
            title: "Language",
            description: "YETI encourages international exchange. Thus, the program is conducted in English."
          }
        ]}
      />

      <TestimonialsSection
        title={testimonials.title}
        highlightWord={testimonials.highlightWord}
        subtitle={testimonials.subtitle}
        row1Testimonials={testimonials.row1}
        row2Testimonials={testimonials.row2}
      />

      {/* Who should apply */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
            Is YETI for <span className="underline decoration-wavy underline-offset-12 decoration-primary">you</span>?
          </h2>

          <p className="text-xl md:text-2xl lg:text-2xl text-muted-foreground mb-16 leading-relaxed font-light max-w-3xl mx-auto">
            If you&apos;re a student who wants to build something meaningful, learn by doing, and surround yourself with ambitious people –
            <br className="hidden md:block" />
            <strong className="text-primary font-semibold">hell yeah</strong>, YETI is for you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl border-2 border-border p-8 transition-all">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="font-bold text-xl mb-3">Action-oriented</h3>
              <p className="text-muted-foreground text-base leading-relaxed">You learn best by building, not just listening</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-8 transition-all">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="font-bold text-xl mb-3">Ambitious</h3>
              <p className="text-muted-foreground text-base leading-relaxed">You want to create impact, not just get a degree</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-8 transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="font-bold text-xl mb-3">Team player</h3>
              <p className="text-muted-foreground text-base leading-relaxed">You thrive in a community of like-minded people</p>
            </div>
          </div>

          <div className="relative bg-black text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Ready to join?</h3>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Applications are open for both Dresden and Leipzig.
                <br className="hidden md:block" />
                The program is <strong className="text-primary font-semibold">completely free</strong>, and you even get prototyping budget for projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/application/dresden"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                >
                  Apply for Dresden
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/application/leipzig"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors gap-2"
                >
                  Apply for Leipzig
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Stats */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight">
            YETI by the <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">numbers</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">18</div>
              <div className="text-white/80 font-medium">Months Program</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">100+</div>
              <div className="text-white/80 font-medium">Active Members</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">€1M+</div>
              <div className="text-white/80 font-medium">Revenue by YETI Teams</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">2</div>
              <div className="text-white/80 font-medium">Cities (Dresden & Leipzig)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
