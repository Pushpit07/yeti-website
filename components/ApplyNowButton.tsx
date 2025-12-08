'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getApplicationPhase } from '@/lib/application-phase'
import type { City } from '@/lib/constants'

interface ApplyNowButtonProps {
  city?: City
  className?: string
}

export function ApplyNowButton({ city = 'dresden', className = '' }: ApplyNowButtonProps) {
  const [phaseInfo, setPhaseInfo] = useState(() => getApplicationPhase(city))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Update phase info every second for countdown
    const interval = setInterval(() => {
      setPhaseInfo(getApplicationPhase(city))
    }, 1000)

    return () => clearInterval(interval)
  }, [city])

  if (!mounted) {
    // Return a placeholder to avoid hydration mismatch
    return (
      <div className={`h-10 w-32 animate-pulse rounded-lg bg-blue-500/50 ${className}`} />
    )
  }

  const getButtonContent = () => {
    switch (phaseInfo.phase) {
      case 'before-opening':
      case 'open':
        return 'Apply Now'
      case 'closed':
        return 'Applications Closed'
      default:
        return 'Apply Now'
    }
  }

  const getHref = () => {
    return `/application/${city}`
  }

  const isDisabled = phaseInfo.phase === 'closed'

  const buttonClasses = `
    inline-flex items-center justify-center gap-1.5
    px-3 py-1.5 md:px-4 md:py-2
    text-xs md:text-sm font-semibold
    rounded-md
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    min-h-[32px] md:min-h-[36px]
    ${
      isDisabled
        ? 'bg-gray-500 text-white cursor-not-allowed opacity-60'
        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-100 border border-blue-500/20'
    }
    ${className}
  `.trim()

  const content = (
    <>
      <span>{getButtonContent()}</span>
      {!isDisabled && (
        <svg
          className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </>
  )

  if (isDisabled) {
    return <div className={buttonClasses}>{content}</div>
  }

  return (
    <Link href={getHref()} className={`group ${buttonClasses}`}>
      {content}
    </Link>
  )
}

