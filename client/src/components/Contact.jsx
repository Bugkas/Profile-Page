import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusText, setStatusText] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map form element IDs to state keys
    const fieldMap = {
      'form-name': 'name',
      'form-email': 'email',
      'form-subject': 'subject',
      'form-message': 'message'
    };
    setFormData(prev => ({
      ...prev,
      [fieldMap[id]]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusText('Please fill out all required fields.');
      return;
    }

    setStatus('sending');
    setStatusText('');

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setStatusText('Thank you! Your message was sent and saved successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusText(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setStatusText('Could not connect to the server. Please check your internet connection.');
    }
  };

  // Automatically clear status message after a brief period
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setStatusText('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="contact-section container section-padding">
      <div className="section-header">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Let's Build Something Together</h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Have an interesting project, internship opportunity, or just want to chat? Reach out through any
            of the channels below or fill out the contact form!
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-item-text">
                <span>Email Me</span>
                <a href="mailto:echotagacy0223@gmail.com">echotagacy0223@gmail.com</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="contact-item-text">
                <span>GitHub Profile</span>
                <a href="https://github.com/Bugkas" target="_blank" rel="noopener noreferrer">github.com/Bugkas</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="form-name"
                required
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="form-name">Full Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="form-email"
                required
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="form-email">Email Address</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="form-subject"
                required
                placeholder=" "
                value={formData.subject}
                onChange={handleChange}
              />
              <label htmlFor="form-subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea
                id="form-message"
                required
                placeholder=" "
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="form-message">Your Message</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
            {statusText && (
              <div className={`form-status-message ${status}`}>
                {statusText}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
