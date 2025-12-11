"use client"

import { getProjectsData } from "@/lib/sheets"
import { ProjectsClient } from "./ProjectsClient"
import { useSheetData } from "@/hooks/useSheetData"

export default function ProjectsPage() {
  const { data: projects, isLoading } = useSheetData(getProjectsData)

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return <ProjectsClient projects={projects} />
}

