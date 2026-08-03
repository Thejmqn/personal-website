import WorkPage from "../WorkPage";
import resume from "./Joe_Moran_Public_Resume.pdf";

export default function ResumePage() {
  const sections = [
    {
      type: "pdf",
      src: resume,
      title: "Public Resume",
    },
  ];

  return (
    <WorkPage
      title="Public Resume"
      summary="Please see below for my resume as of August 2026. Note that some descriptions of work experience have been redacted due to the sensitive nature of the work performed. The full version is available to trusted employers upon request."
      sections={sections}
    />
  );
}
