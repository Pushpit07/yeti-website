import { Section } from "@/components/Section"
import Image from "next/image"

export const dynamic = "force-static"

export const metadata = {
  title: "Makerspace | YETI",
  description: "Build your ideas into reality with our fully-equipped makerspace",
}

export default function MakerspacePage() {
  return (
    <div className="font-sans">
      {/* Hero Section with Video */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative w-full h-[70vh] md:h-screen">
          <div className="absolute inset-0">
            <video
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline={true}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center" }}
            >
              <source src="/makerspace-without-audio.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Bottom-to-top black gradient overlay */}
          <div className="pointer-events-none absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)" }} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-24 z-20 px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-3 md:mb-4 text-center">
              YETI Makerspace
            </h1>
            <p className="text-lg md:text-2xl text-white/90 text-center max-w-3xl">
              Build. Prototype. Create.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative bg-black text-white pt-16 md:pt-32 pb-32 md:pb-48 min-h-[800px] md:min-h-[900px] overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center leading-tight">
              From <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">idea</span> to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">prototype</span>
            </h2>

            <div className="mt-20 space-y-4 text-xl md:text-2xl text-white/85 leading-relaxed text-center max-w-3xl mx-auto">
              <p className="font-light">
                The YETI Makerspace is where your ideas take physical form.
              </p>
              <p className="font-light">
                Whether you&apos;re building a <strong className="text-primary font-semibold">hardware prototype</strong>, creating a product demo, or just experimenting with new technology – we&apos;ve got the tools and space you need.
              </p>

              <div className="h-px w-16 bg-primary/30 mx-auto my-8" />

              <p className="font-light">
                No prior experience required!
              </p>
              <p className="font-light">
                Our community includes <strong className="text-primary font-semibold">experienced makers</strong> who are always happy to help you get started and learn new skills.
              </p>
            </div>
          </div>
        </div>

        {/* Happy YETI Images - Absolute Positioned at Bottom Corners */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <div className="relative w-[200px] h-[200px] md:w-[450px] md:h-[450px]">
            <Image
              src="/happy-yeti/2.png"
              alt="Happy YETI"
              fill
              className="object-contain object-bottom opacity-20"
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0 pointer-events-none -mb-10">
          <div className="relative w-[200px] h-[200px] md:w-[450px] md:h-[450px]">
            <Image
              src="/happy-yeti/1.png"
              alt="Happy YETI"
              fill
              className="object-contain object-bottom opacity-20"
            />
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
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">🖨️</div>
              <h3 className="text-2xl font-bold mb-6">3D Printing</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Multiple FDM 3D printers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Resin printer for high-detail parts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Various filament types available</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Post-processing tools & materials</span>
                </li>
              </ul>
            </div>

            {/* Electronics */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-6">Electronics Workshop</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Soldering stations & tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Arduino, Raspberry Pi & components</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Oscilloscopes & multimeters</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Power supplies & testing equipment</span>
                </li>
              </ul>
            </div>

            {/* Digital Fabrication */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">✂️</div>
              <h3 className="text-2xl font-bold mb-6">Digital Fabrication</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Laser cutter for precision work</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Vinyl cutter for stickers & decals</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>CNC router (planned)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>CAD software & workstations</span>
                </li>
              </ul>
            </div>

            {/* Hand Tools & Workshop */}
            <div className="bg-white rounded-2xl border-2 border-border p-8 hover:border-primary/50 transition-all">
              <div className="text-5xl mb-4">🔨</div>
              <h3 className="text-2xl font-bold mb-6">Traditional Workshop</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Hand tools & power tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Woodworking equipment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
                  <span>Assembly & testing benches</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">→</span>
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
              href="/application/dresden"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
              style={{ verticalAlign: "middle" }}
            >
              <span className="flex items-center">
                Apply to YETI
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
  )
}
