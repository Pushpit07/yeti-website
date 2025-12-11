"use client"

import { useState, useEffect } from "react"
import { FadeIn } from "./FadeIn"
import type { City } from "@/lib/constants"
import { getFAQData, type FAQItem as SheetFAQItem } from "@/lib/sheets"
import ReactMarkdown from "react-markdown"

interface FAQAccordionProps {
  city: City
  cityInfo: {
    name: string
    generation: number
    generationSuffix: string
    applicationEmail: string
  }
  applicationDates: {
    openingDate: string
    deadline: string
    kickoffWeekend: string
    programStart: string
  }
}

export function FAQAccordion({ cityInfo, applicationDates }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [faqs, setFaqs] = useState<SheetFAQItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadFAQs() {
      try {
        const data = await getFAQData()
        setFaqs(data)
      } catch (err) {
        console.error("Failed to fetch FAQ data:", err)
      } finally {
        setIsLoading(false)
      }
    }
    loadFAQs()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FadeIn key={index}>
            <div className="bg-white rounded-2xl border border-border overflow-hidden transition-all hover:border-primary">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[2000px]" : "max-h-0"
                  }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="text-muted-foreground leading-relaxed prose prose-sm max-w-none">
                    <ReactMarkdown>{faq.answer}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
