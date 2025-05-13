import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          PROJECT WORK DETAILS
        </motion.h2>

        {/* <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h3>Healthcare Data Analyst Project</h3>
            <a
              href="https://github.com/Sahil-Lathiya/Healthcare-Data-Analysis-Papollo"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", color: "#007acc", textDecoration: "none", fontWeight: "bold", marginTop: "4px", gap: "6px" }}
              aria-label="GitHub Repository"
            >
              <i className="fab fa-github" style={{ fontSize: "20px" }}></i>
              <span style={{ textTransform: "lowercase" }}>github</span>
            </a>
            <span className="project-date" style={{ alignSelf: "flex-end" }}>April 2025</span>
          </div>
          <p>
            <strong>Objective:</strong> To analyze healthcare data and create
            visual dashboards for better decision-making.
          </p>

          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>
              Analyzed patient data, hospital performance, and treatment
              outcomes.
            </li>
            <li>Built interactive dashboards for easy insights.</li>
            <li>Identified trends to help improve healthcare services.</li>
          </ul>

          <p>
            <strong>Approach:</strong>
          </p>
          <ul>
            <li>Collected and cleaned healthcare datasets.</li>
            <li>
              Created visual reports using Power BI with charts and graphs.
            </li>
            <li>
              Shared actionable insights through simple and clear dashboards.
            </li>
          </ul>

          <p>
            <strong>Tools and Technologies Used:</strong> Power BI, Excel, Data
            Analysis, Visualization Techniques
          </p>
          <div className="project-images">
            <img
              src="/healthcare.png"
              alt="Healthcare Data Analyst Project"
              className="project-image project-image-large"
              style={{ width: "500px", height: "auto" }}
            />
          </div>
        </motion.div> */}

        <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>
              Wanderlust – Full-Stack Property Rental Platform
            </h3>
            <span className="project-date">Jul 2023 - Nov 2023</span>
          </div>
          <p style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
            <a
              href="https://stayvista-airbnb-clone.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", color: "#007acc", textDecoration: "none", fontWeight: "bold", gap: "6px" }}
              aria-label="Deployed Project"
            >
              <i className="fas fa-external-link-alt" style={{ fontSize: "16px" }}></i>
              <span style={{ textTransform: "lowercase" }}>deployed project</span>
            </a>
            <a
              href="https://github.com/Sahil-Lathiya/Wanderlust-Clone"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", color: "#007acc", textDecoration: "none", fontWeight: "bold", gap: "6px" }}
              aria-label="GitHub Repository"
            >
              <i className="fab fa-github" style={{ fontSize: "20px" }}></i>
              <span style={{ textTransform: "lowercase" }}>github</span>
            </a>
          </p>
          <p>
            <strong>Objective:</strong> Create a full-featured web application
            similar to Airbnb, allowing users to list, discover, and book rental
            properties with secure authentication and smooth UI.
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Express.js, MongoDB
          </p>
          <ul>
            <li>
              Implemented user authentication using Passport.js with
              session-based login.
            </li>
            <li>
              Designed RESTful APIs and integrated MongoDB with Mongoose for
              storing user and listing data.
            </li>
            <li>
              Handled secure session management and route protection for user
              access control.
            </li>
          </ul>
          <p>
            <strong>Frontend:</strong> EJS, Bootstrap
          </p>
          <ul>
            <li>
              Built dynamic, responsive UI pages using EJS templating and styled
              with Bootstrap.
            </li>
            <li>
              Developed reusable components for listings, search, filters, and
              booking forms.
            </li>
            <li>
              Integrated front-end views with backend data via embedded
              JavaScript and route handling.
            </li>
          </ul>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>User authentication (login, registration, sessions)</li>
            <li>
              Property listing creation with images, pricing, and location
            </li>
            <li>Booking functionality with date selection</li>
            <li>Error handling and validations</li>
            <li>Mobile-friendly design</li>
          </ul>
          <p>
            <strong>Tools/Technologies Used:</strong> Node.js, Express.js,
            MongoDB, Mongoose, EJS, Bootstrap, JavaScript, Passport.js, Git,
            GitHub, Render (deployment)
          </p>
          
          <div className="project-images">
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={`/wonderlust${i + 1}.png`}
                alt={`Wonderlust project ${i + 1}`}
                className="project-image project-image-large"
                style={{ width: "500px", height: "auto" }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>PPSU College App</h3>
            <span className="project-date">Jul 2023 - Nov 2023</span>
          </div>
          <p>
            <strong>Objective:</strong> Develop a user-friendly mobile
            application for PPSU College to facilitate easy access to college
            information and services for students and faculty.
          </p>
          <p>
            <strong>Backend:</strong> Firebase
          </p>
          <ul>
            <li>
              Used Firebase Authentication for user login and registration
            </li>
            <li>
              Implemented Firebase Realtime Database for data storage and
              retrieval
            </li>
          </ul>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>User authentication (sign-up, login, password reset)</li>
            <li>Real-time updates for college events and announcements</li>
            <li>Course information and scheduling</li>
          </ul>
          <p>
            <strong>Tools/Technologies used:</strong> Android SDK and libraries,
            Java, Firebase, XML for UI design, Git for version control
          </p>
          <div className="project-images">
            {[...Array(8)].map((_, i) => (
              <img
                key={i}
                src={`/ppsu${i + 1}.png`}
                alt={`PPSU College App project ${i + 1}`}
                className="project-image"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="project-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>IOT-Based Car Parking System</h3>
            <span className="project-date">Aug 2023 - Dec 2023</span>
          </div>
          <p>
            <strong>Objective:</strong> To develop an automated system that
            monitors and manages car parking spaces using IoT technology.
          </p>
          <p>
            <strong>Features:</strong>
          </p>
          <ul>
            <li>Real-time monitoring of available parking spots.</li>
            <li>Automated entry and exit system for vehicles.</li>
            <li>Create Alerts for parking availability.</li>
          </ul>
          <p>
            <strong>Approach:</strong>
          </p>
          <ul>
            <li>Designed a sensor-based system to detect parking occupancy.</li>
            <li>
              Integrated sensors with microcontrollers to send real-time data to
              a cloud server.
            </li>
            <li>
              Developed a user-friendly interface to display parking status.
            </li>
          </ul>
          <p>
            <strong>Tools and Technologies Used:</strong> IoT Devices,
            Microcontrollers, C/C++, Networking
          </p>
          <div className="project-images">
            <img
              src="/IOT Project.png"
              alt="IOT-Based Car Parking System project"
              className="project-image project-image-large"
              style={{ width: "500px", height: "auto" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
