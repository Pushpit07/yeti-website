// app/makerspace/page.tsx
import { Section } from "@/components/Section"
import Image from "next/image"
import { MachineSlider } from "./MachineSlider"
// FIX 1: Import 'getMakerspaceData' instead of 'getSheetData'
import { getMakerspaceData } from "@/lib/sheets" 

export const revalidate = 60

// --- Data Fetching ---
// FIX 2: This function now just awaits the imported function, no arguments needed.
async function fetchData() {
  const machines = await getMakerspaceData()
  return machines
}
// ---------------------

export const metadata = {
  title: "Makerspace | YETI",
  description: "Build your ideas into reality with our fully-equipped makerspace",
}

export default async function MakerspacePage() {
  // Fetch data on the server
  const machines = await fetchData() // Changed this to not conflict with the import
  const machineCount = machines.length

  return (
    <div className="font-sans">
      {/* Hero Section (Unchanged) */}
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
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)",
            }}
          />
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
              From{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                idea
              </span>{" "}
              to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                prototype
              </span>
            </h2>

            {/* Total Equipment Card */}
            {machineCount > 0 && (
              <div className="mt-12 max-w-md mx-auto bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-4 flex items-center justify-center gap-4">
                <span className="text-4xl">🔬</span>
                <p className="text-lg font-medium text-white/80">
                  Our makerspace is currently equipped with{" "}
                  <span className="font-bold text-primary">
                    {machineCount} major tools
                  </span>
                  .
                </p>
              </div>
            )}

            <div className="mt-20 space-y-4 text-xl md:text-2xl text-white/85 leading-relaxed text-center max-w-3xl mx-auto">
              <p className="font-light">
                The YETI Makerspace is where your ideas take physical form.
              </p>
              <p className="font-light">
                Whether you&apos;re building a{" "}
                <strong className="text-primary font-semibold">
                  hardware prototype
                </strong>
                , creating a product demo, or just experimenting with new
                technology – we&apos;ve got the tools and space you need.
              </p>
              <div className="h-px w-16 bg-primary/30 mx-auto my-8" />
              <p className="font-light">
                Our community includes{" "}
                <strong className="text-primary font-semibold">
                  experienced makers
                </strong>{" "}
                who are always happy to help you get started and learn new
                skills.
              </p>
            </div>
          </div>
        </div>
        {/* Happy YETIs (Unchanged) */}
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

      {/* Equipment Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Tools &{" "}
            <span className="underline decoration-wavy underline-offset-8 decoration-primary">
              Equipment
            </span>
          </h2>

          <MachineSlider machines={machines} />

          {/* Additional Resources (Unchanged) */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold text-lg mb-2">Materials Storage</h3>
              <p className="text-muted-foreground">
                Keep your project materials safe in dedicated storage space
              </p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-lg mb-2">Training & Workshops</h3>
              <p className="text-muted-foreground">
                Regular sessions to learn how to use equipment safely
              </p>
            </div>
            <div className="bg-white rounded-2xl border-2 border-border p-6 hover:border-primary/50 transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-lg mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Get help from experienced makers in the community
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases (Unchanged) */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          {/* ... (content is unchanged) ... */}
        </div>
      </section>

      {/* Rules & Access (Unchanged) */}
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* ... (content is unchanged) ... */}
        </div>
      </Section>
    </div>
  )
}