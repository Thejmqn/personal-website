import { Link } from "react-router-dom";
import photo from "./../assets/file.jpg";
import cat from "./../assets/cat.jpg";

export default function Home() {
  return (
  <div className="home-container">
    <div className="home-intro">
      <figure className="home-figure">
        <img src={photo} alt="Photo of me" className="home-profile-image" />
        <figcaption>Here's a photo of myself staring at my hand. Looks like I still have all five fingers. That's a relief.</figcaption>
      </figure>
      <div className="home-text">
        <h1>Welcome to Joe Moran Online</h1>
        <h2>Notice: This page is currently under construction.</h2>
        <p>
            Welcome to the Joe Moran homepage. My name is Joe Moran (shocker), and I am a Computer Science major at the University of Virginia in Charlottesville.
            I have worked as a software developer for the past three years at various government contractors. This page exists for both
            professional and personal purposes, which you can find more about by exploring around.
        </p>
        <p>
            I am making this page to create a more free form website where I can express my thoughts and also show off some
            past projects. I think most social media platforms are a bit too restrictive in terms of the customization they allow,
            so I just decided to quickly put together my own page instead. I'll still be posting links to this page on some social media though.
        </p>
        <div className="home-buttons">
          <div className="button-group">
            <Link to="/notes" className="home-button notes-button" aria-label="Read My Notes">All Notes</Link>
            <Link to="/notes/latest" className="home-button latest-note-button" aria-label="Latest Note">Latest Note</Link>
            <Link to="/work" className="home-button projects-button" aria-label="See My Projects">Professional</Link>
            <Link to="/misc" className="home-button hobbies-button" aria-label="Miscellaneous Topics">Misc</Link>
            <Link to="/contact" className="home-button contact-button" aria-label="Contact Me">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};