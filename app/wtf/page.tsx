import { Section } from "@/components/Section"
import Link from "next/link"
import Image from "next/image"

export const dynamic = "force-static"

export const metadata = {
  title: "WTF is YETI? | YETI",
  description: "Learn what YETI is all about - Young Entrepreneurs in Tech and Innovation",
}

export default function WTFPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 md:py-40 lg:py-56 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* Happy YETI Background Images */}
        <div className="absolute inset-0 flex items-end justify-start pointer-events-none overflow-hidden">
          <div className="relative w-[250px] h-[250px] md:w-[450px] md:h-[450px] -translate-x-10 md:-translate-x-20 translate-y-16 md:translate-y-24">
            <Image
              src="/happy-yeti/2.png"
              alt="Happy YETI"
              fill
              className="object-contain opacity-30"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-end justify-end pointer-events-none overflow-hidden">
          <div className="relative w-[250px] h-[250px] md:w-[550px] md:h-[550px] translate-x-16 md:translate-x-24 translate-y-16 md:translate-y-24">
            <Image
              src="/happy-yeti/1.png"
              alt="Happy YETI"
              fill
              className="object-contain opacity-30"
            />
          </div>
        </div>

        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/40 rounded-full text-primary font-bold text-sm uppercase tracking-wider">
                The Real Question
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
                WTF is YETI?
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-[28px] text-white/75 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              No fluff. No BS.
              <br className="hidden md:block" />
              Just the honest answer to what we&apos;re all about.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/application/dresden"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
              >
                Apply for Dresden
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                href="/application/leipzig"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-colors gap-2 border border-white/20"
              >
                Apply for Leipzig
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Explanation */}
      <section className="bg-black text-white pt-16 md:pt-32 border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center leading-tight">
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

            <div className="mt-20 space-y-4 text-xl md:text-2xl text-white/85 leading-relaxed text-center max-w-3xl mx-auto">
              <p className="font-light">
                YETI is not just another entrepreneurship program.
              </p>
              <p className="font-light">
                It&apos;s a <strong className="text-primary font-semibold">movement</strong> for ambitious students who want to make real impact.
              </p>

              <div className="h-px w-16 bg-primary/30 mx-auto my-8" />

              <p className="font-light">
                We believe that the best way to learn entrepreneurship is by <strong className="text-primary font-semibold">doing it</strong>.
              </p>
              <p className="font-light">
                That&apos;s why we don&apos;t just teach theory – we give you the tools, network, and resources to build real ventures while you study.
              </p>
            </div>

            {/* Happy YETI Image */}
            <div className="mt-20 flex justify-center">
              <div className="relative w-[300px] h-[150px] md:w-[700px] md:h-[360px]">
                <Image
                  src="/happy-yeti/3.png"
                  alt="Happy YETI"
                  fill
                  className="object-contain opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Deal */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              So, what&apos;s the <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">real deal</span>?
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* What it is */}
            <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-primary">What YETI IS</h3>
                </div>
                <ul className="space-y-5 text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">An 18-month hands-on program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">A community of 100+ ambitious founders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">Real mentorship from successful entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">€500-1000 to prototype your ideas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">Your launchpad for the next big thing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What it's not */}
            <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 border-2 border-neutral-200 hover:border-neutral-300 transition-all group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-200/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-700 text-white text-2xl">
                    ✗
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-700">What YETI is NOT</h3>
                </div>
                <ul className="space-y-5 text-base md:text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-neutral-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">Just another lecture series</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-neutral-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">A get-rich-quick scheme</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-neutral-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">Only for business students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-neutral-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">Something you can do half-heartedly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-neutral-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="leading-relaxed">Limited to one city or university</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Journey */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-16 text-center tracking-tight">
              Your <span className="underline decoration-wavy underline-offset-8 decoration-primary">18-month journey</span>
            </h2>

            <div className="space-y-6">
              {/* Semester 1 */}
              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8 relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                  1
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 pr-16 tracking-tight">Semester 1: Foundation</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
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
                <h3 className="text-xl md:text-2xl font-bold mb-4 pr-16 tracking-tight">Semester 2: Growth</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
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
                <h3 className="text-xl md:text-2xl font-bold mb-4 pr-16 tracking-tight">Semester 3: Launch</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
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
                  <div className="absolute top-0 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary font-bold">
                    ∞
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 pr-16 tracking-tight">Alumni Network</h3>
                  <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight">
            Is YETI for <span className="underline decoration-wavy underline-offset-12 decoration-primary">you</span>?
          </h2>

          <p className="text-xl md:text-2xl lg:text-2xl text-muted-foreground mb-16 leading-relaxed font-light max-w-3xl mx-auto">
            If you&apos;re a student who wants to build something meaningful, learn by doing, and surround yourself with ambitious people –
            <br className="hidden md:block" />
            <strong className="text-primary font-semibold">hell yeah</strong>, YETI is for you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl border-2 border-border p-8 transition-all">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="font-bold text-xl mb-3">Action-oriented</h3>
              <p className="text-muted-foreground text-base leading-relaxed">You learn best by building, not just listening</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-8 transition-all">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="font-bold text-xl mb-3">Ambitious</h3>
              <p className="text-muted-foreground text-base leading-relaxed">You want to create impact, not just get a degree</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-border p-8 transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="font-bold text-xl mb-3">Team player</h3>
              <p className="text-muted-foreground text-base leading-relaxed">You thrive in a community of like-minded people</p>
            </div>
          </div>

          <div className="relative bg-black text-white rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Ready to join?</h3>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Applications are open for both Dresden and Leipzig.
                <br className="hidden md:block" />
                The program is <strong className="text-primary font-semibold">completely free</strong>, and you even get prototyping budget for projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/application/dresden"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                >
                  Apply for Dresden
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/application/leipzig"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors gap-2"
                >
                  Apply for Leipzig
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Stats */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-16 tracking-tight">
            YETI by the <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">numbers</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">18</div>
              <div className="text-white/80 font-medium">Months Program</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">100+</div>
              <div className="text-white/80 font-medium">Active Members</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">€500</div>
              <div className="text-white/80 font-medium">Prototyping Budget</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">2</div>
              <div className="text-white/80 font-medium">Cities (Dresden & Leipzig)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
