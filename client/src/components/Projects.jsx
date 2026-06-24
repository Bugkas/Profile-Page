export default function Projects() {
  const projectsList = [
    {
      title: 'EvalEdge AI / CreditBook AI',
      category: 'Hybrid AI System (Planned)',
      description: 'A proposed dual-engine automated financial auditing system. Designed to orchestrate local Ollama models (Llama 3.2) for secure offline transaction parsing alongside Google Gemini Cloud APIs for real-time risk assessment.',
      tech: ['React', 'Node.js', 'Ollama', 'Gemini API'],
      github: 'https://github.com/Bugkas'
    },
    {
      title: 'Restaurant POS & Kiosk',
      category: 'Web & Mobile App',
      description: 'A lightweight, responsive Point-of-Sale web app built for small restaurants and food vendors. Features a fast sales kiosk for checkout, inventory/ingredient tracking, and reporting, with support for Android packaging via Capacitor.',
      tech: ['React', 'Vite', 'Capacitor', 'Android (Gradle)'],
      github: 'https://github.com/Bugkas/POS'
    },
    {
      title: 'Antigravity DUCO Miner',
      category: 'IoT & Embedded Systems',
      description: 'A compact, PlatformIO-based firmware that turns ESP8266 NodeMCU boards into a high-performance Duino-Coin (DUCO) mining rig. Features a hyper-optimized C++ SHA-1 hashing loop, config persistence via EEPROM, and a glassmorphic local stats dashboard.',
      tech: ['C++ (PlatformIO)', 'ESP8266', 'EEPROM', 'Web Dashboard'],
      github: 'https://github.com/Bugkas/DUCO-Miner'
    }
  ];

  return (
    <section id="projects" className="projects-section container section-padding">
      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Featured Creations</h2>
        <div className="section-divider"></div>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-glow"></div>
            <div className="project-content">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
