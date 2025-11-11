import { Section } from "@/components/Section"
import Image from "next/image"

export const dynamic = "force-static"

export const metadata = {
  title: "How it started | YETI",
  description: "Learn about the founding story of YETI and how it all began with a vision to give back to the entrepreneurial community",
}

export default function HowItStartedPage() {
  return (
    <div className="font-sans">
      {/* Hero Section with Video */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative w-full">
          {/* Title Section */}
          <div className="relative bg-gradient-to-br from-primary/20 to-black py-16 md:pt-32 md:pb-12">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 text-center">
                How it started
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto">
                The story behind YETI
              </p>
            </div>
          </div>

          {/* Video Container */}
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 pb-8 md:pb-12">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/7jJANP2ZqE4"
                title="How YETI started"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video Context */}
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 pb-16 md:pb-24">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                After his time at Manage & More in Munich, Thomas Kirchner founded the start-up ProGlove and successfully sold it after seven years. (The video is from 2018, in which he introduces the company.) In 2022, <a href="https://www.businessinsider.de/gruenderszene/technologie/proglove-exit-private-equity-handschuh-b/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover underline">after the exit</a>, Thomas came back to his hometown to give something back to it and built up the program YETI together with dresden|exists, the start-up service for Dresden&apos;s universities and research institutions. We can now benefit from the experience he gained at Manage & More and during his startup!
              </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="bg-white py-16 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              From <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">ProGlove</span> to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">YETI</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                After successfully building and exiting <strong>ProGlove</strong> in 2022, Thomas Kirchner returned to
                his hometown with a clear mission: <strong className="text-primary">to give something back</strong> to
                the community that shaped his entrepreneurial journey.
              </p>

              <p>
                Drawing from his experiences at both Manage & More in Munich and ProGlove, Thomas saw an opportunity
                to create something meaningful for the next generation of entrepreneurs. He partnered with{" "}
                <strong>dresden|exists</strong>, the start-up service for universities and scientific institutions in
                Dresden, to establish YETI.
              </p>

              <p>
                The vision was simple yet ambitious: create a program that would empower students to become
                entrepreneurial role models and influential figures for society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* First Generation */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Image
              src="/how-it-started-1.jpg"
              alt="YETI First Generation"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            The <span className="underline decoration-wavy underline-offset-8 decoration-primary">First Generation</span>
          </h2>

          <div className="bg-white rounded-2xl border-2 border-border p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary text-white px-4 py-2 rounded-full font-bold">
                Autumn 2022
              </div>
              <h3 className="text-2xl font-bold">11 Students, 3 Months, Endless Possibilities</h3>
            </div>

            <div className="space-y-4 text-lg text-gray-700">
            <p>
                Within just three months, the first cohort of 11 students embarked on an intensive journey using{" "}
                <strong>design thinking methodologies</strong> to tackle real-world challenges.
              </p>

              <p>
                The inaugural generation focused on critical issues affecting their community such as:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span><strong>Urban Gardening:</strong> Developing innovative solutions for sustainable city agriculture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">→</span>
                  <span><strong>Elderly Isolation:</strong> Creating connections and support systems for isolated seniors</span>
                </li>
              </ul>

              <p>
                Through intensive workshops, mentorship sessions, and collaborative work, participants refined their
                prototypes and developed comprehensive solutions. The semester culminated in a <strong>Demo Day</strong>,
                where students presented their findings and prototypes to Dresden&apos;s vibrant startup community.
              </p>
            </div>
          </div>

          <div className="mt-16 mb-10">
            <Image
              src="/how-it-started-2.jpg"
              alt="YETI First Generation"
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </Section>

      {/* The Vision */}
      <section className="relative bg-black text-white py-16 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Vision <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Continues</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-hover mx-auto rounded-full" />
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/20 rounded-full p-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">A Growing Movement</h3>
                    <p className="text-white/80 leading-relaxed">
                      What started as a single program in Dresden has grown into a movement. The success of the first generation proved that young people, when given the right support, mentorship, and resources, can create meaningful change in their communities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/20 rounded-full p-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Expanding to Leipzig</h3>
                    <p className="text-white/80 leading-relaxed">
                      Today, YETI has expanded to <strong className="text-primary">Leipzig</strong>, bringing the same spirit of innovation and entrepreneurship to a new city. Each generation builds on the lessons learned from the previous one, creating a growing network of young entrepreneurs ready to shape the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action box */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-hover rounded-3xl blur-xl opacity-20" />
              <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary/40 rounded-3xl p-8 md:p-12 text-center">
                <div className="inline-block bg-primary/20 rounded-full px-4 py-2 mb-4">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Journey</span>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-3">
                  The Journey Continues
                </p>
                <p className="text-xl text-white/90 mb-6">
                  And we&apos;re just getting started
                </p>
                <div className="flex items-center justify-center gap-2 text-primary">
                  <div className="h-0.5 w-8 bg-primary rounded-full" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                  <div className="h-0.5 w-8 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Key <span className="underline decoration-wavy underline-offset-8 decoration-primary">Milestones</span>
          </h2>

          <div className="space-y-8">
            {/* 2022 */}
            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
                <div className="text-primary font-bold text-sm mb-2">2022</div>
                <h3 className="text-xl font-bold mb-2">ProGlove Exit & YETI Foundation</h3>
                <p className="text-muted-foreground">
                  Thomas Kirchner exits ProGlove and partners with dresden|exists to establish YETI Dresden,
                  launching the first generation in autumn.
                </p>
              </div>
            </div>

            {/* Autumn 2022 */}
            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
                <div className="text-primary font-bold text-sm mb-2">AUTUMN 2022</div>
                <h3 className="text-xl font-bold mb-2">First Demo Day</h3>
                <p className="text-muted-foreground">
                  11 students present their prototypes addressing urban gardening and elderly isolation to Dresden&apos;s
                  startup community.
                </p>
              </div>
            </div>

            {/* 2023-2024 */}
            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
                <div className="text-primary font-bold text-sm mb-2">2023-2024</div>
                <h3 className="text-xl font-bold mb-2">Program Growth</h3>
                <p className="text-muted-foreground">
                  YETI Dresden continues with additional generations, refining the curriculum and expanding the
                  mentor network.
                </p>
              </div>
            </div>

            {/* 2025 */}
            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
              <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
                <div className="text-primary font-bold text-sm mb-2">2025</div>
                <h3 className="text-xl font-bold mb-2">YETI Leipzig Launch</h3>
                <p className="text-muted-foreground">
                  The program expands to Leipzig, bringing entrepreneurship education to a new city and community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to be part of the story?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join YETI and help write the next chapter of entrepreneurship in Dresden and Leipzig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/application/dresden"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
              style={{ verticalAlign: "middle" }}
            >
              <span className="flex items-center">
                Apply for Dresden
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
                  className="ml-2 inline-block"
                  style={{ display: "inline", verticalAlign: "middle" }}
                  aria-hidden="true"
                >
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            <a
              href="/application/leipzig"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors gap-2"
              style={{ verticalAlign: "middle" }}
            >
              <span className="flex items-center">
                Apply for Leipzig
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
                  className="ml-2 inline-block"
                  style={{ display: "inline", verticalAlign: "middle" }}
                  aria-hidden="true"
                >
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
