import React, { useEffect, useRef } from 'react';

const STATS = [
  {
    icon: 'fas fa-brain',
    number: '95.64%',
    label: 'Best model accuracy (ResNet50, Pneumonia AI)',
  },
  {
    icon: 'fas fa-database',
    number: '50K+',
    label: 'Training samples processed (Amazon Reviews 2023)',
  },
  {
    icon: 'fas fa-server',
    number: '~$12/mo',
    label: 'Full cloud infrastructure cost (DigitalOcean + Supabase + Vercel)',
  },
];

function About() {
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
      { threshold: 0.12 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow fade-up">About Me</p>
        <h2 className="section-title fade-up fade-up-d1">
          Engineer by training.<br />Builder by instinct.
        </h2>

        <div className="about-grid">
          <div className="about-text fade-up fade-up-d2">
            <p>
              I'm Sahil — a <strong>data analytics postgrad at Ravensbourne University London</strong>,
              building AI systems that actually ship. My work spans production XGBoost recommenders
              with SHAP explainability, deep learning models for clinical imaging, and full-stack
              web platforms serving real users.
            </p>
            <p>
              Before London, I spent four years at <strong>P.P. Savani University in Gujarat</strong>,
              where I graduated with a first-class B.Tech in Information Technology (CGPA 8.13/10)
              and built mobile apps, IoT systems, and web platforms from the ground up.
            </p>
            <p>
              I'm drawn to the space where <strong>machine learning meets engineering rigour</strong>:
              models that explain themselves, infrastructure that stays up, and code that someone
              else can maintain. I'm open to roles in London across AI/ML engineering,
              data analytics, and full-stack development.
            </p>
          </div>

          <div className="stats-col">
            {STATS.map((s, i) => (
              <div className={`stat-card fade-up fade-up-d${i + 2}`} key={i}>
                <div className="stat-icon">
                  <i className={s.icon} aria-hidden="true"></i>
                </div>
                <div>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
