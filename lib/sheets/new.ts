// lib/sheets/new.ts

import type { DataType, SheetTarget } from "./types"

/**
 * New multi-file spreadsheet configuration
 * Organized by category: Contributors, Content, Projects, Admin, Headquarters
 */

// Sheet IDs for each category
const CONTRIBUTORS_SHEET_ID = "1aIO1SYEXukAmM4sqwHKuArc2Y6JaGlIt-Ep-ldg43aI"
const CONTENT_SHEET_ID = "1eJjJxiXwQlawNCueugrR73QnaaRZiIEj-Vl_0xp2kZU"
const PROJECTS_SHEET_ID = "1jTl9MdYqhrDMwBRqBA776LfFFMiGohP3u0utjpA7lu4"
const ADMIN_SHEET_ID = "1JN35Ql-K4WInjh11Of7Jtgp63MqE-hpZMzRbCSN29aM"
const HEADQUARTERS_SHEET_ID = "1K2s1z3jRGoAS6Z2uU4wpRppwH5MOb6ckoqrvsFXYqdw"

/**
 * Resolve new multi-file sheet target for a given data type
 */
export function resolveNewSheet(dataType: DataType): SheetTarget {
    switch (dataType) {
        case "projects":
            return {
                sheetIds: [PROJECTS_SHEET_ID],
                tabName: "All Projects",
            }
        case "events":
            return {
                sheetIds: [ADMIN_SHEET_ID],
                tabName: "Events",
            }
        case "makerspace":
            return {
                sheetIds: [HEADQUARTERS_SHEET_ID],
                tabName: "Makerspace",
            }
        case "makerspaceActivity":
            return {
                sheetIds: [PROJECTS_SHEET_ID],
                tabName: "Made in Yeti",
            }
        case "oberYeti":
            return {
                sheetIds: [CONTRIBUTORS_SHEET_ID],
                tabName: "Ober Yetis",
            }
        case "yetiBoard":
            return {
                sheetIds: [CONTRIBUTORS_SHEET_ID],
                tabName: "Yeti Board",
            }
        case "sponsors":
            return {
                sheetIds: [CONTRIBUTORS_SHEET_ID],
                tabName: "Partners", // Renamed from "Sponsors"
            }
        case "mentors":
            return {
                sheetIds: [CONTRIBUTORS_SHEET_ID],
                tabName: "Mentors", // EXACT: "Mentors" (capital M)
            }
        case "firesideChatSpeakers":
            return {
                sheetIds: [CONTRIBUTORS_SHEET_ID],
                tabName: "Fireside chat speakers",
            }
        case "blog":
            return {
                sheetIds: [CONTENT_SHEET_ID],
                tabName: "Blogs",
            }
        case "location":
            return {
                sheetIds: [ADMIN_SHEET_ID],
                tabName: "Yeti Location Data",
            }
        case "mediaContent":
            return {
                sheetIds: [CONTENT_SHEET_ID],
                tabName: "Yeti Media Content",
            }
        case "application":
            return {
                sheetIds: [ADMIN_SHEET_ID],
                tabName: "Application",
            }
        case "contact":
            return {
                sheetIds: [ADMIN_SHEET_ID],
                tabName: "Yeti Contacts",
            }
        case "testimonials":
            return {
                sheetIds: [CONTENT_SHEET_ID],
                tabName: "Testimonials",
            }
        case "faq":
            return {
                sheetIds: [CONTENT_SHEET_ID],
                tabName: "FAQs",
            }
    }
}
