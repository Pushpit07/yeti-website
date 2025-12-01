// app/projects/page.tsx
import { getProjectsData } from "@/lib/sheets"
import { ProjectsClient } from "./ProjectsClient"

export const dynamic = "force-dynamic"
export const revalidate = 0

export const metadata = {
  title: "Projects | YETI",
  description:
    "Discover successful projects from YETI participants across different semesters - from innovation to industry and start-up projects",
}

export default async function ProjectsPage() {
  const projects = await getProjectsData()
  return <ProjectsClient projects={projects} />
}
