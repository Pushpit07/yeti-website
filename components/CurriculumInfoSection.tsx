import { Section } from "./Section"
import { Curriculum } from "./Curriculum"
import { FadeIn } from "./FadeIn"

interface CurriculumDetail {
  title: string
  description: string
}

interface CurriculumInfoSectionProps {
  title: string
  details: CurriculumDetail[]
}

export function CurriculumInfoSection({ title, details }: CurriculumInfoSectionProps) {
  return (
    <Section className="py-12 md:py-16">
      {/* Full-width heading */}
      <FadeIn>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">{title}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-hover rounded-full mx-auto"></div>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-stretch">
        {/* Left side - Details list */}
        <div className="flex flex-col justify-between gap-2">
          {details.map((detail, index) => (
            <FadeIn key={index} delay={0.1 + index * 0.1} direction="right" className="flex-1">
              <div className="group relative bg-white rounded-lg border border-border p-3 md:p-4 hover:border-primary/50 transition-all hover:shadow-sm h-full"
              >
                {/* Checkmark icon */}
                <div className="absolute -left-2.5 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white shadow-sm group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="pl-3">
                  <h3 className="text-sm md:text-base font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                    {detail.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Right side - Curriculum grid */}
        <FadeIn direction="left" delay={0.2} className="h-full">
          <Curriculum />
        </FadeIn>
      </div>
    </Section>
  )
}
