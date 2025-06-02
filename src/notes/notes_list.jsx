import wanderer from "./0/wanderer.jpg";
import Note0 from "./0/note0";
import leo from "./1/leo_xiv.png";
import Note1 from "./1/note1";

const notes_list = [
    {
      title: "What's the Deal with Joe Moran?",
      preview: "A brief explantation into the purpose of me writing all of this, and how I (hope to) continue doing so in the future. Also, what's the deal with airline food?",
      image: wanderer,
      link: "intro",
      date: "May 25th, 2025",
      element: <Note0 />
    },
    {
      title: "Does the Pope have to pay taxes?",
      preview: "The first American Pope has to deal with some truly American problems. The most notable of them all is that Uncle Sam may be coming for his pocketbook.",
      image: leo, // https://commons.wikimedia.org/wiki/File:Pope_Leo_XIV_4.png
      link: "pope",
      date: "June 1st, 2025",
      element: <Note1 />
    }
];

export default notes_list;
