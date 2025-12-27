// lib/sheets.ts

// --- 0. IMPORTS & CONFIGURATION ---

import type { DataType } from "./sheets/types"
import { resolveLegacySheet } from "./sheets/legacy"
import { resolveNewSheet } from "./sheets/new"
import { processImageUrl } from "@/lib/utils"

/**
 * Control flag for sheet structure:
 * - "0" or undefined: Use legacy single-file spreadsheet (default)
 * - "1": Use new multi-file spreadsheet structure
 * 
 * Set via environment variable: NEXT_PUBLIC_SHEETS_USE_NEW_STRUCTURE
 */
const USE_NEW_STRUCTURE = process.env.NEXT_PUBLIC_SHEETS_USE_NEW_STRUCTURE === "1"

/**
 * Resolve sheet target based on current mode
 * Returns { sheetIds: string[], tabName: string } for redundancy support
 */
function resolveSheet(dataType: DataType) {
  return USE_NEW_STRUCTURE ? resolveNewSheet(dataType) : resolveLegacySheet(dataType)
}

// Backward compatibility or direct alias
const processImageLink = processImageUrl

// --- 1. Type Definitions ---

export type Machine = {
  location: string
  name: string
  about: string
  imageLink: string
}

export type Blog = {
  slug: string
  author: string
  heading: string
  markdownContent: string
  imageLink: string
}

export type OberYeti = {
  name: string
  role: string
  description: string
  linkedin: string
  photo: string
}

export type YetiBoard = {
  name: string
  title: string
  company: string
  photo: string
  linkedin: string
}

export type Sponsor = {
  company: string
  category: string
  description: string
  type: string
  photo: string
  linkedin: string
}

export type Mentor = {
  name: string
  title: string
  company: string
  description: string
  linkedin: string
  photo: string
}

export type FiresideChat = {
  name: string
  title: string
  description: string
  photo: string
  linkedin: string
}

export type Project = {
  projectType: string
  goldenFrame: boolean
  companyFormed: boolean
  title: string
  city: string
  year: string
  summary: string
  teamMembers: string[]
  linkedin: string
  instagram: string
  website: string
  active: boolean
  industryPartner: string
  industryPartnerLogo: string
  teamPhotos: string[]
  logo: string
  revenue: string
}

type SheetRow = {
  c: ({ v: string | number | null } | null)[] | null
}

// --- 2. Generic Data Fetcher with Redundancy Support ---

// ⚡ PERFORMANCE SETTING:
// Revalidate every 60 seconds.
// This prevents "Max retries exceeded" errors by not spamming Google on every reload.
const REVALIDATE_TIME = 60

/**
 * Fetches raw data from Google Sheets with redundancy/failover support
 * @param dataType - The type of data to fetch (e.g., "projects", "events")
 * @param skipFirstRow - Whether to skip the first row (header row)
 * @returns Array of sheet rows
 * 
 * Redundancy: Tries each sheetId in order until one succeeds
 */
