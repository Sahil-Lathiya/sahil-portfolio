import React, { useEffect, useRef } from 'react';

const DEGREES = [
  {
    period: '2024 – 2026',
    degree: 'MSc Business and Data Analytics',
    university: 'Ravensbourne University London',
    location: 'London, UK',
    detail: 'Expected graduation 2026',
  },
  {
    period: '2020 – 2024',
    degree: 'B.Tech in Information Technology',
    university: 'P.P. Savani University',
    location: 'Gujarat, India',
    detail: 'CGPA: 8.13 / 10',
  },
];

const CERTS = [
  {
    icon: 'fas fa-award',
    name: 'GATE 2024',
    org: 'Qualified — Graduate Aptitude Test in Engineering',
  },
  {
    icon: 'fas fa-laptop-code',
    name: 'Full Stack Web Development',
    org: 'Apna College',
  },
  {
    icon: 'fas fa-sitemap',
    name: 'Data Structures & Algorithms',
    org: 'Code Help',
  },
  {
    icon: 'fas fa-microchip',
    name: 'Advanced IoT with Emphasis on Raspberry Pi',
    org: 'Professional Certification',
  },
];

function Education() {
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

  return (
    <section className="education section" id="education" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow fade-up">Background</p>
        <h2 className="section-title fade-up fade-up-d1">Education &amp; Certifications</h2>
        <p className="section-sub fade-up fade-up-d2">
          Two degrees across two countries — grounded in engineering, sharpened in analytics.
        </p>

        <div className="edu-grid">
          {/* Timeline */}
          <div>
            <div className="timeline fade-up fade-up-d3">
              {DEGREES.map((d, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-dot" aria-hidden="true"></div>
                  <div className="timeline-period">{d.period}</div>
                  <div className="timeline-deg">{d.degree}</div>
                  <div className="timeline-uni">
                    {d.university} &mdash; {d.location}
                  </div>
                  <span className="timeline-detail">
                    <i className="fas fa-circle-dot" style={{ fontSize: '0.55rem' }} aria-hidden="true"></i>
                    {d.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="fade-up fade-up-d4">
            <p className="certs-title">Certifications &amp; Achievements</p>
            <div className="certs-list">
              {CERTS.map((c, i) => (
                <div className="cert-card" key={i}>
                  <div className="cert-icon">
                    <i className={c.icon} aria-hidden="true"></i>
                  </div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-org">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
