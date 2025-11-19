// lib/sheets.ts

// --- 1. Type Definitions ---

export type Machine = {
  name: string
  about: string
  imageLink: string
}

export type Blog = {
  author: string         // Mapped to Column A
  heading: string        // Mapped to Column B (The main title)
  markdownContent: string // Mapped to Column C (Full Blog Content)
  imageLink: string      // Mapped to Column D
}

// Internal type for parsing the sheet (remains the same)
type SheetRow = {
  c: ({ v: string | number | null } | null)[]
}

// --- 2. Generic Data Fetcher (remains the same) ---

/**
 * A reusable function to fetch and parse data from any public Google Sheet.
 * @param sheetName The exact name of the sheet (tab) to fetch (e.g., "Makerspace", "blog")
 * @returns A promise that resolves to an array of rows.
 */
async function getRawSheetData(sheetName: string): Promise<SheetRow[]> {
  const sheetId = "1QYpLhGzI1rm_evuLnEGYr72OE3h83DMw9hqe2pCtU58"

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`

  try {
    // Re-fetch data from the sheet at most once every 60 seconds
    const res = await fetch(url, { next: { revalidate: 60 } })

    if (!res.ok) {
      console.error(`Failed to fetch Google Sheet tab: ${sheetName}`, res.statusText)
      return []
    }

    let text = await res.text()
    
    // Clean the JSONP response to make it valid JSON
    const jsonStart = text.indexOf("(") + 1
    const jsonEnd = text.lastIndexOf(")")
    if (jsonStart === 0 || jsonEnd === -1) {
      throw new Error("Could not parse Google Sheet JSONP response.")
    }
    text = text.substring(jsonStart, jsonEnd)

    const json = JSON.parse(text)
    
    // Skip the first row (headers) and return the data rows
    const rows: SheetRow[] = json.table.rows.slice(1)
    return rows

  } catch (err) {
    console.error(`Error fetching or parsing Google Sheet tab: ${sheetName}`, err)
    return []
  }
}

// --- 3. Specific Data Parsers ---

/**
 * Fetches and parses data from the "Makerspace" tab.
 */
export async function getMakerspaceData(): Promise<Machine[]> {
  const rows = await getRawSheetData("Makerspace")
  
  const data: Machine[] = rows
    .map((row) => ({
      // Column A: Machine
      name: String(row.c[0]?.v || ""),
      // Column B: About it
      about: String(row.c[1]?.v || ""),
      // Column C: Image link
      imageLink: String(row.c[2]?.v || ""),
    }))
    .filter((machine) => machine.name) // Filter out empty rows

  return data
}

/**
 * Fetches and parses data from the "blog" tab.
 * Sheet Columns: A=author, B=Heading, C=Blog (MARKDOWN CONTENT), D=imageLink
 */
export async function getBlogData(): Promise<Blog[]> {
  const rows = await getRawSheetData("blog")
  
  const data: Blog[] = rows
    .map((row) => ({
      // Column A: Author
      author: String(row.c[0]?.v || "YETI Team"), 
      // Column B: Heading
      heading: String(row.c[1]?.v || "Untitled Post"), 
      // Column C: Blog (Full Markdown Content)
      markdownContent: String(row.c[2]?.v || ""), 
      // Column D: Image link
      imageLink: String(row.c[3]?.v || ""), 
    }))
    // Filter out posts without a primary heading (Column B)
    .filter((post) => post.heading)

  // Return posts in reverse order (newest first)
  return data.reverse()
}