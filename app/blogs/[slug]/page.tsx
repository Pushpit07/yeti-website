import { notFound } from "next/navigation"
import { getBlogData } from "@/lib/sheets"
import { BlogDetailContent } from "./BlogDetailContent"

export async function generateStaticParams() {
    const blogs = await getBlogData()
    return blogs.map((blog) => ({
        slug: blog.slug,
    }))
}

export const dynamic = "force-static"
export const revalidate = 60

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const blogs = await getBlogData()
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        return {
            title: "Blog Not Found | YETI",
        }
    }

    return {
        title: `${blog.heading} | YETI Blog`,
        description: `Read ${blog.heading} by ${blog.author} on YETI.`,
    }
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params
    const blogs = await getBlogData()
    const blog = blogs.find((b) => b.slug === slug)

    if (!blog) {
        notFound()
    }

    return <BlogDetailContent blog={blog} />
}
