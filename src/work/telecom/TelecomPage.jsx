import WorkPage from "../WorkPage";
import cover from "./telecom.png";
import report from "./telecom.pdf";

export default function TelecomPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final report can be found below.",
    },
    {
      type: "pdf",
      src: report,
      title: "The final Telecom and T-Mobile Analysis Report.",
    }
  ];

  return (
    <WorkPage
      title="Telecom Analysis"
      summary="An analysis of the telecom industry and the surprising rise of T-Mobile."
      image={cover}
      sections={sections}
    />
  );
}
