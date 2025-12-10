import { getMakerspaceActivityData } from "@/lib/sheets"
import Link from "next/link"
import Image from "next/image"

function convertGoogleDriveLink(url: string): string {
    if (!url) return ""
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (match) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`
    }
    return url
}

interface MakerspaceSummarySectionProps {
    location: string
}

export async function MakerspaceSummarySection({ location }: MakerspaceSummarySectionProps) {
    // Fetch activities filtered by location (Dresden or Leipzig)
    const activities = await getMakerspaceActivityData(location)

    // Show only first 3 activities as preview
    const previewActivities = activities.slice(0, 3)

    return (
        <section id="makerspace" className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-primary">Makerspace</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
                        Innovative things made by YETI—from prototypes to projects.
                        The playground where ideas turn into reality.
                    </p>
                </div>

                {/* Activity Grid - Made at YETI */}
                <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Made at <span className="text-primary">YETI</span>
                    </h3>
                    <p className="text-lg text-neutral-400 max-w-2xl mb-8">
                        See what our community builds with these tools. Real projects, from initial sketches to functional prototypes.
                    </p>

                    {previewActivities.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {previewActivities.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group flex flex-col bg-neutral-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                                >
                                    {/* Image Area */}
                                    <div className="relative w-full h-64 bg-neutral-800 overflow-hidden">
                                        <Image
                                            src={convertGoogleDriveLink(item.imageLink)}
                                            alt={item.activity}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-black/80 backdrop-blur border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                                {item.machine}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {item.activity}
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                                            {item.about}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-neutral-500">
                            <p className="text-lg">No activities yet for {location}. Check back soon!</p>
                        </div>
                    )}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <p className="text-neutral-400 mb-6 text-lg">
                        Want to see more innovative projects and our full makerspace?
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
                            href={`/${location.toLowerCase()}/makerspace`}
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
