import { Link } from "react-router-dom";
import "./Notes.css";
import notes_list from "../notes/notes_list";

export default function Notes() {
  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <p>Welcome to the Notes page. This is not a "blog", but rather observations about what I have been doing recently or something I have been thinking about. There are enough blogs in this world to be honest. The goal of this is to provide some marginally useful, and highly sarcastic, insights into pointless topics (and my life).</p>
      <p>In the future, I may make some videos about these articles. Stay tuned, possibly.</p>
      <div className="notes-grid">
        {notes_list.map((article, index) => (
          <Link to={article.link} key={index} className="note-preview">
            <img src={article.image} alt={article.title} className="note-image" />
            <h3>{article.title}</h3>
            <p>{article.preview}</p>
            <div className="note-date">{article.date}</div>
          </Link>
        )).reverse()}
      </div>
    </div>
  );
}