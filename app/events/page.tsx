import Link from "next/link"
import { readJson } from "@/lib/content"
import type { EventsIndex } from "@/lib/types"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

export default async function EventsPage() {
  const data = await readJson<EventsIndex>("events/index.json")
  const events = data.items
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold">Events</h1>
      {!events.length ? (
        <p className="mt-4 text-muted-foreground">No upcoming events yet.</p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {events.map((e) => (
            <li key={e.slug} className="rounded-lg border border-border p-4">
              <div className="text-sm text-muted-foreground">{e.date}</div>
              <Link href={`/events/${e.slug}`} className="mt-1 block font-medium hover:underline">
                {e.title}
              </Link>
              {e.location ? <div className="text-sm">{e.location}</div> : null}
              {e.excerpt ? <p className="text-sm mt-2">{e.excerpt}</p> : null}
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

