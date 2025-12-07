// app/blogs/page.tsx

import { getBlogData } from "@/lib/sheets"
import BlogList from "./BlogList" // Import from the file next to this one

export const revalidate = 60

export const metadata = {
  title: "Blog | YETI",
  description: "Insights, news, and stories from the YETI community.",
}

export default async function BlogPage() {
  // 1. Fetch data on the Server
  const blogs = await getBlogData()

  // 2. Pass data to the Client Component
  return <BlogList blogs={blogs} />
}