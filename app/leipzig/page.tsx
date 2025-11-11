import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import Link from "next/link"

export const dynamic = "force-static"

export default async function LeipzigPage() {
  return (
    <div>
      <Hero
        title="YETI Leipzig"
        subtitle="Build, learn, and lead in Leipzig"
        cta={{ label: "Apply for Leipzig", href: "/apply/leipzig" }}
      />
      <Section>
        <p className="text-muted-foreground">Discover the Leipzig track, its community, and opportunities.</p>
        <ul className="mt-6 flex flex-wrap gap-3">
          <li>
            <Link href="/events?city=leipzig" className="text-sm underline underline-offset-4">
              Events in Leipzig
            </Link>
          </li>
        </ul>
      </Section>
    </div>
  )
}

