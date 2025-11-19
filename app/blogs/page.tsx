// app/blogs/page.tsx

import { Section } from "@/components/Section"
import { getBlogData, type Blog } from "@/lib/sheets" 
import { convertGoogleDriveLink } from "@/lib/utils"
import Image from "next/image"
import { BlogContentClient } from "@/components/BlogContentClient"

// NOTE: headers is no longer needed since we removed the external fetch.
// We remove the import to keep the code clean.

export const revalidate = 60 

export const metadata = {
  title: "Blog | YETI",
  description: "Insights, news, and stories from the YETI community.",
}

// The main Blog Card component
function BlogCard({ blog }: { blog: Blog }) {
  const validatedImageLink = blog.imageLink ? convertGoogleDriveLink(blog.imageLink) : null;

  return (
    <article className="overflow-hidden rounded-2xl border-2 border-border bg-white shadow-lg transition-all hover:border-blue-400/50">
      
      {/* Conditional Image */}
      <div className="relative w-full h-64 bg-neutral-100">
        {validatedImageLink ? ( 
          <Image
            src={validatedImageLink}
            alt={blog.heading || "Blog Image"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-50 text-neutral-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Heading */}
        <h3 className="mb-1 text-3xl font-extrabold text-gray-900 leading-tight">
            {blog.heading}
        </h3> 
        
        {/* Author */}
        <p className="mb-6 text-right text-sm font-bold text-gray-500 uppercase tracking-wider">
            By {blog.author}
        </p>

        {/* PASSING THE CONTENT DIRECTLY. FIXES: Property 'markdownContent' does not exist on type 'Blog' */}
        <BlogContentClient markdownContent={blog.markdownContent} />
      </div>
    </article>
  )
}

export default async function BlogPage() {
  const blogs = await getBlogData() 

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative w-full h-[60vh]">
          <div className="absolute inset-0">
            <img
              src="/hq.jpg" 
              alt="YETI Blog"
              className="w-full h-full object-cover opacity-30"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 z-20 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              YETI Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl">
              Insights, news, and stories from the YETI community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Feed Section */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog, i) => <BlogCard key={blog.heading + i} blog={blog} />)) : (
            <div className="text-center text-muted-foreground">
              <h3 className="text-2xl font-bold">No posts yet</h3>
              <p className="text-lg">Check back soon for news and updates.</p>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}