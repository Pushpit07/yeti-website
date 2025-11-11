import { Section } from "@/components/Section"
import Image from "next/image"
import { DEMO_DAY } from "@/lib/constants"

export const dynamic = "force-static"

export const metadata = {
  title: "Projects | YETI",
  description: "Discover successful projects from YETI participants across different semesters - from innovation to industry and start-up projects",
}

type Project = {
  semester: string
  type: string
  name: string
  team?: string
  description: string | React.ReactNode
  note?: string
  links?: {
    website?: string
    linkedin?: string
  }
  images: string[]
}

const projects: Project[] = [
  {
    semester: "1st Semester",
    type: "Innovation Project",
    name: "Once",
    team: "Annabell, Jonathan, Jeremy and Anoy from Generation 5",
    description: <>The aim of the first semester project is to learn the process of design thinking on a given topic and with a newly assigned team.<br/><br/>The topic was: &apos;Wearables that enable Remote Work&apos;. Within the process, numerous interviews were conducted and evaluated extensively in order to develop a prototype from an initial idea, which was then finally presented at the DemoDay.<br/><br/>The idea called Once was a pen that makes it possible to digitally transfer analog written content from nurses into the respective hospital system. The team was able to convince the crowd at the event, even after critical questions, and emerged as the winner of the 5th YETI DemoDay.</>,
    note: `${DEMO_DAY.description} The next DemoDay is on ${DEMO_DAY.nextDate}.`,
    images: [
      "/projects/once/1.png",
      "/projects/once/2.png",
      "/projects/once/3.png",
      "/projects/once/4.png",
    ],
  },
  {
    semester: "2nd Semester",
    type: "Industry Project",
    name: "FootSense",
    description: <>The aim of the second semester project is to cement our Design Thinking skills and practice working with an industry &quot;board&quot; partner in a startup-style environment.<br/><br/>For this challenge, TU Dresden provided the team with a flexible pressure sensor whose original startup went bankrupt. The task was to identify and develop a promising healthcare application for this technology.<br/><br/>The team followed the classic Design Thinking process: conducting dozens of user interviews with doctors or patients, synthesizing key insights, ideating potential solutions, and rapidly building prototypes. Throughout, they ran regular workshops with TU Dresden to share progress and let them guide which opportunity area they pursued. The outcome of our project is a functional smart-shoe prototype designed to support individuals with lower-limb paralysis in relearning how to walk. The shoe tracks how you walk and provides real-time feedback to the user&apos;s shoulders.<br/><br/>The team secured 2nd place at Demo Day and received highly positive feedback, not only from TU Dresden, but also from physiotherapists. This is highlighting the potential for continued research and further development.</>,
    images: [
      "/projects/footsense/1.png",
      "/projects/footsense/2.png",
      "/projects/footsense/3.png",
      "/projects/footsense/4.png",
    ],
  },
  {
    semester: "3rd Semester",
    type: "Start-up Project",
    name: "COBACK",
    team: "Benjamin and Etienne",
    description: <>The third semester project offers students the opportunity to take their first steps towards founding a company. The knowledge acquired in the first two semesters forms a solid basis for becoming familiar with basic business processes.<br/><br/>Benjamin and Etienne, who had already developed a business idea in their innovation project, refocused it in the third semester. The name and the central theme of sustainability remained from the original idea. Through interviews, they identified a gap in the market: there is a lack of accessible services for creating sustainability reports.<br/><br/>The answer is COBACK: an educational platform that enables small and medium-sized enterprises (SMEs) to create their own sustainability reports. The special thing about it is that even employees with no prior knowledge of sustainability can be trained using the learning platform and simultaneously record the necessary data for the report.<br/><br/>The team behind COBACK has already benefited from the YETI network on several occasions. They have had the opportunity to present their idea to investors, take part in trade fairs and events and generally benefit from the broad network. This supportive environment is crucial for turning a promising idea into an actual company.</>,
    links: {
      website: "https://co-back.com",
      linkedin: "https://www.linkedin.com/company/co-back/",
    },
    images: [
      "/projects/coback/1.png",
      "/projects/coback/2.png",
      "/projects/coback/3.png",
      "/projects/coback/4.png",
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
            Every semester we carry out projects within YETI. Here we would like to show you <strong>one successful project</strong> from each semester so that you can better understand how we work at YETI.
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
              {project.team && (
                <p className="text-base md:text-lg text-muted-foreground mb-4 italic">
                  Team: {project.team}
                </p>
              )}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mb-6">
                {project.description}
              </p>
              {project.note && (
                <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 mt-6">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    {project.note}
                  </p>
                </div>
              )}
              {project.links && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full transition-colors"
                    >
                      Visit Website
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold rounded-full transition-colors"
                    >
                      LinkedIn
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
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
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="/application/leipzig"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-100 text-black font-bold rounded-full transition-colors gap-2"
              >
                Apply for Leipzig
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
