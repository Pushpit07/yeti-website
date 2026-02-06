"use client"

import { Section } from "@/components/Section"
import { FAQAccordion } from "@/components/FAQAccordion"
import { FAQHeader } from "@/components/FAQHeader"
import { BookZoomCallCTA } from "@/components/BookZoomCallCTA"
import Link from "next/link"
import Image from "next/image"
import { getApplicationDates } from "@/lib/constants"
import { getApplicationData } from "@/lib/sheets"
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { useSheetData } from "@/hooks/useSheetData"
import { trackEvent } from "@/lib/analytics"


const applicationDates = getApplicationDates('dresden')

export default function ApplicationDresdenPage() {
  const { data: appData, isLoading } = useSheetData("application", getApplicationData)
  const data = appData.find(d => d.city.toLowerCase() === 'dresden')

  const isApplicationOpen = data?.status
  const applicationEmail = "application@yeti-dresden.org"

  // Helper to format Generation text (e.g., "G8" -> "Generation 8")
  const formatGeneration = (gen: string) => {
    if (!gen) return ""
    if (gen.toUpperCase().startsWith("G") && !isNaN(Number(gen.substring(1)))) {
      return `Generation ${gen.substring(1)}`
    }
    return gen
  }

  const generationText = data?.generation ? formatGeneration(data.generation) : ""

  if (isLoading) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="font-sans">
      {/* Hero Section with Image */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/application.jpg"
            alt="YETI Dresden Application"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 tracking-tight">
            Apply for <span className="text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">YETI Dresden</span>
          </h1>

          <div className="max-w-3xl mx-auto space-y-8 backdrop-blur-md bg-black/40 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
            {/* Dynamic Status Text */}
            {isApplicationOpen ? (
              <div className="space-y-4">
                <div className="inline-block bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                  Applications Open
                </div>

                {(data?.intake && data?.year) && (
                  <p className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    Application for <span className="text-primary">{data.intake} {data.year}</span>
                  </p>
                )}

                {generationText && (
                  <p className="text-xl md:text-2xl font-medium text-white/80">
                    {generationText}
                  </p>
                )}

                <p className="text-lg text-white/60 pt-2">
                  Applications close on <span className="text-white font-bold">{data?.endDate}</span>
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="inline-block bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-2">
                  Applications Opening Soon
                </div>

                <p className="text-2xl md:text-3xl font-bold text-white/90">
                  {generationText ? `Applications for ${generationText} are currently closed` : "Applications are currently closed"}
                </p>
                <p className="text-lg text-white/60">
                  Opening soon on <span className="text-white font-bold">{data?.openDate || applicationDates.openingDate}</span>
                </p>
              </div>
            )}

            <div className="pt-8 border-t border-white/10">
              <p className="text-white/80 mb-6 text-lg">
                Please send your <span className="font-bold text-white border-b-2 border-primary/50">Resume</span> and <span className="font-bold text-white border-b-2 border-primary/50">Motivation Letter</span> to:
              </p>

              <a
                href={`mailto:${applicationEmail}`}
                onClick={() => trackEvent('generate_lead', 'application', 'email_dresden_hero')}
                className="group inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold text-xl transition-all hover:bg-primary hover:text-white hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
              >
                <Mail className="w-6 h-6" />
                <span>{applicationEmail}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="#details"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold group"
            >
              Learn more about the process <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-y-1 rotate-90" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Grid (Side-by-Side) */}
      <section className="py-20 md:py-32 bg-neutral-50" id="details">
        <div className="container mx-auto px-4 max-w-7xl">

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

            {/* Left Column: Requirements */}
            <div className="space-y-10 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-neutral-900">What we&apos;re looking for</h2>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  We don&apos;t care about your grades. We care about your drive, your vision, and your willingness to take action.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Entrepreneurial Spirit", desc: "You want to build, lead, and drive innovation." },
                  { title: "Action Oriented", desc: "You prefer doing over talking. You find solutions." },
                  { title: "Commitment", desc: "Ready to dedicate 10-15 hours/week for 18 months." },
                  { title: "Presence", desc: "Available for weekly on-site sessions in Dresden." }
                ].map((req, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2">{req.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{req.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Process & CTA */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-neutral-100 lg:sticky lg:top-8">
              <h3 className="text-2xl font-bold mb-8">Application Process</h3>

              <div className="space-y-10 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-neutral-100">
                {[
                  { step: "1", title: "Apply via Email", desc: `Send your CV and motivation letter to ${applicationEmail}` },
                  { step: "2", title: "Personal Interview", desc: "30-minute chat with our founders and team members." },
                  { step: "3", title: "Welcome to YETI", desc: "Receive your acceptance and join the kick-off weekend." }
                ].map((item, i) => (
                  <div key={i} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold z-10 ring-4 ring-white">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-neutral-100">
                <a
                  href={`mailto:${applicationEmail}`}
                  onClick={() => trackEvent('generate_lead', 'application', 'email_dresden_steps')}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-primary/25"
                >
                  <Mail className="w-5 h-5" />
                  Send Application
                </a>
              </div>
            </div>

          </div>

          {/* Navigation Link Below */}
          <div className="mt-24 text-center">
            <div className="inline-block bg-neutral-900 text-white p-1 rounded-full">
              <Link href="/application/leipzig" className="flex items-center gap-4 px-8 py-4 rounded-full hover:bg-white/10 transition-colors group">
                <span className="text-white/60">Applying for Leipzig?</span>
                <span className="font-bold flex items-center gap-2">
                  Go to YETI Leipzig
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      <Section className="bg-white border-t border-neutral-100">
        <FAQHeader
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about the application process"
        />

        <FAQAccordion
          city="dresden"
        />
      </Section>

      <BookZoomCallCTA city="dresden" />
    </div>
  )
}
