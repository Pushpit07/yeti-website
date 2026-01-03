import { notFound } from "next/navigation"
import { EventDetailContent } from "./EventDetailContent"
import { getEventsData, type SheetEvent } from "@/lib/sheets" // ⬅️ adjust path if needed

type Event = {
  slug: string
  title: string
  date?: string
  dateFormatted?: string
  location?: string
  excerpt?: string
  description?: string
  image?: string
  lumaUrl?: string
  sponsors?: {
    name: string
    logo?: string
    description?: string
  }[]
  sponsorMessage?: string
  sponsorImages?: string[]
  links?: {
    label: string
    href: string
  }[]
  registrationStartDate?: string
  registrationEndDate?: string
  registrationLink?: string
  sponsoredBy?: string
  googleMapsLink?: string
}

function formatDate(dateStr?: string): { raw?: string; formatted?: string } {
  if (!dateStr) return {}
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) {
    return { raw: dateStr }
  }
  return {
    raw: dateStr,
    formatted: d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  }
}

function mapSheetEventToEvent(e: SheetEvent): Event {
  const { raw, formatted } = formatDate(e.eventDate)

  const links =
    e.registrationLink && e.registrationLink.length > 0
      ? [{ label: "Register Now", href: e.registrationLink }]
      : undefined

  const sponsors =
    e.sponsoredBy && e.sponsoredBy.length > 0
      ? [{ name: e.sponsoredBy }]
      : undefined

  const title = e.heading || e.name
  const description = e.description || ""
  const shortExcerpt =
    (e.heading || description)?.slice(0, 160) +
    (description && description.length > 160 ? "…" : "")

  return {
    slug: e.slug,
    title,
    date: raw,
    dateFormatted: formatted || raw,
    location: e.location,
    excerpt: shortExcerpt,
    description,
    image: e.image,
    sponsors,
    links,
    registrationStartDate: e.registrationStartDate,
    registrationEndDate: e.registrationEndDate,
    registrationLink: e.registrationLink,
    sponsoredBy: e.sponsoredBy,
    googleMapsLink: e.googleMapsLink,
  }
}

export async function generateStaticParams() {
  const sheetEvents = await getEventsData()
  return sheetEvents.map((e) => ({ slug: e.slug }))
}

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const sheetEvents = await getEventsData()
  const sheetEvent = sheetEvents.find((e) => e.slug === params.slug)

  if (!sheetEvent) {
    notFound()
  }

  const event = mapSheetEventToEvent(sheetEvent!)
  return <EventDetailContent event={event} />
}
