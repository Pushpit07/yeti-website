import { Section } from "@/components/Section"
import Image from "next/image"

export const dynamic = "force-static"

export const metadata = {
  title: "Projects | YETI",
  description: "Discover successful projects from YETI participants across different semesters - from innovation to industry and start-up projects",
}

const projects = [
  {
    semester: "1st Semester",
    type: "Innovation Project",
    name: "Once",
    description: "A digital pen enabling remote hospital workers to transfer handwritten notes into digital systems. The team won the 5th YETI DemoDay with this innovative solution that bridges the gap between traditional paper-based workflows and modern digital healthcare systems.",
    images: [
      "/projects/once-1.jpg",
      "/projects/once-2.jpg",
      "/projects/once-3.jpg",
      "/projects/once-4.jpg",
    ],
  },
  {
    semester: "2nd Semester",
    type: "Industry Project",
    name: "FootSense",
    description: "A smart-shoe prototype using flexible pressure sensors for lower-limb paralysis rehabilitation. The project secured 2nd place at Demo Day with positive physiotherapist feedback, demonstrating the potential for technology-enabled physical therapy solutions.",
    images: [
      "/projects/footsense-1.jpg",
      "/projects/footsense-2.jpg",
      "/projects/footsense-3.jpg",
      "/projects/footsense-4.jpg",
    ],
  },
  {
    semester: "3rd Semester",
    type: "Start-up Project",
    name: "COBACK",
    description: "An educational platform helping SMEs create sustainability reports. The project demonstrates YETI&apos;s business development support through investor presentations and networking, showcasing how students can develop market-ready solutions.",
    images: [
      "/projects/coback-1.jpg",
      "/projects/coback-2.jpg",
      "/projects/coback-3.jpg",
      "/projects/coback-4.jpg",
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6">Projects</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Every semester we carry out projects within YETI. Here we would like to show you one successful project from each semester so that you can better understand how we work at YETI.
          </p>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, index) => (
        <Section key={project.name} className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
          <div className="max-w-6xl mx-auto">
            {/* Project Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">
                  {project.semester}
                </span>
                <span className="text-muted-foreground text-sm font-medium">
                  {project.type}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {project.name}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
                {project.description}
              </p>
            </div>

            {/* Project Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative aspect-video bg-neutral-200 rounded-2xl overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${project.name} - Image ${imgIndex + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Want to work on your own project?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join YETI and turn your ideas into reality with mentorship, resources, and a community of fellow entrepreneurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/application/dresden"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-full transition-colors gap-2"
              >
                Apply for Dresden
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="/application/leipzig"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors gap-2"
              >
                Apply for Leipzig
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
