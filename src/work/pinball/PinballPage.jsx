import WorkPage from "../WorkPage";
import cover from "./silverball.jpg";
import report1 from "./PinballBrief1.pdf";
import report2 from "./PinballBrief2.pdf";

export default function PinballPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final reports can be found below.",
    },
    {
      type: "pdf",
      src: report1,
      title: "First Pinball Brief Paper",
    },
    {
      type: "pdf",
      src: report2,
      title: "Second Pinball Brief Paper",
    },
  ];

  return (
    <WorkPage
      title="Pinball Wizard"
      summary="Brief essays on the material composition of various parts of the pinball machine."
      image={cover}
      sections={sections}
    />
  );
}
