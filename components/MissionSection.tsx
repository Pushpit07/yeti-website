import { Button } from "./Button"
import { FadeIn } from "./FadeIn"

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
    <section className="bg-black text-white py-12 md:py-32 px-8 md:px-12">
      <div className="grid md:grid-cols-2 gap-12">
        <FadeIn direction="right">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {mission.pretitle}{" "}
            <span className="underline decoration-wavy underline-offset-4 decoration-[2.5px] decoration-primary">
              {mission.title}
            </span>
          </h2>
          <p className="text-lg mb-8">{mission.description}</p>
          {mission.buttonText && mission.buttonHref && (
            <Button
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{about.title}</h2>
          <div className="space-y-4 text-lg">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
