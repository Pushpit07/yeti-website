"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { BlogContentClient } from "@/components/BlogContentClient"
import { convertGoogleDriveLink } from "@/lib/utils"
import type { Blog } from "@/lib/sheets"

// --- 🤖 AUTOMATED READING TIME LOGIC ---
function calculateReadingTime(text: string): string {
    if (!text) return "1 min read"

    // 1. Average Reading Speed (Words Per Minute)
    // 225 is the standard used by Medium and other blogs.
    const wordsPerMinute = 225

    // 2. Clean the text
    // We strip out common Markdown symbols (#, *, links) so we only count actual words.
    const cleanText = text
        .replace(/[#*\[\]\(\)]/g, "") // Remove Markdown syntax
        .replace(/https?:\/\/\S+/g, "") // Remove long URLs

    // 3. Count words by splitting by spaces
    const wordCount = cleanText.trim().split(/\s+/).length

    // 4. Calculate time
    const minutes = Math.ceil(wordCount / wordsPerMinute)

    return `${minutes} min read`
}

function SingleBlogCard({ blog }: { blog: Blog }) {
    const [isOpen, setIsOpen] = useState(false)

    const validatedImageLink = blog.imageLink
        ? convertGoogleDriveLink(blog.imageLink)
        : null

    // ✅ Automate the calculation here
    const readTime = calculateReadingTime(blog.markdownContent || "")

    return (
        <motion.div
            layout="position"
            className={`group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${isOpen
                    ? "border-neutral-300 shadow-xl ring-1 ring-neutral-200 my-8"
                    : "border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 my-4"
                }`}
        >
            {/* --- CLICKABLE HEADER --- */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer select-none"
            >
                <div className="flex flex-col md:flex-row md:items-stretch">

                    {/* IMAGE SECTION */}
                    <div className="relative h-56 w-full md:h-auto md:w-[320px] shrink-0 bg-neutral-100 overflow-hidden">
                        {validatedImageLink ? (
                            <Image
                                src={validatedImageLink}
                                alt={blog.heading || "Blog Image"}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 320px"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center bg-neutral-50 text-neutral-300">
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        )}

                        <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`} />
                    </div>

                    {/* CONTENT PREVIEW SECTION */}
                    <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                        {/* Meta Info */}
                        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                            <span className="text-primary">{blog.author}</span>
                            <span className="text-neutral-300">•</span>

                            {/* ✅ Display the Automated Time */}
                            <span>{readTime}</span>
                        </div>

                        <h3 className={`text-xl md:text-2xl font-bold leading-snug transition-colors duration-200 ${isOpen ? "text-primary" : "text-neutral-900 group-hover:text-primary"
                            }`}>
                            {blog.heading}
                        </h3>

                        <div className={`mt-4 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${isOpen ? "opacity-0 h-0 overflow-hidden mt-0" : "opacity-100 text-neutral-400 group-hover:text-neutral-800"
                            }`}>
                            <span>Read article</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- EXPANDED CONTENT (ANIMATED) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="border-t border-neutral-100 bg-neutral-50/50 p-6 md:p-12">
                            <div className="prose prose-neutral prose-lg max-w-none mx-auto">
                                <BlogContentClient markdownContent={blog.markdownContent} />
                            </div>

                            {/* CLOSE BUTTON */}
                            <div className="mt-12 flex justify-center pt-8 border-t border-neutral-200/60">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setIsOpen(false)
                                    }}
                                    className="group/btn flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all text-sm font-bold text-neutral-800"
                                >
                                    <span>Close Article</span>
                                    <svg className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">

            {/* --- DARK HERO BANNER --- */}
            <section className="relative w-full bg-[#111] pt-32 pb-20 md:pt-40 md:pb-24 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest text-white bg-white/10 rounded-full uppercase border border-white/10 backdrop-blur-md">
                            The Journal
                        </span>

                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                            Insights <span className="text-neutral-500">&</span> Stories
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            Deep dives, updates, and thoughts from the YETI team. <br className="hidden md:block" />
                            Explore the ideas shaping our community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- BLOG FEED --- */}
            <section className="-mt-12 relative z-20 pb-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {blogs && blogs.length > 0 ? (
                        <div className="flex flex-col gap-2">
                            {blogs.map((blog, i) => (
                                <SingleBlogCard key={blog.heading + i} blog={blog} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-neutral-200 shadow-sm">
                            <h3 className="text-xl font-bold text-neutral-900">No stories yet</h3>
                            <p className="text-neutral-500 mt-2">Check back soon.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}