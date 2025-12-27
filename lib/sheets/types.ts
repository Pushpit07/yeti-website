// lib/sheets/types.ts

/**
 * Semantic data type keys used throughout the application
 */
export type DataType =
    | "projects"
    | "events"
    | "makerspace"
    | "makerspaceActivity"
    | "oberYeti"
    | "yetiBoard"
    | "sponsors"
    | "mentors"
    | "firesideChat"
    | "blog"
    | "location"
    | "mediaContent"
    | "application"
    | "contact"
    | "testimonials"
    | "faq"

/**
 * Sheet target with redundancy support
 * sheetIds: array of sheet IDs to try (primary + fallbacks)
 * tabName: exact tab name to fetch from
 */
export interface SheetTarget {
    sheetIds: string[]
    tabName: string
}
