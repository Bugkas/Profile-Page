import StatCard from './StatCard';

export default function About() {
  return (
    <section id="about" className="about-section container section-padding">
      <div className="section-header">
        <span className="section-tag">About Me</span>
        <h2 className="section-title">Bridging Hardware, Software, & Intelligence</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-grid">
        <div className="about-text-content">
          <p className="about-paragraph">
            I am a Junior Full-Stack Developer and Computer Science student specializing in Software Engineering. My passion lies at
            the intersection of robust web frameworks, embedded hardware development, and artificial
            intelligence. I focus on developing clean, scalable applications that solve real-world problems.
          </p>
          <p className="about-paragraph">
            During my internship at <strong>ZyberLab Solution Inc.</strong>, I worked closely with
            full-stack web architectures, APIs, and modern development pipelines, which helped me hone my
            skills in real-world software delivery. Whether designing automated credit risk models or
            setting up decentralized mining portals, I bring an analytical approach and high attention to
            detail to every challenge.
          </p>

          <div className="stats-grid">
            <StatCard targetVal={12} label="Projects Completed" />
            <StatCard targetVal={5400} label="Hours of Coding" />
          </div>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <div className="info-details">
              <h3>Full-Stack Systems</h3>
              <p>Architecting complete client-server solutions with scalable databases and smooth web interfaces.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <div className="info-details">
              <h3>IoT & Embedded Devices</h3>
              <p>Developing low-level firmware for microcontrollers (ESP8266, Arduino) to interface with real-time web nodes.</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              </svg>
            </div>
            <div className="info-details">
              <h3>Hybrid AI Design</h3>
              <p>Leveraging local LLMs (Ollama) with cloud instances (Gemini API) to deliver smart, privacy-centric software audits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
