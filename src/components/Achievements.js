import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  return (
    <section className="achievements">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Certifications and Achievements
        </motion.h2>

        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.8 }}  // Initial state with opacity and scale
          animate={{ opacity: 1, scale: 1 }}    // Animate to full opacity and normal scale
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, opacity: 0.9 }} // Hover effect: scale and opacity
        >
          <p>GATE 2024: Qualified</p>
          <p>Full Stack Web Development on Apna College</p>
          <p>Data Structure and Algorithm on Code Help</p>
          <p>Advanced IoT with Emphasis on Raspberry Pi</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
