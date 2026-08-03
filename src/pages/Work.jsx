import { Link } from "react-router-dom";
import "./Work.css";
import work_list from "../work/work_list";

export default function Work() {
  return (
    <div className="work-container">
      <h1>Projects</h1>
      <p>Here's a quick look at various notable projects I have worked on over the last three years. Some are quick side projects, while others are more substantial endeavors. Click to learn more about each one.</p>
      <p>Note: This page is a work in progress.</p>
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
