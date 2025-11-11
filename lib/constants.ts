// City types
export type City = 'dresden' | 'leipzig'

// City-specific information
export const CITY_INFO = {
  dresden: {
    name: 'Dresden',
    generation: 8,
    generationSuffix: 'th',
    applicationEmail: 'bewerbung@yeti-dresden.org',
    generalEmail: 'info@yeti-dresden.org',
    phone: '0351 463–35638',
    address: {
      street: 'Leubnitzer Str. 28',
      city: '01069 Dresden',
      country: 'Germany',
    },
    mentorOrganization: 'dresden|exists, the start-up service for universities and scientific institutions in Dresden',
  },
  leipzig: {
    name: 'Leipzig',
    generation: 3,
    generationSuffix: 'rd',
    applicationEmail: 'application@yeti-leipzig.org',
    generalEmail: 'info@yeti-leipzig.org',
    phone: '0351 463–35638', // Update if different
    address: {
      street: 'TBD', // Update with actual Leipzig address
      city: 'Leipzig',
      country: 'Germany',
    },
    mentorOrganization: 'SpinLab, the Leipzig startup accelerator',
  },
} as const

// Application timeline
export const APPLICATION_DATES = {
  dresden: {
    openingDate: 'November 17th',
    deadline: 'TBD', // Add specific deadline
    kickoffWeekend: 'TBD', // Add specific dates
    programStart: 'TBD', // Add specific semester start
  },
  leipzig: {
    openingDate: 'November 17th',
    deadline: 'TBD', // Add specific deadline
    kickoffWeekend: 'September 26-28', // As mentioned in the Leipzig page
    programStart: 'TBD', // Add specific semester start
  },
} as const

// Program details (common across cities)
export const PROGRAM_INFO = {
  duration: {
    months: 18,
    semesters: 3,
    description: 'The educational program lasts for three semesters, followed by the Alumni network.',
  },
  timeCommitment: {
    hoursPerWeek: '10-15',
    description: 'We expect a commitment of approximately 10-15 hours per week for the 18-month program.',
  },
  yetiDay: {
    day: 'Thursday',
    description: "All input-sessions will be held on Thursdays. It's also the busiest day of the week at YETI HQ.",
  },
  language: {
    primary: 'English',
    descriptionDresden: 'YETI Dresden encourages international exchange. Thus, the program is conducted in English.',
    descriptionLeipzig: 'YETI Leipzig encourages international exchange. The program is conducted in English.',
  },
  funding: {
    min: 500,
    max: 1000,
    currency: '€',
    description: 'Receive €500-1000 financial support throughout the program to help you focus on your entrepreneurial journey to develop your business ideas.',
  },
} as const

// Organization details
export const ORGANIZATION_INFO = {
  legalName: 'Stiftung Thomas Kirchner Bildungsförderungs gGmbH',
  commercialRegister: 'HRB 281372',
  registrationCourt: 'Amtsgericht 80333 München',
  representedBy: 'Thomas Kirchner',
  legalAddress: {
    street: 'Zennerstr. 1',
    additionalInfo: 'c/o Thomas Kirchner',
    city: '81379 München',
    country: 'Germany',
  },
} as const

// Social media and external links
export const EXTERNAL_LINKS = {
  instagram: 'https://instagram.com/yeti_dresden', // Update with actual link
  linkedin: 'https://linkedin.com/company/yeti-dresden', // Update with actual link
  twitter: 'https://twitter.com/yeti_dresden', // Update with actual link
} as const

// Helper functions
export function getCityInfo(city: City) {
  return CITY_INFO[city]
}

export function getApplicationDates(city: City) {
  return APPLICATION_DATES[city]
}

export function getGenerationText(city: City): string {
  const info = CITY_INFO[city]
  return `${info.generation}${info.generationSuffix} generation`
}
