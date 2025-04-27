import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ lineHeight: "1.6" }}>
            I'm Sahil, Detail-oriented IT graduate with strong analytical and
            technical skills, seeking a Data Analyst Internship. Skilled in SQL,
            Excel, and data visualization. Passionate about using data to find
            insights and help organizations make smart decisions. .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;