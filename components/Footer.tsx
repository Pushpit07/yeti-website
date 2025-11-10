import { readJson } from "@/lib/content"
import type { Navigation, SiteSettings } from "@/lib/types"
import { FooterClient } from "./FooterClient"

export default async function Footer() {
  const nav = await readJson<Navigation>("nav.json")
  const site = await readJson<SiteSettings>("site.json")
  const address = site.organization?.address
  const email = site.organization?.email

  return <FooterClient nav={nav} address={address} email={email} />
}

