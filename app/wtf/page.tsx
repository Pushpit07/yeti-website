import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import Link from "next/link"

export const dynamic = "force-static"

export const metadata = {
  title: "WTF is YETI? | YETI",
  description: "Learn what YETI is all about - Young Entrepreneurs in Tech and Innovation",
}

export default function WTFPage() {
  return (
    <div className="font-sans">
      <Hero
        title="WTF is YETI?"
        subtitle="Let's break it down for you"
        cta={{ label: "Apply now", href: "/application/dresden" }}
      />

      {/* Main Explanation */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                Y
              </span>oung{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                E
              </span>ntrepreneurs in{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                T
              </span>ech and{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                I
              </span>nnovation
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                YETI is not just another entrepreneurship program. It&apos;s a <strong className="text-primary">movement</strong> for
                ambitious students who want to make a real impact.
              </p>

              <p>
                We believe that the best way to learn entrepreneurship is by <strong className="text-primary">doing it</strong>.
                That&apos;s why we don&apos;t just teach theory – we give you the tools, network, and resources to build real ventures
                while you study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Deal */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            So, what&apos;s the <span className="underline decoration-wavy underline-offset-8 decoration-primary">real deal</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What it is */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">✓ What YETI IS</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>An 18-month hands-on program</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>A community of 100+ ambitious founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Real mentorship from successful entrepreneurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>€500-1000 funding to build your ideas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Your launchpad for the next big thing</span>
                </li>
              </ul>
            </div>

            {/* What it's not */}
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-2xl p-8 border-2 border-neutral-200">
              <h3 className="text-2xl font-bold mb-4">✗ What YETI is NOT</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1">→</span>
                  <span>Just another lecture series</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">→</span>
                  <span>A get-rich-quick scheme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">→</span>
                  <span>Only for business students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">→</span>
                  <span>Something you can do half-heartedly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">→</span>
                  <span>Limited to one city or university</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* The Journey */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Your <span className="underline decoration-wavy underline-offset-8 decoration-primary">18-month journey</span>
            </h2>

            <div className="space-y-6">
              {/* Semester 1 */}
              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-3 pr-16">Semester 1: Foundation</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Build your innovation mindset. Learn design thinking, validate ideas, and start your first project.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Design Thinking</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Ideation</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">MVP Building</span>
                </div>
              </div>

              {/* Semester 2 */}
              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-3 pr-16">Semester 2: Growth</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Get real-world experience with industry partners. Learn to pitch, sell, and scale your solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Industry Projects</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Pitching</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Networking</span>
                </div>
              </div>

              {/* Semester 3 */}
              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-3 pr-16">Semester 3: Launch</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Go all-in on your startup or social innovation. Get funding, build your team, and make it happen.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Start-up</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Social Impact</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Demo Day</span>
                </div>
              </div>

              {/* Alumni */}
              <div className="bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl border-2 border-primary-hover p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
                <div className="relative z-10">
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary font-bold">
                    ∞
                  </div>
                  <h3 className="text-2xl font-bold mb-3 pr-16">Alumni Network</h3>
                  <p className="text-lg text-white/90 mb-4">
                    You&apos;re never alone. Stay connected with the YETI community, access mentorship, and collaborate on new ventures.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Lifetime Access</span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Mentoring</span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who should apply */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Is YETI for <span className="underline decoration-wavy underline-offset-8 decoration-primary">you</span>?
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            If you&apos;re a student who wants to build something meaningful, learn by doing,
            and surround yourself with ambitious people – <strong className="text-primary">hell yeah</strong>, YETI is for you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Action-oriented</h3>
              <p className="text-muted-foreground">You learn best by building, not just listening</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-2">Ambitious</h3>
              <p className="text-muted-foreground">You want to create impact, not just get a degree</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Team player</h3>
              <p className="text-muted-foreground">You thrive in a community of like-minded people</p>
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to join?</h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Applications are open for both Dresden and Leipzig. The program is <strong>completely free</strong>,
              and you even get funding for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply/dresden"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors"
              >
                Apply for Dresden →
              </Link>
              <Link
                href="/apply/leipzig"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors"
              >
                Apply for Leipzig →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">18</div>
              <div className="text-muted-foreground">Months Program</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">€1000</div>
              <div className="text-muted-foreground">Funding per Project</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Cities (Dresden & Leipzig)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
