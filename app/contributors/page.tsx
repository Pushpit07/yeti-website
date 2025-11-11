"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export const dynamic = "force-static"

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

function ContributorCard({ contributor, index }: { contributor: Contributor; index: number }) {
  return (
    <motion.div
      className="relative bg-black rounded-3xl overflow-hidden border-4 border-black group hover:border-primary/30 transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ scale: 1.02 }}
    >
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
        <h3 className="text-xl md:text-xl font-bold mb-3">
          {contributor.name}
        </h3>

        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Title */}
          <p className="text-sm md:text-sm text-start self-start text-white/80 leading-relaxed col-span-9">
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
    </motion.div>
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
          <motion.h1
            className="text-5xl font-bold md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            YETI Contributors
          </motion.h1>
          <motion.p
            className="max-w-3xl text-xl md:text-[19px] text-white/90 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            The YETI network is structured much like a startup itself, with dedicated leaders, teams, and mentors working together to create an exceptional entrepreneurial ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Structure Section */}
      <section className="bg-neutral-50 text-black py-16 md:py-24">
        <div className="container mx-auto px-8 md:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              How YETI Works
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-4xl mx-auto">
              Our organizational structure brings together leadership, internal teams, and external expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Leadership Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Leadership</h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  At the core are the <strong className="text-black">OberYetis (OYs)</strong>, who act as program directors. They are responsible for planning the program’s activities and overseeing the work of the internal teams.
                </p>
                <p>
                For strategic guidance and governance, the <strong className="text-black">YETI Board</strong> brings together entrepreneurial and academic expertise, acting as an advisory body and helping shape the long-term direction.
                </p>
              </div>
            </motion.div>

            {/* Internal Teams Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Internal Teams</h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Every YETI is also an active contributor within <strong className="text-black">internal teams</strong>. Each team focuses on a specific area such as IT, Events, Networking or Social Media.
                </p>
                <p>
                  Teams are led by <strong className="text-black">Team Leads</strong>, who gain hands-on leadership experience while being supported by <strong className="text-black">Semester Leads</strong>. Both Team Leads and Semester Leads are active YETIs, supervised by the OYs to ensure coordination across the program.
                </p>
              </div>
            </motion.div>

            {/* External Network Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">External Network</h3>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Beyond the internal structure, YETI connects participants with a broad network of <strong className="text-black">entrepreneurs and experts</strong>. They host <strong className="text-black">workshops</strong> and join us for <strong className="text-black">Fireside Chats</strong>, where they share their entrepreneurial experiences.
                </p>
                <p>
                  Many of them also serve as <strong className="text-black">mentors</strong>, and every YETI is matched with a mentor from this network, ensuring direct and personal guidance throughout the program.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OberYetis Section */}
      <section className="bg-white text-black py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                Our OberYetis
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Our program directors who lead and coordinate the YETI community
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oberYetis.map((contributor, index) => (
                <ContributorCard key={contributor.name} contributor={contributor} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="bg-white text-black py-16 md:py-20 md:pb-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-6xl font-bold mb-4">
                Our Board Members
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                Experienced entrepreneurs and academics providing strategic guidance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((contributor, index) => (
                <ContributorCard key={contributor.name} contributor={contributor} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
