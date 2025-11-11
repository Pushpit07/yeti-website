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
    <Section>
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <FadeIn direction="right">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-hover rounded-full"></div>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {details.map((detail, index) => (
              <FadeIn key={index} delay={0.1 + index * 0.1} direction="right">
                <div className="group relative bg-white rounded-xl border border-border p-5 hover:border-primary/50 transition-all hover:shadow-md"
              >
                {/* Checkmark icon */}
                <div className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-md group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3.5 h-3.5"
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

                <div className="pl-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {detail.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom decoration */}
          <FadeIn delay={0.5} direction="right">
            <div className="pt-6 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-primary/80"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
            </div>
          </FadeIn>
        </div>

        {/* Right side - Curriculum grid */}
        <FadeIn direction="left" delay={0.2}>
          <Curriculum />
        </FadeIn>
      </div>
    </Section>
  )
}
