import { Link } from "react-router-dom";

export default function Placeholder({ title }) {
  return (
    <div className="placeholder">
        <h2>{title}</h2>
        <p>This page is temporarily unavailable. Please check back next week, or <Link to={"/contact"}>contact me</Link> if you have any questions.</p>
        <Link to={"/notes/latest"}>Check out the latest Note instead</Link>, or <Link to={"https://github.com/Thejmqn"}>check out my Github portfolio</Link>.
    </div>
  );
};