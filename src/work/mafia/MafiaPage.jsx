import WorkPage from "../WorkPage";
import cover from "./mafia.png";

export default function MafiaPage() {
  const sections = [
    {
      type: "paragraph",
      content:
        "This page is under development. Please see a different page for now.",
    }
  ];

  return (
    <WorkPage
      title="Mafia Chatroom"
      summary="A simple chatroom inspired by the classic social deduction game Mafia."
      image={cover}
      sections={sections}
    />
  );
}
