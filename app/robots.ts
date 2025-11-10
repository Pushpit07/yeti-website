import { readJson } from "@/lib/content"
import type { SiteSettings } from "@/lib/types"

export default async function robots() {
  const site = await readJson<SiteSettings>("site.json")
  const url = site.site?.url ?? ""
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: url ? [`${url}/sitemap.xml`] : [],
  }
}

