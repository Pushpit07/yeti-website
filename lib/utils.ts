import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function processImageUrl(url: string | null | undefined): string {
  if (!url || typeof url !== 'string') {
    return "/hq.jpg" // Return a fallback image
  }

  // 1. Handle Google Drive Links
  const driveMatch = url.match(/drive\.google\.com\/(file\/d\/|open\?id=)([\w-]+)/)
  if (driveMatch && driveMatch[2]) {
    const fileId = driveMatch[2]
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
  }

  // 2. Pass through other valid URLs (e.g. ImageKit, Unsplash, etc.)
  if (url.startsWith('http')) {
    return url
  }

  console.warn(`Could not parse link, returning fallback: ${url}`)
  return "/hq.jpg" // Return a fallback image
}

// Backward compatibility alias if needed, but we will update usages.
export const convertGoogleDriveLink = processImageUrl
