import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Highlights when section is centered
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Decorative Glow Mesh Background */}
      <div className="glow-mesh-container" aria-hidden="true">
        <div className="glow-blob glow-1"></div>
        <div className="glow-blob glow-2"></div>
        <div className="glow-blob glow-3"></div>
      </div>

      {/* Global Header & Nav bar */}
      <Navbar activeSection={activeSection} />

      {/* Sections Wrapper */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
