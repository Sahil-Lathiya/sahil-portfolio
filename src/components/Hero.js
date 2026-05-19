import React, { useEffect, useRef } from 'react';

function Hero({ darkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const count = Math.min(55, Math.floor((canvas.width * canvas.height) / 18000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.8,
    }));

    const LINK_DIST = 130;
    const accentRgb = darkMode ? '0,217,200' : '0,168,152';

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accentRgb}, 0.35)`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = 0.12 * (1 - dist / LINK_DIST);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${accentRgb}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [darkMode]);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left — content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            Open to work &nbsp;·&nbsp; London, UK 🇬🇧
          </div>

          <h1 className="hero-title">
            I build <span className="hero-title-accent">AI systems</span><br />
            that work in the<br />real world.
          </h1>

          <p className="hero-desc">
            MSc Data Analytics student at Ravensbourne University London.
            I ship production ML — from explainable recommenders on live cloud
            infrastructure to deep learning models for clinical imaging.
            Clean code, real data, honest outcomes.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See My Projects
              <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href="/Sahil Lathiya - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              download
            >
              View CV
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Sahil-Lathiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub profile"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-lathiya-8b4b95202/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a
              href="https://leetcode.com/u/SD123lathiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LeetCode profile"
            >
              <i className="fas fa-code" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Right — avatar */}
        <div className="hero-visual">
          <div className="hero-avatar">
            <img
              src="/profile.jpg"
              alt="Sahil Lathiya"
              className="hero-avatar-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
