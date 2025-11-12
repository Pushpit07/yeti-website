import { Button } from "./Button"
import { FadeIn } from "./FadeIn"
import Image from "next/image"

interface MissionSectionProps {
  mission: {
    pretitle?: string
    title: string
    description: string
    buttonText?: string
    buttonHref?: string
  }
  about: {
    title: string
    paragraphs: string[]
  }
}

export function MissionSection({ mission, about }: MissionSectionProps) {
  return (
    <section className="relative bg-black text-white py-12 md:py-32 md:pb-44 px-8 md:px-12 overflow-hidden">
      {/* Decorative YETI Images */}
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 opacity-20 -mb-8 -ml-4">
        <Image
          src="/happy-yeti/1.png"
          alt="Happy YETI mascot"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 opacity-20 -mr-8">
        <Image
          src="/happy-yeti/2.png"
          alt="Happy YETI mascot"
          fill
          className="object-contain object-bottom -scale-x-100"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-20 relative z-10 max-w-7xl mx-auto">
        <FadeIn direction="right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {mission.pretitle && (
              <span className="text-white/90">{mission.pretitle}{" "}</span>
            )}
            <span className="underline decoration-wavy underline-offset-8 decoration-[3px] decoration-primary text-white">
              {mission.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
            {mission.description}
          </p>
          {mission.buttonText && mission.buttonHref && (
            <Button
              href={mission.buttonHref}
              variant="rounded"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              {mission.buttonText}
            </Button>
          )}
        </FadeIn>
        <FadeIn direction="left" delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
            {about.title}
          </h2>
          <div className="space-y-5 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl [&_strong]:bg-gradient-to-r [&_strong]:from-primary [&_strong]:to-primary-hover [&_strong]:bg-clip-text [&_strong]:text-transparent [&_strong]:font-bold">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
