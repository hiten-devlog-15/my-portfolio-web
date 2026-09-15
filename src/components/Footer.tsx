import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e24] bg-[#0d0d0f]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div>
            <p
              className="text-sm font-semibold text-[#f0f0f2]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Hiten Nath
            </p>
            <p className="text-xs text-[#5a5a6e] mt-0.5">Java Backend Developer</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hiten-devlog-15"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/hiten-nath-java--developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:nathhiten704@gmail.com"
              className="social-icon-link"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1e1e24] text-center">
          <p className="text-xs text-[#3a3a48] font-mono">
            © {year} Hiten Nath — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
