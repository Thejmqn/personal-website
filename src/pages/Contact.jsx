import "./Contact.css";
import instagramLogo from "./../assets/instagram_logo.png";
import linkedinLogo from "./../assets/linkedin_logo.png";
import githubLogo from "./../assets/github_logo.png";
import blueskyLogo from "./../assets/bluesky_logo.png";
import darkGithubLogo from "./../assets/github_logo_dark.png";
import darkLinkedinLogo from "./../assets/linkedin_logo_dark.png";
import darkInstagramLogo from "./../assets/instagram_logo_dark.png";
import darkBlueskyLogo from "./../assets/bluesky_logo_dark.png";

export default function Contact({ darkMode }) {
    const emails = [
        {
        label: "General inquiries",
        address: "mail@josephmoran.org"
        },
        {
        label: "School related",
        address: "jav3fh@virginia.edu"
        },
        {
        label: "Development / technical questions",
        address: "rtjmqn@gmail.com"
        }
    ];

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you’d like to get in touch, you can reach out using the appropriate email below:</p>

      <div className="email-list">
        {emails.map((email, index) => (
          <div key={index} className="email-entry">
            <div className="email-label">{email.label}</div>
            <a href={`mailto:${email.address}`} className="email-link">
              {email.address}
            </a>
          </div>
        ))}
      </div>

      <p>Or, feel free to reach out on any of the platforms below:</p>

      <div className="contact-socials">
        <a href="https://github.com/Thejmqn" target="_blank" rel="noopener noreferrer">
          <img src={darkMode ? darkGithubLogo : githubLogo} alt="GitHub" />
        </a>
        <a href="https://bsky.app/profile/joemoran.bsky.social" target="_blank" rel="noopener noreferrer">
          <img src={darkMode ? darkBlueskyLogo : blueskyLogo} alt="BlueSky" />
        </a>
        <a href="https://instagram.com/joemoraninsta" target="_blank" rel="noopener noreferrer">
          <img src={darkMode ? darkInstagramLogo : instagramLogo} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/joseph-moran-linkedin/" target="_blank" rel="noopener noreferrer">
          <img src={darkMode ? darkLinkedinLogo : linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
