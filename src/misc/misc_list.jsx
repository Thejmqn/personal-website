import bagel from "./../work/codes/bagel.jpg";
import ghost from "./../work/ghosts/ghosts.jpg";
import stormwater from "./../work/ohill/stormwater.jpg";
import phishing from "./../work/domains/phishing.jpg";
import hammer from "./quotes/hammer.svg";
import Quotes from "./quotes/Quotes.jsx";

const misc_list = [
  {
    id: "quotes",
    title: "Quotes",
    summary: "I just have a bunch of stupid quotes I say.",
    image: hammer,
    link: "quotes",
    element: <Quotes />
  },
  {
    id: "uva-codes",
    title: "UVA Codes",
    summary: "Created by request for a friend, a full-stack webapp to track order codes.",
    image: bagel,
    link: "codes"
  },
  {
    id: "ghosts-on-grounds",
    title: "Ghosts on Grounds",
    summary: "A website for a ghost tour at the University.",
    image: ghost,
    link: "ghosts"
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

export default misc_list;
