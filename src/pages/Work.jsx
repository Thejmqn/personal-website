import { Link } from "react-router-dom";
import "./Work.css";
import work_list from "../work/work_list";

export default function Work() {
  return (
    <div className="work-container">
      <h1>Projects</h1>
      <p>Here's a quick look at some things I've built and tinkered with. Click to learn more about each one! NOTE: This page is a work in progress.</p>
      <div className="work-grid">
        {work_list.map((project, index) => (
          <Link to={project.link} key={index} className="work-preview">
            <img src={project.image} alt={project.title} className="work-image" />
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
