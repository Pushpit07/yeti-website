// lib/sheets.ts

// --- 1. Type Definitions ---

export type Machine = {
  name: string
  about: string
  imageLink: string
}

export type Blog = {
  author: string
  heading: string
  markdownContent: string
  imageLink: string
}

function fixDriveUrl(url: string): string {
  if (!url) return url
  const match = url.match(/https?:\/\/drive\.google\.com\/file\/d\/([^/]+)/)
  if (!match) return url
  const id = match[1]
  return `https://drive.google.com/uc?export=view&id=${id}`
}

// Project type is the same shape you already use
export type Project = {
  projectType: string          // "Innovation Project" | "Industry Project" | "Founding Project"
  goldenFrame: boolean         // from col 1 ("1"/"0")
  companyFormed: boolean       // from col 2 ("1"/"0")
  title: string
  summary: string
  teamMembers: string[]
  linkedin: string
  instagram: string
  website: string
  active: boolean              // from col 9 ("1"/"0") – we NEVER filter by this, just show a badge
  industryPartner: string
  industryPartnerLogo: string
  teamPhotos: string[]
  logo: string
  revenue: string
}

type SheetRow = {
  c: ({ v: string | number | null } | null)[]
}

// --- 2. Generic Data Fetcher (UNCHANGED) ---

