// City types
export type City = 'dresden' | 'leipzig'

// Contact information
export const CONTACT_INFO = {
  phone: '+491722457729',
  phoneDisplay: '+49 172 2457729',
} as const

// City-specific information
export const CITY_INFO = {
  dresden: {
    name: 'Dresden',
    generation: 8,
    generationSuffix: 'th',
    applicationEmail: 'application@yeti-dresden.org',
    generalEmail: 'info@yeti-dresden.org',
    phone: CONTACT_INFO.phoneDisplay,
    address: {
      street: 'Leubnitzer Str. 28',
      city: '01069 Dresden',
      country: 'Germany',
    },
  },
  leipzig: {
    name: 'Leipzig',
    generation: 3,
    generationSuffix: 'rd',
    applicationEmail: 'application@yeti-leipzig.org',
    generalEmail: 'info@yeti-leipzig.org',
    phone: CONTACT_INFO.phoneDisplay,
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

// Demo Day dates
export const DEMO_DAY = {
  nextDate: 'July 17, 2025',
  description: 'The DemoDays take place every semester and are an insanely cool event to find out for yourself what YETI is all about.',
} as const

// Program details (common across cities)
export const PROGRAM_INFO = {
  duration: {
    months: 18,
    semesters: 3,
    description: 'The educational program lasts for three semesters, in which you will develop and learn new skills.',
  },
  timeCommitment: {
    hoursPerWeek: '10-15',
    description: 'We expect a commitment of approximately 10-15 hours per week for the 18-month program.',
  },
  yetiDay: {
    day: 'Thursday',
    description: "All input-sessions will be held on Thursdays. On these days, you will work with your team at the HQ.",
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
    description: 'Access to the HQ and Makerspace to build and validate your ideas. Prototyping budget is tied to active participation in the program.',
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

// Testimonials
export const TESTIMONIALS = {
  title: "What Yetis say",
  highlightWord: "Yetis",
  subtitle: "Hear from our community of entrepreneurs and innovators who have been part of the YETI journey.",
  row1: [
    {
      quote: "Yeti has fundamentally changed how I look at problems around me!",
      name: "Avinash Mohanan",
      role: "Content Team / Team Blank / G7 Dresden",
      initials: "AM"
    },
    {
      quote: "YETI has taught me a lot of things, especially to believe in myself and think outside the box.",
      name: "Julia",
      role: "G6 Team Funding",
      initials: "J"
    },
    {
      quote: "Fantastic opportunity to broaden my perspective and to establish healthy habits for my life.",
      name: "Juri",
      role: "Team Lead Recruiting / G7",
      initials: "J"
    },
    {
      quote: "The world is your oyster. You've only got to ask the right people and be crazy enough to do it.",
      name: "Francis Kigotho",
      role: "G7 Team Lead Infrastructure",
      initials: "FK"
    },
  ],
  row2: [
    {
      quote: "YETI is way more than inputs and workshops to me. It's about the community that inspires me to be innovative and work hard.",
      name: "Hanna",
      role: "Teamlead Recruiting / G1 Leipzig",
      initials: "H"
    },
    {
      quote: "You really just get thrown into the cold water. Its great and probably the best way to learn. You mostly get help figuring out what your goals should be and learn the rest by failing over and over again.",
      name: "Victor",
      role: "G7 Team lead Content",
      initials: "V"
    },
    {
      quote: `What I initially liked about YETI is that there is free pizza. Later I realized being here forces you to regularly leave your comfort zone. It is pressuring but fun, it made me I learn a lot of things I otherwise would never try. The people here are very interesting and exceptionally friendly. Now I know: YETI is sooo  n i c e...`,
      name: "Misha",
      role: "G7 DD, member of Team Content",
      initials: "M"
    },
    {
      quote: `Joining YETI is not "chosing a life" but "living a choice". The more you give the program, the more you will get out of it. It's like a portal into a vibrant creative and striving world of Innovation and discovery. Going into the program i thought I was gonna learn a lot. I was right.`,
      name: "Jonathan Daniss",
      role: "G7 Team Content",
      initials: "JD"
    },
    {
      quote: `YETI is place where like minded people are all together with different experiences and visions, where you learn and work with harmony. For me as a big milestone I learn more about myself interest and ideals and find a way to make it happen! Every time I am amazed by other's approach and ideas, really happy to be a part of this innovative and kind community <3`,
      name: "Didem Erdem",
      role: "Semester Lead - G6",
      initials: "DE"
    },
  ]
}

// Helper function to get testimonials from Google Sheets
// Returns the same structure as TESTIMONIALS constant
export async function getTestimonialsConfig() {
  const { getTestimonialsData } = await import('./sheets')
  const testimonials = await getTestimonialsData()

  // Split testimonials into two rows (roughly equal)
  const midPoint = Math.ceil(testimonials.length / 2)
  const row1 = testimonials.slice(0, midPoint)
  const row2 = testimonials.slice(midPoint)

  return {
    title: "What Yetis say",
    highlightWord: "Yetis",
    subtitle: "Hear from our community of entrepreneurs and innovators who have been part of the YETI journey.",
    row1,
    row2
  }
}
