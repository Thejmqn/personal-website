import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import instagramLogo from "./assets/instagram_logo.png";
import linkedinLogo from "./assets/linkedin_logo.png";
import githubLogo from "./assets/github_logo.png";
import blueskyLogo from "./assets/bluesky_logo.png";
import darkGithubLogo from "./assets/github_logo_dark.png"
import darkLinkedinLogo from "./assets/linkedin_logo_dark.png"
import darkInstagramLogo from "./assets/instagram_logo_dark.png"
import darkBlueskyLogo from "./assets/bluesky_logo_dark.png"

const SocialLink = ({ isDark, lightLogo, darkLogo, link, description }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={isDark ? darkLogo : lightLogo} alt={description} className="social-icon" />
    </a>
    );
}

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Joe Moran Online</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/contact">Contact</Link>
        <div className="social-links">
          <SocialLink isDark={isDarkMode} lightLogo={instagramLogo} darkLogo={darkInstagramLogo} link="https://instagram.com/joemoraninsta" description="Instagram" />
          <SocialLink isDark={isDarkMode} lightLogo={githubLogo} darkLogo={darkGithubLogo} link="https://github.com/Thejmqn" description="GitHub" />
          <SocialLink isDark={isDarkMode} lightLogo={blueskyLogo} darkLogo={darkBlueskyLogo} link="https://bsky.app/profile/joemoran" description="BlueSky" />
          <SocialLink isDark={isDarkMode} lightLogo={linkedinLogo} darkLogo={darkLinkedinLogo} link="https://www.linkedin.com/in/joseph-moran-in/" description="LinkedIn" />
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Joe Moran Homepage</h1>
      <h2>Notice: This page is currently under construction.</h2>
      <p>
          If you are reading this page, you probably already have a decent idea of who I am. Although if you don't,
          that is pretty cool. I am a Computer Science (yikes) major at the University of Virginia, Charolettsville. 
          I have some slightly unique hobbies, interests, and beliefs, so I will just be throwing whatever I think of onto here if you are interested.
      </p>
      <p>
          I am making this page to create a more free form website where I can express my thoughts and also show off some
          past projects. I think most social media platforms are a bit too restrictive in terms of the customization they allow,
          so I just decided to quickly put together my own page instead. I'll still be posting links to this page on some social media though.
      </p>
    </div>
  );
};

const Placeholder = ({ title }) => (
  <div className="placeholder">
    <h2>{title}</h2>
    <p>This page is under construction. Hopefully by the end of this week...</p>
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About Me" />} />
          <Route path="/projects" element={<Placeholder title="My Projects" />} />
          <Route path="/hobbies" element={<Placeholder title="Hobbies & Interests" />} />
          <Route path="/contact" element={<Placeholder title="Get in Touch" />} />
        </Routes>
      </div>
    </Router>
  );
}
