import WorkPage from "../WorkPage";
import cover from "./nvidia.png";
import report1 from "./case.pdf";
import report2 from "./openai.pdf";

export default function NvidiaPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. The final video and report can be found below. I probably should have invested...",
    },
    {
      type: "pdf",
      src: report2,
      title: "Brief analysis on OpenAI's then-new decision to go private",
    },
    {
      type: "pdf",
      src: report1,
      title: "Report on Nvidia in late 2023 / early 2024. ",
    },
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/CiyAi9KZccc?si=hFiEkI0qWKkXTwxj",
      title: "Nvidia Video",
      caption: "A short video talking about Nvidia's stock in late 2023 / early 2024.",
    },
  ];

  return (
    <WorkPage
      title="Nvidia"
      summary="Analyzing Nvidia's stock performance and market position in late 2023 / early 2024."
      image={cover}
      sections={sections}
    />
  );
}
