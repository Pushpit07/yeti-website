import { Section } from "./Section"
import { FadeIn } from "./FadeIn"

interface Benefit {
  emoji: string
  title: string
  description: string
  variant: "primary-large" | "black" | "white" | "primary-small"
  span?: string
}

interface BenefitsSectionProps {
  title: string
  highlightWord: string
  benefits: Benefit[]
}

export function BenefitsSection({ title, highlightWord, benefits }: BenefitsSectionProps) {
  const renderCard = (benefit: Benefit, index: number) => {
    const baseClasses = "rounded-2xl p-8 md:p-10 relative overflow-hidden"
    const delay = index * 0.1

    switch (benefit.variant) {
      case "primary-large":
        return (
          <FadeIn key={index} delay={delay} className={benefit.span}>
            <div className={`${baseClasses} bg-gradient-to-br from-primary to-primary-hover text-white group h-full`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-xl mb-6">
                <span className="text-3xl">{benefit.emoji}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-lg text-white/90 max-w-md">{benefit.description}</p>
            </div>
            </div>
          </FadeIn>
        )

      case "black":
        return (
          <FadeIn key={index} delay={delay} className={benefit.span}>
            <div className={`${baseClasses} bg-black text-white group h-full`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur rounded-xl mb-4 group-hover:bg-white/20 transition-colors">
                <span className="text-2xl">{benefit.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
            </div>
          </FadeIn>
        )

      case "white":
        return (
          <FadeIn key={index} delay={delay} className={benefit.span}>
            <div className={`${baseClasses} bg-white border border-border hover:border-primary transition-colors group hover:shadow-lg h-full`}>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-50 rounded-xl mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/10">
              <span className="text-2xl">{benefit.emoji}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </FadeIn>
        )

      case "primary-small":
        return (
          <FadeIn key={index} delay={delay} className={benefit.span}>
            <div className={`${baseClasses} bg-gradient-to-br from-primary to-primary-hover text-white group h-full`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur rounded-xl mb-4">
                <span className="text-2xl">{benefit.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/90">{benefit.description}</p>
            </div>
            </div>
          </FadeIn>
        )
    }
  }

  return (
    <Section>
      {/* Header */}
      <FadeIn>
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="underline decoration-wavy underline-offset-8 decoration-primary">{highlightWord}</span> {title}
          </h2>
        </div>
      </FadeIn>

      {/* Bento-style grid layout */}
      <div className="grid md:grid-cols-12 gap-4 md:gap-6">
        {benefits.map((benefit, index) => renderCard(benefit, index))}
      </div>
    </Section>
  )
}
