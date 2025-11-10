import Link from "next/link"
import { BackgroundVideo } from "./BackgroundVideo"

export function Hero({
  title,
  subtitle,
  cta,
  backgroundVideoUrl,
}: {
  title: string
  subtitle?: string
  cta?: { label: string; href: string }
  backgroundVideoUrl?: string
}) {
  const hasVideo = Boolean(backgroundVideoUrl)
  return (
    <section className={`relative ${hasVideo ? "min-h-screen" : "py-16 md:py-24 bg-secondary"}`}>
      {hasVideo ? (
        <>
          <BackgroundVideo src={backgroundVideoUrl!} />
          <div className="absolute inset-0 bg-black/40" />
        </>
      ) : null}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center flex min-h-screen flex-col items-center justify-center">
        <h1 className={`text-3xl md:text-5xl font-bold tracking-tight ${hasVideo ? "text-white" : ""}`}>{title}</h1>
        {subtitle ? (
          <p className={`mt-4 text-lg ${hasVideo ? "text-white/85" : "text-muted-foreground"}`}>{subtitle}</p>
        ) : null}
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

