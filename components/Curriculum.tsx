export function Curriculum() {
  return (
    <div className="rounded-3xl border-2 border-border bg-gradient-to-br from-white to-neutral-50/50 p-6 md:p-8 shadow">
      <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-4">
        {/* Headers */}
        <div className="group relative rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-4 py-4 text-center border border-neutral-200">
          <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shadow-md">
            1
          </div>
          <div className="text-lg md:text-xl font-bold mt-3">Semester 1</div>
          <div className="text-xs text-muted-foreground mt-1">Foundation</div>
        </div>
        <div className="group relative rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-4 py-4 text-center border border-neutral-200">
          <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shadow-md">
            2
          </div>
          <div className="text-lg md:text-xl font-bold mt-3">Semester 2</div>
          <div className="text-xs text-muted-foreground mt-1">Growth</div>
        </div>
        <div className="group relative rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 px-4 py-4 text-center border border-neutral-200">
          <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shadow-md">
            3
          </div>
          <div className="text-lg md:text-xl font-bold mt-3">Semester 3</div>
          <div className="text-xs text-muted-foreground mt-1">Launch</div>
        </div>
        <div className="group relative rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 px-4 py-4 text-center border-2 border-primary/30">
          <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-hover text-white text-xs font-bold shadow-md">
            ∞
          </div>
          <div className="text-lg md:text-xl font-bold text-primary mt-3">Alumni</div>
          <div className="text-xs text-primary/70 mt-1">Forever</div>
        </div>

        {/* Top Row - Project Types */}
        <div className="group rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 px-5 py-8 md:py-10 text-center border border-primary/20 relative overflow-hidden">
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
            Semester 1
          </div>
          <div className="text-base md:text-lg font-bold mt-2">Innovation Project</div>
          <div className="text-xs text-muted-foreground mt-2">Ideation & Validation</div>
        </div>
        <div className="group rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 px-5 py-8 md:py-10 text-center border border-primary/20 relative overflow-hidden">
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
            Semester 2
          </div>
          <div className="text-base md:text-lg font-bold mt-2">Industry Project</div>
          <div className="text-xs text-muted-foreground mt-2">Real-world Application</div>
        </div>
        <div className="group rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 px-5 py-8 md:py-10 text-center border border-primary/20 relative overflow-hidden">
          <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
            Semester 3
          </div>
          <div className="text-base md:text-lg font-bold leading-tight mt-2">
            Start-up Project /<br />
            Social Innovation
          </div>
          <div className="text-xs text-muted-foreground mt-2">Launch & Impact</div>
        </div>

        {/* Alumni Tall Card (spans remaining rows on desktop) */}
        <div className="rounded-2xl bg-gradient-to-br from-primary via-primary to-primary-hover text-white px-6 py-12 md:py-20 text-center md:row-span-3 shadow-2xl relative overflow-hidden border-2 border-primary-hover">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full"></div>

          <div className="relative z-10 space-y-4">
            <div className="text-xl md:text-2xl font-bold leading-tight mt-6">
              Network<br />
              &amp;<br />
              Mentoring
            </div>
            <div className="text-sm text-white/80 max-w-[200px] mx-auto mt-4">
              Continuous support throughout your journey
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-1 w-1 rounded-full bg-white/40"></div>
              <div className="h-1 w-1 rounded-full bg-white/60"></div>
              <div className="h-1 w-1 rounded-full bg-white/80"></div>
              <div className="h-1 w-1 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Middle Row - Internal Projects */}
        <div className="group rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white px-5 py-8 md:py-10 text-center shadow-lg relative overflow-hidden border border-primary-hover">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-base md:text-lg font-bold mt-2">Internal Projects</div>
            <div className="text-xs text-white/70 mt-2">Hands-on Learning</div>
          </div>
        </div>
        <div className="group rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white px-5 py-8 md:py-10 text-center shadow-lg relative overflow-hidden border border-primary-hover">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-base md:text-lg font-bold mt-2">Internal Projects</div>
            <div className="text-xs text-white/70 mt-2">Creative Solutions</div>
          </div>
        </div>
        <div className="group rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white px-5 py-8 md:py-10 text-center shadow-lg relative overflow-hidden border border-primary-hover">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-base md:text-lg font-bold mt-2">Internal Projects</div>
            <div className="text-xs text-white/70 mt-2">Team Collaboration</div>
          </div>
        </div>

        {/* Bottom Banner (spans first three columns on desktop) */}
        <div className="rounded-2xl bg-gradient-to-r from-black via-neutral-900 to-black text-white px-6 py-6 md:py-8 text-center md:col-span-3 shadow-xl relative overflow-hidden border border-neutral-800">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <div className="relative z-10">
            <div className="text-base md:text-lg font-semibold">
              Workshops, Mentoring, Coaching, Events &amp; more…
            </div>
            <div className="text-xs text-neutral-400 mt-2">
              Continuous Development Throughout Your Journey
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
