import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { MissionSection } from "@/components/MissionSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CurriculumInfoSection } from "@/components/CurriculumInfoSection"
import { FAQAccordion } from "@/components/FAQAccordion"
import { FAQHeader } from "@/components/FAQHeader"
import { SponsorsInline } from "@/components/SponsorsInline"

export const dynamic = "force-static"

export default async function LeipzigPage() {
  return (
    <div className="font-sans">
      <Hero
        title="We are YETI Leipzig"
        subtitle="Young Entrepreneurs in Tech and Innovation"
        cta={{ label: "Apply now", href: "/apply/leipzig" }}
        backgroundVideoUrl="https://yeti-dresden.org//wp-content//uploads//2025//09//demo-day-recap.mp4"
      />

      <SponsorsInline />

      <MissionSection
        mission={{
          title: "Mission",
          description: "We empower young people to become entrepreneurial role models through networking, training and resources.",
          buttonText: "How it started",
          buttonHref: "#"
        }}
        about={{
          title: "What is YETI?",
          paragraphs: [
            "<strong>Y</strong>oung <strong>E</strong>ntrepreneurs, in <strong>T</strong>ech and <strong>I</strong>nnovation Leipzig is an educational initiative which aims to support the participants in becoming entrepreneurial role models and influential figures for society.",
            "The 18-month program enables students to develop business ideas and leadership skills.",
            "The scholarship holders are mentored by the start-up community and SpinLab, the Leipzig startup accelerator."
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
            description: "Receive €500-1000 financial support throughout the program to help you focus on your entrepreneurial journey to develop your business ideas.",
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
            title: "3 semesters",
            description: "The educational program lasts for three semesters, followed by the Alumni network."
          },
          {
            title: "10-15 hours/week",
            description: "We expect a commitment of approximately 10-15 hours per week for the 18-month program."
          },
          {
            title: "Thursday is YETI-Day",
            description: "All input-sessions will be held on Thursdays. It's also the busiest day of the week at YETI HQ."
          },
          {
            title: "Language",
            description: "YETI Leipzig encourages international exchange. Thus, the program is conducted in English."
          }
        ]}
      />

      <Section className="bg-neutral-50">
        <FAQHeader
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about applying to YETI Leipzig"
        />

        <FAQAccordion />
      </Section>
    </div>
  )
}
