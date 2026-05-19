import React, { useEffect, useRef } from 'react';
import Carousel from './Carousel';

/* ─── Project data ─── */
const XAI_IMGS = Array.from({ length: 10 }, (_, i) => `/xai-screenshot${i + 1}.png`);
const PNEUMONIA_IMGS = Array.from({ length: 6 }, (_, i) => `/pneumonia${i + 1}.png`);
const WANDERLUST_IMGS = Array.from({ length: 10 }, (_, i) => `/wonderlust${i + 1}.png`);
const PPSU_IMGS = Array.from({ length: 8 }, (_, i) => `/ppsu${i + 1}.png`);

const FEATURED = {
  num: '01',
  title: 'XAI Recommender',
  date: '2024 – 2025',
  live: 'https://www.xairecommender.me/',
  github: 'https://github.com/Sahil-Lathiya/xai-recommender',
  stack: ['XGBoost', 'SHAP', 'GPT-4o-mini', 'FastAPI', 'React', 'Vite',
          'DigitalOcean', 'Supabase', 'pgvector', 'Docker', 'JWT', 'Python'],
  desc: `Production-grade explainable AI recommendation engine that answers both "what" and "why."
  Trained on 50,000 Amazon Reviews (2023), the system combines XGBoost ranking with SHAP
  TreeExplainer for mathematically exact feature-level explanations, and GPT-4o-mini
  (via LangChain) to generate natural-language summaries of every recommendation.`,
  bullets: [
    '8 hand-engineered features with rank:pairwise XGBoost objective across 200 trees',
    '4-layer TTL cache system — ~150ms fresh inference latency, <5ms cached',
    'SHAP TreeExplainer (~5ms per call) with counterfactual XAI support',
    'JWT + bcrypt authentication, Dockerised deployment on DigitalOcean Frankfurt',
    'React dashboard with Recharts visualisations (waterfall, area, pie charts)',
    'Hard-capped OpenAI spend at $10/mo — actual usage under $1/mo with caching',
  ],
  carousel: XAI_IMGS,
  stats: [
    { val: '50K+', key: 'Amazon Reviews (training data)' },
    { val: '<5ms', key: 'Cached inference latency' },
    { val: '~$12/mo', key: 'Total cloud cost (Student Pack)' },
  ],
};

const STANDARD = [
  {
    num: '02',
    title: 'Pneumonia Detection AI',
    date: 'MSc Project · 2024 – 2025',
    carousel: PNEUMONIA_IMGS,
    imageAlt: 'Pneumonia detection model results and Grad-CAM visualisation',
    github: 'https://github.com/Sahil-Lathiya/pneumonia_prediction',
    live: null,
    stack: ['TensorFlow', 'Keras', 'ResNet50', 'MobileNetV2', 'Grad-CAM',
            'Python', 'CUDA', 'Scikit-learn', 'Matplotlib'],
    desc: `Deep learning comparison study for automated pneumonia detection from chest X-rays,
    built to MSc research standard with EU AI Act compliance documentation.
    Compared three architectures on 5,856 pediatric chest X-rays sourced from Kaggle.`,
    bullets: [
      'ResNet50 achieved 95.64% accuracy · 98.97% recall · AUC 0.992 (best model)',
      'MobileNetV2: 90.54% accuracy · 96.41% recall — 13× smaller than ResNet50',
      'Grad-CAM visualisations show exactly which lung regions triggered each prediction',
      'Class imbalance handled via weighted loss functions (74% pneumonia in training data)',
      'Data augmentation: rotation, zoom, flip, shift — trained with Adam lr=1e-4',
      '3.59% miss rate disclosed in EU AI Act compliance documentation',
    ],
    reverse: false,
  },
  {
    num: '03',
    title: 'Wanderlust — Property Rental Platform',
    date: 'Jul 2023 – Nov 2023',
    carousel: WANDERLUST_IMGS,
    imageAlt: 'Wanderlust full-stack rental platform screenshots',
    github: 'https://github.com/Sahil-Lathiya/Wanderlust-Clone',
    live: 'https://stayvista-airbnb-clone.onrender.com',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS',
            'Bootstrap', 'Passport.js', 'Cloudinary', 'Render', 'Git'],
    desc: `Full-stack Airbnb-inspired property rental platform built from scratch.
    Users can list, discover, and book rental properties with secure authentication,
    image hosting via Cloudinary, and a mobile-friendly responsive UI.`,
    bullets: [
      'Session-based authentication with Passport.js — login, register, password reset',
      'RESTful API with MongoDB + Mongoose — User, Listing, and Review schemas',
      'Cloudinary integration for image uploads on property listings',
      'Route protection and secure session management for access control',
      'Reusable EJS components for listings, search, filters, and booking forms',
      'Deployed live on Render — accessible at the link above',
    ],
    reverse: true,
  },
  {
    num: '04',
    title: 'PPSU College Mobile App',
    date: 'Jan 2024 – May 2024',
    carousel: PPSU_IMGS,
    carouselContain: true,
    imageAlt: 'PPSU College App screenshots showing various screens',
    github: null,
    live: null,
    stack: ['Android SDK', 'Java', 'Firebase Auth', 'Firebase Realtime DB',
            'XML', 'Git', 'Push Notifications'],
    desc: `Native Android app built for P.P. Savani University to give students and
    faculty a single place for college information, scheduling, and real-time
    announcements. Designed for reliability and scalability.`,
    bullets: [
      'Firebase Authentication — secure sign-up, login, and password reset flow',
      'Firebase Realtime Database — instant updates for events and announcements',
      'Course scheduling module with real-time data synchronisation',
      'In-app messaging and push notification system for college broadcasts',
      'Clean XML UI with Android SDK, following Material Design principles',
      'Built for scalability — architecture supports future feature additions',
    ],
    reverse: false,
  },
  {
    num: '05',
    title: 'IoT-Based Car Parking System',
    date: 'Jan 2023 – Apr 2023',
    image: '/IOT Project.png',
    imageAlt: 'IoT-based automated car parking system diagram',
    github: null,
    live: null,
    stack: ['IoT Sensors', 'Microcontrollers', 'C/C++', 'Cloud Server',
            'Networking', 'Mobile App'],
    desc: `Automated smart parking system using IoT sensor networks to monitor and
    manage parking occupancy in real time. The system eliminates the need for manual
    monitoring by transmitting live data from sensors to a cloud server.`,
    bullets: [
      'Sensor-based occupancy detection — monitors each parking spot individually',
      'Microcontroller integration sends real-time data to a cloud server via networking',
      'Mobile app interface for users to check availability and receive alerts',
      'Automated entry and exit management — no manual intervention required',
      'Alert system notifies drivers when spots become available nearby',
    ],
    reverse: true,
  },
];

