"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./Button"

export function PastProjectsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl md:text-2xl text-neutral-800 leading-[1.4] mb-8">
                If you are interested in what is presented at a DemoDay you can have a look here and see something about past projects and their pitches.
              </p>
              <Button
                href="/projects"
                variant="rounded-full"
                className="bg-black! text-white hover:bg-primary! hover:text-white hover:scale-105 text-lg px-8 py-4 transition-all duration-300"
              >
                Past Projects
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
                  className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
                  style={{ display: "inline", verticalAlign: "middle" }}
                  aria-hidden="true"
                >
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Button>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="/demo-day-audience.jpg"
                alt="DemoDay audience in lecture hall"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
