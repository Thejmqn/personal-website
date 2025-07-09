import { Link } from "react-router-dom";
import "./Misc.css";
import misc_list from "../misc/misc_list";

export default function Misc() {
  return (
    <div className="misc-container">
      <h1>Hobbies / Misc</h1>
      <p>These are various hobbies. Click to learn more about each one. NOTE: This page is a misc in progress.</p>
      <div className="misc-grid">
        {misc_list.map((project, index) => (
          <Link to={project.link} key={index} className="misc-preview">
            <img src={project.image} alt={project.title} className="misc-image" />
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
