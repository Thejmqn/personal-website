import WorkPage from "../WorkPage";
import cover from "./stormwater.jpg";
import paper from "./deliverable.pdf";

export default function OHillPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final video and report can be found below.",
    },
    {
      type: "pdf",
      src: paper,
      title: "Final Plan Set",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/zXtEu0z9yRU?si=WJxeEGTYM1Nko6hK/",
      title: "Civil Redesign Video",
      caption: "A short presentation of the redesign of a field, focused on stormwater management.",
    },
  ];

  return (
    <WorkPage
      title="Civil Redesign"
      summary="Stormwater management and grading for a new project on a field."
      image={cover}
      sections={sections}
    />
  );
}
