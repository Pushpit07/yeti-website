import { Section } from "@/components/Section"
import { MissionSection } from "@/components/MissionSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CurriculumInfoSection } from "@/components/CurriculumInfoSection"
import { FAQAccordion } from "@/components/FAQAccordion"
import { FAQHeader } from "@/components/FAQHeader"
import { SponsorsInline } from "@/components/SponsorsInline"
import { ApplicationCTA } from "@/components/ApplicationCTA"
import { Button } from "@/components/Button"
import { getCityInfo, getApplicationDates, PROGRAM_INFO, getGenerationText, TESTIMONIALS } from "@/lib/constants"

export const dynamic = "force-static"

const cityInfo = getCityInfo('leipzig')
const applicationDates = getApplicationDates('leipzig')

export default async function LeipzigPage() {
  return (
    <div className="font-sans">
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/yeti-leipzig.jpg"
            alt="YETI Leipzig"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /> 
        <div className="relative z-10 flex min-h-screen flex-col items-start justify-end p-8 md:p-12">
          <h1 className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">YETI is now in Leipzig!</h1>
          <p className="mb-6 max-w-md text-lg text-white opacity-90 md:text-xl">Young Entrepreneurs in Tech and Innovation</p>
          <Button
            href="/application/leipzig"
            variant="rounded-full"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            }
          >
            Apply now
          </Button>
        </div>
      </section>

      <SponsorsInline />

      <MissionSection
        mission={{
          pretitle: "YETI",
          title: "Leipzig",
          description: `Following its successful program in Dresden, the YETI program is now firmly established in Leipzig. We're launching our ${getGenerationText('leipzig')} and participants have the opportunity to explore entrepreneurship, innovation, and personal growth.`,
          buttonText: "How it started",
          buttonHref: "/how-it-started"
        }}
        about={{
          title: "What is YETI?",
          paragraphs: [
            "<strong>Y</strong>oung <strong>E</strong>ntrepreneurs, in <strong>T</strong>ech and <strong>I</strong>nnovation Leipzig is an educational initiative which aims to support the participants in becoming entrepreneurial role models and influential figures for society.",
            `The ${PROGRAM_INFO.duration.months}-month program enables students to develop business ideas and leadership skills.`,
            `Participants are mentored by the start-up community and SpinLab, the Leipzig startup accelerator.`
          ]
        }}
      />

      <BenefitsSection
        title="we provide"
        highlightWord="What"
        benefits={[
          {
            emoji: "🚀",
            title: "Prototyping Resources",
            description: PROGRAM_INFO.funding.description,
            variant: "primary-large",
            span: "md:col-span-7 md:row-span-2"
          },
          {
            emoji: "👥",
            title: "Expert Mentorship",
            description: "One-on-one guidance from successful entrepreneurs and industry leaders.",
            variant: "black",
            span: "md:col-span-5"
          },
          {
            emoji: "🎓",
            title: "Skills Training",
            description: "Regular workshops on business development, tech skills, and leadership.",
            variant: "white",
            span: "md:col-span-5"
          },
          {
            emoji: "🌐",
            title: "Network",
            description: "Access to alumni, partners, and investors across Europe.",
            variant: "black",
            span: "md:col-span-4"
          },
          {
            emoji: "🚀",
            title: "Project Support",
            description: "Hands-on help from ideation to launch for your ventures.",
            variant: "white",
            span: "md:col-span-4"
          },
          {
            emoji: "🏢",
            title: "Workspace",
            description: "Dedicated co-working space at YETI HQ with all amenities.",
            variant: "primary-small",
            span: "md:col-span-4"
          }
        ]}
      />

      <TestimonialsSection
        title={TESTIMONIALS.title}
        highlightWord={TESTIMONIALS.highlightWord}
        subtitle={TESTIMONIALS.subtitle}
        row1Testimonials={TESTIMONIALS.row1}
        row2Testimonials={TESTIMONIALS.row2}
      />

      <CurriculumInfoSection
        title="Curriculum"
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
            description: PROGRAM_INFO.language.descriptionLeipzig
          }
        ]}
      />

      <Section className="bg-neutral-50">
        <FAQHeader
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about applying to YETI Leipzig"
        />

        <FAQAccordion
          city="leipzig"
          cityInfo={cityInfo}
          applicationDates={applicationDates}
        />
      </Section>

      <ApplicationCTA city="leipzig" />
    </div>
  )
}
