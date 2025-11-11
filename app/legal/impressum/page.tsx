import { Section } from "@/components/Section"

export const dynamic = "force-static"

export default async function ImpressumPage() {
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold">Impressum</h1>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        <p>Legal notice content to be provided.</p>
      </div>
    </Section>
  )
}

