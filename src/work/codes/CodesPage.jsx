import WorkPage from "../WorkPage";
import cover from "./bagel.jpg";

export default function CodesPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final website can be found below.",
    },
    {
      type: "iframe",
      src: "https://uvacodes.josephmoran.org/",
      title: "UVA Codes Frontend",
      caption: "The frontend of the UVA Codes webapp, built with React.",
    },
  ];

  return (
    <WorkPage
      title="UVA Codes"
      summary="Created by request for a friend, a full-stack webapp to track order codes."
      image={cover}
      sections={sections}
    />
  );
}
