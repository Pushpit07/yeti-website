import Link from "next/link"
import { readJson } from "@/lib/content"
import type { Navigation, SiteSettings } from "@/lib/types"

export default async function Header() {
  const nav = await readJson<Navigation>("nav.json")
  const site = await readJson<SiteSettings>("site.json")
  const title = site.site?.title ?? "YETI"

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold">
          {title}
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.main.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="text-sm hover:underline">{item.label}</button>
                <div className="invisible absolute right-0 z-10 mt-2 min-w-40 rounded-md border border-border bg-background p-2 opacity-0 shadow-sm transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href ?? "#"}
                      className="block rounded px-3 py-1.5 text-sm hover:bg-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href ?? "#"} className="text-sm hover:underline">
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

