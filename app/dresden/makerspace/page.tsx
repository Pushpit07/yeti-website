import { getMakerspaceData, getMakerspaceActivityData } from "@/lib/sheets"
import { ActivityFeed } from "@/app/makerspace/ActivityFeed"
import { EquipmentGrid } from "@/app/makerspace/EquipmentGrid"

export const revalidate = 60

export const metadata = {
    title: "Dresden Makerspace | YETI",
    description: "Where ideas turn into prototypes. Explore the YETI Dresden Makerspace.",
}

export default async function DresdenMakerspacePage() {
    const [machines, activities] = await Promise.all([
        getMakerspaceData("Dresden"),
        getMakerspaceActivityData("Dresden")
    ])

    return (
        <div className="font-sans bg-black text-white selection:bg-primary selection:text-white">

            {/* --- HERO SECTION --- */}
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
                        <span className="text-xs font-bold tracking-widest text-white uppercase">Makerspace Dresden</span>
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

            {/* --- SECTION 1: THE ARSENAL (Equipment) --- */}
            <section className="py-24 bg-black border-b border-neutral-900">
                <div className="max-w-7xl mx-auto px-6">
                    <EquipmentGrid machines={machines} />
                </div>
            </section>

            {/* --- SECTION 2: ACTIVITIES (Made at YETI) --- */}
            <section className="py-24 bg-neutral-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Made at <span className="text-primary">YETI Dresden</span>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl">
                            See what our Dresden community builds with these tools.
                            Real projects, from initial sketches to functional prototypes.
                        </p>
                    </div>

                    <ActivityFeed activities={activities} />
                </div>
            </section>

            {/* --- FOOTER CTA (UPDATED WITH DROPDOWN) --- */}
            <section className="py-32 bg-neutral-950 text-center relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
                        Start Building.
                    </h2>

                    <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join a community of makers, engineers, and dreamers.
                        Whether you are founding a startup or learning a new skill,
                        your journey starts here.
                    </p>

                    {/* BUTTONS CONTAINER */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

                        {/* 1. APPLY BUTTON (CSS DROPDOWN) */}
                        <div className="relative group z-20">
                            <button
                                className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-black font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
                            >
                                Become Yeti
                                {/* Chevron that rotates on hover */}
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* THE DROPDOWN MENU */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 p-2 bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl 
                            opacity-0 invisible translate-y-2 
                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                            transition-all duration-200 origin-bottom">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest px-4 py-2 text-left">
                                        Apply for
                                    </span>
                                    <a href="/application/dresden" className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 text-white transition-colors text-left group/item">
                                        <span className="font-bold">Dresden</span>
                                        <span className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity">&rarr;</span>
                                    </a>
                                    <a href="/application/leipzig" className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 text-white transition-colors text-left group/item">
                                        <span className="font-bold">Leipzig</span>
                                        <span className="text-primary opacity-0 group-hover/item:opacity-100 transition-opacity">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2. EXPLORE PROJECTS BUTTON */}
                        <a
                            href="/projects"
                            className="w-full sm:w-auto px-10 py-5 rounded-full bg-neutral-900 border border-neutral-700 text-white font-bold text-xl hover:bg-neutral-800 hover:border-primary/50 transition-all"
                        >
                            Explore Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
