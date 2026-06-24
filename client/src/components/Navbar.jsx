import { useState, useEffect } from 'react';

export default function Navbar({ activeSection }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return systemPrefersLight ? 'light' : 'dark';
  });

  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor Scroll for styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor Theme Changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
    } else {
      root.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact', isBtn: true }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <a href="#hero" className="nav-logo">
          <span className="logo-accent">&lt;</span>J<span className="logo-name">Boado</span><span class="logo-accent">/&gt;</span>
        </a>

        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${link.isBtn ? 'btn-contact-nav' : ''} ${activeSection === link.id && !link.isBtn ? 'active' : ''}`}
                onClick={() => setMenuActive(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            className="theme-toggle-btn"
            aria-label="Toggle dark/light theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              /* Sun Icon for switching to light */
              <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              /* Moon Icon for switching to dark */
              <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger-menu ${menuActive ? 'active' : ''}`}
            id="hamburger-menu"
            aria-label="Toggle mobile menu"
            onClick={() => setMenuActive(prev => !prev)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
