import React, { useState, useEffect, useRef } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const targets = el.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:sahillathiya14@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow fade-up">Get in Touch</p>
        <h2 className="section-title fade-up fade-up-d1">Let's Talk</h2>
        <p className="section-sub fade-up fade-up-d2">
          Open to London-based roles in AI/ML engineering, data analytics, and
          full-stack development. I reply within 24 hours.
        </p>

        <div className="contact-grid">
          {/* Form */}
          <form
            className="contact-form fade-up fade-up-d3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-group">
              <label className="form-label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                className="form-input"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className="form-input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="form-input"
                name="message"
                placeholder="Tell me about the role or project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              Send Message
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
            </button>

            <p style={{ color: 'var(--text-faint)', fontSize: '0.8rem', marginTop: '2px' }}>
              <i className="fas fa-info-circle" aria-hidden="true"></i>{' '}
              This will open your email client to send directly to Sahil.
            </p>
          </form>

          {/* Contact info */}
          <div className="contact-info fade-up fade-up-d4">
            <div>
              <p className="contact-info-heading">Direct contact</p>
              <p className="contact-info-sub">
                Prefer email? Reach me directly — I check it every day.
              </p>
            </div>

            <div className="contact-items">
              <a
                href="mailto:sahillathiya14@gmail.com"
                className="contact-item"
                aria-label="Email Sahil"
              >
                <div className="contact-item-icon">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                </div>
                sahillathiya14@gmail.com
              </a>

              <a
                href="tel:+447823914975"
                className="contact-item"
                aria-label="Call Sahil"
              >
                <div className="contact-item-icon">
                  <i className="fas fa-phone" aria-hidden="true"></i>
                </div>
                (+44) 7823 914 975
              </a>

              <span className="contact-item" style={{ cursor: 'default' }}>
                <div className="contact-item-icon">
                  <i className="fas fa-location-dot" aria-hidden="true"></i>
                </div>
                London, United Kingdom
              </span>
            </div>

            <div>
              <p className="form-label" style={{ marginBottom: '12px' }}>Find me online</p>
              <div className="contact-socials">
                <a
                  href="https://github.com/Sahil-Lathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sahil-lathiya-8b4b95202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a
                  href="https://leetcode.com/u/SD123lathiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                  aria-label="LeetCode"
                >
                  <i className="fas fa-code" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
