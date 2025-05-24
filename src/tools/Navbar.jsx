import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import instagramLogo from "./../assets/instagram_logo.png";
import linkedinLogo from "./../assets/linkedin_logo.png";
import githubLogo from "./../assets/github_logo.png";
import blueskyLogo from "./../assets/bluesky_logo.png";
import darkGithubLogo from "./../assets/github_logo_dark.png";
import darkLinkedinLogo from "./../assets/linkedin_logo_dark.png";
import darkInstagramLogo from "./../assets/instagram_logo_dark.png";
import darkBlueskyLogo from "./../assets/bluesky_logo_dark.png";

const SocialLink = ({ logo, link, description }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={description} className="social-icon" />
    </a>
    );
}

export default function Navbar({ toggleDarkMode, isDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Joe Moran Online</div>
      <button className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? "🗙" : "☰"}
      </button>
      <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
        <Link to="/hobbies" onClick={() => setIsMobileMenuOpen(false)}>Hobbies</Link>
        <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        <div className="social-links" onClick={() => setIsMobileMenuOpen(false)}>
          <SocialLink logo={isDarkMode ? darkInstagramLogo : instagramLogo} link="https://instagram.com/joemoraninsta" description="Instagram" />
          <SocialLink logo={isDarkMode ? darkGithubLogo : githubLogo} link="https://github.com/Thejmqn" description="GitHub" />
          <SocialLink logo={isDarkMode ? darkBlueskyLogo : blueskyLogo} link="https://bsky.app/profile/joemoran.bsky.social" description="BlueSky" />
          <SocialLink logo={isDarkMode ? darkLinkedinLogo : linkedinLogo} link="https://www.linkedin.com/in/joseph-moran-in/" description="LinkedIn" />
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};
