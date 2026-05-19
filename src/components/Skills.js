import React, { useEffect, useRef } from 'react';

const SKILL_GROUPS = [
  {
    name: 'AI / ML',
    icon: 'fas fa-brain',
    skills: ['XGBoost', 'TensorFlow', 'Keras', 'SHAP', 'Grad-CAM', 'Scikit-learn',
             'Transfer Learning', 'LangChain', 'GPT-4o-mini', 'Pandas', 'NumPy'],
  },
  {
    name: 'Backend',
    icon: 'fas fa-server',
    skills: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'Passport.js',
             'Docker', 'JWT', 'REST APIs', 'Uvicorn'],
  },
  {
    name: 'Frontend',
    icon: 'fas fa-laptop-code',
    skills: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3',
             'EJS', 'Bootstrap', 'Responsive Design'],
  },
  {
    name: 'Databases',
    icon: 'fas fa-database',
    skills: ['PostgreSQL', 'pgvector', 'MongoDB', 'Mongoose',
             'MySQL', 'Firebase Realtime DB', 'Supabase', 'SQLAlchemy'],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'fas fa-cloud',
    skills: ['DigitalOcean', 'Vercel', 'Render', 'Docker Compose',
             'GitHub Actions', 'Cloudinary', 'NVIDIA CUDA'],
  },
  {
    name: 'Languages & Tools',
    icon: 'fas fa-code',
    skills: ['Java', 'C', 'C++', 'Android SDK', 'XML', 'Excel',
             'Git', 'GitHub', 'Kali Linux', 'Matplotlib'],
  },
];

function Skills() {
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
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow fade-up">What I Work With</p>
        <h2 className="section-title fade-up fade-up-d1">Technical Skills</h2>
        <p className="section-sub fade-up fade-up-d2">
          From raw data to deployed infrastructure — the full stack.
        </p>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <div
              className={`skill-group fade-up fade-up-d${Math.min(i + 1, 5)}`}
              key={group.name}
            >
              <div className="skill-group-name">
                <i className={group.icon} aria-hidden="true" style={{ marginRight: '6px' }}></i>
                {group.name}
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
