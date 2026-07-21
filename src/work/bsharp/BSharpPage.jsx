import WorkPage from "../WorkPage";
import cover from "./comparison.png";
import report from "./bsharp.pdf";

export default function BSharpPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final website and presentation can be found below.",
    },
    {
      type: "pdf",
      src: report,
      title: "The final presentation for the B-Sharp project, with a walkthrough of features.",
    },
    {
      type: "iframe",
      src: "https://bsharp.lovable.app/app",
      title: "B-Sharp Frontend",
      caption: "A prototype of the B-Sharp website, only frontend for now.",
    },
  ];

  return (
    <WorkPage
      title="BSharp Enterprises"
      summary="A business pitch and frontend prototype for a suite of music education software products."
      image={cover}
      sections={sections}
    />
  );
}
