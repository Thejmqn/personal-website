import { Link } from "react-router-dom";
import photo from "./../assets/file.jpg";

export default function Home() {
  return (
  <div className="home-container">
    <div className="home-intro">
      <figure className="home-figure">
        <img src={photo} alt="Photo of me" className="home-profile-image" />
        <figcaption>Here's a photo of me staring at my hand. Looks like I still have all five fingers. That's a relief.</figcaption>
      </figure>
      <div className="home-text">
        <h1>Welcome to Joe Moran Online</h1>
        <h2>Notice: This page is currently under construction.</h2>
        <p>
            Welcome to the Joe Moran homepage. My name, unsurprisingly, is Joe Moran, and I am a fourth-year student at the University of Virginia in Charlottesville.
            This website exists for both professional and personal purposes, which you can learn more about by exploring around.
        </p>
        <p>
          Professionally, I have worked as a software developer for the past four years at various companies. I have a passion for software development,
          system design, and especially network and Internet architecture. I also have a deep interest in other engineering disciplines, such as Civil and Transportation Engineering. 
          To see some of my past projects, please review my <Link to="/work/resume">Resume</Link> or the <Link to="/work">Past Work</Link> page.
        </p>
        <p>
            On the personal side of things, I have interests in a wide range of topics subjects from sports to politics to music to design, and many more. 
            I make semi-regular <Link to="/notes">"Notes"</Link> articles about various topics that are tangentially related to recent events in both my life and the world.
            Some of these articles also contain supplementary content such as <Link to="https://www.youtube.com/@JoeMoranYT">YouTube videos</Link> or outside links. Check out 
            the <Link to="/contact">Contacts</Link> page for more information. Thank you for visiting Joe Moran Online.
        </p>
      </div>
    </div>
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
  );
};