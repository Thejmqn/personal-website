import { Link } from "react-router-dom";
import "./Notes.css";
import work_list from "../work/work_list";

export default function Work() {
  return (
    <div className="notes-container">
      <h1>Past Work (Projects)</h1>
      <p>These are some professional projects I have done at various times, such as at work, school, or for fun at home.</p>
      <div className="notes-grid">
        {work_list.map((article, index) => (
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
