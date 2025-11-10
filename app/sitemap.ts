import { readJson } from "@/lib/content"
import type { EventsIndex } from "@/lib/types"

export default async function sitemap() {
  const baseUrl = (await import("@/lib/content")).readJson<{ site: { url?: string } }>("site.json")
    .then((s) => s.site.url)
    .catch(() => undefined)

  const events = await readJson<EventsIndex>("events/index.json").catch(() => ({ items: [] }))
  const staticRoutes = [
    "",
    "/dresden",
    "/leipzig",
    "/apply/dresden",
    "/apply/leipzig",
    "/projects",
    "/contributors",
    "/events",
    "/legal/impressum",
    "/legal/privacy",
  ]

  const eventRoutes = events.items.map((e) => `/events/${e.slug}`)
  const urls = [...staticRoutes, ...eventRoutes]

  return urls.map((route) => ({
    url: (baseUrl ?? "") + route,
    lastModified: new Date(),
  }))
}

