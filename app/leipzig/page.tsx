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
import { getCityInfo, getApplicationDates, PROGRAM_INFO, getGenerationText } from "@/lib/constants"

export const dynamic = "force-static"

const cityInfo = getCityInfo('leipzig')
const applicationDates = getApplicationDates('leipzig')

export default async function LeipzigPage() {
  return (
    <div className="font-sans">
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://yeti-dresden.org/wp-content/uploads/2025/01/Yeti-Leipzig-Info-Event.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 flex min-h-screen flex-col items-start justify-end p-8 md:p-12">
          <h1 className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl">YETI is now in Leipzig!</h1>
          <p className="mb-6 max-w-md text-lg text-white opacity-90 md:text-xl">Young Entrepreneurs in Tech and Innovation</p>
          <Button
            href="/apply/leipzig"
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
          buttonHref: "#"
        }}
        about={{
          title: "What is YETI?",
          paragraphs: [
            "<strong>Y</strong>oung <strong>E</strong>ntrepreneurs, in <strong>T</strong>ech and <strong>I</strong>nnovation Leipzig is an educational initiative which aims to support the participants in becoming entrepreneurial role models and influential figures for society.",
            `The ${PROGRAM_INFO.duration.months}-month program enables students to develop business ideas and leadership skills.`,
            `The scholarship holders are mentored by the start-up community and dresden|exists, the start-up service for universities and scientific institutions in Dresden.`
          ]
        }}
      />

      <BenefitsSection
        title="we provide"
        highlightWord="What"
        benefits={[
          {
            emoji: "💰",
            title: "Prototyping Scholarship",
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
        title="What others say"
        highlightWord="others"
        subtitle="Hear from our community of entrepreneurs and innovators who have been part of the YETI journey."
        row1Testimonials={[
          {
            quote: "YETI provided me with the mentorship and resources I needed to transform my idea into a real business. The network I built here is invaluable.",
            name: "Maria Schmidt",
            role: "Founder, TechStart",
            initials: "MS"
          },
          {
            quote: "The 18-month program gave me the skills and confidence to pitch to investors. Now my startup has raised seed funding and is growing rapidly.",
            name: "Jonas Keller",
            role: "CEO, InnovateLab",
            initials: "JK"
          },
          {
            quote: "Being part of YETI connected me with like-minded entrepreneurs. The workshops and events opened doors I didn't even know existed.",
            name: "Lisa Weber",
            role: "Co-founder, GreenTech Solutions",
            initials: "LW"
          },
          {
            quote: "Through YETI, I learned how to validate my ideas and build a minimum viable product. The hands-on approach was exactly what I needed.",
            name: "Thomas Peters",
            role: "CTO, DataFlow",
            initials: "TP"
          }
        ]}
        row2Testimonials={[
          {
            quote: "The demo days gave me real experience pitching to investors. That practice made all the difference when I presented at a major tech conference.",
            name: "Anna Hoffmann",
            role: "Founder, EcoTech",
            initials: "AH"
          },
          {
            quote: "YETI's community is incredible. I met my co-founder here, and we've built something amazing together with the support of the entire network.",
            name: "Max Richter",
            role: "Co-founder, CloudHub",
            initials: "MR"
          },
          {
            quote: "The scholarship helped me focus on building my product without worrying about finances. It's a game-changer for student entrepreneurs.",
            name: "Sarah Klein",
            role: "Founder, HealthAI",
            initials: "SK"
          },
          {
            quote: "Every Thursday at YETI HQ was inspiring. The energy, the ideas, the people - it's where innovation comes to life in Leipzig.",
            name: "David Mueller",
            role: "CEO, SmartCity Solutions",
            initials: "DM"
          },
          {
            quote: "The mentorship program opened my eyes to the real challenges of entrepreneurship. My mentor's guidance helped me avoid costly mistakes.",
            name: "Felix Bauer",
            role: "Founder, FinTech Pro",
            initials: "FB"
          },
          {
            quote: "YETI gave me the confidence to quit my job and pursue my startup full-time. Best decision I ever made.",
            name: "Julia Wagner",
            role: "CEO, EdTech Solutions",
            initials: "JW"
          },
          {
            quote: "The workshops at YETI covered everything from design thinking to financial planning. Each session was incredibly valuable.",
            name: "Paul Meier",
            role: "Co-founder, DesignLab",
            initials: "PM"
          }
        ]}
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
