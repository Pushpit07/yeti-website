import { readJson } from "@/lib/content"
import type { CityPage } from "@/lib/types"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import Link from "next/link"

export const dynamic = "force-static"

export default async function LeipzigPage() {
  const data = await readJson<CityPage>("pages/leipzig.json")
  return (
    <div>
      <Hero title={data.hero.title} subtitle={data.hero.subtitle} cta={data.hero.cta} />
      <Section>
        {data.intro ? <p className="text-muted-foreground">{data.intro}</p> : null}
        {data.links?.length ? (
          <ul className="mt-6 flex flex-wrap gap-3">
            {data.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm underline underline-offset-4">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>
    </div>
  )
}

