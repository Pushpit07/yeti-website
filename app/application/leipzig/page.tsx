import { Section } from "@/components/Section"
import { FAQAccordion } from "@/components/FAQAccordion"
import { FAQHeader } from "@/components/FAQHeader"
import Link from "next/link"
import Image from "next/image"
import { getCityInfo, getApplicationDates, getGenerationText } from "@/lib/constants"

export const dynamic = "force-static"

const cityInfo = getCityInfo('leipzig')
const applicationDates = getApplicationDates('leipzig')

export const metadata = {
  title: "Application Leipzig | YETI",
  description: "Everything you need to know about applying to YETI Leipzig - FAQs, Timeline, Tips & Tricks",
}

export default function ApplicationLeipzigPage() {
  return (
    <div className="font-sans">
      {/* Hero Section with Image */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative w-full h-[500px] md:h-[600px]">
          <Image
            src="/application.jpg"
            alt="YETI Leipzig Application"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              Apply for YETI Leipzig
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
              Your journey to YETI Leipzig starts here
            </p>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Application <span className="underline decoration-wavy underline-offset-8 decoration-primary">Process</span>
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            A simple three-step process to join the YETI Leipzig community
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Submit Your Application</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Send your CV and motivation letter to <a href={`mailto:${cityInfo.applicationEmail}`} className="text-primary font-semibold hover:underline">{cityInfo.applicationEmail}</a>.
                    This puts you in our application pool for the upcoming {getGenerationText('leipzig')}.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="text-sm font-semibold text-primary">
                      📅 Next application phase opens: {applicationDates.openingDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Personal Interview</h3>
                  <p className="text-lg text-muted-foreground">
                    Selected candidates receive an invitation to a 30-minute Zoom interview with the Ober Yetis (founders)
                    and at least one Yeti from an older generation. This is your chance to shine and show us who you really are!
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Acceptance & Onboarding</h3>
                  <p className="text-lg text-muted-foreground">
                    If we&apos;re convinced by your application and interview, you&apos;ll receive your acceptance to the YETI Leipzig program
                    along with all important information about the kick-off weekend and semester start.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              What We&apos;re <span className="underline decoration-wavy underline-offset-8 decoration-primary">Looking For</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border-2 border-border p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-lg mb-2">Entrepreneurial Spirit</h3>
                <p className="text-muted-foreground">
                  You want to take on leadership roles, become self-employed, or drive innovation in organizations
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-border p-6">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="font-bold text-lg mb-2">Action-Oriented</h3>
                <p className="text-muted-foreground">
                  You like taking responsibility, acting in a solution-oriented manner, and thinking innovatively
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-border p-6">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="font-bold text-lg mb-2">Time Commitment</h3>
                <p className="text-muted-foreground">
                  You can dedicate 10-15 hours per week to the 18-month program
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-border p-6">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-bold text-lg mb-2">Physical Presence</h3>
                <p className="text-muted-foreground">
                  You&apos;re available one day per week for on-site sessions at YETI Leipzig HQ (typically Thursdays)
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl border-2 border-primary/20 p-6">
              <h3 className="font-bold text-xl mb-3">📚 Student or Graduate?</h3>
              <p className="text-muted-foreground">
                We primarily seek students, but university graduates or people with start-up experience can also apply.
                What matters most is your motivation and commitment to entrepreneurship!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Applying */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Tips & <span className="underline decoration-wavy underline-offset-8 decoration-primary">Tricks</span>
          </h2>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Make Your Application Stand Out</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Be Authentic:</strong>
                  <p className="text-muted-foreground">Show us who you really are. We value genuine passion over perfect presentations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Know Your Why:</strong>
                  <p className="text-muted-foreground">Clearly articulate why you want to join THIS particular program and what drives you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Show Your Vision:</strong>
                  <p className="text-muted-foreground">Share your motivation, vision, and what you want to achieve through the program.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">What You Bring:</strong>
                  <p className="text-muted-foreground">Discuss your unique skills, experiences, and what you&apos;ll contribute to the Leipzig community.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Share Your Journey:</strong>
                  <p className="text-muted-foreground">What have you experienced? What have you learned? Where do you want to go?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Entrepreneurship Connection:</strong>
                  <p className="text-muted-foreground">Describe any previous touchpoints with entrepreneurship or intrapreneurship.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Personal Development:</strong>
                  <p className="text-muted-foreground">Explain why personal development is important to you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Team Values:</strong>
                  <p className="text-muted-foreground">Share what&apos;s important to you in a team or community setting.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Program Details */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Program <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Timeline</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-xl mb-3">📅 Duration</h3>
                <p className="text-white/80">
                  18 months (3 semesters) followed by lifetime Alumni network access
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-xl mb-3">⏱️ Time Commitment</h3>
                <p className="text-white/80">
                  10-15 hours per week aligned with university semesters
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-xl mb-3">📍 YETI Day</h3>
                <p className="text-white/80">
                  Every Thursday - workshops, sessions, and community gatherings at YETI Leipzig HQ
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-xl mb-3">🌍 Language</h3>
                <p className="text-white/80">
                  YETI Leipzig encourages international exchange. The program is conducted in English.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-xl mb-3">🏕️ Kick-off</h3>
                <p className="text-white/80">
                  Weekend retreat ({applicationDates.kickoffWeekend}) to bond with your cohort
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6">
                <h3 className="font-bold text-xl mb-3">💰 Cost</h3>
                <p className="text-white/80">
                  Completely FREE + €500-1000 funding for your projects!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <Section className="bg-neutral-50">
        <FAQHeader
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about the application process"
        />

        <FAQAccordion
          city="leipzig"
          cityInfo={cityInfo}
          applicationDates={applicationDates}
        />
      </Section>

      {/* CTA */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Apply</span>?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Send your application to join YETI Leipzig!
          </p>
          <Link
            href="/apply/leipzig"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg transition-colors"
          >
            Apply for Leipzig →
          </Link>
        </div>
      </section>
    </div>
  )
}
