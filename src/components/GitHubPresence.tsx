import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function GitHubPresence() {
  return (
    <section id="github" className="section-padding bg-[#111114]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal max-w-2xl">
          <div className="accent-line" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-4 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Building, learning, and shipping.
          </h2>
          <p className="text-[#8a8a9a] text-sm leading-relaxed mb-10">
            My GitHub is where the work lives. You'll find the source code for my projects,
            commits that document how they evolved and the problems I solved along the way.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/hiten-devlog-15"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="View GitHub profile"
            >
              <GithubIcon size={15} />
              View GitHub Profile
              <ArrowRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/hiten-nath-java--developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="Connect on LinkedIn"
            >
              <LinkedinIcon size={15} />
              Connect on LinkedIn
            </a>
          </div>
        </div>

        {/* Decorative terminal block */}
        <div className="reveal mt-14 max-w-lg">
          <div className="bg-[#0d0d0f] border border-[#1e1e24] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a35]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a35]" />
            </div>
            <div className="font-mono text-xs text-[#5a5a6e] space-y-1.5">
              <p><span className="text-[#4f7ef7]">$</span> git clone https://github.com/hiten-devlog-15</p>
              <p><span className="text-[#4f7ef7]">$</span> cd bank-management-system</p>
              <p><span className="text-[#4f7ef7]">$</span> ./mvnw spring-boot:run</p>
              <p className="text-[#3a3a48]"># Server started on port 8080</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
