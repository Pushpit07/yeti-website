"use client"

import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { convertGoogleDriveLink } from "@/lib/utils"
import type { Blog } from "@/lib/sheets"

function calculateReadingTime(text: string): string {
    if (!text) return "1 min read"
    const wordsPerMinute = 225
    const cleanText = text
        .replace(/[#*\[\]\(\)]/g, "")
        .replace(/https?:\/\/\S+/g, "")
    const wordCount = cleanText.trim().split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes} min read`
}

export function BlogDetailContent({ blog }: { blog: Blog }) {
    const validatedImageLink = blog.imageLink
        ? convertGoogleDriveLink(blog.imageLink)
        : null

    const readTime = calculateReadingTime(blog.markdownContent || "")

    return (
        <article className="min-h-screen bg-white font-sans text-neutral-900">
            {/* --- HEADER / BANNER SECTION --- */}
            <div className="relative w-full h-[60vh] md:h-[70vh] min-h-[600px] bg-neutral-900 overflow-hidden">
                {validatedImageLink ? (
                    <Image
                        src={validatedImageLink}
                        alt={blog.heading || "Blog Image"}
                        fill
                        priority
                        className="object-cover opacity-80"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black opacity-80" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-6 pb-12 z-10">
                    <Link
                        href="/blogs"
                        className="mb-8 inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to all stories
                    </Link>

                    <div className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/70 mb-4">
                        <span className="text-primary">{blog.author}</span>
                        <span>•</span>
                        <span>{readTime}</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl">
                        {blog.heading}
                    </h1>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="container mx-auto px-6 py-16 max-w-3xl">
                <div className="prose prose-lg md:prose-xl prose-neutral max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h2: ({ node, ...props }) => <h2 className="text-black font-bold mt-12 mb-6" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-black font-bold mt-8 mb-4" {...props} />,
                            ul: ({ node, ...props }) => <ul className="pl-5 list-disc my-6" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-6 leading-relaxed text-neutral-700" {...props} />,
                            a: ({ node, ...props }) => <a className="text-primary hover:underline font-medium" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary pl-4 italic my-8 text-neutral-600" {...props} />,
                            br: ({ node, ...props }) => <br {...props} />
                        }}
                    >
                        {blog.markdownContent.replace(/ {2}\n/g, '\n\n')}
                    </ReactMarkdown>
                </div>

                {/* --- BOTTOM NAV --- */}
                <div className="mt-16 pt-10 border-t border-neutral-200">
                    <Link
                        href="/blogs"
                        className="group inline-flex items-center gap-2 text-neutral-500 hover:text-black transition-colors font-medium"
                    >
                        <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        Back to all stories
                    </Link>
                </div>
            </div>
        </article>
    )
}
