// lib/sheets/legacy.ts

import type { DataType, SheetTarget } from "./types"

/**
 * Legacy single-file spreadsheet configuration
 * Sheet ID: 1QYpLhGzI1rm_evuLnEGYr72OE3h83DMw9hqe2pCtU58
 */

const LEGACY_SHEET_ID = "1QYpLhGzI1rm_evuLnEGYr72OE3h83DMw9hqe2pCtU58"

/**
 * Exact legacy tab names (must match character-for-character)
 */
const LEGACY_TABS: Record<DataType, string> = {
    projects: "Projects",
    events: "Events",
    makerspace: "Makerspace",
    makerspaceActivity: "Makerspace Activity",
    oberYeti: "OberYeti",
    yetiBoard: "Yeti Board",
    sponsors: "Sponsors",
    mentors: "Mentors",
    firesideChat: "Fireside chat",
    blog: "blog",
    location: "Yeti", // EXACT: "Yeti" (not "Yeti Location Data")
    mediaContent: "Yeti Media Content",
    application: "Application",
    contact: "Yeti Contact",
    testimonials: "Testimonials",
    faq: "FAQ",
}

/**
 * Resolve legacy sheet target for a given data type
 */
export function resolveLegacySheet(dataType: DataType): SheetTarget {
    return {
        sheetIds: [LEGACY_SHEET_ID],
        tabName: LEGACY_TABS[dataType],
    }
}
