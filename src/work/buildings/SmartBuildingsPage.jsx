import WorkPage from "../WorkPage";
import paper from "./sahb.pdf";
import delta from "./delta.png";

export default function SmartBuildingsPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final research paper can be found below.",
    },
    {
      type: "pdf",
      src: paper,
      title: "Smart Buildings Research Paper",
    },
  ];

  return (
    <WorkPage
      title="Smart Buildings"
      summary="Research paper on the effects of meeting type on environmental conditions in buildings."
      image={delta}
      sections={sections}
    />
  );
}
