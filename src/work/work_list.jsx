import bagel from "./codes/bagel.jpg";
import ghost from "./ghosts/ghosts.jpg";
import stormwater from "./ohill/stormwater.jpg";
import phishing from "./domains/phishing.jpg";
import silverball from "./pinball/silverball.jpg";
import delta from "./buildings/delta.png";
import reduction from "./bank/reduction.png";
import comparison from "./bsharp/comparison.png";
import poster from "./pbp/poster.png";
import nvidia from "./nvidia/nvidia.png";
import mafia from "./mafia/mafia.png";
import telecom from "./telecom/telecom.png";
import CodesPage from "./codes/CodesPage";
import SmartBuildingsPage from "./buildings/SmartBuildingsPage";
import GhostsPage from "./ghosts/GhostsPage";
import OHillPage from "./ohill/OHillPage";
import DomainsPage from "./domains/DomainsPage";
import PinballPage from "./pinball/PinballPage";
import NvidiaPage from "./nvidia/NvidiaPage";
import BusinessPlanPage from "./pbp/BusinessPlanPage";
import BSharpPage from "./bsharp/BSharpPage";
import TelecomPage from "./telecom/TelecomPage";
import MafiaPage from "./mafia/MafiaPage";

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
    link: "ghosts",
    element: <GhostsPage />
  },
  {
    id: "civil-field",
    title: "Civil Redesign",
    summary: "Stormwater management and grading for a new project on a field.",
    image: stormwater,
    link: "ohill",
    element: <OHillPage />
  },
  {
    id: "domains",
    title: "Domain Trickery",
    summary: "Experimenting with web domains and the dangers of certain TLDs.",
    image: phishing,
    link: "domains",
    element: <DomainsPage />
  },
  {
    id: "pinball",
    title: "The Pinball Wizard",
    summary: "Brief essays on the material composition of various parts of the pinball machine.",
    image: silverball,
    link: "pinball",
    element: <PinballPage />
  },
  {
    id: "nvidia",
    title: "Nvidia and OpenAI",
    summary: "A collection of short essays I wrote on OpenAI and Nvidia just before AI became mainstream.",
    image: nvidia,
    link: "nvidia",
    element: <NvidiaPage />
  },
  {
    id: "education",
    title: "New Educational Building",
    summary: "Analysis of inefficiencies in the energy and carbon efficiency of various banking systems.",
    image: poster,
    link: "education",
    element: <BusinessPlanPage />
  },
  {
    id: "bsharp",
    title: "B-Sharp Enterprise",
    summary: "Analysis of inefficiencies in the energy and carbon efficiency of various banking systems.",
    image: comparison,
    link: "bsharp",
    element: <BSharpPage />
  },
  {
    id: "mafia",
    title: "Chat-Room Mafia",
    summary: "Analysis of inefficiencies in the energy and carbon efficiency of various banking systems.",
    image: mafia,
    link: "mafia",
    element: <MafiaPage />
  },
  {
    id: "telecom",
    title: "The Rise of T-Mobile",
    summary: "Analysis of inefficiencies in the energy and carbon efficiency of various banking systems.",
    image: telecom,
    link: "telecom",
    element: <TelecomPage />
  },
];

export default work_list;
