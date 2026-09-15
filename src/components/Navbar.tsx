import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d0d0f]/95 backdrop-blur-md border-b border-[#1e1e24] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="text-[#f0f0f2] font-semibold text-base tracking-tight hover:text-white transition-colors no-underline"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Hiten Nath
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a
              href="mailto:nathhiten704@gmail.com"
              className="btn-primary text-xs px-4 py-2 ml-2"
              aria-label="Let's Connect via email"
            >
              Let's Connect
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#8a8a9a] hover:text-[#f0f0f2] transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0d0d0f]/98 flex flex-col pt-20 px-8 pb-8 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav className="flex flex-col gap-6 mt-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#f0f0f2] text-xl font-medium hover:text-[#4f7ef7] transition-colors no-underline"
                onClick={handleClose}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:nathhiten704@gmail.com"
              className="btn-primary mt-4 self-start"
              onClick={handleClose}
            >
              Let's Connect
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
