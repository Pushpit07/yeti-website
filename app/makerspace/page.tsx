import Link from "next/link"

export const revalidate = 60

export const metadata = {
  title: "Makerspace | YETI",
  description: "Where ideas turn into prototypes. Explore the YETI Makerspace in Dresden and Leipzig.",
}

export default function MakerspacePage() {
  return (
    <div className="font-sans bg-black text-white selection:bg-primary selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex flex-col overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/makerspace-without-audio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 mt-12">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-white uppercase">Choose Your Location</span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-none mb-6 text-white">
            BUILD <span className="text-primary">IT</span>.
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl font-light leading-relaxed">
            The playground for hardware founders.
          </p>

          {/* Keywords */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-bold tracking-widest text-neutral-500 uppercase">
            <span>Hardware</span>
            <span className="text-primary">•</span>
            <span>Prototyping</span>
            <span className="text-primary">•</span>
            <span>Innovation</span>
          </div>
        </div>
      </section>

      {/* Location Chooser */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Choose Your <span className="text-primary">Makerspace</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Select your location to explore our equipment and see what&apos;s being built.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dresden Card */}
            <Link href="/dresden/makerspace" className="group">
              <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)] hover:-translate-y-2">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-10 md:p-12">
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Dresden</span>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6">🛠️</div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                    Dresden Makerspace
                  </h3>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      Fully equipped with 3D printers, laser cutters, and tools for prototyping.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      Where Dresden YETIs transform ideas into physical products.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all duration-300">
                    <span>Explore Dresden Makerspace</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Leipzig Card */}
            <Link href="/leipzig/makerspace" className="group">
              <div className="relative bg-black rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.2)] hover:-translate-y-2">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-10 md:p-12">
                  {/* Location Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Leipzig</span>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6">🛠️</div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-primary transition-colors duration-300">
                    Leipzig Makerspace
                  </h3>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      State-of-the-art equipment for building and testing your hardware prototypes.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                      A creative space where Leipzig entrepreneurs bring innovations to life.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all duration-300">
                    <span>Explore Leipzig Makerspace</span>
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
