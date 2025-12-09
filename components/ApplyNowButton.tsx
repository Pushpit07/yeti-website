'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ApplyNowButtonProps {
  className?: string
}

export function ApplyNowButton({ className = '' }: ApplyNowButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`h-10 w-32 animate-pulse rounded-lg bg-blue-500/50 ${className}`} />
    )
  }

  const buttonClasses = `
    inline-flex items-center justify-center gap-1.5
    px-3 py-1.5 md:px-4 md:py-2
    text-xs md:text-sm font-semibold
    rounded-md
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    min-h-[32px] md:min-h-[36px]
    bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-100 border border-blue-500/20
    ${className}
  `.trim()

  return (
    <div className="group relative">
      {/* Main Button */}
      <button className={buttonClasses}>
        <span>Apply Now</span>
        <svg
          className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div className="invisible absolute right-0 top-full z-50 mt-2 min-w-44 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100">
        {/* Dropdown Arrow */}
        <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 border-l border-t border-blue-500/50 bg-gradient-to-br from-blue-600 to-blue-700"></div>

        {/* Dropdown Content */}
        <div className="overflow-hidden rounded-lg border border-blue-500/30 bg-gradient-to-b from-blue-600 to-blue-700 shadow-xl shadow-blue-500/20">
          <Link
            href="/application/dresden"
            className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/15"
          >
            <span>for Dresden</span>
            <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="mx-2 border-t border-white/20"></div>
          <Link
            href="/application/leipzig"
            className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/15"
          >
            <span>for Leipzig</span>
            <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
