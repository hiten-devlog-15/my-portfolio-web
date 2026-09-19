import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0d0d0f]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal max-w-2xl">
          <div className="accent-line" />
          <p className="section-label">Contact</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#f0f0f2] mb-4 tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Let's build something useful.
          </h2>
          <p className="text-[#8a8a9a] text-sm leading-relaxed mb-10">
            Have a project, opportunity, or just want to connect? Feel free to reach out.
            I'm open to backend engineering roles, internships and conversations about
            software.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:nathhiten704@gmail.com"
              className="flex items-center gap-4 p-5 bg-[#16161a] border border-[#1e1e24] rounded-xl hover:border-[rgba(79,126,247,0.35)] transition-colors group"
              aria-label="Send email to Hiten Nath"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d0f] border border-[#1e1e24] rounded-lg group-hover:border-[rgba(79,126,247,0.35)] transition-colors">
                <Mail size={18} className="text-[#4f7ef7]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#f0f0f2]">Email</p>
                <p className="text-xs text-[#8a8a9a] mt-0.5 font-mono">nathhiten704@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/hiten-devlog-15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#16161a] border border-[#1e1e24] rounded-xl hover:border-[rgba(79,126,247,0.35)] transition-colors group"
              aria-label="Hiten Nath on GitHub"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d0f] border border-[#1e1e24] rounded-lg group-hover:border-[rgba(79,126,247,0.35)] transition-colors">
                <GithubIcon size={18} className="text-[#8a8a9a] group-hover:text-[#f0f0f2] transition-colors" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#f0f0f2]">GitHub</p>
                <p className="text-xs text-[#8a8a9a] mt-0.5 font-mono">github.com/hiten-devlog-15</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/hiten-nath-java--developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#16161a] border border-[#1e1e24] rounded-xl hover:border-[rgba(79,126,247,0.35)] transition-colors group"
              aria-label="Hiten Nath on LinkedIn"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0d0d0f] border border-[#1e1e24] rounded-lg group-hover:border-[rgba(79,126,247,0.35)] transition-colors">
                <LinkedinIcon size={18} className="text-[#8a8a9a] group-hover:text-[#0077b5] transition-colors" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#f0f0f2]">LinkedIn</p>
                <p className="text-xs text-[#8a8a9a] mt-0.5 font-mono">linkedin.com/in/hiten-nath-java--developer</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
