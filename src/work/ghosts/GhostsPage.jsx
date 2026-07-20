import WorkPage from "../WorkPage";
import cover from "./ghosts.jpg";

export default function GhostsPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final website can be found below.",
    },
    {
      type: "iframe",
      src: "https://www.ghostsongrounds.org/",
      title: "Ghosts on Grounds Webesite",
      caption: "The frontend of the Ghosts on Grounds website, built with React.",
    },
  ];

  return (
    <WorkPage
      title="Ghosts on Grounds"
      summary="A website for a ghost tour at the University."
      image={cover}
      sections={sections}
    />
  );
}
