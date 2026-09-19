import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import heroImage from '../assets/hero.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-grid relative min-h-screen flex items-center justify-center pt-12 pb-16 bg-[#111114]"
    >
      {/* Subtle radial glow — very restrained */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #4f7ef7, transparent 65%)',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center">

        {/* ── Portrait ── */}
        <div className="portrait-container w-[220px] sm:w-[260px] lg:w-[300px] mb-8">
          <img
            src={heroImage}
            alt="Hiten Nath — Java Backend Developer"
            className="w-full h-auto rounded-xl object-cover object-top"
            style={{
              border: '1px solid rgba(79,126,247,0.18)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.55)',
              display: 'block',
            }}
          />
        </div>

        {/* ── Role label ── */}
        <p className="section-label mb-3">Java Backend Developer</p>

        {/* ── Name ── */}
        <h1
          className="text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-[#f0f0f2] mb-7"
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Hiten Nath
        </h1>

        {/* ── Primary tagline ── */}
        <p className="text-base sm:text-lg text-[#c8c8d8] leading-relaxed mb-3 max-w-xl">
          Building reliable backend systems with Java, Spring Boot, REST APIs and PostgreSQL.
        </p>

        {/* ── Supporting text ── */}
        <p className="text-sm sm:text-base text-[#8a8a9a] leading-relaxed max-w-xl mb-10">
          I enjoy designing backend systems, understanding how they work internally,
          and turning real-world problems into maintainable software.
        </p>

        {/* ── CTAs ── */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-9">
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

        {/* ── Social icons ── */}
        <div className="flex items-center justify-center gap-3">
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

        {/* Bottom decorative tag line */}
        <p className="mt-14 text-[11px] text-[#2a2a35] font-mono tracking-widest uppercase hidden sm:block">
          backend · java · spring boot · rest · postgresql
        </p>

      </div>
    </section>
  );
}
