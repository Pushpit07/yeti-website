"use client"

import { getBlogData } from "@/lib/sheets"
import BlogList from "./BlogList"
import { useSheetData } from "@/hooks/useSheetData"

export default function BlogPage() {
  const { data: blogs, isLoading } = useSheetData("blog", getBlogData)

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return <BlogList blogs={blogs} />
}
