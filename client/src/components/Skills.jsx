import { useState } from 'react';
import StarRating from './StarRating';

const SKILLS_DATA = {
  languages: [
    { name: 'JavaScript (ES6+)', level: 4.5 },
    { name: 'Python', level: 4.0 },
    { name: 'C++', level: 3.5 },
    { name: 'SQL', level: 4.0 },
    { name: 'HTML5 / CSS3', level: 4.5 }
  ],
  frontend: [
    { name: 'React.js', level: 4.5 },
    { name: 'Next.js', level: 3.5 },
    { name: 'Tailwind CSS', level: 4.5 },
    { name: 'Responsive Design', level: 4.5 },
    { name: 'Vanilla DOM Manipulation', level: 4.5 }
  ],
  backend: [
    { name: 'Node.js / Express', level: 4.0 },
    { name: 'RESTful APIs', level: 4.5 },
    { name: 'MySQL / PostgreSQL', level: 4.0 },
    { name: 'MongoDB', level: 3.5 },
    { name: 'Firebase', level: 4.0 }
  ],
  'iot-tools': [
    { name: 'ESP8266 & ESP32 Microcontrollers', level: 4.5 },
    { name: 'Arduino IDE / C++ Firmware', level: 4.0 },
    { name: 'Git & GitHub Version Control', level: 4.5 },
    { name: 'Linux Command Line & Bash', level: 4.0 },
    { name: 'Ollama Local LLM Deployments', level: 3.5 }
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'iot-tools', label: 'IoT & DevTools' }
  ];

  return (
    <section id="skills" className="skills-section container section-padding">
      <div className="section-header">
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">My Tech Toolbox</h2>
        <div className="section-divider"></div>
      </div>

      {/* Skills Navigation tabs */}
      <div className="skills-tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`skills-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Display Grid */}
      <div className="skills-content-container">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`skills-grid ${activeTab === tab.id ? 'active' : ''}`}
            id={tab.id}
            style={{ display: activeTab === tab.id ? 'grid' : 'none' }}
          >
            {SKILLS_DATA[tab.id].map(skill => (
              <div className="skill-pill-card" key={skill.name}>
                <div className="skill-header-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-fraction">{skill.level}/5</span>
                </div>
                <StarRating level={skill.level} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
