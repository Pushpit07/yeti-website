import { Section } from "@/components/Section"
// CORRECTED IMPORT: We import the specific function and type
import { getBlogData, type Blog } from "@/lib/sheets"
import { convertGoogleDriveLink } from "@/lib/utils"
import Image from "next/image"

export const revalidate = 60 // Re-check for new sheet data every 60 seconds

export const metadata = {
  title: "Blog | YETI",
  description: "Insights, news, and stories from the YETI community.",
}

// A component to handle Google Sheet's newline formatting
function BlogContent({ content }: { content: string }) {
  // Check if the content has newline characters
  const isBulleted = content.includes("\n")

  if (isBulleted) {
    return (
      <ul className="list-disc space-y-2 pl-5 text-lg text-muted-foreground">
        {content
          .split("\n")
          .filter((line) => line.trim()) // Remove empty lines
          .map((line, i) => (
            <li key={i}>{line}</li>
          ))}
      </ul>
    )
  }

  // If no newlines, render as a single paragraph
  return <p className="text-lg text-muted-foreground">{content}</p>
}

// The main Blog Card component
function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="overflow-hidden rounded-2xl border-2 border-border bg-white shadow-lg transition-all hover:border-primary/50">
      {/* Conditional Image */}
      <div className="relative w-full h-64 bg-neutral-100">
        {blog.imageLink ? (
          <Image
            src={convertGoogleDriveLink(blog.imageLink)}
            alt={blog.author} // Using author as alt text
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-50 text-neutral-400">
            {/* Placeholder Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
              <circle cx="12" cy="13" r="3" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-4 text-2xl font-bold text-black">
          A post from {blog.author}
        </h3>
        <BlogContent content={blog.content} />
      </div>
    </article>
  )
}

// The main page component
export default async function BlogPage() {
  // CORRECTED DATA FETCHING: We call the imported function directly
  const blogs = await getBlogData()

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="relative w-full h-[60vh]">
          {/* You can replace this with a general blog hero image */}
          <div className="absolute inset-0">
            <img
              src="/hq.jpg" // Re-using hq.jpg, update this
              alt="YETI Blog"
              className="w-full h-full object-cover opacity-30"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.0) 60%)",
            }}
          />

          {/* Content */}
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
            blogs.map((blog, i) => <BlogCard key={blog.author + i} blog={blog} />)) : (
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