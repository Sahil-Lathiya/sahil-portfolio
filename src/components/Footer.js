import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">Sahil Lathiya</span>
        <span className="footer-copy">© {year} — All rights reserved</span>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
