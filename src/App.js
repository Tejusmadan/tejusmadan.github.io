import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

const SectionCard = ({ title, children, icon, xp }) => (
  <motion.div
    className="card"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="card-header">
      <span className="emoji">{icon}</span>
      <h2>{title}</h2>
    </div>
    <div className="xp-bar">
      <div className="xp-fill" style={{ width: `${xp}%` }} />
    </div>
    <div>{children}</div>
  </motion.div>
);

function App() {
  return (
    <div className="App">
      <header className="header">
        <motion.img
          src="https://api.dicebear.com/7.x/fun-emoji/svg?seed=you"
          alt="Avatar"
          className="avatar"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi! I'm Tejus
        </motion.h1>
        <p className="tagline">Leveling up as a Full-Stack Developer 🚀</p>
      </header>

      <main className="sections">
        <SectionCard title="About Me" icon="👨‍💻" xp={90}>
          <p>I love turning ideas into code and building playful interfaces!</p>
        </SectionCard>

        <SectionCard title="Projects" icon="🧩" xp={70}>
          <ul>
            <li>Gamified Quiz App</li>
            <li>AI Assistant Chatbot</li>
            <li>React Native Wellness App</li>
          </ul>
        </SectionCard>

        <SectionCard title="Skills" icon="🛠️" xp={60}>
          <p>React, Node.js, Python, SQL, Figma, ML</p>
        </SectionCard>

        <SectionCard title="Contact" icon="📬" xp={50}>
          <p>
            <a href="mailto:you@example.com">
              <FaEnvelope /> Email
            </a>{" "}
            |{" "}
            <a href="https://github.com/yourusername">
              <FaGithub /> GitHub
            </a>{" "}
            |{" "}
            <a href="https://linkedin.com/in/yourusername">
              <FaLinkedin /> LinkedIn
            </a>
          </p>
        </SectionCard>
      </main>

      <footer className="footer">🎮 Keep leveling up every day!</footer>
    </div>
  );
}

export default App;
