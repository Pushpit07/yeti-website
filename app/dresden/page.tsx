import { readJson } from "@/lib/content"
import type { HomePage } from "@/lib/types"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { Curriculum } from "@/components/Curriculum"

export const dynamic = "force-static"

export default async function Home() {
  const data = await readJson<HomePage>("pages/home.json")
  return (
    <div className="font-sans">
      <Hero
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        cta={data.hero.cta}
        backgroundVideoUrl="https://yeti-dresden.org//wp-content//uploads//2025//09//demo-day-recap.mp4"
      />
      {data.sections.map((section) => {
        if (section.id === "curriculum") {
          return (
            <Section key={section.id}>
              <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>
              <Curriculum />
            </Section>
          )
        }
        if ("bullets" in section) {
          return (
            <Section key={section.id}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {section.bullets.map((b) => (
                  <li key={b.title} className="rounded-lg border border-border p-4 bg-card">
                    <div className="font-medium">{b.title}</div>
                    {b.text ? <p className="text-sm text-muted-foreground mt-1">{b.text}</p> : null}
                  </li>
                ))}
              </ul>
            </Section>
          )
        }
        return (
          <Section key={section.id}>
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-4 text-muted-foreground">{section.richText}</p>
          </Section>
        )
      })}
    </div>
  )
}
