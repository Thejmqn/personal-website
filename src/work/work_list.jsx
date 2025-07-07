import bagel from "./codes/bagel.jpg";
import ghost from "./ghosts/ghosts.jpg";
import stormwater from "./ohill/stormwater.jpg";
import phishing from "./domains/phishing.jpg";

const work_list = [
  {
    id: "uva-codes",
    title: "UVA Codes",
    summary: "Created by request for a friend, a full-stack webapp to track order codes.",
    image: bagel,
    link: "/projects/codes"
  },
  {
    id: "ghosts-on-grounds",
    title: "Ghosts on Grounds",
    summary: "A website for a ghost tour at the University.",
    image: ghost,
    link: "/projects/ghosts"
  },
  {
    id: "civil-field",
    title: "Civil Redesign",
    summary: "Stormwater management and grading for a new project on a field.",
    image: stormwater,
    link: "/projects/ohill"
  },
    {
    id: "domains",
    title: "Domain Trickery",
    summary: "Experimenting with web domains and the dangers of certain TLDs.",
    image: phishing,
    link: "/projects/domains"
  }
];

export default work_list;