async function getRawSheetData(
  sheetName: string,
  skipFirstRow: boolean = true
): Promise<SheetRow[]> {
  const sheetId = "1QYpLhGzI1rm_evuLnEGYr72OE3h83DMw9hqe2pCtU58"
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(
    sheetName
  )}`

  try {
    const res = await fetch(url, { next: { revalidate: 0 } })

    if (!res.ok) {
      console.error(`Failed to fetch Google Sheet tab: ${sheetName}`, res.statusText)
      return []
    }

    let text = await res.text()
    const jsonStart = text.indexOf("(") + 1
    const jsonEnd = text.lastIndexOf(")")
    if (jsonStart === 0 || jsonEnd === -1) {
      throw new Error("Could not parse Google Sheet JSONP response.")
    }
    text = text.substring(jsonStart, jsonEnd)
    const json = JSON.parse(text)

    const rows: SheetRow[] = json.table.rows

    // 👇 IMPORTANT: keep old behavior by default, but allow disabling it
    return skipFirstRow ? rows.slice(1) : rows
  } catch (err) {
    console.error(`Error fetching or parsing Google Sheet tab: ${sheetName}`, err)
    return []
  }
}


// --- 3. Specific Data Parsers (Makerspace + Blog UNCHANGED) ---

export async function getMakerspaceData(): Promise<Machine[]> {
  const rows = await getRawSheetData("Makerspace")
  return rows
    .map((row) => ({
      name: String(row.c[0]?.v || "").trim(),
      about: String(row.c[1]?.v || "").trim(),
      imageLink: String(row.c[2]?.v || "").trim(),
    }))
    .filter((machine) => machine.name)
}

export async function getBlogData(): Promise<Blog[]> {
  const rows = await getRawSheetData("blog")
  return rows
    .map((row) => ({
      author: String(row.c[0]?.v || "YETI Team").trim(),
      heading: String(row.c[1]?.v || "Untitled Post").trim(),
      markdownContent: String(row.c[2]?.v || "").trim(),
      imageLink: String(row.c[3]?.v || "").trim(),
    }))
    .filter((post) => post.heading)
    .reverse()
}

// --- 4. Projects Parser (IMPROVED, THIS IS WHAT MATTERS) ---

export async function getProjectsData(): Promise<Project[]> {
  // 👇 NOTE: we explicitly request ALL rows, do NOT slice the first one
  const rows = await getRawSheetData("Projects", false)

  const data: Project[] = rows
    .map((row) => {
      const isTrue = (val: any) => String(val || "").trim() === "1"

      const cleanStr = (val: any) => {
        const s = String(val || "").trim()
        return s === "0" ? "" : s
      }

      // 0: Type, 1: Golden, 2: Company, 3: Title, 4: Summary
      // 5: Team, 6: LinkedIn, 7: Insta, 8: Website, 9: Active
      // 10: Partner, 11: Partner Logo, 12: Team Photo, 13: Logo, 14: Revenue

      const projectType = cleanStr(row.c[0]?.v)
      const goldenFrame = isTrue(row.c[1]?.v)
      const companyFormed = isTrue(row.c[2]?.v)
      const title = cleanStr(row.c[3]?.v)
      const summary = cleanStr(row.c[4]?.v)

      const rawMembers = cleanStr(row.c[5]?.v)
      const teamMembers = rawMembers
        ? rawMembers
          .split(/[\n,:]+/)
          .map((m) => m.trim())
          .filter((m) => m.length > 0)
        : []

      const linkedin = cleanStr(row.c[6]?.v)
      const instagram = cleanStr(row.c[7]?.v)
      const website = cleanStr(row.c[8]?.v)
      const active = isTrue(row.c[9]?.v)

      const industryPartner = cleanStr(row.c[10]?.v)
      const industryPartnerLogo = cleanStr(row.c[11]?.v)

      const rawPhotos = cleanStr(row.c[12]?.v)
      const teamPhotos = rawPhotos
        ? rawPhotos
          .split(/[\n,]+/)
          .map((p) => p.trim())
          .filter((p) => p.length > 0)
        : []

      const logo = cleanStr(row.c[13]?.v)
      const revenue = cleanStr(row.c[14]?.v)

      return {
        projectType,
        goldenFrame,
        companyFormed,
        title,
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
  const rows = await getRawSheetData("Events") // tab name: "Events"

  const clean = (val: any) => String(val ?? "").trim()

  const isUrl = (val: string) => /^https?:\/\//i.test(val)
  const isGoogleMapsUrl = (val: string) =>
    isUrl(val) && /google\..*maps/i.test(val)

  return rows
    .map((row) => {
      const name = clean(row.c[0]?.v) // Event Name
      if (!name) return null

      const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      const registrationStartDate = clean(row.c[1]?.v) // Registration start date
      const registrationEndDate = clean(row.c[2]?.v)   // Registration end date
      const eventDate = clean(row.c[3]?.v)             // Event Date
      const location = clean(row.c[4]?.v)              // Location

      // These two columns might be in either order in your sheet:
      // - Heading
      // - Google Maps Link
      const col5 = clean(row.c[5]?.v)
      const col6 = clean(row.c[6]?.v)

      let heading = ""
      let googleMapsLink = ""

      if (isGoogleMapsUrl(col5) && !isGoogleMapsUrl(col6)) {
        googleMapsLink = col5
        heading = col6
      } else if (isGoogleMapsUrl(col6) && !isGoogleMapsUrl(col5)) {
        googleMapsLink = col6
        heading = col5
      } else {
        // fallback: prefer non-URL as heading
        if (!isUrl(col5) && col5) heading = col5
        else if (!isUrl(col6) && col6) heading = col6
        else heading = col5 || col6

        if (isGoogleMapsUrl(col5)) googleMapsLink = col5
        else if (isGoogleMapsUrl(col6)) googleMapsLink = col6
      }

      const description = clean(row.c[7]?.v)           // Event Description
      const rawImage = clean(row.c[8]?.v)              // Image
      const registrationLink = clean(row.c[9]?.v)      // Registration Link
      const sponsoredBy = clean(row.c[10]?.v)          // Sponsored By

      const image = rawImage ? fixDriveUrl(rawImage) : ""

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

export type MakerspaceActivity = {
  machine: string
  activity: string
  about: string
  imageLink: string
}

export async function getMakerspaceActivityData(): Promise<MakerspaceActivity[]> {
  // Tab name: "Makerspace Activity"
  const rows = await getRawSheetData("Makerspace Activity")

  return rows
    .map((row) => ({
      // Column 0: Machine (e.g., "3D Printer")
      machine: String(row.c[0]?.v || "").trim(),
      // Column 1: Activity (e.g., "Prototyped Fokus")
      activity: String(row.c[1]?.v || "").trim(),
      // Column 2: About (e.g., "Prototyping done correctly...")
      about: String(row.c[2]?.v || "").trim(),
      // Column 3: Image Link
      imageLink: String(row.c[3]?.v || "").trim(),
    }))
    .filter((item) => item.activity) // Only show if there is an activity name
}