import { Link } from "react-router-dom";
import "./Notes.css";
import notes_list from "../notes/notes_list";

export default function Notes() {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <p>Welcome to my Notes page — a bi-weekly blog where I share my thoughts, experiments, and reflections.</p>
      <div className="notes-grid">
        {notes_list.map((article, index) => (
          <Link to={article.link} key={index} className="note-preview">
            <img src={article.image} alt={article.title} className="note-image" />
            <h3>{article.title}</h3>
            <p>{article.preview}</p>
            <div className="note-date">{article.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}