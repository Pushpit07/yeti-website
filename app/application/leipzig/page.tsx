import { Section } from "@/components/Section"
import Image from "next/image"
import { FAQAccordion } from "@/components/FAQAccordion"
import { FAQHeader } from "@/components/FAQHeader"
import { BookZoomCallCTA } from "@/components/BookZoomCallCTA"
import Link from "next/link"
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
        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <img
              src="/yeti-leipzig.jpg"
              alt="YETI Leipzig"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Bottom-to-top black gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)" }} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-20 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              Apply for YETI Leipzig
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
              Your journey to YETI Leipzig starts here
            </p>
          </div>
        </div>
      </section>

      {/* Application Phase Info */}
      <section className="relative bg-gradient-to-b from-black via-neutral-950 to-black pt-20 md:pt-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-5xl mx-auto">
            {/* Decorative top border */}
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="text-center space-y-8">
              <div className="inline-block bg-primary/10 border-2 border-primary/30 rounded-full px-6 py-3">
                <p className="text-primary font-bold text-sm md:text-base uppercase tracking-wider">
                  📅 Application Opening Soon
                </p>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Next Application Phase<br />
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  {applicationDates.openingDate}
                </span>
              </h2>

              <p className="text-2xl md:text-4xl font-bold text-white">
                Don&apos;t miss your chance - become a YETI!
              </p>

              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Unlock your entrepreneurial potential with YETI Leipzig&apos;s innovative program
              </p>

              <div className="mt-20 flex justify-center">
              <div className="relative w-[300px] h-[150px] md:w-[700px] md:h-[360px]">
                <Image
                  src="/happy-yeti/3.png"
                  alt="Happy YETI"
                  fill
                  className="object-contain opacity-30"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Requirements and Documents */}
      <Section className="bg-gradient-to-b from-white via-neutral-50 to-white mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Application <span className="underline decoration-wavy underline-offset-8 decoration-primary">Requirements and Documents</span>
          </h2>

          {/* Requirements Card */}
          <div className="bg-white rounded-3xl border border-neutral-200 p-8 md:p-12 shadow-sm mb-12 mt-16">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 pb-4 border-b border-neutral-200">
              What You Need
            </h3>

            <p className="text-base text-neutral-700 leading-relaxed mb-8">
              To apply for the <span className="font-bold text-neutral-900">YETI Leipzig</span> program, you will need to meet the following personal requirements:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-base mb-1.5 text-neutral-900">Entrepreneurial Spirit</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  You want to take on leadership roles, become self-employed, or drive innovation in organizations
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-base mb-1.5 text-neutral-900">Action-Oriented</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  You like taking responsibility, acting in a solution-oriented manner, and thinking innovatively
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-base mb-1.5 text-neutral-900">Time Commitment</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  You can dedicate 10-15 hours per week to the 18-month program
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold text-base mb-1.5 text-neutral-900">Physical Presence</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  You&apos;re available one day per week for on-site sessions at YETI Leipzig HQ (typically Thursdays)
                </p>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6">
              <h4 className="font-bold text-base mb-2 text-neutral-900">Student or Graduate?</h4>
              <p className="text-neutral-700 text-sm leading-relaxed">
                We primarily seek students, but university graduates or people with start-up experience can also apply.
                What matters most is your motivation and commitment to entrepreneurship!
              </p>
            </div>
          </div>

          {/* Application Steps Card */}
          <div className="bg-white rounded-3xl border border-neutral-200 p-8 md:p-12 shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 pb-4 border-b border-neutral-200">
              Application Steps
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <p className="text-base text-neutral-700 leading-relaxed">
                    <span className="font-semibold">Send us your application documents</span> (short CV + letter of motivation) after the application start of {applicationDates.openingDate}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-base text-neutral-700 leading-relaxed">
                    Your documents will be reviewed by us, and you will be called for a <span className="font-semibold">personal interview</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <p className="text-base text-neutral-700 leading-relaxed">
                    If we are convinced of you and your application, you will receive your <span className="font-semibold">acceptance</span> and all the other important information
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email CTA */}
          <div className="text-center bg-white rounded-3xl border border-neutral-200 p-10 md:p-12 shadow-sm">
            <p className="text-base text-neutral-600 mb-6">Send your application to</p>
            <a
              href={`mailto:${cityInfo.applicationEmail}`}
              className="inline-block bg-neutral-900 hover:bg-black text-white text-xl md:text-2xl font-bold px-12 py-5 rounded-xl transition-all hover:shadow-lg"
            >
              {cityInfo.applicationEmail}
            </a>
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <p className="text-neutral-600 text-sm">
                If you want to apply for Dresden instead, please{" "}
                <Link href="/application/dresden" className="text-primary font-bold hover:underline">
                  click here →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Section>

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
                  <strong className="text-lg">Be Authentic</strong>
                  <p className="text-muted-foreground">Show us who you really are. We value genuine passion over perfect presentations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Know Your Why</strong>
                  <p className="text-muted-foreground">Clearly articulate why you want to join THIS particular program and what drives you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Show Your Vision</strong>
                  <p className="text-muted-foreground">Share your motivation, vision, and what you want to achieve through the program.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">What You Bring</strong>
                  <p className="text-muted-foreground">Discuss your unique skills, experiences, and what you&apos;ll contribute to the Leipzig community.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Share Your Journey</strong>
                  <p className="text-muted-foreground">What have you experienced? What have you learned? Where do you want to go?</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Entrepreneurship Connection</strong>
                  <p className="text-muted-foreground">Describe any previous touchpoints with entrepreneurship or intrapreneurship.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Personal Development</strong>
                  <p className="text-muted-foreground">Explain why personal development is important to you.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✓</span>
                <div>
                  <strong className="text-lg">Team Values</strong>
                  <p className="text-muted-foreground">Share what&apos;s important to you in a team or community setting.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

        {/* Application Process */}
        <Section>
        <div className="max-w-4xl mx-auto pb-8">
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
                    Selected candidates receive an invitation to a 30-minute Zoom interview with the Ober Yetis (founders of YETI)
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

      <BookZoomCallCTA city="leipzig" />
    </div>
  )
}
