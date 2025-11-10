import { readJson } from "@/lib/content"
import type { LegalPage } from "@/lib/types"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

export default async function ImpressumPage() {
  const data = await readJson<LegalPage>("legal/impressum.json")
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        <p>{data.richText}</p>
      </div>
    </Section>
  )
}

