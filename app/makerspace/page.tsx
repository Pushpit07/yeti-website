import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"

export const dynamic = "force-static"

export const metadata = {
  title: "Makerspace | YETI",
  description: "Build your ideas into reality with our fully-equipped makerspace",
}

export default function MakerspacePage() {
  return (
    <div className="font-sans">
      <Hero
        title="YETI Makerspace"
        subtitle="Build. Prototype. Create."
        cta={{ label: "Get access", href: "/apply/dresden" }}
      />

      {/* Introduction */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              From <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">idea</span> to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">prototype</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed">
              <p>
                The YETI Makerspace is where your ideas take <strong className="text-primary">physical form</strong>.
                Whether you&apos;re building a hardware prototype, creating a product demo, or just experimenting
                with new technology – we&apos;ve got the tools and space you need.
              </p>

              <p>
                No prior experience required! Our community includes experienced makers who are always happy to
                help you get started and learn new skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Tools & <span className="underline decoration-wavy underline-offset-8 decoration-primary">Equipment</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* 3D Printing */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 p-8">
              <div className="text-4xl mb-4">🖨️</div>
              <h3 className="text-2xl font-bold mb-4">3D Printing</h3>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Multiple FDM 3D printers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Resin printer for high-detail parts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Various filament types available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Post-processing tools & materials</span>
                </li>
              </ul>
            </div>

            {/* Electronics */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Electronics Workshop</h3>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Soldering stations & tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Arduino, Raspberry Pi & components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Oscilloscopes & multimeters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Power supplies & testing equipment</span>
                </li>
              </ul>
            </div>

            {/* Digital Fabrication */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 p-8">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-2xl font-bold mb-4">Digital Fabrication</h3>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Laser cutter for precision work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Vinyl cutter for stickers & decals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>CNC router (planned)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>CAD software & workstations</span>
                </li>
              </ul>
            </div>

            {/* Hand Tools & Workshop */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20 p-8">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold mb-4">Traditional Workshop</h3>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Hand tools & power tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Woodworking equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Assembly & testing benches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Safety equipment & materials</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-lg mb-2">Materials Storage</h3>
              <p className="text-muted-foreground">Keep your project materials safe in dedicated storage space</p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Training & Workshops</h3>
              <p className="text-muted-foreground">Regular sessions to learn how to use equipment safely</p>
            </div>

            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Get help from experienced makers in the community</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              What you can <span className="underline decoration-wavy underline-offset-8 decoration-primary">build</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">1</span>
                  Product Prototypes
                </h3>
                <p className="text-lg text-muted-foreground">
                  Turn your product ideas into tangible prototypes for testing, pitching, and user feedback.
                  Perfect for hardware startups and physical products.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">2</span>
                  IoT & Smart Devices
                </h3>
                <p className="text-lg text-muted-foreground">
                  Build connected devices, sensors, and smart solutions using Arduino, Raspberry Pi, and other platforms.
                  Combine electronics with 3D printed enclosures.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">3</span>
                  Marketing Materials
                </h3>
                <p className="text-lg text-muted-foreground">
                  Create professional-looking demos, booth materials, stickers, and branded items for your startup
                  using our laser cutter and vinyl cutter.
                </p>
              </div>

              <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">4</span>
                  Experimental Projects
                </h3>
                <p className="text-lg text-muted-foreground">
                  Just want to try something new? Experiment with new technologies, learn new skills, or build
                  something fun. The makerspace is your playground.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Access */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Access & <span className="underline decoration-wavy underline-offset-8 decoration-primary">Guidelines</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border-2 border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Getting Access</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>All YETI members get free access to the makerspace</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Complete safety training for equipment you want to use</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Book equipment slots through our booking system</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <p>Materials are provided or available for purchase at cost</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Ground Rules</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p>Safety first – always follow equipment guidelines</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p>Clean up your workspace when you&apos;re done</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p>Share knowledge and help other makers</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <p>Report any issues or broken equipment immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start building?
            </h3>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Join YETI to get full access to the makerspace and bring your ideas to life!
            </p>
            <a
              href="/apply/dresden"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors"
            >
              Apply to YETI →
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-white rounded-xl border-2 border-border p-6">
                <h3 className="font-bold text-lg mb-2">Do I need prior experience?</h3>
                <p className="text-muted-foreground">
                  Not at all! We provide training for all equipment and there are always experienced
                  makers around to help you get started.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-border p-6">
                <h3 className="font-bold text-lg mb-2">How much does it cost?</h3>
                <p className="text-muted-foreground">
                  Access is free for all YETI members. You only pay for materials you use,
                  and we keep those costs as low as possible.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-border p-6">
                <h3 className="font-bold text-lg mb-2">Can I work on personal projects?</h3>
                <p className="text-muted-foreground">
                  Yes! While the makerspace is here to support your YETI projects, you&apos;re welcome
                  to use it for personal learning and experimentation too.
                </p>
              </div>

              <div className="bg-white rounded-xl border-2 border-border p-6">
                <h3 className="font-bold text-lg mb-2">What are the opening hours?</h3>
                <p className="text-muted-foreground">
                  The makerspace is accessible to YETI members during HQ opening hours.
                  Equipment that requires supervision has scheduled access times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
