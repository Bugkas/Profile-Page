import Typewriter from './Typewriter';

export default function Hero() {
  const phrases = [
    'a Full-Stack Developer.',
    'a ZyberLab Junior Developer.',
    'an IoT Hardware Builder.',
    'a Computer Science Student.',
    'a Hybrid AI Enthusiast.'
  ];

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content">
        <div className="hero-tag">Available for Internships & Projects</div>
        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Jericho Boado</span>
        </h1>
        <h2 class="hero-subtitle">
          I am&nbsp;
          <Typewriter phrases={phrases} />
        </h2>
        <p className="hero-description">
          A Full-Stack Developer and Computer Science Student skilled in building high-performance web applications, robust
          backend architectures, IoT device integrations, and hybrid AI auditing portals.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-container">
          <div className="avatar-glow"></div>
          <img src="assets/avatar.png" alt="Jericho Boado Portrait" className="avatar-image" />
        </div>
      </div>
    </section>
  );
}
