import { Link } from "react-router-dom";
import "./work_page.css";

export default function WorkPage({
  title,
  summary,
  image,
  date,
  backLabel = "← Back to Projects",
  sections = [],
}) {
  return (
    <div className="work-article-container">
      <Link to="/work" className="work-back-link">
        {backLabel}
      </Link>

      {image && <img src={image} alt={title} className="work-header-image" />}
      <h1>{title}</h1>
      {summary && <p className="work-summary">{summary}</p>}

      {sections.map((section, index) => {
        switch (section.type) {
          case "heading":
            return section.level === "h3" ? (
              <h3 key={index}>{section.content}</h3>
            ) : (
              <h2 key={index}>{section.content}</h2>
            );

          case "paragraph":
            return <p key={index}>{section.content}</p>;

          case "list":
            return (
              <ul key={index} className="work-list">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="work-list-item">
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "image":
            return (
              <figure key={index} className="work-figure">
                <img
                  src={section.src}
                  alt={section.alt || title}
                  className="work-inline-image"
                />
                {section.caption && <figcaption>{section.caption}</figcaption>}
              </figure>
            );

          case "video":
            return (
              <div key={index} className="work-media-container">
                <iframe
                  src={section.src}
                  title={section.title || title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );

          case "pdf":
            return (
              <div key={index} className="work-media-container work-pdf-container">
                <iframe src={section.src} title={section.title || `${title} PDF`} />
              </div>
            );

          case "iframe":
            return (
              <div key={index} className="work-media-container-block">
                <div className="work-media-container work-iframe-container">
                  <iframe src={section.src} title={section.title || title} />
                </div>
                {section.caption && (
                  <p className="work-iframe-caption">
                    {section.caption}
                    {section.src && (
                      <>
                        {" "}
                        <a
                          href={section.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-iframe-link"
                        >
                          Open the full page →
                        </a>
                      </>
                    )}
                  </p>
                )}
              </div>
            );

          case "quote":
            return (
              <blockquote key={index} className="work-quote">
                {section.content}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
