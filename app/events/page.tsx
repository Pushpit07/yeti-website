import Link from "next/link"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

const events = [
  {
    slug: "6th-dresden-demoday",
    title: "6th Dresden DemoDay",
    date: "2025-07-17",
    location: "Dresden",
    excerpt: "Pitch sessions and networking."
  },
  {
    slug: "1st-leipzig-demoday",
    title: "1st Leipzig DemoDay",
    date: "2025-07-18",
    location: "Leipzig",
    excerpt: "Kick-off DemoDay in Leipzig."
  }
];

export default async function EventsPage() {
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

