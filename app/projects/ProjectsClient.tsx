"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import type { Project } from "@/lib/sheets"
import { Section } from "@/components/Section"
import { processImageUrl } from "@/lib/utils"

export type ProjectsClientProps = {
    projects: Project[]
}

const CATEGORIES = [
    "Innovation Projects",
    "Industry Projects",
    "Founding Projects",
    "Yeti Companies",
    "Golden Frame",
]

const ITEMS_PER_PAGE = 12 // 4 rows * 3 cols

export function ProjectsClient({ projects }: ProjectsClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Innovation Projects")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    // --- Hash navigation support ---
    useEffect(() => {
        const handleHashNavigation = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash) {
                // Map hash to category
                const hashToCategoryMap: Record<string, string> = {
                    'innovation': 'Innovation Projects',
                    'industry': 'Industry Projects',
                    'founding': 'Founding Projects',
                    'companies': 'Yeti Companies',
                    'golden-frame': 'Golden Frame'
                }
                const category = hashToCategoryMap[hash.toLowerCase()]
                if (category) {
                    setSelectedCategory(category)
                    setSearchQuery("") // Clear search if navigating via hash
                }
            }
        }

        // Handle on mount
        handleHashNavigation()

        // Handle hash changes
        window.addEventListener('hashchange', handleHashNavigation)
        return () => window.removeEventListener('hashchange', handleHashNavigation)
    }, [])

    // --- Metrics Calculation ---
    const metrics = useMemo(() => {
        const innovationCount = projects.filter((p) => isInnovation(p)).length
        const industryCount = projects.filter((p) => isIndustry(p)).length
        const foundingCount = projects.filter((p) => isFounding(p) && !p.companyFormed).length
        const yetiCompaniesCount = projects.filter((p) => p.companyFormed).length
        const goldenFrameCount = projects.filter((p) => p.goldenFrame).length

        return {
            innovationCount,
            industryCount,
            foundingCount,
            yetiCompaniesCount,
            goldenFrameCount
        }
    }, [projects])

    // --- Reset Page on Filter Change ---
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory, searchQuery])

    // --- Filtering Logic ---
    const filteredProjects = useMemo(() => {
        // 1. Global Search (Overrides Category)
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            return projects.filter((p) => {
                const titleMatch = p.title.toLowerCase().includes(query)
                const partnerMatch = p.industryPartner?.toLowerCase().includes(query)
                const teamMatch = p.teamMembers.some(m => m.toLowerCase().includes(query))
                return titleMatch || partnerMatch || teamMatch
            })
        }

        // 2. Category Filter
        switch (selectedCategory) {
            case "Innovation Projects":
                return projects.filter((p) => isInnovation(p))
            case "Industry Projects":
                return projects.filter((p) => isIndustry(p))
            case "Founding Projects":
                return projects.filter((p) => isFounding(p) && !p.companyFormed)
            case "Yeti Companies":
                return projects.filter((p) => p.companyFormed)
            case "Golden Frame":
                return projects.filter((p) => p.goldenFrame)
            default:
                return projects
        }
    }, [projects, selectedCategory, searchQuery])

    // --- Pagination Logic ---
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
    const paginatedProjects = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE
        return filteredProjects.slice(start, start + ITEMS_PER_PAGE)
    }, [filteredProjects, currentPage])

    const handleCategoryClick = (cat: string) => {
        setSelectedCategory(cat)
        setSearchQuery("") // Clear search when switching tabs
    }

    return (
        <div className="font-sans min-h-screen bg-neutral-50 text-neutral-900">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">

                {/* 1. Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/ProjectPage.jpg"
                        alt="YETI Teamwork"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                </div>

                {/* 2. Hero Content */}
                <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20 pb-20">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold md:text-7xl mb-6 tracking-tight text-white drop-shadow-lg">
                            Projects
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed mb-12 max-w-2xl font-light">
                            At YETI, we believe in learning by doing. Our projects are the heart of our program,
                            where students turn ambitious ideas into real-world impact.
                        </p>
                    </div>

                    {/* 3. Value Props Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {/* Innovation */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Innovation Projects</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                At the beginning of the program, you will work on a specific problem area. This will lead to your first prototype and make you learn design thinking practically.
                            </p>
                        </div>

                        {/* Industry */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Industry Projects</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                In the second semester, you will work with a real industry partner to solve a specific problem using design thinking.
                            </p>
                        </div>

                        {/* Golden Frame */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M2 9c1.5 0 2.5-1 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M22 15c-1.5 0-2.5 1-2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Golden Frame</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                The golden frame is given to all projects that result out of Yetis when they are part of the program and make €10k+ in revenue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Metrics Bar --- */}
            <section className="border-b border-neutral-200 bg-white sticky top-0 z-20 shadow-sm transition-all">
                {/* Stats (Hidden on mobile) */}
                <div className="hidden md:block border-b border-neutral-100">
                    <div className="container mx-auto px-6 md:px-12 py-6">
                        <div className="grid grid-cols-5 gap-4 divide-x divide-neutral-100">
                            <MetricItem label="Innovation" value={metrics.innovationCount} />
                            <MetricItem label="Industry" value={metrics.industryCount} />
                            <MetricItem label="Founding" value={metrics.foundingCount} />
                            <MetricItem label="Yeti Companies" value={metrics.yetiCompaniesCount} />
                            <MetricItem label="Golden Frame" value={metrics.goldenFrameCount} isLast />
                        </div>
                    </div>
                </div>

                {/* Filter Tabs & Search */}
                <div className="container mx-auto px-4 md:px-12 py-4">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">

                        {/* Tabs */}
                        <div className="overflow-x-auto no-scrollbar w-full lg:w-auto">
                            <div className="flex min-w-max bg-neutral-100 p-1.5 rounded-full border border-neutral-200">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        // Disable tab highlighting if searching, or keep it but it might be confusing
                                        // Better: If searching, show all tabs as inactive or just indicate search mode
                                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${!searchQuery && selectedCategory === cat
                                            ? "bg-white text-black shadow-md transform scale-105"
                                            : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full lg:w-72 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-neutral-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-neutral-200 rounded-full leading-5 bg-neutral-50 placeholder-neutral-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all sm:text-sm"
                                placeholder="Search projects, people..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg className="h-4 w-4 text-neutral-400 hover:text-red-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Projects Grid --- */}
            <Section className="bg-neutral-50 min-h-[800px] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Search Results Info */}
                    {searchQuery && (
                        <div className="mb-8 text-center">
                            <h2 className="text-2xl font-bold text-neutral-900">
                                Search Results for &quot;{searchQuery}&quot;
                            </h2>
                            <p className="text-neutral-500 mt-1">
                                Found {filteredProjects.length} projects across all categories
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedProjects.map((project, index) => (
                            <ProjectCard
                                key={`${project.title}-${index}`}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>

                    {/* Empty State */}
                    {paginatedProjects.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-32 text-neutral-400">
                            <div className="text-5xl mb-4">🔍</div>
                            <p className="text-xl font-medium">No projects found.</p>
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="mt-4 px-4 py-2 text-sm text-blue-600 font-medium hover:underline"
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    )}

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50 hover:border-neutral-300 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>

                            <span className="text-sm font-medium text-neutral-500">
                                Page <span className="text-neutral-900 font-bold">{currentPage}</span> of {totalPages}
                            </span>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50 hover:border-neutral-300 transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                    )}
                </div>
            </Section>

            <section className="max-w-4xl mx-auto pb-24 pt-8 md:-mt-16 text-center px-4">
                <div className="inline-block mb-6">
                    <span className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm uppercase tracking-wider">
                        More to come!
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    More projects are on the way
                </h2>
                <p className="text-neutral-600 text-lg mb-6">
                    Check back soon to see what our amazing community has built.
                </p>
            </section>

            {/* --- Detail Modal --- */}
            {selectedProject && (
                <DetailModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}

// --- Helper Functions ---

function isInnovation(p: Project) {
    return (p.projectType || "").toLowerCase().includes("innovation")
}
function isIndustry(p: Project) {
    return (p.projectType || "").toLowerCase().includes("industry")
}
function isFounding(p: Project) {
    return (p.projectType || "").toLowerCase().includes("founding")
}

// --- Sub-Components ---

function MetricItem({ label, value }: { label: string; value: number, isLast?: boolean }) {
    return (
        <div className={`flex flex-col items-center justify-center px-4`}>
            <span className="text-3xl font-bold text-neutral-900">{value}</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mt-1 text-center">{label}</span>
        </div>
    )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    const isIndustry = isIndustryProject(project)
    const isGolden = project.goldenFrame

    let overviewTitle = `${project.projectType} Overview`
    if (project.companyFormed) {
        overviewTitle = "Founding Project Overview"
    }

    const thumbnail = project.teamPhotos.length > 0 ? processImageUrl(project.teamPhotos[0]) : null
    const logoUrl = project.logo ? processImageUrl(project.logo) : null
    const partnerLogo = project.industryPartnerLogo ? processImageUrl(project.industryPartnerLogo) : null

    return (
        <div
            onClick={onClick}
            className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer border border-neutral-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full
        ${isGolden ? "ring-1 ring-yellow-400 shadow-yellow-100" : ""}
      `}
        >
            <div className="p-5 flex items-start gap-4 border-b border-neutral-50 min-h-[100px]">
                <div className="relative w-12 h-12 bg-neutral-50 rounded-full border border-neutral-100 flex-shrink-0 overflow-hidden p-1 mt-1">
                    {logoUrl ? (
                        <Image src={logoUrl} alt="Logo" fill className="object-contain p-1" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-neutral-100 text-lg">🚀</div>
                    )}
                </div>

                <div className="flex-grow pt-1">
                    <h3 className="font-bold text-lg text-neutral-900 leading-tight line-clamp-2" title={project.title}>
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                        {project.city && (
                            <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="text-[10px] font-medium text-neutral-500">{project.city}</span>
                            </div>
                        )}
                        {project.active && (
                            <div className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide">Active</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                {thumbnail ? (
                    <Image
                        src={thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-neutral-300">
                        <span className="text-4xl">💡</span>
                    </div>
                )}

                {isGolden && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm z-10 shadow-black/10">
                        GOLDEN FRAME
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-3 tracking-wide border-b border-blue-100 pb-2 inline-block self-start">
                    {overviewTitle}
                </h4>

                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {project.summary}
                </p>

                <div className="mt-auto pt-4 border-t border-neutral-100 space-y-3">
                    {isIndustry && project.industryPartner && (
                        <div className="flex items-center justify-between bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                            <span className="text-[10px] font-bold text-neutral-500 uppercase">Partner</span>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-neutral-900">{project.industryPartner}</span>
                                {partnerLogo && (
                                    <div className="relative w-6 h-6">
                                        <Image src={partnerLogo} alt="Partner" fill className="object-contain" />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {project.teamMembers.length > 0 && (
                        <div className="text-xs text-neutral-500 truncate">
                            <span className="font-semibold text-neutral-700">Team:</span> {project.teamMembers.join(", ")}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function DetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const [activeImgIndex, setActiveImgIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => { setIsLoaded(true) }, [])

    const galleryImages = project.teamPhotos.map((url) => processImageUrl(url))
    const logoUrl = project.logo ? processImageUrl(project.logo) : null
    const partnerLogo = project.industryPartnerLogo ? processImageUrl(project.industryPartnerLogo) : null
    const isIndustry = isIndustryProject(project)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => { document.body.style.overflow = "unset" }
    }, [])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className={`bg-white w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all duration-500 ease-out ${isLoaded ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-[45%] bg-neutral-100 flex flex-col relative min-h-[250px] md:min-h-full group">
                    <div className="relative h-full w-full bg-neutral-200">
                        {galleryImages.length > 0 ? (
                            <Image
                                src={galleryImages[activeImgIndex]}
                                alt="Project Visual"
                                fill
                                className="object-contain"
                                priority
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-neutral-400 flex-col gap-2">
                                <span className="text-4xl">📷</span>
                                <span className="text-sm">No Images</span>
                            </div>
                        )}

                        {logoUrl && (
                            <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-xl shadow-lg p-2 z-10 hidden md:block transition-transform duration-300 hover:scale-105">
                                <div className="relative w-full h-full">
                                    <Image src={logoUrl} alt="Logo" fill className="object-contain" />
                                </div>
                            </div>
                        )}
                    </div>

                    {galleryImages.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4 z-20">
                            <div className="flex gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-full max-w-full overflow-x-auto no-scrollbar">
                                {galleryImages.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImgIndex(idx)}
                                        className={`relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 transition-all ${idx === activeImgIndex ? "border-white scale-110 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                                            }`}
                                    >
                                        <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-full md:w-[55%] bg-white flex flex-col flex-1 md:flex-none md:h-full overflow-hidden min-h-0">
                    <div className="flex-grow overflow-y-auto custom-scrollbar p-6 md:p-8">
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-3">
                                <div className={`flex flex-wrap gap-2 transition-all duration-500 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                                    <Badge color={project.companyFormed ? "purple" : "blue"}>
                                        {project.companyFormed ? "Start-up Company" : project.projectType}
                                    </Badge>
                                    {project.goldenFrame && <Badge color="yellow">Golden Frame</Badge>}
                                </div>

                                <h2 className={`text-2xl md:text-3xl font-bold text-neutral-900 leading-tight transition-all duration-500 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                                    {project.title}
                                </h2>

                                {(project.city || project.year) && (
                                    <div className={`flex flex-wrap gap-3 text-sm text-neutral-600 transition-all duration-500 delay-250 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                                        {project.city && (
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span className="font-medium">{project.city}</span>
                                            </div>
                                        )}
                                        {project.year && (
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                <span className="font-medium">{project.year}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 -mt-2 bg-white hover:bg-neutral-100 rounded-full text-neutral-400 hover:text-black transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className={`space-y-6 transition-all duration-500 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <div>
                                <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    About the Project
                                    <span className="h-[1px] bg-neutral-100 flex-grow"></span>
                                </h3>
                                <p className="text-neutral-600 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                                    {project.summary}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {project.teamMembers.length > 0 && (
                                    <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                                        <h4 className="text-[10px] font-bold text-neutral-400 uppercase mb-2">Team Members</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.teamMembers.map((m, i) => (
                                                <span key={i} className="bg-white px-2 py-1 rounded shadow-sm border border-neutral-100 text-xs md:text-sm text-neutral-700 font-medium">
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {project.industryPartner && (
                                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-center justify-between">
                                        <div>
                                            <h4 className="text-[10px] font-bold text-blue-400 uppercase mb-1">
                                                {isIndustry ? "Industry Partner" : "Collaborator"}
                                            </h4>
                                            <span className="font-bold text-blue-900 text-sm md:text-base">{project.industryPartner}</span>
                                        </div>
                                        {partnerLogo && (
                                            <div className="relative w-10 h-10 bg-white rounded-lg p-1 shadow-sm">
                                                <Image src={partnerLogo} alt="Partner" fill className="object-contain" />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {project.revenue && (
                                    <div className="bg-green-50/50 p-4 rounded-xl border border-green-100 flex items-center gap-3">
                                        <div className="p-2 bg-green-100 rounded-full text-green-600">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-bold text-green-600 uppercase">Revenue Generated</h4>
                                            <span className="font-bold text-green-800">€{project.revenue}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {(project.website || project.linkedin || project.instagram) && (
                        <div className={`p-6 border-t border-neutral-100 bg-white z-10 transition-all duration-500 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {project.website && <SocialBtn href={project.website} label="Website" icon="globe" />}
                                {project.linkedin && <SocialBtn href={project.linkedin} label="LinkedIn" icon="linkedin" />}
                                {project.instagram && <SocialBtn href={project.instagram} label="Instagram" icon="instagram" />}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function Badge({ children, color }: { children: React.ReactNode, color: "blue" | "purple" | "yellow" | "green" }) {
    const styles = {
        blue: "bg-blue-100 text-blue-800 border-blue-200",
        purple: "bg-purple-100 text-purple-800 border-purple-200",
        yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
        green: "bg-green-100 text-green-800 border-green-200"
    }
    return (
        <span className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide border ${styles[color]}`}>
            {children}
        </span>
    )
}

function SocialBtn({ href, label }: { href: string; label: string; icon: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full text-xs font-bold text-neutral-700 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm hover:shadow-md"
        >
            <span>{label}</span>
        </a>
    )
}

function isIndustryProject(p: Project) {
    return (p.projectType || "").toLowerCase().includes("industry")
}