import { Link } from "react-router-dom";

export default function Placeholder({ title }) {
  return (
    <div className="placeholder">
        <h2>{title}</h2>
        <p>This page is still being worked on. Check back later when I remember this exists.</p>
        <Link to={"/notes/latest"}>Check out the latest Note instead.</Link>
    </div>
  );
};