import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

const contributors: Array<{
  name: string;
  role?: string;
  avatar?: string;
  links?: {
    website?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    whatsapp?: string;
  };
}> = [];

export default async function ContributorsPage() {
  return (
    <Section>
      <h1 className="text-2xl md:text-3xl font-bold">Contributors</h1>
      {!contributors.length ? (
        <p className="mt-4 text-muted-foreground">No contributors listed yet.</p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((c) => (
            <li key={c.name} className="rounded-lg border border-border p-4 flex items-center gap-4">
              {c.avatar ? (
                <Image
                  src={c.avatar}
                  alt={c.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
              ) : (
                <div className="h-14 w-14 rounded-full bg-muted" />
              )}
              <div>
                <div className="font-medium">{c.name}</div>
                {c.role ? <div className="text-sm text-muted-foreground">{c.role}</div> : null}
                <div className="mt-2 flex flex-wrap gap-3">
                  {c.links?.website ? (
                    <Link href={c.links.website} className="text-xs underline underline-offset-4">
                      Website
                    </Link>
                  ) : null}
                  {c.links?.linkedin ? (
                    <Link href={c.links.linkedin} className="text-xs underline underline-offset-4">
                      LinkedIn
                    </Link>
                  ) : null}
                  {c.links?.instagram ? (
                    <Link href={c.links.instagram} className="text-xs underline underline-offset-4">
                      Instagram
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

