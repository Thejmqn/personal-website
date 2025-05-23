import { Link } from "react-router-dom";
import instagramLogo from "./../assets/instagram_logo.png";
import linkedinLogo from "./../assets/linkedin_logo.png";
import githubLogo from "./../assets/github_logo.png";
import blueskyLogo from "./../assets/bluesky_logo.png";
import darkGithubLogo from "./../assets/github_logo_dark.png"
import darkLinkedinLogo from "./../assets/linkedin_logo_dark.png"
import darkInstagramLogo from "./../assets/instagram_logo_dark.png"
import darkBlueskyLogo from "./../assets/bluesky_logo_dark.png"

const SocialLink = ({ logo, link, description }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={description} className="social-icon" />
    </a>
    );
}

export default function Navbar({ toggleDarkMode, isDarkMode }) {
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
