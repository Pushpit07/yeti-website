export function Curriculum() {
  return (
    <div className="rounded-2xl border border-border p-4 md:p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {/* Headers */}
        <div className="rounded-xl bg-[#f1f5fa] px-4 py-3 text-center text-xl font-semibold md:text-2xl">
          1st Semester
        </div>
        <div className="rounded-xl bg-[#f1f5fa] px-4 py-3 text-center text-xl font-semibold md:text-2xl">
          2nd Semester
        </div>
        <div className="rounded-xl bg-[#f1f5fa] px-4 py-3 text-center text-xl font-semibold md:text-2xl">
          3rd Semester
        </div>
        <div className="rounded-xl bg-[#e6f3e6] px-4 py-3 text-center text-xl font-semibold md:text-2xl">
          Alumni
        </div>

        {/* Top Row */}
        <div className="rounded-xl bg-[#cfe6ff] px-4 py-10 text-center text-lg font-bold md:py-12">
          Innovation Project
        </div>
        <div className="rounded-xl bg-[#cfe6ff] px-4 py-10 text-center text-lg font-bold md:py-12">
          Industry Project
        </div>
        <div className="rounded-xl bg-[#cfe6ff] px-4 py-10 text-center text-lg font-bold md:py-12">
          Start-up Project/
          <br />
          Social Innovation
        </div>
        {/* Alumni Tall Card (spans remaining rows on desktop) */}
        <div className="rounded-xl bg-[#e6f3e6] px-4 py-10 text-center text-lg font-bold text-[#0b3d2c] md:row-span-3 md:py-24">
          Network
          <br />&amp;<br />
          Mentoring
        </div>

        {/* Middle Row */}
        <div className="rounded-xl bg-[#6a87a1] px-4 py-10 text-center text-lg font-bold text-white md:py-12">
          Internal Projects
        </div>
        <div className="rounded-xl bg-[#6a87a1] px-4 py-10 text-center text-lg font-bold text-white md:py-12">
          Internal Projects
        </div>
        <div className="rounded-xl bg-[#6a87a1] px-4 py-10 text-center text-lg font-bold text-white md:py-12">
          Internal Projects
        </div>

        {/* Bottom Banner (spans first three columns on desktop) */}
        <div className="rounded-xl bg-[#2b3b46] px-4 py-6 text-center text-base font-semibold text-white md:col-span-3 md:py-8 md:text-lg">
          Workshops, Mentoring, Coaching, Events &amp; more…
        </div>
      </div>
    </div>
  )
}

