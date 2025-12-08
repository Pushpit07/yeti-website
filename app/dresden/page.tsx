import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { MissionSection } from "@/components/MissionSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CurriculumInfoSection } from "@/components/CurriculumInfoSection"
import { FAQAccordion } from "@/components/FAQAccordion"
import { FAQHeader } from "@/components/FAQHeader"
import { SponsorsInline } from "@/components/SponsorsInline"
import { ApplicationCTA } from "@/components/ApplicationCTA"
import { getCityInfo, getApplicationDates, PROGRAM_INFO, TESTIMONIALS } from "@/lib/constants"

export const dynamic = "force-static"

const cityInfo = getCityInfo('dresden')
const applicationDates = getApplicationDates('dresden')

export default async function Home() {
  return (
    <div className="font-sans">
      <Hero
        title="We are YETI Dresden"
        subtitle="Young Entrepreneurs in Tech and Innovation"
        cta={{ label: "Apply now", href: "/application/dresden" }}
        backgroundVideoUrl="/demo-day-recap.mp4"
      />

      <SponsorsInline />

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
            description: PROGRAM_INFO.language.descriptionDresden
          }
        ]}
      />

      <Section className="bg-neutral-50">
        <FAQHeader
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about applying to YETI Dresden"
        />

        <FAQAccordion
          city="dresden"
          cityInfo={cityInfo}
          applicationDates={applicationDates}
        />
      </Section>

      <ApplicationCTA city="dresden" />
    </div>
  )
}
