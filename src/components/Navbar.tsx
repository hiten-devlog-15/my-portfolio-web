import { Home, User, Code2, FolderCode, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#home',       Icon: Home },
  { label: 'About',      href: '#about',      Icon: User },
  { label: 'Skills',     href: '#skills',     Icon: Code2 },
  { label: 'Projects',   href: '#projects',   Icon: FolderCode },
  { label: 'Experience', href: '#experience', Icon: Briefcase },
  { label: 'Contact',    href: '#contact',    Icon: Mail },
];

export default function Navbar() {
  return (
    <>
      {/* ═══════════════════════════════════════
          BAR 1 — Main header (NOT sticky)
          Scrolls away with page content.
      ═══════════════════════════════════════ */}
      <header className="relative z-40 bg-[#0d0d0f] border-b border-[#1e1e24]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-[#f0f0f2] font-semibold text-base tracking-tight hover:text-white transition-colors no-underline"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Hiten Nath
          </a>

          {/* Let's Connect — unchanged */}
          <a
            href="mailto:nathhiten704@gmail.com"
            className="btn-primary text-xs px-4 py-2"
            aria-label="Let's Connect via email"
          >
            Let's Connect
          </a>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          BAR 2 — Floating Navigation Pill (STICKY)
          Stays fixed near the top after Bar 1 scrolls away.
      ═══════════════════════════════════════ */}
      <div className="sticky top-3 z-50 flex justify-center px-4 py-3 pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#121218]/90 backdrop-blur-md border border-[#22222e] shadow-lg shadow-black/50"
          aria-label="Primary navigation"
        >
          {navLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="relative group flex items-center justify-center w-9 h-9 rounded-full text-[#7e7e92] hover:text-[#f0f0f2] hover:bg-[#1d1d26] transition-all duration-150"
            >
              <Icon size={18} strokeWidth={1.6} />

              {/* Tooltip — visible on hover only */}
              <span
                className="
                  absolute top-full mt-2 left-1/2 -translate-x-1/2
                  px-2.5 py-1 rounded-md
                  text-[11px] font-medium tracking-wide
                  bg-[#16161c] border border-[#262632] text-[#c8c8d8]
                  whitespace-nowrap
                  opacity-0 group-hover:opacity-100
                  translate-y-1 group-hover:translate-y-0
                  transition-all duration-150 pointer-events-none
                  z-50 shadow-md
                "
                role="tooltip"
              >
                {label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
