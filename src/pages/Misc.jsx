import { Link } from "react-router-dom";
import "./Notes.css";
import misc_list from "../misc/misc_list";

export default function Misc() {
  return (
    <div className="notes-container">
      <h1>Misc / Hobbies</h1>
      <p>This page is just a bunch of random events / hobbies I do in my spare time. Just for those who are curious.</p>
      <div className="notes-grid">
        {misc_list.map((article, index) => (
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
