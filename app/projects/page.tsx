import Link from "next/link"
import { readJson } from "@/lib/content"
import type { ProjectsIndex } from "@/lib/types"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

export default async function ProjectsPage() {
  const data = await readJson<ProjectsIndex>("projects/index.json")
  const projects = data.items
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold">Projects</h1>
      {!projects.length ? (
        <p className="mt-4 text-muted-foreground">No projects available yet.</p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <li key={p.title} className="rounded-lg border border-border p-4">
              <div className="font-medium">{p.title}</div>
              {p.team ? <div className="text-sm text-muted-foreground">{p.team}</div> : null}
              {p.blurb ? <p className="text-sm mt-2">{p.blurb}</p> : null}
              {p.links?.length ? (
                <div className="mt-3 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <Link key={l.href} href={l.href} className="text-sm underline underline-offset-4">
                      {l.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

