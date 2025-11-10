import Link from "next/link"
import { readJson } from "@/lib/content"
import type { Navigation, SiteSettings } from "@/lib/types"

export default async function Footer() {
  const nav = await readJson<Navigation>("nav.json")
  const site = await readJson<SiteSettings>("site.json")
  const address = site.organization?.address
  const email = site.organization?.email

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">{address}</div>
          {email ? (
            <div>
              <a className="text-sm underline underline-offset-4" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
          ) : null}
        </div>
        <nav className="md:col-span-2">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.footer.map((item) => (
              <li key={item.label}>
                <Link href={item.href ?? "#"} className="text-sm hover:underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

