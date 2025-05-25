import { Link } from "react-router-dom";
import "./Notes.css";
import wanderer from "./../notes/1/wanderer.jpg";
import Note1 from "../notes/note1temp";

export const notes_list = [
    {
      title: "Getting Started with Notes",
      preview: "Every two weeks, I jot down ideas, thoughts, and reflections. This first entry explains why I started this notes page and what you can expect in the future.",
      image: wanderer,
      link: "intro",
      element: <Note1 />
    },
    {
      title: "Thinking in Systems",
      preview: "A short reflection on systems thinking and how it shapes the way I approach problems—technical and otherwise.",
      image: "/images/note2.jpg",
      link: "systems",
      element: <Note1 />
    },
    {
      title: "Getting Started with Notes2",
      preview: "Every two weekasdasds, I jot down ideas, thoughts, and reflections. This first entry explains why I started this notes page and what you can expect in the future.",
      image: "/images/note3.jpg",
      link: "intro2",
      element: <Note1 />
    },
    {
      title: "Getting Started with Notes2",
      preview: "Every two weekasdasds, I jot down ideas, thoughts, and reflections. This first entry explains why I started this notes page and what you can expect in the future.",
      image: "/images/note3.jpg",
      link: "intro3",
      element: <Note1 />
    },
    {
      title: "Getting Started with Notes2",
      preview: "Every two weekasdasds, I jot down ideas, thoughts, and reflections. This first entry explains why I started this notes page and what you can expect in the future.",
      image: "/images/note3.jpg",
      link: "intro4",
      element: <Note1 />
    },
];

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
          </Link>
        ))}
      </div>
    </div>
  );
}