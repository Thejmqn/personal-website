import WorkPage from "../WorkPage";
import paper from "./sahb.pdf";
import delta from "./delta.png";

export default function SmartBuildingsPage() {
  const sections = [
    {
      type: "heading",
      level: "h2",
      content: "What it was",
    },
    {
      type: "paragraph",
      content:
        "UVA Codes was a small full-stack project built for a friend who wanted a cleaner way to keep track of order codes and recurring details. The goal was to make the workflow feel lightweight while still giving it enough structure to be useful over time.",
    },
    {
      type: "heading",
      level: "h2",
      content: "How it worked",
    },
    {
      type: "paragraph",
      content:
        "The app let users store, review, and organize codes in a simple interface. I focused on making the experience intuitive rather than over-engineered, so it could be used quickly without much setup.",
    },
    {
      type: "pdf",
      src: paper,
      title: "Smart Buildings Research Paper",
    },
    {
      type: "heading",
      level: "h2",
      content: "What I learned",
    },
    {
      type: "list",
      items: [
        "How to shape a project around a very specific user need",
        "The value of keeping a tool simple enough to be adopted quickly",
        "How to balance usability with a clean technical implementation",
      ],
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
      summary="A lightweight full-stack project for organizing and tracking order codes in a simple, practical way."
      image={delta}
      sections={sections}
    />
  );
}
