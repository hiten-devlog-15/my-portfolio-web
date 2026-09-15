import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen flex items-center pt-24 pb-16"
    >
      {/* Subtle radial glow — very restrained */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, #4f7ef7, transparent 65%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <p className="section-label mb-6">Java Backend Developer</p>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#f0f0f2] mb-6"
              style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Hiten Nath
            </h1>

            {/* Primary tagline */}
            <p className="text-base sm:text-lg text-[#c8c8d8] leading-relaxed mb-3 max-w-lg">
              Building reliable backend systems with Java, Spring Boot, REST APIs and PostgreSQL.
            </p>

            {/* Supporting text */}
            <p className="text-sm sm:text-base text-[#8a8a9a] leading-relaxed max-w-lg mb-10">
              I enjoy designing backend systems, understanding how they work internally,
              and turning real-world problems into maintainable software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={15} />
              </a>
              <a
                href="https://github.com/hiten-devlog-15"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/hiten-devlog-15"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="GitHub profile"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/hiten-nath-java--developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="mailto:nathhiten704@gmail.com"
                className="social-icon-link"
                aria-label="Send email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Portrait ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="portrait-container w-[280px] sm:w-[320px] lg:w-[380px]">
              {/* Portrait — place your photo at public/portrait.jpg */}
              <img
                src={heroImage}
                alt="Hiten Nath — Java Backend Developer"
                className="w-full h-auto rounded-xl object-cover object-top"
                style={{
                  border: '1px solid rgba(79,126,247,0.18)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
                  display: 'block',
                }}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  const parent = el.parentElement;
                  if (parent && !parent.querySelector('.portrait-fallback')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'portrait-fallback';
                    fallback.style.cssText = `
                      width: 100%;
                      aspect-ratio: 3/4;
                      background: #16161a;
                      border: 1px solid rgba(79,126,247,0.18);
                      border-radius: 12px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      justify-content: center;
                      gap: 12px;
                      color: #3a3a48;
                      font-family: 'JetBrains Mono', monospace;
                      font-size: 12px;
                      text-align: center;
                      padding: 24px;
                    `;
                    fallback.innerHTML = `
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
                      </svg>
                      <span>portrait.jpg</span>
                      <span style="color:#2a2a35;font-size:11px">Drop your photo into<br/>public/portrait.jpg</span>
                    `;
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>

        </div>

        {/* Bottom decorative tag line */}
        <div className="mt-16 hidden sm:block">
          <p className="text-[11px] text-[#2a2a35] font-mono tracking-widest uppercase">
            backend · java · spring boot · rest · postgresql
          </p>
        </div>
      </div>
    </section>
  );
}
