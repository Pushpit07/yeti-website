import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function processImageUrl(
  url: string | null | undefined,
  fallback: string = "/logo.jpg"
): string {
  if (!url || typeof url !== 'string') {
    return fallback
  }

  // 1. Handle Google Drive Links
  // Matches: /d/ID, id=ID, file/d/ID, open?id=ID
  const driveMatch = url.match(/(?:\/d\/|id=|file\/d\/|open\?id=)([-\w]{25,})/)
  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1]
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
  }

  // 2. Pass through other valid URLs (e.g. ImageKit, Unsplash, etc.)
  if (url.startsWith('http')) {
    return url
  }

  console.warn(`Could not parse link, returning fallback: ${url}`)
  return fallback
}

// Backward compatibility alias if needed, but we will update usages.
export const convertGoogleDriveLink = processImageUrl
