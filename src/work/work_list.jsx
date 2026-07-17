import bagel from "./codes/bagel.jpg";
import ghost from "./ghosts/ghosts.jpg";
import stormwater from "./ohill/stormwater.jpg";
import phishing from "./domains/phishing.jpg";
import delta from "./buildings/delta.png";  
import Codes from "./codes/Codes";
import CodesPage from "./codes/CodesPage";
import SmartBuildingsPage from "./buildings/SmartBuildingsPage";

const work_list = [
  {
    id: "smart-buildings",
    title: "Smart Buildings Research",
    summary: "Research paper on the effects of meeting type on environmental conditions in buildings.",
    image: delta,
    link: "smart",
    element: <SmartBuildingsPage />
  },
  {
    id: "uva-codes",
    title: "UVA Codes",
    summary: "Created by request for a friend, a full-stack webapp to track order codes.",
    image: bagel,
    link: "codes",
    element: <CodesPage />
  },
  {
    id: "ghosts-on-grounds",
    title: "Ghosts on Grounds",
    summary: "A website for a ghost tour at the University.",
    image: ghost,
    link: "https://www.ghostsongrounds.org/"
  },
  {
    id: "civil-field",
    title: "Civil Redesign",
    summary: "Stormwater management and grading for a new project on a field.",
    image: stormwater,
    link: "ohill"
  },
    {
    id: "domains",
    title: "Domain Trickery",
    summary: "Experimenting with web domains and the dangers of certain TLDs.",
    image: phishing,
    link: "domains"
  }
];

export default work_list;
