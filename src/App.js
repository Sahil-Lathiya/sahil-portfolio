import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: '-60px 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleDark = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header darkMode={darkMode} toggleDark={toggleDark} activeSection={activeSection} />
      <main>
        <Hero darkMode={darkMode} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
