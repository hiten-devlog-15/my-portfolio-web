export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal">
          <div className="accent-line" />
          <p className="section-label">Experience</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-12 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Work experience
          </h2>
        </div>

        <div className="reveal max-w-3xl space-y-5">

          {/* Sports Reconnect */}
          <div className="timeline-card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-semibold text-[#f0f0f2]">
                  Sports Reconnect
                </h3>
                <p className="text-sm text-[#4f7ef7] font-mono mt-0.5">
                  Intern {/* Update role title here when available */}
                </p>
              </div>
              <span className="text-xs text-[#5a5a6e] font-mono whitespace-nowrap bg-[#0d0d0f] border border-[#1e1e24] px-3 py-1.5 rounded self-start">
                Duration TBD {/* Update duration here */}
              </span>
            </div>

            <p className="text-sm text-[#8a8a9a] leading-relaxed mb-5">
              {/* Update with actual responsibilities when available */}
              Contributed to the development and maintenance of features at Sports Reconnect.
              Details of responsibilities and scope can be updated with the actual internship
              information.
            </p>

            {/* Update with actual technologies used */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-[#5a5a6e] font-mono">
                Technologies: to be updated with actual stack used
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
