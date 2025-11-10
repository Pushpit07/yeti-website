import Link from "next/link"
import { Section } from "./Section"
import type { ApplyPage } from "@/lib/types"

export function ApplyPageView({ data }: { data: ApplyPage }) {
  return (
    <div>
      <Section>
        <div className="flex items-center justify-between gap-6">
          <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
          {data.cta ? (
            <Link
              href={data.cta.href}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95"
            >
              {data.cta.label}
            </Link>
          ) : null}
        </div>
      </Section>
      {data.timeline?.length ? (
        <Section>
          <h2 className="text-xl font-semibold">Timeline</h2>
          <ol className="mt-4 space-y-3">
            {data.timeline.map((t, idx) => (
              <li key={idx} className="rounded-md border border-border p-3">
                <div className="text-sm text-muted-foreground">{t.date}</div>
                <div className="font-medium">{t.title}</div>
                {t.text ? <p className="text-sm mt-1">{t.text}</p> : null}
              </li>
            ))}
          </ol>
        </Section>
      ) : null}
      {data.faqs?.length ? (
        <Section>
          <h2 className="text-xl font-semibold">FAQs</h2>
          <div className="mt-4 space-y-2">
            {data.faqs.map((f, idx) => (
              <details key={idx} className="rounded-md border border-border p-4">
                <summary className="cursor-pointer font-medium">{f.question}</summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      ) : null}
      {data.resources?.length ? (
        <Section>
          <h2 className="text-xl font-semibold">Resources</h2>
          <ul className="mt-3 list-disc pl-6">
            {data.resources.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="underline underline-offset-4">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </div>
  )
}

