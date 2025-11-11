import { Button } from "@/components/Button"

interface BookZoomCallCTAProps {
  city: "dresden" | "leipzig"
}

export function BookZoomCallCTA({ city }: BookZoomCallCTAProps) {
  const zoomLinks = {
    dresden: "https://calendly.com/application-yeti-leipzig/yeti-leipzig-fragen-one-on-one", // Update with actual Dresden Calendly link
    leipzig: "https://calendly.com/application-yeti-leipzig/yeti-leipzig-fragen-one-on-one"
  }

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            Got Questions? Let&apos;s meet!
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 md:mb-10">
            Are you curious about what YETI is all about and whether it&apos;s the right fit for you? Book a free one-on-one Zoom call with one of our experienced mentors or current scholarship holders. During the call, you can ask questions, gain personal insights, and explore how YETI can help you achieve your goals. Secure your spot now!
          </p>

          <Button
            href={zoomLinks[city]}
            variant="rounded-full"
            target="_blank"
            icon={
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
            }
          >
            Book Zoom Call
          </Button>
        </div>
      </div>
    </section>
  )
}
