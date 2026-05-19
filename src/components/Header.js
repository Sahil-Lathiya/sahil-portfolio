import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#about',     label: 'About' },
  { href: '#skills',    label: 'Skills' },
  { href: '#projects',  label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact',   label: 'Contact' },
];

function Header({ darkMode, toggleDark, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo" aria-label="Sahil Lathiya — home">
            <span className="nav-logo-text">SL</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <a
              href="/Sahil%20Lathiya%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cv"
              download
            >
              <i className="fas fa-download" aria-hidden="true"></i>
              Download CV
            </a>

            <button
              className="theme-toggle"
              onClick={toggleDark}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
            </button>

            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${mobileOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile slide-in menu */}
      <div
        className={`mobile-menu${mobileOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`mobile-nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}

        <div className="mobile-menu-footer">
          <a
            href="/Sahil%20Lathiya%20-%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            download
            onClick={closeMenu}
          >
            <i className="fas fa-download" aria-hidden="true"></i>
            Download CV
          </a>
          <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
