import Link from "next/link"

export function Hero({
  title,
  subtitle,
  cta,
}: {
  title: string
  subtitle?: string
  cta?: { label: string; href: string }
}) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle ? <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p> : null}
        {cta ? (
          <div className="mt-8">
            <Link
              href={cta.href}
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
            >
              {cta.label}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