async function getRawSheetData(
  dataType: DataType,
  skipFirstRow: boolean = true
): Promise<SheetRow[]> {
  const { sheetIds, tabName } = resolveSheet(dataType)

  // Try each sheet ID in order (primary + fallbacks)
  for (let i = 0; i < sheetIds.length; i++) {
    const sheetId = sheetIds[i]
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(
      tabName
    )}`

    try {
      const res = await fetch(url)

      if (!res.ok) {
        // Log warning and try next sheet if available
        console.warn(
          `[Sheets API] Failed to fetch "${tabName}" from sheet ${sheetId} (attempt ${i + 1}/${sheetIds.length}). Status: ${res.status}`
        )
        continue // Try next sheetId
      }

      let text = await res.text()

      // Parse Google's JSONP response format
      const jsonStart = text.indexOf("(") + 1
      const jsonEnd = text.lastIndexOf(")")

      if (jsonStart === 0 || jsonEnd === -1) {
        if (text.length > 0) {
          console.warn(
            `[Sheets API] JSONP format error in "${tabName}" from sheet ${sheetId} (attempt ${i + 1}/${sheetIds.length})`
          )
        }
        continue // Try next sheetId
      }

      text = text.substring(jsonStart, jsonEnd)
      const json = JSON.parse(text)

      if (!json.table || !json.table.rows) {
        console.warn(
          `[Sheets API] Empty or invalid data in "${tabName}" from sheet ${sheetId} (attempt ${i + 1}/${sheetIds.length})`
        )
        continue // Try next sheetId
      }

      const rows: SheetRow[] = json.table.rows

      // Success! Return the data
      return skipFirstRow ? rows.slice(1) : rows

    } catch (err) {
      // Log error and try next sheet if available
      console.error(
        `[Sheets API] Network/Parse Error for "${tabName}" from sheet ${sheetId} (attempt ${i + 1}/${sheetIds.length}):`,
        err
      )
      continue // Try next sheetId
    }
  }

  // 🛡️ CRASH PROTECTION:
  // All sheets failed - return [] so the page still renders (just without data)
  console.error(
    `[Sheets API] All attempts failed for "${tabName}" (tried ${sheetIds.length} sheet(s))`
  )
  return []
}


// --- 3. Specific Data Parsers ---

export async function getMakerspaceData(city?: string): Promise<Machine[]> {
  const rows = await getRawSheetData("makerspace")
  const allData = rows
    .map((row) => ({
      location: String(row.c?.[0]?.v || "").trim(),
      name: String(row.c?.[1]?.v || "").trim(),
      about: String(row.c?.[2]?.v || "").trim(),
      imageLink: String(row.c?.[3]?.v || "").trim(),
    }))
    .filter((machine) => machine.name)

  // Filter by city if provided
  if (city) {
    return allData.filter((machine) =>
      machine.location.toLowerCase() === city.toLowerCase()
    )
  }

  return allData
}

export async function getBlogData(): Promise<Blog[]> {
  const rows = await getRawSheetData("blog")
  return rows
    .map((row) => {
      const heading = String(row.c?.[1]?.v || "Untitled Post").trim()
      const slug = heading
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      return {
        slug,
        author: String(row.c?.[0]?.v || "YETI Team").trim(),
        heading,
        markdownContent: String(row.c?.[2]?.v || "").trim(),
        imageLink: String(row.c?.[3]?.v || "").trim(),
      }
    })
    .filter((post) => post.heading)
    .reverse()
}

// --- 4. Projects Parser ---

export async function getProjectsData(): Promise<Project[]> {
  // We explicitly request ALL rows, do NOT slice the first one
  const rows = await getRawSheetData("projects", false)

  const data: Project[] = rows
    .map((row) => {
      // Helper to avoid null checks everywhere
      const getVal = (idx: number) => String(row.c?.[idx]?.v || "").trim()
      const isTrue = (idx: number) => getVal(idx) === "1"
      const cleanStr = (idx: number) => {
        const s = getVal(idx)
        return s === "0" ? "" : s
      }

      const projectType = cleanStr(0)
      const goldenFrame = isTrue(1)
      const companyFormed = isTrue(2)
      const title = cleanStr(3)
      const city = cleanStr(4)
      const year = cleanStr(5)
      const summary = cleanStr(6)

      const rawMembers = cleanStr(7)
      const teamMembers = rawMembers
        ? rawMembers.split(/[\n,:]+/).map((m) => m.trim()).filter(Boolean)
        : []

      const linkedin = cleanStr(8)
      const instagram = cleanStr(9)
      const website = cleanStr(10)
      const active = isTrue(11)

      const industryPartner = cleanStr(12)
      const industryPartnerLogo = processImageLink(cleanStr(13))

      const rawPhotos = cleanStr(14)
      const teamPhotos = rawPhotos
        ? rawPhotos
          .split(/[\n,]+/)
          .map((p) => processImageLink(p.trim()))
          .filter(Boolean)
        : []

      const logo = processImageLink(cleanStr(15), "/white-transparent.png")
      const revenue = cleanStr(16)

      return {
        projectType,
        goldenFrame,
        companyFormed,
        title,
        city,
        year,
        summary,
        teamMembers,
        linkedin,
        instagram,
        website,
        active,
        industryPartner,
        industryPartnerLogo,
        teamPhotos,
        logo,
        revenue,
      }
    })
    .filter((project) => project.title)



  return data
}

// --- 5. Events Parser ---

export type SheetEvent = {
  slug: string
  name: string
  registrationStartDate?: string
  registrationEndDate?: string
  eventDate?: string
  location?: string
  googleMapsLink?: string
  heading?: string
  description?: string
  image?: string
  registrationLink?: string
  sponsoredBy?: string
}

export async function getEventsData(): Promise<SheetEvent[]> {
  const rows = await getRawSheetData("events")

  const clean = (val: string | number | null | undefined) => String(val ?? "").trim()
  const isUrl = (val: string) => /^https?:\/\//i.test(val)
  const isGoogleMapsUrl = (val: string) =>
    isUrl(val) && /google\..*maps/i.test(val)

  return rows
    .map((row) => {
      // Safe access using optional chaining row.c?.[0]
      const name = clean(row.c?.[0]?.v)
      if (!name) return null

      const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      const registrationStartDate = clean(row.c?.[1]?.v)
      const registrationEndDate = clean(row.c?.[2]?.v)
      const eventDate = clean(row.c?.[3]?.v)
      const location = clean(row.c?.[4]?.v)

      const col5 = clean(row.c?.[5]?.v)
      const col6 = clean(row.c?.[6]?.v)

      let heading = ""
      let googleMapsLink = ""

      // Smart detection for Google Maps vs Heading
      if (isGoogleMapsUrl(col5) && !isGoogleMapsUrl(col6)) {
        googleMapsLink = col5
        heading = col6
      } else if (isGoogleMapsUrl(col6) && !isGoogleMapsUrl(col5)) {
        googleMapsLink = col6
        heading = col5
      } else {
        if (!isUrl(col5) && col5) heading = col5
        else if (!isUrl(col6) && col6) heading = col6
        else heading = col5 || col6

        if (isGoogleMapsUrl(col5)) googleMapsLink = col5
        else if (isGoogleMapsUrl(col6)) googleMapsLink = col6
      }

      const description = clean(row.c?.[7]?.v)
      const rawImage = clean(row.c?.[8]?.v)
      const registrationLink = clean(row.c?.[9]?.v)
      const sponsoredBy = clean(row.c?.[10]?.v)

      const image = rawImage ? processImageLink(rawImage) : ""

      return {
        slug,
        name,
        registrationStartDate: registrationStartDate || undefined,
        registrationEndDate: registrationEndDate || undefined,
        eventDate: eventDate || undefined,
        location: location || undefined,
        googleMapsLink: googleMapsLink || undefined,
        heading: heading || undefined,
        description: description || undefined,
        image: image || undefined,
        registrationLink: registrationLink || undefined,
        sponsoredBy: sponsoredBy || undefined,
      } as SheetEvent
    })
    .filter((evt): evt is SheetEvent => !!evt)
}

// --- 6. Makerspace Activity Parser ---

export type MakerspaceActivity = {
  location: string
  machine: string
  activity: string
  about: string
  imageLink: string
}

export async function getMakerspaceActivityData(city?: string): Promise<MakerspaceActivity[]> {
  const rows = await getRawSheetData("makerspaceActivity")

  const allData = rows
    .map((row) => ({
      location: String(row.c?.[0]?.v || "").trim(),
      machine: String(row.c?.[1]?.v || "").trim(),
      activity: String(row.c?.[2]?.v || "").trim(),
      about: String(row.c?.[3]?.v || "").trim(),
      imageLink: String(row.c?.[4]?.v || "").trim(),
    }))
    .filter((item) => item.activity)

  // Filter by city if provided
  if (city) {
    return allData.filter((item) =>
      item.location.toLowerCase() === city.toLowerCase()
    )
  }

  return allData
}

export async function getOberYetisData(): Promise<OberYeti[]> {
  const rows = await getRawSheetData("oberYeti")
  return rows
    .map((row) => ({
      name: String(row.c?.[0]?.v || "").trim(),
      role: String(row.c?.[1]?.v || "").trim(),
      description: String(row.c?.[2]?.v || "").trim(),
      linkedin: String(row.c?.[3]?.v || "").trim(),
      photo: processImageLink(String(row.c?.[4]?.v || "").trim()),
    }))
    .filter((item) => item.name)
}

export async function getYetiBoardData(): Promise<YetiBoard[]> {
  const rows = await getRawSheetData("yetiBoard")
  return rows
    .map((row) => ({
      name: String(row.c?.[0]?.v || "").trim(),
      title: String(row.c?.[1]?.v || "").trim(),
      company: String(row.c?.[2]?.v || "").trim(),
      photo: processImageLink(String(row.c?.[4]?.v || "").trim()),
      linkedin: String(row.c?.[3]?.v || "").trim(),
    }))
    .filter((item) => item.name)
}

export async function getSponsorsData(): Promise<Sponsor[]> {
  const rows = await getRawSheetData("sponsors")
  return rows
    .map((row) => ({
      company: String(row.c?.[0]?.v || "").trim(),
      category: String(row.c?.[1]?.v || "").trim(),
      description: String(row.c?.[2]?.v || "").trim(),
      type: String(row.c?.[3]?.v || "").trim(),
      photo: processImageLink(String(row.c?.[4]?.v || "").trim()),
      linkedin: String(row.c?.[5]?.v || "").trim(),
    }))
    .filter((item) => item.company)
}

export async function getMentorsData(): Promise<Mentor[]> {
  const rows = await getRawSheetData("mentors")
  return rows
    .map((row) => ({
      name: String(row.c?.[0]?.v || "").trim(),
      title: String(row.c?.[1]?.v || "").trim(),
      company: String(row.c?.[2]?.v || "").trim(),
      description: String(row.c?.[3]?.v || "").trim(),
      linkedin: String(row.c?.[4]?.v || "").trim(),
      photo: processImageLink(String(row.c?.[5]?.v || "").trim()),
    }))
    .filter((item) => item.name)
}

export async function getFiresideChatsData(): Promise<FiresideChat[]> {
  const rows = await getRawSheetData("firesideChat")
  return rows
    .map((row) => ({
      name: String(row.c?.[0]?.v || "").trim(),
      title: String(row.c?.[1]?.v || "").trim(),
      description: String(row.c?.[2]?.v || "").trim(),
      photo: processImageLink(String(row.c?.[3]?.v || "").trim()),
      linkedin: String(row.c?.[4]?.v || "").trim(),
    }))
    .filter((item) => item.name)
}

// --- 7. Application Data Parser ---

export type ApplicationData = {
  city: string
  status: boolean // true = Open (1), false = Closed (0)
  openDate: string
  endDate: string
  generation: string
  intake: string
  year: string
}

// --- 8. Location Data Parser ---

export type LocationData = {
  location: string
  yearStarted: string
  yetiCounts: string
  yetiGenerations: string
  innovationProjects: string
  industryProjects: string
  foundingProjects: string
  hqAddress: string
  emailId: string
  contentFolder: string
  hqContent: string
}

export async function getApplicationData(): Promise<ApplicationData[]> {
  const rows = await getRawSheetData("application", false)
  return rows
    .map((row) => ({
      city: String(row.c?.[0]?.v || "").trim(),
      status: String(row.c?.[1]?.v || "") === "1",
      openDate: String(row.c?.[2]?.v || "").trim(),
      endDate: String(row.c?.[3]?.v || "").trim(),
      generation: String(row.c?.[4]?.v || "").trim(),
      intake: String(row.c?.[5]?.v || "").trim(),
      year: String(row.c?.[6]?.v || "").trim(),
    }))
    .filter((item) => item.city)
}

export async function getLocationData(city?: string): Promise<LocationData[]> {
  const rows = await getRawSheetData("location", false)

  const allData = rows
    .map((row) => ({
      location: String(row.c?.[0]?.v || "").trim(),
      yearStarted: String(row.c?.[1]?.v || "").trim(),
      yetiCounts: String(row.c?.[2]?.v || "").trim(),
      yetiGenerations: String(row.c?.[3]?.v || "").trim(),
      innovationProjects: String(row.c?.[4]?.v || "").trim(),
      industryProjects: String(row.c?.[5]?.v || "").trim(),
      foundingProjects: String(row.c?.[6]?.v || "").trim(),
      hqAddress: String(row.c?.[7]?.v || "").trim(),
      emailId: String(row.c?.[8]?.v || "").trim(),
      contentFolder: String(row.c?.[9]?.v || "").trim(),
      hqContent: String(row.c?.[10]?.v || "").trim(),
    }))
    .filter((item) => item.location)

  // Filter by city if provided
  if (city) {
    return allData.filter((item) =>
      item.location.toLowerCase() === city.toLowerCase()
    )
  }

  return allData
}

// --- 9. Media Content Parser ---

export type MediaContent = {
  dresdenHQ: string[]
  leipzigHQ: string[]
  dresdenGeneral: string[]
  leipzigGeneral: string[]
}

export async function getMediaContent(): Promise<MediaContent> {
  const rows = await getRawSheetData("mediaContent")
  const content: MediaContent = {
    dresdenHQ: [],
    leipzigHQ: [],
    dresdenGeneral: [],
    leipzigGeneral: [],
  }

  rows.forEach((row) => {
    // Column A: Yeti Dresden HQ (Index 0)
    const dHQ = String(row.c?.[0]?.v || "").trim()
    if (dHQ) content.dresdenHQ.push(processImageLink(dHQ))

    // Column B: Yeti Leipzig HQ (Index 1)
    const lHQ = String(row.c?.[1]?.v || "").trim()
    if (lHQ) content.leipzigHQ.push(processImageLink(lHQ))

    // Column C: Yeti Dresden General Content (Index 2)
    const dGen = String(row.c?.[2]?.v || "").trim()
    if (dGen) content.dresdenGeneral.push(processImageLink(dGen))

    // Column D: Yeti Leipzig General Content (Index 3)
    const lGen = String(row.c?.[3]?.v || "").trim()
    if (lGen) content.leipzigGeneral.push(processImageLink(lGen))
  })

  return content
}

// --- 10. Testimonials Parser ---

export type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

export async function getTestimonialsData(): Promise<Testimonial[]> {
  const rows = await getRawSheetData("testimonials")
  return rows
    .map((row) => ({
      quote: String(row.c?.[0]?.v || "").trim(),
      name: String(row.c?.[1]?.v || "").trim(),
      role: String(row.c?.[2]?.v || "").trim(),
      initials: String(row.c?.[3]?.v || "").trim(),
    }))
    .filter((item) => item.quote && item.name)
}

// --- 11. FAQ Parser ---

export type FAQItem = {
  question: string
  answer: string
}

export async function getFAQData(): Promise<FAQItem[]> {
  const rows = await getRawSheetData("faq")
  return rows
    .map((row) => ({
      question: String(row.c?.[0]?.v || "").trim(),
      answer: String(row.c?.[1]?.v || "").trim(),
    }))
    .filter((item) => item.question && item.answer)
}

// --- 12. Contact Info Parser ---

export type ContactInfo = {
  location: string
  medium: string // "Whatsapp", "Instagram", etc.
  address: string // The URL or contact string
  qrImage: string
}

export async function getContactData(): Promise<ContactInfo[]> {
  const rows = await getRawSheetData("contact")
  return rows
    .map((row) => ({
      location: String(row.c?.[0]?.v || "Common").trim(),
      medium: String(row.c?.[1]?.v || "").trim(),
      address: String(row.c?.[2]?.v || "").trim(),
      qrImage: processImageLink(String(row.c?.[3]?.v || "").trim()),
    }))
    .filter((item) => item.medium)
}
