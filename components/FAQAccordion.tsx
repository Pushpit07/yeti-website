"use client"

import { useState } from "react"
import { FadeIn } from "./FadeIn"
import type { City } from "@/lib/constants"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQAccordionProps {
  city: City
  cityInfo: {
    name: string
    generation: number
    generationSuffix: string
    applicationEmail: string
  }
  applicationDates: {
    openingDate: string
    deadline: string
    kickoffWeekend: string
    programStart: string
  }
}

export function FAQAccordion({ city, cityInfo, applicationDates }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs: FAQItem[] = [
  {
    question: "How can I apply for the educational program?",
    answer: (
      <>
        Send an email directly to{" "}
        <a href={`mailto:${cityInfo.applicationEmail}`} className="text-primary font-semibold hover:underline">
          {cityInfo.applicationEmail}
        </a>{" "}
        to apply for the {cityInfo.generation}{cityInfo.generationSuffix} generation.
      </>
    )
  },
  {
    question: "How does the application process work?",
    answer: "In the first step, you send us your application documents (short CV + letter of motivation) before the application deadline. This will put you in our application pool and you will then receive an invitation to a personal interview (30 minutes via Zoom), where we would like to get to know you better. “We” are the Ober Yetis (founders of YETI) and at least one other Yeti from an older generation. If we are convinced of you and your application, you will receive your acceptance for the YETI program and all other important information about the beginning of the semester."
  },
  {
    question: "Tips & tricks for applying for YETI!",
    answer: <ul className="list-disc list-inside"> 
      <li>Be authentic.</li>
      <li>Know why you want to be in this particular program.</li>
      <li>Show your motivation and vision.</li>
      <li>Discuss what you bring to the program.</li>
      <li>Describe what you expect from the program.</li>
      <li>What have you experienced, what have you learned and where do you want to go?</li>
      <li>Why Entrepreneurship/Intrapreneurship – which points of contact have you already had?</li>
      <li>Why is personal development important?</li>
      <li>What is important to you in a team/community?</li>
    </ul>
  },
  {
    question: "What requirements do I have to meet in order to apply?",
    answer: <ul className="list-disc list-inside">
      <li>You would like to take on managerial responsibility, become self-employed or act as an innovative entrepreneur in the company.</li>
      <li>You like to take on responsibility, act in a solution-oriented manner, think innovatively and are interested in personal and professional development.</li>
      <li>You are willing to commit 10-15 hours per week to the 18-month program.</li>
      <li>You can be available one day per week for an on-site appointment.</li>
    </ul>
  },
  {
    question: "Is the program exclusively for students or can graduates also participate?",
    answer: "We are primarily looking for students, but university graduates or people with start-up experience can also apply."
  },
  {
    question: "How much time do I have to commit to the program?",
    answer: "We expect a commitment of approximately 10-15 hours per week over the 18 month program period."
  },
  {
    question: "What is the timing of the educational program?",
    answer: `The kick-off weekend will take place ${applicationDates.kickoffWeekend}. The new YETI semester starts with the university semester. The program lasts 18 months and is based on the attendance times of the course. Accordingly, availability during the semester breaks and the examination period is not required.`
  },
  {
    question: "What is a Kick-off weekend?",
    answer: "The new generation will travel over the weekend and get to know each other in a playful way. There will be input workshops on design thinking, where you will get to know how to work with Post-Its and whiteboards. Thomas will introduce Proglove and its founding story. You will exchange ideas as a group about common goals, cook together, laugh and have time to network. Everything is free, without additional costs."
  },
  {
    question: "How is the interdisciplinary exchange between the universities promoted?",
    answer: `YETI is currently recruiting participants at every university in ${cityInfo.name}. As a result, completely unknown faces and fields of study will meet in the educational program and be able to exchange ideas and network.`
  },
  {
    question: "What topics does the educational program cover?",
    answer: "Design thinking, interviews, creativity techniques, prototyping, pitching, communication, networking, leadership, time management, storytelling."
  },
  {
    question: "How is the practical connection to the course established?",
    answer: "The internal projects benefit from your knowledge from your studies because we think about social solutions. In fact, your studies are part of this solution. Within YETI, theoretical parts of the study can be understood and tried out in practice."
  },
  {
    question: "What soft skills can I develop and train through the program?",
    answer: <ul className="list-disc list-inside">
      <li>Communication Skills: The ability to communicate clearly and effectively with others to convey ideas and build relationships.</li>
      <li>Teamwork: The ability to work well in a team, sharing ideas, considering different perspectives and working towards goals together.</li>
      <li>Networking Skills: The ability to network, maintain relationships and benefit from a wide network of people.</li>
      <li>Creativity: The ability to develop innovative and original solutions and to generate new ideas.</li>
      <li>Flexibility and adaptability: The ability to adapt to new situations, to react quickly to change and to be open to different ways of working and perspectives.</li>
      <li>Problem Solving Skills: The ability to analyze complex problems, find creative solutions and make effective decisions.</li>
      <li>Self-reflection and willingness to learn: The ability to reflect on one’s own actions, to learn from mistakes and to continuously develop oneself.</li>
      <li>Intercultural Competence: The ability to deal with and work effectively with people from different cultural backgrounds and ways of thinking.</li>
      <li>Leadership Qualities: The ability to motivate, inspire and lead others to achieve common goals.</li>
      <li>Time Management and Organization: Ability to plan efficiently, prioritize and to structure the workflow.</li>
    </ul>
  },
  {
    question: "Is there a certain number of scholarship places and how are selected participants chosen?",
    answer: "We are currently planning to take on 15-20 participants per generation. Experience has shown that diversity is an advantage. We value equal opportunities and strive for a balanced ratio of female and male participants within the program."
  },
  {
    question: "How is the design thinking method taught in the program?",
    answer: "Within the program, the Design Thinking method is taught through projects in which we work in teams with the method in practice."
  },
  {
    question: "Are there special requirements for availability on certain days of the week?",
    answer: "On Thursday we plan an input and workshop meeting. This is about seeing each other, networking and working together on the projects. If you are prevented from doing the semester projects, you can arrange remote appointments in consultation with your chosen team and join them."
  },
  {
    question: "How does the mentor-mentee relationship work in the program and how is a mentor assigned?",
    answer: <ul className="list-disc list-inside">
      <li>The mentor&apos;s role is to pass on his or her entrepreneurial knowledge and experience to the Yeti in order to promote their personal and entrepreneurial development</li>
      <li>The mentor supports, advises and motivates his mentee by offering orientation, feedback and practical guidance in a regular exchange.</li>
      <li>The mentors are approached and matched by the program management depending on the personality of the YETI.</li>
    </ul>
  },
  {
    question: "What role does the mentor play in personal development and response to Questions?",
    answer: <ul className="list-disc list-inside">
      <li>“My mentor not only supports me with questions about starting a business and being self-employed, he also gives me input on topics that I hadn’t thought of yet
and thus broadens my horizon. I feel supported and know that I can always turn to him with my questions. That motivates me and helps me
to learn from his experience during my start-up and thus make fewer mistakes.” - Betina</li>
      <li>“My mentor is available to answer any questions I have about my professional and personal development. He lets me participate in his network and helps me to evaluate specific personal questions that I can’t answer with internet research or with the help of ChatGPT.” - Feli Fan</li>
    </ul>
  },
  {
    question: "Are the costs of the educational program fully covered or are there additional ones expenses to?",
    answer: "All content is available to you for free and you have no additional expenses."
  },
  {
    question: "Is there an official confirmation of participation for the program?",
    answer: "Yes, after successful participation in the program you will receive an official confirmation of participation. This confirmation can be used as proof of your participation and your acquired skills."
  }
]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FadeIn key={index} delay={0.05 * index}>
            <div className="bg-white rounded-2xl border border-border overflow-hidden transition-all hover:border-primary">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-124" : "max-h-0"
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                  <div className="text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
