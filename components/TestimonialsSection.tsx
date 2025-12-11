'use client'

import { useState } from "react"
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
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set())
  const [currentSlide, setCurrentSlide] = useState(0)

  // Combine all testimonials for mobile slider
  const allTestimonials = [...row1Testimonials, ...row2Testimonials]
  const totalSlides = allTestimonials.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const toggleExpanded = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const renderTestimonialCard = (testimonial: Testimonial, index: number, rowId: string) => {
    const cardId = `${rowId}-${index}`
    const isExpanded = expandedCards.has(cardId)
    const shouldTruncate = testimonial.quote.length > 140
    const displayQuote = shouldTruncate && !isExpanded
      ? testimonial.quote.slice(0, 140) + '...'
      : testimonial.quote

    return (
      <div key={index} className="w-[320px] md:w-[400px] bg-white rounded-2xl p-5 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0 flex flex-col">
        <div className="mb-6">
          <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        <div className="grow">
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-wrap">{displayQuote}</p>
          {shouldTruncate && (
            <button
              onClick={() => toggleExpanded(cardId)}
              className="text-primary hover:text-primary-hover font-medium text-sm mt-2 transition-colors"
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 mt-6">
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
  }

  return (
    <section className="bg-neutral-50 py-10 md:py-24">
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

      {/* Mobile Slider - Manual Navigation */}
      <div className="block md:hidden">
        <div className="relative max-w-md mx-auto px-2">
          {/* Single testimonial card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {allTestimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 flex justify-center">
                  {renderTestimonialCard(testimonial, index, 'mobile')}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all shadow-sm hover:shadow-md"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {allTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-border hover:border-primary hover:bg-primary/5 flex items-center justify-center transition-all shadow-sm hover:shadow-md"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Testimonials Sliding Strips - Full Width */}
      <div className="hidden md:block relative">
        {/* Gradient masks on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

        <div className="space-y-4 md:space-y-6 overflow-hidden">
          {/* First Row - Slides Left to Right */}
          <div className="flex animate-scroll-reverse gap-3 md:gap-6">
            {/* Duplicate the set twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-3 md:gap-6 shrink-0">
                {row1Testimonials.map((testimonial, index) => renderTestimonialCard(testimonial, index, 'row1'))}
              </div>
            ))}
          </div>

          {/* Second Row - Slides Right to Left */}
          <div className="flex animate-scroll gap-3 md:gap-6">
            {/* Duplicate the set twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-3 md:gap-6 shrink-0">
                {row2Testimonials.map((testimonial, index) => renderTestimonialCard(testimonial, index, 'row2'))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
