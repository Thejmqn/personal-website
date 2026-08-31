import WorkPage from "../WorkPage";
import cover from "./reduction.png";
import report1 from "./WA2.pdf";
import report2 from "./WA3.pdf";

export default function BankPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The energy and compute reduction reports can be found below.",
    },
    {
      type: "pdf",
      src: report1,
      title: "A business report detailing the energy, carbon, and compute costs of the Meridian Trust Bank.",
    },
    {
      type: "pdf",
      src: report2,
      title: "A business report detailing recommendations to reduce compute costs of the Meridian Trust Bank.",
    },
  ];

  return (
    <WorkPage
      title="Bank Computing Costs"
      summary="A series of report summaries detailing energy, carbon, and compute costs of Meridian Trust Bank."
      image={cover}
      sections={sections}
    />
  );
}
