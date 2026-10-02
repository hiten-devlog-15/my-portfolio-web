import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import GitHubPresence from './components/GitHubPresence';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollVideoBackground from './components/ScrollVideoBackground';
import './index.css';

function App() {
  // Scroll reveal — re-runs on mount
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.10 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Cinematic scroll-controlled background — fixed behind everything, never in document flow */}
      <ScrollVideoBackground />

      {/* Existing website content — sits above the canvas via z-index: 1 */}
      <div className="min-h-screen" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <GitHubPresence />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
