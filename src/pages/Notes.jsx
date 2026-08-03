import { Link } from "react-router-dom";
import "./Notes.css";
import notes_list from "../notes/notes_list";
import { useState } from "react";

export default function Notes() {
  const tags = ["All", "Engineering", "Misc", "Music", "UVA", "Personal", "Politics", "Sports", "Technology", "Video"];
  const [tag, setTag] = useState("All");

  return (
    <div className="notes-container">
      <h1>Notes</h1>
      <p>Welcome to the Notes page. This page contains various observations and thoughts about any random topic that I have been thinking about recently. Usually, the topic is tangentially related to either my life or recent world events. 
        Some notes stick to one particular subject, while others are a lot more free-form. New notes are released on Sundays, with no particular schedule outside of that.</p>
      <p>Some articles contain videos that complement the written content and are found on my <Link to="https://www.youtube.com/@JoeMoranYT">YouTube channel</Link>. Eventually, I hope to turn more of these articles into videos or podcasts. Stay tuned.</p>
      <div className="tags">
        <span className="tags-label">Sort by:</span>
        {tags.map(t => (
          <button key={t} className={tag === t ? "active" : ""} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      <div className="notes-grid">
        {notes_list
        .filter(article => !tag || tag === "All" || article.tags?.includes(tag))
        .map((article, index) => (
          <Link to={article.link} key={index} className="note-preview">
            <img src={article.image} alt={article.title} className="note-image" />
            <h3>{article.title}</h3>
            <p>{article.preview}</p>
            <div className="note-date">{article.date}</div>
          </Link>
        ))
        .reverse()}
      </div>
    </div>
  );
}