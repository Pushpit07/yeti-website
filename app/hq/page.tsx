import { Section } from "@/components/Section"

export const dynamic = "force-static"

export const metadata = {
  title: "YETI HQ | YETI",
  description: "Visit our headquarters in Dresden - the heart of the YETI community",
}

export default function HQPage() {
  return (
    <div className="font-sans">
      {/* Hero Section with Image */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative w-full h-screen">
          <div className="absolute inset-0">
            <img
              src="/hq.jpg"
              alt="YETI HQ"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />    
          {/* Bottom-to-top black gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)" }} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-20 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              YETI HQ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
              Where innovation happens
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-black text-white py-16 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              Your <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">home base</span> for entrepreneurship
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                YETI HQ is more than just an office – it&apos;s the <strong className="text-primary">beating heart</strong> of
                our entrepreneurial community. Located in the center of Dresden, our headquarters provides the perfect
                environment for collaboration, innovation, and growth.
              </p>

              <p>
                Every Thursday, the HQ comes alive with workshops, pitches, networking sessions, and the creative chaos
                that comes with building the future. But it&apos;s open all week for YETIs to work, meet, and make things happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            What you&apos;ll <span className="underline decoration-wavy underline-offset-8 decoration-primary">find here</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Co-working Space */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">Co-working Space</h3>
              <p className="text-muted-foreground">
                Open desks, high-speed internet, and all the coffee you need to fuel your startup dreams.
              </p>
            </div>

            {/* Meeting Rooms */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Meeting Rooms</h3>
              <p className="text-muted-foreground">
                Book private spaces for team meetings, mentor sessions, or investor pitches.
              </p>
            </div>

            {/* Event Space */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-3">Event Space</h3>
              <p className="text-muted-foreground">
                Host workshops, demo days, and networking events in our flexible event area.
              </p>
            </div>

            {/* Makerspace Access */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3">Makerspace Access</h3>
              <p className="text-muted-foreground">
                Direct access to our fully-equipped makerspace for prototyping and building.
              </p>
            </div>

            {/* Kitchen & Lounge */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-xl font-bold mb-3">Kitchen & Lounge</h3>
              <p className="text-muted-foreground">
                Grab a coffee, have lunch, or just hang out with fellow entrepreneurs.
              </p>
            </div>

            {/* Library */}
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">Resource Library</h3>
              <p className="text-muted-foreground">
                Books, magazines, and resources on entrepreneurship, innovation, and leadership.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Thursday at YETI */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Thursday is <span className="underline decoration-wavy underline-offset-8 decoration-primary">YETI Day</span>
            </h2>

            <div className="bg-white rounded-2xl border-2 border-border p-8 md:p-12 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Every Thursday, YETI HQ transforms into a hub of energy and creativity. This is when the entire
                community comes together for:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Input Sessions & Workshops</h3>
                    <p className="text-muted-foreground">Learn from experts, practice new skills, and expand your toolkit</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Team Project Time</h3>
                    <p className="text-muted-foreground">Work on your projects with your team and get feedback</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Networking & Community</h3>
                    <p className="text-muted-foreground">Connect with fellow YETIs, mentors, and visiting entrepreneurs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Food & Drinks</h3>
                    <p className="text-muted-foreground">Enjoy dinner together and keep the conversations going</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <div id="contact">
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Visit <span className="underline decoration-wavy underline-offset-8 decoration-primary">us</span>
            </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl border-2 border-border p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📍</span>
                Location
              </h3>
              <div className="space-y-4 text-lg">
                <div>
                  <p className="font-bold">YETI Dresden HQ</p>
                  <p className="text-muted-foreground">Leubnitzer Str. 28</p>
                  <p className="text-muted-foreground">01069 Dresden</p>
                  <p className="text-muted-foreground">Germany</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Easily accessible by public transport (Tram lines 3, 8 to Reichenbachstraße)
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl border-2 border-border p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">🕐</span>
                Access
              </h3>
              <div className="space-y-4 text-lg">
                <div>
                  <p className="font-bold">Thursday (YETI Day)</p>
                  <p className="text-muted-foreground">All day access & events</p>
                </div>
                <div>
                  <p className="font-bold">Other weekdays</p>
                  <p className="text-muted-foreground">Open for YETI members</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Want to visit? Drop us a message at{" "}
                  <a href="mailto:info@yeti-dresden.org" className="text-primary font-semibold hover:underline">
                    info@yeti-dresden.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-black text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to experience YETI HQ?
            </h3>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Join us for a Thursday session or apply to become part of the community!
            </p>
            <a
              href="/application/dresden"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
              style={{ verticalAlign: "middle" }}
            >
              <span className="flex items-center">
                Apply now
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
        </Section>
      </div>
    </div>
  );
}
