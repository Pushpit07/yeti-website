interface HeadquartersSectionProps {
    hqAddress: string
    city: string
}

export function HeadquartersSection({ hqAddress, city }: HeadquartersSectionProps) {
    return (
        <section id="headquarters" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 md:order-1">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 shadow-xl">
                            <img
                                src={city.toLowerCase() === 'dresden' ? '/dresden.webp' : '/leipzig.jpg'}
                                alt={`YETI ${city} Headquarters`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our <span className="text-primary">Headquarters</span>
                        </h2>

                        <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                            Our HQ is more than just an office—it's equipped with a fully accessible{" "}
                            <span className="font-bold text-primary">makerspace for builders</span>, where you can
                            prototype, experiment, and bring your ideas to life.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span className="text-2xl">📍</span>
                                Address
                            </h3>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                {hqAddress}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#makerspace"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                            >
                                Explore Makerspace
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a
                                href="/hq"
                                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-black font-bold rounded-full transition-colors gap-2"
                            >
                                Explore More
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
