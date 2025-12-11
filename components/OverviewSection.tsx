import { LocationData } from "@/lib/sheets"
import Link from "next/link"

interface OverviewSectionProps {
    locationData: LocationData
}

export function OverviewSection({ locationData }: OverviewSectionProps) {
    return (
        <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
            <div className="absolute inset-0">
                <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 relative z-10">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 tracking-tight">
                    YETI <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">{locationData.location}</span>
                </h2>

                {/* Descriptive Text */}
                <p className="text-lg md:text-xl text-white/70 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                    YETI {locationData.location} started in <span className="text-primary font-bold">{locationData.yearStarted}</span>.
                    It&apos;s home to <span className="text-primary font-bold">{locationData.yetiCounts}</span> inspiring young entrepreneurs
                    across <span className="text-primary font-bold">{locationData.yetiGenerations}</span> generations.
                </p>

                {/* Stats Grid - Community */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Our <span className="text-primary">Community</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all">
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">
                                {locationData.yetiCounts}
                            </div>
                            <div className="text-white/80 font-medium text-lg">Total YETIs</div>
                        </div>
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all">
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">
                                {locationData.yetiGenerations}
                            </div>
                            <div className="text-white/80 font-medium text-lg">Generations</div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid - Our Impact */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                        Our <span className="text-primary">Impact</span> So Far
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">
                                {locationData.innovationProjects}
                            </div>
                            <div className="text-white/80 font-medium">Innovation Projects</div>
                        </div>
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">
                                {locationData.industryProjects}
                            </div>
                            <div className="text-white/80 font-medium">Industry Projects</div>
                        </div>
                        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all">
                            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-primary to-primary-hover bg-clip-text text-transparent mb-3">
                                {locationData.foundingProjects || "-"}
                            </div>
                            <div className="text-white/80 font-medium">Founding Projects</div>
                        </div>
                    </div>

                    {/* CTA to Projects */}
                    <div className="text-center">
                        <p className="text-white/70 mb-6 text-lg">
                            Curious about what YETIs have built?
                        </p>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                        >
                            Explore YETI Projects
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
