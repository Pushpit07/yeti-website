import { APPLICATION_DATES, type City } from './constants'

export type ApplicationPhase = 'before-opening' | 'open' | 'closed'

export interface ApplicationPhaseInfo {
  phase: ApplicationPhase
  openingDate: Date | null
  deadlineDate: Date | null
  timeUntilOpening: {
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null
  timeUntilDeadline: {
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null
}

/**
 * Parses a date string like "November 17th" into a Date object
 * Assumes current year if not specified
 */
function parseDateString(dateStr: string): Date | null {
  if (dateStr === 'TBD' || !dateStr) {
    return null
  }

  // Try to parse common date formats
  // Format: "November 17th" -> November 17 of current year
  const months: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  }

  const lowerDateStr = dateStr.toLowerCase().trim()
  const currentYear = new Date().getFullYear()

  // Try to match "Month Day" or "Month Dayth/st/nd/rd" format
  for (const [monthName, monthIndex] of Object.entries(months)) {
    if (lowerDateStr.startsWith(monthName)) {
      // Match day number, handling ordinal suffixes (th, st, nd, rd)
      const dayMatch = lowerDateStr.match(/(\d+)(?:st|nd|rd|th)?/i)
      if (dayMatch) {
        const day = parseInt(dayMatch[1], 10)
        const date = new Date(currentYear, monthIndex, day, 0, 0, 0, 0)
        // If the date has already passed this year, assume next year
        const now = new Date()
        now.setHours(0, 0, 0, 0)
        if (date < now) {
          date.setFullYear(currentYear + 1)
        }
        return date
      }
    }
  }

  // Try ISO date format
  const isoDate = new Date(dateStr)
  if (!isNaN(isoDate.getTime())) {
    return isoDate
  }

  return null
}

/**
 * Calculates time difference between now and target date
 */
function calculateTimeUntil(targetDate: Date | null): {
  days: number
  hours: number
  minutes: number
  seconds: number
} | null {
  if (!targetDate) {
    return null
  }

  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

/**
 * Determines the current application phase for a city
 */
export function getApplicationPhase(city: City = 'dresden'): ApplicationPhaseInfo {
  const dates = APPLICATION_DATES[city]
  const now = new Date()

  const openingDate = parseDateString(dates.openingDate)
  const deadlineDate = dates.deadline !== 'TBD' ? parseDateString(dates.deadline) : null

  let phase: ApplicationPhase = 'before-opening'

  if (openingDate && now >= openingDate) {
    if (deadlineDate && now >= deadlineDate) {
      phase = 'closed'
    } else {
      phase = 'open'
    }
  }

  return {
    phase,
    openingDate,
    deadlineDate,
    timeUntilOpening: calculateTimeUntil(openingDate),
    timeUntilDeadline: deadlineDate ? calculateTimeUntil(deadlineDate) : null,
  }
}

