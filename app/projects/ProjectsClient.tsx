"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import type { Project } from "@/lib/sheets"
import { Section } from "@/components/Section"
import { convertGoogleDriveLink } from "@/lib/utils"

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

export function ProjectsClient({ projects }: ProjectsClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Innovation Projects")
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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

    // --- Filtering Logic ---
    const filteredProjects = useMemo(() => {
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
    }, [projects, selectedCategory])

    return (
        <div className="font-sans min-h-screen bg-neutral-50 text-neutral-900">

            {/* --- HERO SECTION (Redesigned) --- */}
            <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">

                {/* 1. Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* You can replace this src with a local image like '/images/hero.jpg' */}
                    <Image
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                        alt="YETI Teamwork"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent" />
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

                    {/* 3. Value Props Grid (Why YETI?) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {/* Feature 1 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Real-World Stakes</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Textbooks explain history; projects create the future. Move beyond case studies and face the unpredictability of real markets.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Radical Collaboration</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Silos don't exist here. Engineers, designers, and business minds work together to solve complex problems from day one.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Ownership & Impact</h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                You don't just "learn" — you build. Whether it's a prototype or a start-up, you own the outcome and the success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Metrics Bar --- */}
            <section className="border-b border-neutral-200 bg-white sticky top-0 z-20 shadow-sm transition-all">
                {/* Top Row: Stats (Hidden on mobile for cleaner look) */}
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

                {/* Bottom Row: Filter Tabs */}
                <div className="container mx-auto px-4 md:px-12 py-4 overflow-x-auto no-scrollbar">
                    <div className="flex md:justify-center min-w-max">
                        <div className="inline-flex bg-neutral-100 p-1.5 rounded-full border border-neutral-200">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat
                                        ? "bg-white text-black shadow-md transform scale-105"
                                        : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200/50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Projects Grid --- */}
            <Section className="bg-neutral-50 min-h-[800px] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-32 text-neutral-400">
                            <div className="text-5xl mb-4">🔍</div>
                            <p className="text-xl font-medium">No projects found in this category yet.</p>
                        </div>
                    )}
                </div>
            </Section>

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

function MetricItem({ label, value, isLast }: { label: string; value: number, isLast?: boolean }) {
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

    const thumbnail = project.teamPhotos.length > 0 ? convertGoogleDriveLink(project.teamPhotos[0]) : null
    const logoUrl = project.logo ? convertGoogleDriveLink(project.logo) : null
    const partnerLogo = project.industryPartnerLogo ? convertGoogleDriveLink(project.industryPartnerLogo) : null

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
                    {project.active && (
                        <div className="flex items-center gap-1 mt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide">Active</span>
                        </div>
                    )}
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

    const galleryImages = project.teamPhotos.map((url) => convertGoogleDriveLink(url))
    const logoUrl = project.logo ? convertGoogleDriveLink(project.logo) : null
    const partnerLogo = project.industryPartnerLogo ? convertGoogleDriveLink(project.industryPartnerLogo) : null
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
                className={`bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all duration-500 ease-out ${isLoaded ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full md:w-[45%] bg-neutral-100 flex flex-col relative min-h-[250px] md:min-h-full group">
                    <div className="relative h-full w-full bg-neutral-200">
                        {galleryImages.length > 0 ? (
                            <Image
                                src={galleryImages[activeImgIndex]}
                                alt="Project Visual"
                                fill
                                className="object-cover"
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

                <div className="w-full md:w-[55%] bg-white flex flex-col h-full overflow-hidden">
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

function SocialBtn({ href, label, icon }: { href: string; label: string; icon: string }) {
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