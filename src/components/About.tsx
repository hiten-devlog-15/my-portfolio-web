export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal max-w-2xl">
          <div className="accent-line" />
          <p className="section-label">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-8 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}>
            Who I am
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mt-4">
          {/* Main bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[#c8c8d8] leading-relaxed">
              I'm a B.Tech Information Technology student at VESIT Mumbai, focused on backend
              development. I work primarily with <span className="text-[#f0f0f2] font-medium">Java</span> and{' '}
              <span className="text-[#f0f0f2] font-medium">Spring Boot</span>, building REST APIs,
              database-backed applications, and layered backend systems.
            </p>

            <p className="text-[#c8c8d8] leading-relaxed">
              I'm interested in understanding how backend systems work under the hood and building
              clean, maintainable software. Currently, I'm strengthening my Java backend skills,
              exploring system design fundamentals, and learning how to build production-ready
              applications.
            </p>
          </div>

          {/* Interest list */}
          <div className="lg:col-span-2">
            <p className="text-xs font-mono font-medium text-[#4f7ef7] uppercase tracking-widest mb-5">
              Areas of Focus
            </p>
            <ul className="space-y-3">
              {[
                'Backend Development',
                'REST API Design',
                'Database & SQL',
                'System Design Fundamentals',
                'Clean Architecture',
                'Data Structures & Algorithms',
                'Problem Solving',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#FFFFFF]">
                  <span className="w-1 h-1 rounded-full bg-[#4f7ef7] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
