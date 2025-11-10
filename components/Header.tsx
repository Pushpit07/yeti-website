import { readJson } from "@/lib/content"
import type { Navigation, SiteSettings } from "@/lib/types"
import { HeaderClient } from "./HeaderClient"

export default async function Header({ variant = "default" }: { variant?: "default" | "black" }) {
  const nav = await readJson<Navigation>("nav.json")
  const site = await readJson<SiteSettings>("site.json")
  const title = site.site?.title ?? "YETI"

  return <HeaderClient nav={nav} title={title} variant={variant} />
}