function useScrollReveal(ref) {
  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.08 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [ref]);
}

function FeaturedCard({ p }) {
  return (
    <div className="project-card-featured fade-up">
      <div className="featured-top">
        <div>
          <div className="project-num">{p.num}</div>
          <h3 className="project-title">{p.title}</h3>
          <div className="project-date-str">{p.date}</div>
          <p className="project-desc" style={{ maxWidth: '680px' }}>{p.desc.trim()}</p>
          <ul className="project-desc" style={{ paddingLeft: '18px', marginBottom: '24px' }}>
            {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="project-stack">
            {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
          </div>
        </div>

        <div className="project-links" style={{ flexDirection: 'column', alignItems: 'flex-end', gap: '10px', flexShrink: 0 }}>
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <i className="fas fa-external-link-alt" aria-hidden="true"></i>
            Live Demo
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            GitHub
          </a>
        </div>
      </div>

      {p.carousel && (
        <div style={{
          marginTop: '36px',
          borderRadius: '12px',
          overflow: 'hidden',
          aspectRatio: '16 / 9',
          border: '1px solid var(--border)',
        }}>
          <Carousel images={p.carousel} alt="XAI Recommender dashboard" />
        </div>
      )}

      <div className="featured-stats">
        {p.stats.map((s) => (
          <div className="featured-stat" key={s.key}>
            <div className="featured-stat-val">{s.val}</div>
            <div className="featured-stat-key">{s.key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StandardCard({ p }) {
  return (
    <div className={`project-card${p.reverse ? ' reverse' : ''} fade-up`}>
      {/* Image / Carousel side */}
      <div
        className="project-image-side"
        style={p.carouselContain ? { aspectRatio: 'unset', height: '420px' } : {}}
      >
        {p.carousel ? (
          <Carousel
            images={p.carousel}
            alt={p.imageAlt}
            objectFit={p.carouselContain ? 'contain' : 'cover'}
          />
        ) : (
          <img
            src={p.image}
            alt={p.imageAlt}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>

      {/* Content side */}
      <div className="project-content">
        <div className="project-num">{p.num}</div>
        <h3 className="project-title">{p.title}</h3>
        <div className="project-date-str">{p.date}</div>

        <p className="project-desc">{p.desc.trim()}</p>

        <ul className="project-desc" style={{ paddingLeft: '18px', marginBottom: '8px' }}>
          {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <div className="project-stack">
          {p.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
        </div>

        <div className="project-links">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
              GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              Live Demo
            </a>
          )}
          {!p.github && !p.live && (
            <span className="tag" style={{ fontStyle: 'italic' }}>No public repo</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-eyebrow fade-up">Selected Work</p>
        <h2 className="section-title fade-up fade-up-d1">Projects</h2>
        <p className="section-sub fade-up fade-up-d2">
          Real systems, real data, real infrastructure — not toy demos.
        </p>

        <div className="projects-list">
          <FeaturedCard p={FEATURED} />
          {STANDARD.map((p) => <StandardCard key={p.num} p={p} />)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
