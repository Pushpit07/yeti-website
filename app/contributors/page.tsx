import Image from "next/image"

export const dynamic = "force-static"

export const metadata = {
  title: "Contributors | YETI",
  description: "Meet the people who make YETI possible - our leadership team, board members, and mentors",
}

type Contributor = {
  name: string
  title: string
  image?: string
  linkedin?: string
}

// OberYetis - Program Directors/Leadership
const oberYetis: Contributor[] = [
  {
    name: "Thomas Kirchner",
    title: "YETI Founder, Co-Founder PROGLOVE",
    image: "/contributors/thomas-kirchner.png",
    linkedin: "https://www.linkedin.com/in/thomas-kirchner-353071a0",
  },
  {
    name: "Sandra Hübener",
    title: "YETI-Management, Start-Up Expert",
    image: "/contributors/sandra.png",
    linkedin: "https://www.linkedin.com/in/sandra-oberyeti",
  },
  {
    name: "Marco Rösler",
    title: "YETI-Dresden, Dresden Exists, Startup Expert",
    image: "/contributors/marco.jpg",
    linkedin: "https://www.linkedin.com/in/marco-r%C3%B6sler-068b62144",
  },
  {
    name: "Felix Hagleitner",
    title: "YETI-Leipzig Program Manager, boOst Startup Ecosystem, Program Manager UnternehmerTUM",
    image: "/contributors/felix-hagleitner.jpg",
    linkedin: "https://www.linkedin.com/in/felix-hagleitner",
  },
  {
    name: "Aboud Mouakket",
    title: "YETI-Dresden G4 Member, YETI-Leipzig Program Manager",
    image: "/contributors/aboud.jpg",
    linkedin: "https://www.linkedin.com/in/aboudmouakket",
  },
  {
    name: "Charlie Weise",
    title: "YETI-Dresden G1 Member, YETI Dresden Program Manager",
    image: "/contributors/charlie-weise.jpg",
    linkedin: "https://www.linkedin.com/in/charlie-weise-9b5b75256",
  }
]

// Board Members
const boardMembers: Contributor[] = [
  {
    name: "Stefan Fraedrich",
    title: "Founder of avanjo GmbH",
    image: "/contributors/stefan.jpg",
    linkedin: "https://www.linkedin.com/in/stefan-fraedrich-349b6ab9/?originalSubdomain=de",
  },
  {
    name: "Christian von Olshausen",
    title: "CTO at Sunfire AG",
    image: "/contributors/christian.jpg",
    linkedin: "https://www.linkedin.com/in/christian-olshausen-84a20b10a/?originalSubdomain=de",
  },
  {
    name: "Prof. Samanthi Dijkstra-Silva",
    title: "TU Dresden",
    image: "/contributors/samanthi.jpg",
    linkedin: "https://www.linkedin.com/in/samanthi-dijkstra-silva/",
  },
  {
    name: "Prof. Marius Brade",
    title: "FH Dresden",
    image: "/contributors/marius.jpg",
    linkedin: "https://www.linkedin.com/in/marius-brade/",
  },
  {
    name: "Prof. Jens Krzywinski",
    title: "TU Dresden",
    image: "/contributors/jens.jpg",
    linkedin: "https://www.linkedin.com/in/jens-krzywinski-28a747190/?originalSubdomain=de",
  },
  {
    name: "Prof. Ingo Cassack",
    title: "Hochschule Zittau/Görlitz",
    image: "/contributors/ingo.jpg",
    linkedin: "https://www.linkedin.com/in/ingocassack/?originalSubdomain=de",
  },
  {
    name: "Prof. Bernd Schulz",
    title: "Hochschule München (HM)",
    image: "/contributors/bernd.jpg",
    linkedin: "https://www.linkedin.com/in/bernd-prof-dr-ing-schulz-3a36a1293",
  },
  {
    name: "Prof. Torsten Gonschorek",
    title: "HTW Dresden",
    image: "/contributors/torsten.jpg",
    linkedin: "https://www.linkedin.com/in/torsten-gonschorek-332aa4264",
  },
  {
    name: "Prof. Michael Schefczyk",
    title: "TU Dresden",
    image: "/contributors/michael.jpg",
    linkedin: "https://www.linkedin.com/in/michael-schefczyk-958349102",
  },
  {
    name: "Manuel Bönisch",
    title: "Co-Founder PROGLOVE, OMA Business Angel",
    image: "/contributors/manuel.jpg",
    linkedin: "https://www.linkedin.com/in/manuelproglove",
  },
  {
    name: "Paul Günther",
    title: "Co-Founder at PROGLOVE & Omegga, OMA Business Angel",
    image: "/contributors/paul.jpg",
    linkedin: "https://www.linkedin.com/in/paul-g%C3%BCnther-a2491976",
  },
  {
    name: "Alexander Grots",
    title: "Co-Founder EWOR, OMA Business Angel",
    image: "/contributors/alexander.jpg",
    linkedin: "https://www.linkedin.com/in/alexander-grots-69965211",
  }
]

