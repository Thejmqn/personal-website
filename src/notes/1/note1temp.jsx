import notes_list from "../notes_list";
import { Link } from "react-router-dom";
import freedom_of_speech from "./freedom_of_speech.jpg";
import './../notes_page.css';

export default function Note1() {
  const noteIndex = 0;
  const note = notes_list[noteIndex];

  if (!note) return <div className="note-container">Note not found.</div>;
  
  const prevNote = notes_list[noteIndex + 1];
  const nextNote = notes_list[noteIndex - 1];

  return (
    <div className="note-container">
      <Link to="/notes" className="back-link">← Back to Notes</Link>
      <img src={note.image} alt={note.title} className="note-header-image" />
      <h1>{note.title}</h1>
      <div className="note-date">Published on {note.date}</div>

      <h2>Section Header</h2>
      <p>Here's a paragraph of thoughtful content elaborating on the topic of the note.</p>

      <h2>Another Section</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <img src={freedom_of_speech} alt="Example" className="note-inline-image" />

      <div className="note-nav">
        {prevNote && <Link to={prevNote.link} className="note-nav-link">← {prevNote.title}</Link>}
        {nextNote && <Link to={nextNote.link} className="note-nav-link">{nextNote.title} →</Link>}
      </div>
    </div>
  );
}
