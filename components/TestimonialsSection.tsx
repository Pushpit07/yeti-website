import { FadeIn } from "./FadeIn"

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

interface TestimonialsSectionProps {
  title: string
  highlightWord: string
  subtitle?: string
  row1Testimonials: Testimonial[]
  row2Testimonials: Testimonial[]
}

export function TestimonialsSection({
  title,
  highlightWord,
  subtitle,
  row1Testimonials,
  row2Testimonials
}: TestimonialsSectionProps) {
  const renderTestimonialCard = (testimonial: Testimonial, index: number) => (
    <div key={index} className="w-[min(340px,85vw)] md:w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
      <div className="mb-6">
        <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      <p className="text-base md:text-lg mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-neutral-50 py-12 md:py-24">
      {/* Header - Contained */}
      <FadeIn>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {title.split(highlightWord)[0]}
            <span className="underline decoration-wavy underline-offset-10 decoration-primary">{highlightWord}</span>
            {title.split(highlightWord)[1]}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Testimonials Sliding Strips - Full Width */}
      <div className="relative">
        {/* Gradient masks on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

        <div className="space-y-4 md:space-y-6 overflow-hidden">
          {/* First Row - Slides Left to Right */}
          <div className="flex animate-scroll-reverse gap-4 md:gap-6">
            {/* Duplicate the set twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 md:gap-6 shrink-0">
                {row1Testimonials.map((testimonial, index) => renderTestimonialCard(testimonial, index))}
              </div>
            ))}
          </div>

          {/* Second Row - Slides Right to Left */}
          <div className="flex animate-scroll gap-4 md:gap-6">
            {/* Duplicate the set twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 md:gap-6 shrink-0">
                {row2Testimonials.map((testimonial, index) => renderTestimonialCard(testimonial, index))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