function ContributorCard({ contributor }: { contributor: Contributor }) {
  return (
    <div className="relative bg-black rounded-3xl overflow-hidden border-4 border-black group hover:border-primary/30 transition-all">
      {/* Profile Image */}
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-800">
        {contributor.image ? (
          <Image
            src={contributor.image}
            alt={contributor.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary text-white text-6xl md:text-7xl font-bold">
            {contributor.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="relative p-6 pb-8 bg-black text-white">
        {/* Name */}
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          {contributor.name}
        </h3>

        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Title */}
          <p className="text-sm md:text-sm text-white/80 leading-relaxed col-span-9">
            {contributor.title}
          </p>

          {/* LinkedIn Link */}
          {contributor.linkedin && (
            <div className="flex justify-end self-start col-span-3">
              <a
                href={contributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#0A66C2] hover:bg-[#004182] transition-colors"
                aria-label={`${contributor.name} on LinkedIn`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default function ContributorsPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
        {/* Blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6">
            YETI Contributors
          </h1>
          <div className="max-w-4xl text-lg md:text-xl text-white/85 space-y-6 leading-relaxed">
            <p>
              The YETI network is structured much like a startup itself.<br/><br/>At the core are the <strong className="text-primary">OberYetis (OYs)</strong>, who act as the program directors. They are responsible for planning the program&apos;s activities and overseeing the work of the internal teams.<br/><br/>For strategic guidance and governance, the <strong className="text-primary">YETI Board</strong> brings together entrepreneurial and academic expertise, acting as an advisory body and helping shape the long-term direction.
            </p>
            <p>
              Every YETI is also an active contributor within internal teams. Each team focuses on a specific area such as IT, Events, Networking or Social Media. Teams are led by <strong className="text-primary">Team Leads</strong>, who gain hands-on leadership experience while being supported by <strong className="text-primary">Semester Leads</strong>. Both Team Leads & Semester Leads are active YETIs, supervised by the OYs to ensure program coordination.
            </p>
            <p>
              Beyond the internal structure, YETI connects participants with a broad network of <strong className="text-primary">entrepreneurs and experts</strong>. They host workshops and join us for Fireside Chats, where they share their entrepreneurial experiences. Many of them also serve as <strong className="text-primary">mentors</strong>, and every YETI is matched with a mentor from this network, ensuring direct and personal guidance throughout the program.
            </p>
          </div>
        </div>
      </section>

      {/* OberYetis Section */}
      <section className="bg-white text-black py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                Our OberYetis
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Our program directors who lead and coordinate the YETI community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oberYetis.map((contributor) => (
                <ContributorCard key={contributor.name} contributor={contributor} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="bg-white text-black py-16 md:py-20 md:pb-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                Our Board Members
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Experienced entrepreneurs and academics providing strategic guidance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((contributor) => (
                <ContributorCard key={contributor.name} contributor={contributor} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
