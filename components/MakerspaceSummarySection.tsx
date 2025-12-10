import { getMakerspaceData } from "@/lib/sheets"
import Link from "next/link"

export async function MakerspaceSummarySection() {
    const machines = await getMakerspaceData()

    // Show only first 4 machines as preview
    const previewMachines = machines.slice(0, 4)

    return (
        <section id="makerspace" className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-primary">Makerspace</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        Innovative things made by YETI—from prototypes to projects.
                        The playground where ideas turn into reality.
                    </p>
                </div>

                {/* Equipment Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {previewMachines.map((machine, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-primary/50 transition-all group"
                        >
                            <div className="aspect-square relative overflow-hidden bg-neutral-800">
                                {machine.imageLink ? (
                                    <img
                                        src={machine.imageLink}
                                        alt={machine.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl">
                                        🔧
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{machine.name}</h3>
                                <p className="text-sm text-neutral-400 line-clamp-2">
                                    {machine.about}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <p className="text-neutral-400 mb-6 text-lg">
                        Want to see what we have in our makerspace?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-full transition-colors gap-2 border border-white/20"
                        >
                            Explore Innovative Projects
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link
                            href="/makerspace"
                            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
                        >
                            Explore Our Makerspace
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
