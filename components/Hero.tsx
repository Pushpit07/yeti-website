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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </>
      ) : null}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-end p-8 md:p-12">
        {/* <div className="mb-4 text-xl font-medium uppercase tracking-wider text-white">
          YETI
        </div> */}
        <h1 className={`mb-2 text-5xl font-bold md:text-6xl lg:text-7xl ${hasVideo ? "text-white" : ""}`}>{title}</h1>
        {subtitle ? (
          <p className={`mb-6 max-w-md text-lg opacity-90 md:text-xl ${hasVideo ? "text-white" : "text-muted-foreground"}`}>{subtitle}</p>
        ) : null}
        {cta ? (
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            {cta.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        ) : null}
      </div>
    </section>
  )
}

