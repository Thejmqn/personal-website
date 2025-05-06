import { useState } from 'react';

// Create a style object for our CSS
const styles = {
  // General styles
  app: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column'
  },
  
  // Navigation styles
  navbar: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%'
  },
  navContainer: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navItems: {
    display: 'flex',
    gap: '24px'
  },
  navButton: {
    padding: '8px 12px',
    borderRadius: '4px',
    background: 'transparent',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  navButtonActive: {
    backgroundColor: '#4b5563',
    fontWeight: '600'
  },
  navName: {
    fontWeight: '600',
    fontSize: '18px'
  },
  
  // Main content styles
  main: {
    flex: '1',
    width: '100%'
  },
  container: {
    width: '100%',
    margin: '0 auto',
    padding: '20px 16px'
  },
  contentCentered: {
    width: '100%',
    margin: '0 auto',
    textAlign: 'center'
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
    textAlign: 'center',
    color: '#1f2937'
  },
  homeTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#1f2937'
  },
  
  // Card styles
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '20px',
    width: '100%'
  },
  cardText: {
    fontSize: '18px',
    color: '#4b5563',
    marginBottom: '32px'
  },
  profilePhoto: {
    width: '192px',
    height: '192px',
    borderRadius: '50%',
    backgroundColor: '#d1d5db',
    margin: '0 auto 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280'
  },
  paragraph: {
    color: '#4b5563',
    marginBottom: '24px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px'
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  secondaryButton: {
    backgroundColor: '#4b5563',
    color: 'white',
    padding: '8px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  
  // Footer styles
  footer: {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '16px',
    textAlign: 'center',
    width: '100%'
  },
  footerContent: {
    width: '100%',
    margin: '0 auto'
  }
};

const Navbar = ({ onNavigate, activePage, name }) => {
  const navItems = ["Home", "About", "Projects", "Hobbies", "Contact"];
  
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <div style={styles.navItems}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              style={{
                ...styles.navButton,
                ...(activePage === item ? styles.navButtonActive : {})
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div style={styles.navName}>{name || "Your Name"}</div>
      </div>
    </nav>
  );
};

const HomePage = ({ name }) => {
  return (
    <div style={styles.container}>
      <div style={styles.contentCentered}>
        <h1 style={styles.homeTitle}>
          Welcome to {name}'s Personal Website
        </h1>
        <div style={styles.card}>
          <p style={styles.cardText}>
            Hello! I'm {name}. This is my personal website where I share my background,
            projects, hobbies, and ways to get in touch with me.
          </p>
          <div style={styles.profilePhoto}>
            <span>Profile Photo</span>
          </div>
          <p style={styles.paragraph}>
            Feel free to explore the different sections using the navigation bar above.
            You'll find information about my professional background, projects I've worked on,
            my personal interests, and ways to contact me.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.primaryButton}>View Projects</button>
            <button style={styles.secondaryButton}>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div style={styles.container}>
    <h1 style={styles.pageTitle}>About Me</h1>
    <div style={styles.card}>
      <p style={styles.paragraph}>About page content will go here.</p>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div style={styles.container}>
    <h1 style={styles.pageTitle}>My Projects</h1>
    <div style={styles.card}>
      <p style={styles.paragraph}>Projects page content will go here.</p>
    </div>
  </div>
);

const HobbiesPage = () => (
  <div style={styles.container}>
    <h1 style={styles.pageTitle}>My Hobbies</h1>
    <div style={styles.card}>
      <p style={styles.paragraph}>Hobbies page content will go here.</p>
    </div>
  </div>
);

const ContactPage = () => (
  <div style={styles.container}>
    <h1 style={styles.pageTitle}>Contact Me</h1>
    <div style={styles.card}>
      <p style={styles.paragraph}>Contact page content will go here.</p>
    </div>
  </div>
);

export default function PersonalWebsite() {
  const [activePage, setActivePage] = useState("Home");
  const [name, setName] = useState("John Doe");
  
  const renderPage = () => {
    switch(activePage) {
      case "Home":
        return <HomePage name={name} />;
      case "About":
        return <AboutPage />;
      case "Projects":
        return <ProjectsPage />;
      case "Hobbies":
        return <HobbiesPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage name={name} />;
    }
  };
  
  return (
    <div style={styles.app}>
      <Navbar 
        onNavigate={setActivePage} 
        activePage={activePage} 
        name={name} 
      />
      <main style={styles.main}>
        {renderPage()}
      </main>
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}