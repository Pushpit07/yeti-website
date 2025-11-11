import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { Curriculum } from "@/components/Curriculum"
import { Button } from "@/components/Button"
import { FAQAccordion } from "@/components/FAQAccordion"

export const dynamic = "force-static"

export default async function Home() {
  return (
    <div className="font-sans">
      <Hero
        title="We are YETI Dresden"
        subtitle="Young Entrepreneurs in Tech and Innovation"
        cta={{ label: "Apply now", href: "/apply/dresden" }}
        backgroundVideoUrl="https://yeti-dresden.org//wp-content//uploads//2025//09//demo-day-recap.mp4"
      />

      <section className="bg-black text-white py-12 md:py-16 px-8 md:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our{" "}
              <span className="underline decoration-wavy underline-offset-4 decoration-[2.5px] decoration-primary">
                Mission
              </span>
            </h2>
            <p className="text-lg mb-8">
              We empower young people to become entrepreneurial role models through networking, training and resources.
            </p>
            <Button
              variant="rounded"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            >
              How it started
            </Button>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What is YETI?</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>Y</strong>oung <strong>E</strong>ntrepreneurs, in <strong>T</strong>ech and <strong>I</strong>nnovation Dresden is an educational initiative which aims to support the participants in becoming entrepreneurial role models and influential figures for society.
              </p>
              <p>
                The 18-month program enables students to develop business ideas and leadership skills.
              </p>
              <p>
                The scholarship holders are mentored by the start-up community and dresden|exists, the start-up service for universities and scientific institutions in Dresden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="underline decoration-wavy underline-offset-8 decoration-primary">What</span> we provide
          </h2>
        </div>

        {/* Bento-style grid layout */}
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {/* Large feature card - Scholarship */}
          <div className="md:col-span-7 md:row-span-2 bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-xl mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Prototyping Scholarship</h3>
              <p className="text-lg text-white/90 max-w-md">
                Receive €500-1000 financial support throughout the program to help you focus on your entrepreneurial journey to develop your business ideas.
              </p>
            </div>
          </div>

          {/* Mentorship card */}
          <div className="md:col-span-5 bg-black text-white rounded-2xl p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-black to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur rounded-xl mb-4 group-hover:bg-white/20 transition-colors">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Mentorship</h3>
              <p className="text-white/80">
                One-on-one guidance from successful entrepreneurs and industry leaders.
              </p>
            </div>
          </div>

          {/* Workshops card */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-colors group hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-50 rounded-xl mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/10">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Skills Training</h3>
            <p className="text-muted-foreground">
              Regular workshops on business development, tech skills, and leadership.
            </p>
          </div>

          {/* Network card */}
          <div className="md:col-span-4 bg-black text-white rounded-2xl p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-black to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur rounded-xl mb-4 group-hover:bg-white/20 transition-colors">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Network</h3>
              <p className="text-white/80">
                Access to alumni, partners, and investors across Europe.
              </p>
            </div>
          </div>

          {/* Project Support card */}
          <div className="md:col-span-4 bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-colors group hover:shadow-lg">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-neutral-50 rounded-xl mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/10">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Project Support</h3>
            <p className="text-muted-foreground">
              Hands-on help from ideation to launch for your ventures.
            </p>
          </div>

          {/* Co-working Space card */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur rounded-xl mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Workspace</h3>
              <p className="text-white/90">
                Dedicated co-working space at YETI HQ with all amenities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-neutral-50 py-12 md:py-16">
        {/* Header - Contained */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-4 2xl:px-0 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What <span className="underline decoration-wavy underline-offset-8 decoration-primary">others</span> say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Hear from our community of entrepreneurs and innovators who have been part of the YETI journey.
          </p>
        </div>

        {/* Testimonials Sliding Strips - Full Width */}
        <div className="relative">
          {/* Gradient masks on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

          <div className="space-y-6 overflow-hidden">
          {/* First Row - Slides Left to Right */}
          <div className="flex animate-scroll-reverse gap-6">
            {/* Duplicate the set twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {/* Testimonial 1 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;YETI provided me with the mentorship and resources I needed to transform my idea into a real business. The network I built here is invaluable.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      MS
                    </div>
                    <div>
                      <div className="font-bold">Maria Schmidt</div>
                      <div className="text-sm text-muted-foreground">Founder, TechStart</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;The 18-month program gave me the skills and confidence to pitch to investors. Now my startup has raised seed funding and is growing rapidly.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      JK
                    </div>
                    <div>
                      <div className="font-bold">Jonas Keller</div>
                      <div className="text-sm text-muted-foreground">CEO, InnovateLab</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;Being part of YETI connected me with like-minded entrepreneurs. The workshops and events opened doors I didn&apos;t even know existed.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      LW
                    </div>
                    <div>
                      <div className="font-bold">Lisa Weber</div>
                      <div className="text-sm text-muted-foreground">Co-founder, GreenTech Solutions</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;Through YETI, I learned how to validate my ideas and build a minimum viable product. The hands-on approach was exactly what I needed.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      TP
                    </div>
                    <div>
                      <div className="font-bold">Thomas Peters</div>
                      <div className="text-sm text-muted-foreground">CTO, DataFlow</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Slides Right to Left */}
          <div className="flex animate-scroll gap-6">
            {/* Duplicate the set twice for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {/* Testimonial 5 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;The demo days gave me real experience pitching to investors. That practice made all the difference when I presented at a major tech conference.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      AH
                    </div>
                    <div>
                      <div className="font-bold">Anna Hoffmann</div>
                      <div className="text-sm text-muted-foreground">Founder, EcoTech</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 6 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;YETI&apos;s community is incredible. I met my co-founder here, and we&apos;ve built something amazing together with the support of the entire network.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      MR
                    </div>
                    <div>
                      <div className="font-bold">Max Richter</div>
                      <div className="text-sm text-muted-foreground">Co-founder, CloudHub</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 7 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;The scholarship helped me focus on building my product without worrying about finances. It&apos;s a game-changer for student entrepreneurs.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      SK
                    </div>
                    <div>
                      <div className="font-bold">Sarah Klein</div>
                      <div className="text-sm text-muted-foreground">Founder, HealthAI</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 8 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;Every Thursday at YETI HQ was inspiring. The energy, the ideas, the people - it&apos;s where innovation comes to life in Dresden.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      DM
                    </div>
                    <div>
                      <div className="font-bold">David Mueller</div>
                      <div className="text-sm text-muted-foreground">CEO, SmartCity Solutions</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 9 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;The mentorship program opened my eyes to the real challenges of entrepreneurship. My mentor&apos;s guidance helped me avoid costly mistakes.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      FB
                    </div>
                    <div>
                      <div className="font-bold">Felix Bauer</div>
                      <div className="text-sm text-muted-foreground">Founder, FinTech Pro</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 10 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;YETI gave me the confidence to quit my job and pursue my startup full-time. Best decision I ever made.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      JW
                    </div>
                    <div>
                      <div className="font-bold">Julia Wagner</div>
                      <div className="text-sm text-muted-foreground">CEO, EdTech Solutions</div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 11 */}
                <div className="w-[400px] bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary transition-all hover:shadow-lg group shrink-0">
                  <div className="mb-6">
                    <svg className="w-10 h-10 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    &quot;The workshops at YETI covered everything from design thinking to financial planning. Each session was incredibly valuable.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white font-bold text-lg">
                      PM
                    </div>
                    <div>
                      <div className="font-bold">Paul Meier</div>
                      <div className="text-sm text-muted-foreground">Co-founder, DesignLab</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Curriculum</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 flex items-start">
                <span className="mr-2">✓</span>
                <span>3 semesters</span>
              </h3>
              <p className="text-base md:text-lg pl-6">
                The educational program lasts for three semesters, followed by the Alumni network.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 flex items-start">
                <span className="mr-2">✓</span>
                <span>10-15 hours/week</span>
              </h3>
              <p className="text-base md:text-lg pl-6">
                We expect a commitment of approximately 10-15 hours per week for the 18-month program.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 flex items-start">
                <span className="mr-2">✓</span>
                <span>Thursday is YETI-Day</span>
              </h3>
              <p className="text-base md:text-lg pl-6">
                All input-sessions will be held on Thursdays. It&apos;s also the busiest day of the week at YETI HQ.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 flex items-start">
                <span className="mr-2">✓</span>
                <span>Language</span>
              </h3>
              <p className="text-base md:text-lg pl-6">
                YETI Dresden encourages international exchange. Thus, the program is conducted in English.
              </p>
            </div>
          </div>

          {/* Right side - Curriculum grid */}
          <div>
            <Curriculum />
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="underline decoration-wavy underline-offset-8 decoration-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about applying to YETI Dresden
          </p>
        </div>

        <FAQAccordion />
      </Section>
    </div>
  )
}
