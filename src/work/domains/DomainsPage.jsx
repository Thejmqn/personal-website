import WorkPage from "../WorkPage";
import cover from "./phishing.jpg";
import report from "./report.pdf";

export default function DomainsPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final video and report can be found below.",
    },
    {
      type: "pdf",
      src: report,
      title: "Final Presentation and Report",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/j8mn4lPXTVU?si=vLPWsutxl-ztt3NC",
      title: "Domains Video",
      caption: "A short presentation of the domains project.",
    },
  ];

  return (
    <WorkPage
      title="Domains"
      summary="Experimenting with web domains and the dangers of certain TLDs."
      image={cover}
      sections={sections}
    />
  );
}
