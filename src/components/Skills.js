import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <motion.h2

          className="section-title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ul style={{ margin: "0" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Programming Languages:</strong>  Python(Basic), C, C++, Java, JavaScript
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Web Technologies:</strong> React.js, Node.js, Express.js,
              HTML, CSS
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Database Management:</strong> MySQL, Firebase Realtime
              Database, MongoDB
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Tools and Platforms:</strong> Power BI, Excel, Android SDK, Git, GitHub
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Operating Systems:</strong> Windows, Kali Linux
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
