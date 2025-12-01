import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertGoogleDriveLink(url: string): string {
  if (!url || typeof url !== 'string') {
    return "/hq.jpg" // Return a fallback image
  }
  
  // Use a regex to extract the file ID
  const match = url.match(/drive\.google\.com\/(file\/d\/|open\?id=)([\w-]+)/)
  
  if (match && match[2]) {
    const fileId = match[2]
    return `https://drive.google.com/uc?id=${fileId}`
  }
  
  console.warn(`Could not parse GDrive link: ${url}`)
  return "/hq.jpg" // Return a fallback image
}