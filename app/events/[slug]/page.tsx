import { Section } from "@/components/Section"
import Link from "next/link"
import { notFound } from "next/navigation"

const events: Record<string, {
  slug: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  links: { label: string; href: string }[];
}> = {
  "6th-dresden-demoday": {
    slug: "6th-dresden-demoday",
    title: "6th Dresden DemoDay",
    date: "2025-07-17",
    location: "Dresden",
    excerpt: "Pitch sessions and networking.",
    links: [
      { label: "YETI Calendar", href: "https://yeti-dresden.org/" }
    ]
  },
  "1st-leipzig-demoday": {
    slug: "1st-leipzig-demoday",
    title: "1st Leipzig DemoDay",
    date: "2025-07-18",
    location: "Leipzig",
    excerpt: "Kick-off DemoDay in Leipzig.",
    links: [
      { label: "YETI Calendar", href: "https://yeti-dresden.org/" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(events).map((slug) => ({ slug }));
}

export default async function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events[params.slug];

  if (!event) {
    notFound();
  }

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
}

