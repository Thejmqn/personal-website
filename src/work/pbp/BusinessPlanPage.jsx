import WorkPage from "../WorkPage";
import cover from "./poster.png";
import report from "./plan.pdf";

export default function BusinessPlanPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final report can be found below.",
    },
    {
      type: "pdf",
      src: report,
      title: "The final Business Plan Report for the new building.",
    }
  ];

  return (
    <WorkPage
      title="Project Business Plan"
      summary="A fully complete business plan proposing a new educational building on the UVA Grounds."
      image={cover}
      sections={sections}
    />
  );
}
