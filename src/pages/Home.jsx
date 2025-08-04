import { Link } from "react-router-dom";
import photo from "./../assets/file.jpg";

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
            Welcome to the Joe Moran homepage. My name, unsurprisingly, is Joe Moran, and I am a third-year Computer Science major at the University of Virginia in Charlottesville.
            This website exists for both professional and personal purposes, which you can learn more about by exploring around.
        </p>
        <p>
          Professionally, I have worked as a software developer for the past three years at various government contractors. I have a passion for software development,
          system design, and especially network and Internet architecture. To see some of my past projects, 
          please review my resume or the <Link to="/work">Past Work</Link> page.
        </p>
        <p>
            On the personal side of things, I have interests in topics such as sports, politics, music, design, and much more. 
            I make biweekly <Link to="/notes">"Notes"</Link> articles about whatever topics come to mind in my life.
            I am also working on the <Link to="/misc">Misc</Link> page to describe my interests and hobbies more in-depth. For now, you can check out
            my <Link to="/contact">Social Media</Link> pages for more information. Thank you for visiting Joe Moran Online.
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