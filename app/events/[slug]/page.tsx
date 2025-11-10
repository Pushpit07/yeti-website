import { readJson } from "@/lib/content"
import type { EventItem } from "@/lib/types"
import { Section } from "@/components/Section"
import Link from "next/link"
import { notFound } from "next/navigation"
import { readFile } from "node:fs/promises"
import path from "node:path"

export async function generateStaticParams() {
  try {
    const raw = await readFile(path.join(process.cwd(), "content", "events", "index.json"), "utf-8")
    const { items } = JSON.parse(raw) as { items: { slug: string }[] }
    return items.map((e) => ({ slug: e.slug }))
  } catch {
    return []
  }
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  try {
    const event = await readJson<EventItem>(`events/${params.slug}.json`)
    return (
      <Section>
        <div className="text-sm text-muted-foreground">{event.date}</div>
        <h1 className="text-2xl md:text-3xl font-bold">{event.title}</h1>
        {event.location ? <div className="mt-1">{event.location}</div> : null}
        {event.excerpt ? <p className="mt-4 text-muted-foreground">{event.excerpt}</p> : null}
        {event.links?.length ? (
          <ul className="mt-6 flex flex-wrap gap-3">
            {event.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>
    )
  } catch {
    notFound()
  }
}

