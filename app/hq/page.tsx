import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

export const metadata = {
  title: "YETI HQ | YETI",
  description: "Visit our headquarters in Dresden - the heart of the YETI community",
}

export default function HQPage() {
  return (
    <div className="font-sans">
      <Hero
        title="YETI HQ"
        subtitle="Where innovation happens"
        cta={{ label: "Visit us", href: "#contact" }}
      />

      {/* Introduction */}
      <section className="bg-black text-white py-16 md:py-24">
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

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-2 border-primary/20">
              <p className="text-center text-lg md:text-xl">
                <strong className="text-primary">Pro tip:</strong> Even if you can&apos;t make it in person,
                you can join remotely and stay connected with your team!
              </p>
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
                  <p className="text-muted-foreground">Freiberger Str. 37</p>
                  <p className="text-muted-foreground">01067 Dresden</p>
                  <p className="text-muted-foreground">Germany</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Easily accessible by public transport (Tram lines 1, 2, 4 to Walpurgisstraße)
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
              href="/apply/dresden"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors"
            >
              Apply now →
            </a>
          </div>
        </div>
        </Section>
      </div>
    </div>
  )
}
