"use client"

import { FadeIn } from "./FadeIn"

interface FAQHeaderProps {
  title: string
  highlightWord: string
  subtitle: string
}

export function FAQHeader({ title, highlightWord, subtitle }: FAQHeaderProps) {
  const parts = title.split(highlightWord)

  return (
    <FadeIn>
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {parts[0]}
          <span className="underline decoration-wavy underline-offset-8 decoration-primary">
            {highlightWord}
          </span>
          {parts[1]}
        </h2>
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </FadeIn>
  )
}
