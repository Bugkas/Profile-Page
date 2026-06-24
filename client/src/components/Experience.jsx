export default function Experience() {
  const experiences = [
    {
      date: 'Mar 2026 - Present',
      title: 'Junior Full-Stack Developer',
      company: 'ZyberLab Solution Inc.',
      details: 'Developing and scaling end-to-end web applications, designing database architectures, building RESTful APIs, and coordinating software deployments in development and production environments.'
    },
    {
      date: 'Mar 2025 - Apr 2026',
      title: 'Full-Stack Developer Intern',
      company: 'ZyberLab Solution Inc.',
      details: 'Engineered frontend views and modular components, optimized database queries for client systems, integrated third-party RESTful APIs, and maintained code versions across dev and production instances.'
    },
    {
      date: '2023 - Present',
      title: 'BS in Computer Science',
      company: 'Academic Institution',
      details: 'Acquired extensive foundations in data structures, algorithms, database designs, computer networking, systems analysis, and software development methodologies. Actively serving as team lead in laboratory projects.'
    },
    {
      date: '2024 - Present',
      title: 'Front-End Template Developer & Creator',
      company: 'Freelance Web Development',
      details: 'Design, program, and commercialize premium user-interface templates and components on digital distribution storefronts including Lemon Squeezy and Payhip. Architect modular, highly performance-optimized web elements to align with client configurations.'
    }
  ];

  return (
    <section id="experience" className="experience-section container section-padding">
      <div className="section-header">
        <span className="section-tag">Career Journey</span>
        <h2 className="section-title">Education & Milestones</h2>
        <div className="section-divider"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-badge"></div>
            <div className="timeline-card">
              <span className="timeline-date">{exp.date}</span>
              <h3 className="timeline-title">{exp.title}</h3>
              <h4 className="timeline-subtitle">{exp.company}</h4>
              <p className="timeline-details">{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
