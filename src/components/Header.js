import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Sahil Lathiya</h1>
        <p>Contact: (+91) 95860 01413 | Email: sahillathiya9@gmail.com</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/sahil-lathiya-8b4b95202/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: '#0A66C2', fontSize: '20px', textDecoration: 'none' }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" style={{ fontSize: '24px', marginRight: '8px' }}></i>
            LinkedIn
          </a>
          <a
            href="https://github.com/Sahil-Lathiya"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: '#333', fontSize: '20px', textDecoration: 'none' }}
            aria-label="GitHub"
          >
            <i className="fab fa-github" style={{ fontSize: '24px', marginRight: '8px' }}></i>
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/SD123lathiya/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: '#FFA116', fontSize: '20px', textDecoration: 'none' }}
            aria-label="LeetCode"
          >
            <i className="fas fa-code" style={{ fontSize: '24px', marginRight: '8px' }}></i>
            LeetCode
          </a>
          <a
            href="/Sahil Lathiya - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: '#D44638', fontSize: '20px', textDecoration: 'none' }}
            aria-label="Resume"
          >
            <i className="fas fa-file-pdf" style={{ fontSize: '24px', marginRight: '8px' }}></i>
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
