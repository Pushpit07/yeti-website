'use client'

import { Section } from "@/components/Section"
import Link from "next/link"
import { CurriculumInfoSection } from "@/components/CurriculumInfoSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { MissionSection } from "@/components/MissionSection"
import { getCityInfo, PROGRAM_INFO, getTestimonialsConfig } from "@/lib/constants"
import { useState, useEffect, useRef } from "react"
import { type Testimonial, type ContactInfo, getContactData } from "@/lib/sheets"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

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
    detailedContent: 'Get 24/7 access to our headquarter and makerspace. Work anytime in a cozy, inspiring environment designed to boost your productivity and creativity.',
    color: 'primary'
  }
]

export default function WTFPage() {
  const [selectedOffering, setSelectedOffering] = useState<OfferingType | null>(null)
  const [testimonials, setTestimonials] = useState<TestimonialsData>({
    title: "What Yetis say",
    highlightWord: "Yetis",
    subtitle: "Hear from our community of entrepreneurs and innovators who have been part of the YETI journey.",
    row1: [],
    row2: []
  })
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([])
  const [isApplyDropdownOpen, setIsApplyDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const [testimonialsData, contactData] = await Promise.all([
          getTestimonialsConfig(),
          getContactData()
        ])
        setTestimonials(testimonialsData)
        setContactInfo(contactData)
      } catch (err) {
        console.error("Failed to fetch data:", err)
      }
    }
    loadData()

    // Click outside handler for dropdown
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsApplyDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 lg:py-40 !pb-4 overflow-hidden">
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
                What is YETI?
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-[28px] text-white/75 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
              Find everything you need to know about YETI
            </p>
          </div>

          {/* Video Container at Start */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              {(() => {
                // Fallback ID
                const DEFAULT_VIDEO_ID = "hJh_SPRswcc"

                // Try to find dynamic video from sheets
                const dynamicVideoEntry = contactInfo.find(c =>
                  c.medium.toLowerCase().trim() === "wtf page video"
                )

                let videoId = DEFAULT_VIDEO_ID

                if (dynamicVideoEntry?.address) {
                  try {
                    // Extract ID from various YouTube URL formats
                    const url = dynamicVideoEntry.address
                    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                    const match = url.match(regExp)
                    if (match && match[2].length === 11) {
                      videoId = match[2]
                    } else {
                      // warning: invalid url format in sheet
                      console.warn("Invalid YouTube URL in sheet:", url)
                    }
                  } catch (e) {
                    console.error("Error parsing video URL:", e)
                  }
                }

                return (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="What is YETI?"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )
              })()}
            </div>
            <p className="text-center text-white/50 mt-4 text-sm font-light">
              Watch the video to understand what YETI is all about.
            </p>
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

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Ready to Join Section */}
            <div className="relative bg-black text-white rounded-3xl p-8 md:p-12 overflow-visible min-h-[400px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl overflow-hidden" />
              <div className="relative z-10 flex-1 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">Ready to join?</h3>
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-md">
                  Applications are open for both Dresden and Leipzig. The program is <strong className="text-primary font-semibold">completely free</strong>.
                </p>

                <div className="mt-auto relative w-full sm:w-auto" ref={dropdownRef}>
                  <button
                    onClick={() => setIsApplyDropdownOpen(!isApplyDropdownOpen)}
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2 w-full sm:w-auto"
                  >
                    Apply Now
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-200 ${isApplyDropdownOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isApplyDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-full left-0 sm:left-1/2 sm:-translate-x-1/2 mb-2 w-full sm:w-64 bg-white rounded-xl shadow-2xl overflow-hidden z-50 py-2"
                      >
                        <Link
                          href="/application/dresden"
                          className="flex items-center gap-3 px-6 py-3 hover:bg-neutral-50 transition-colors text-black"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="font-semibold">Apply for Dresden</span>
                        </Link>
                        <Link
                          href="/application/leipzig"
                          className="flex items-center gap-3 px-6 py-3 hover:bg-neutral-50 transition-colors text-black"
                        >
                          <span className="w-2 h-2 rounded-full bg-black" />
                          <span className="font-semibold">Apply for Leipzig</span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Community Section */}
            {(() => {
              const whatsapp = contactInfo.find(c => c.medium.toLowerCase().includes('what'))
              // Fallback if not fetched yet or not found
              const whatsappLink = whatsapp?.address || "https://chat.whatsapp.com/Gf290Qt4NEp7Chb070Dxmp" // Fallback link form footer
              const qrImage = whatsapp?.qrImage || "/qr-placeholder.png"

              return (
                <div className="relative bg-[#25D366] text-white rounded-3xl p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col group">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                  }} />

                  <div className="relative z-10 flex-1 flex flex-col h-full">
                    <div className="flex flex-col items-center text-center mb-6 relative z-20">
                      <div className="mb-2">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white opacity-80 mx-auto">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">Join our Community</h3>
                        <p className="text-white/90 font-medium text-lg">Stay updated via WhatsApp</p>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col items-center justify-end gap-6 w-full relative z-20">
                      {/* Qr Code */}
                      {whatsapp?.qrImage && (
                        <div className="w-48 h-48 bg-white p-3 rounded-xl shadow-lg shrink-0 overflow-hidden transform group-hover:scale-105 transition-transform">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={qrImage}
                            alt="WhatsApp QR Code"
                            className="w-full h-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#25D366] font-bold rounded-full transition-all hover:bg-neutral-100 hover:scale-105 shadow-lg w-full sm:w-auto"
                      >
                        Join Group
                      </a>
                    </div>
                  </div>
                </div>
              )
            })()}
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
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">2</div>
              <div className="text-white/80 font-medium">Cities</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">50+</div>
              <div className="text-white/80 font-medium">Projects</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">100+</div>
              <div className="text-white/80 font-medium">Active Members</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">€1M+</div>
              <div className="text-white/80 font-medium">Revenue by YETI Teams</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
