import { Section } from "@/components/Section"

export const dynamic = "force-static"

export default async function PrivacyPage() {
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold">Privacy Policy</h1>
      <div className="prose prose-neutral dark:prose-invert mt-4">
        <p>Privacy policy content to be provided.</p>
      </div>
    </Section>
  )
}

