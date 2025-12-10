import { Section } from "@/components/Section"
import Link from "next/link"

export const dynamic = "force-static"

export const metadata = {
  title: "YETI Headquarters | YETI",
  description: "Visit our headquarters - the heart of the YETI community in Dresden and Leipzig.",
}

export default function HQPage() {
  return (
    <div className="font-sans bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">Choose Your Location</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            YETI <span className="text-primary">Headquarters</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            The beating heart of our entrepreneurial community.
            <br />
            Choose your location to explore our space.
          </p>
        </div>
      </section>

      {/* Location Chooser */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dresden Card */}
            <Link href="/dresden/hq" className="group">
              <div className="relative bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)] hover:-translate-y-2">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-10 md:p-12">
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Dresden</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                    Dresden HQ
                  </h2>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      Located in the center of Dresden, our headquarters is where innovation meets collaboration.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      Home to our makerspace, co-working areas, and Thursday community sessions.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all duration-300">
                    <span>Explore Dresden HQ</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Leipzig Card */}
            <Link href="/leipzig/hq" className="group">
              <div className="relative bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)] hover:-translate-y-2">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-10 md:p-12">
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Leipzig</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                    Leipzig HQ
                  </h2>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      Our Leipzig headquarters brings together entrepreneurs, makers, and innovators.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      A vibrant space equipped with everything you need to build your startup.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all duration-300">
                    <span>Explore Leipzig HQ</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}