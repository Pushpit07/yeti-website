// app/projects/page.tsx
import { getProjectsData } from "@/lib/sheets"
import { ProjectsClient } from "./ProjectsClient"

// export const dynamic = "force-dynamic" // REMOVED: Incompatible with output: 'export'
// export const revalidate = 0 // REMOVED: Incompatible with output: 'export'
// Note: In static export mode, this data fetches ONCE at build time.
// To update data, you must rebuild the application.

export const metadata = {
  title: "Projects | YETI",
  description:
    "Discover successful projects from YETI participants across different semesters - from innovation to industry and start-up projects",
}

export default async function ProjectsPage() {
  const projects = await getProjectsData()
  return <ProjectsClient projects={projects} />
}
