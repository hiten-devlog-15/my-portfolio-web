export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal">
          <div className="accent-line" />
          <p className="section-label">Education</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-12 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Academic background
          </h2>
        </div>

        <div className="reveal max-w-3xl">
          <div className="timeline-card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[#f0f0f2]">
                  Vivekanand Education Society's Institute of Technology
                </h3>
                <p className="text-sm text-[#4f7ef7] font-mono mt-1">
                  B.Tech — Information Technology
                </p>
                <p className="text-sm text-[#5a5a6e] mt-2">Mumbai</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-xs text-[#5a5a6e] font-mono bg-[#0d0d0f] border border-[#1e1e24] px-3 py-1.5 rounded">
                  VESIT
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
