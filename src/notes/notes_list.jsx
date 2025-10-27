import joe from "./0/joe.jpg";
import Note0 from "./0/note0";
import leo from "./1/leo_xiv.jpg";
import game from "./2/long_game.jpg";
import statue from "./3/statue.jpg"
import anthem from "./4/game.jpg";
import cover from "./5/cover.jpg";
import sudley from "./6/traffic.jpg";
import tech from "./7/tech.jpg";
import tunnel from "./8/tunnel.jpg";
import reading from "./9/reading.jpg";
import stanford from "./10/stanford.jpg";
import Note1 from "./1/note1";
import Note2 from "./2/Note2";
import Note3 from "./3/note3";
import Note4 from "./4/note4";
import Note5 from "./5/note5";
import Note6 from "./6/note6";
import Note7 from "./7/note7";
import Note9 from "./9/note9";

const notes_list = [
    {
      title: "What's the Deal with Joe Moran?",
      preview: "A brief explantation into the purpose of me writing all of this, and how I (hope to) continue doing so in the future. Also, what's the deal with airline food?",
      image: joe,
      link: "intro",
      date: "May 18th, 2025",
      element: <Note0 />
    },
    {
      title: "Does the Pope have to pay taxes?",
      preview: "The first American Pope has to deal with some truly American problems. The most notable of them all is that Uncle Sam may be coming for his pocketbook.",
      image: leo, // https://commons.wikimedia.org/wiki/File:Pope_Leo_XIV_4.png
      link: "pope",
      date: "June 1st, 2025",
      element: <Note1 />
    },
    {
      title: "What's the most boring baseball game of all time?",
      preview: "Last week I was at a really boring baseball game. But was it the most boring MLB game ever?",
      image: game,
      link: "baseball",
      date: "June 15th, 2025",
      element: <Note2 />
    },
    {
      title: "The Jim Ryan situation is crazy...",
      preview: "President Ryan of UVA has been ousted. There is one question to ask: WWJD? (What Would Jefferson Do?)",
      image: statue,
      link: "jim",
      date: "June 29th, 2025",
      element: <Note3 />
    },
    {
      title: "The Star-Spangled Banner is Boring",
      preview: "Is the Star-Spangled Banner really the best America can do? Exploring the topic and some possible alternatives.",
      image: anthem,
      link: "anthem",
      date: "July 13th, 2025",
      element: <Note4 />
    },
    {
      title: "Two Covers and an Album",
      preview: "Comparing and contrasting three performances I have seen over the past months in genres about as far apart as possible.",
      image: cover,
      link: "concert",
      date: "July 27th, 2025",
      element: <Note5 />
    },
    {
      title: "The Pride of Prince William",
      preview: "An tour and review of Sudley Road, a road riding through the heart of Prince William County. What's in store for the future of Sudley?",
      image: sudley,
      link: "sudley",
      date: "August 10th, 2025",
      element: <Note6 />
    },
    {
      title: "Tony Elliott's Big Bet",
      preview: "It's Bowl or Bust for Tony Elliott and UVA Football. Let's estimate the chance of victory for every UVA Football game this season.",
      image: tech,
      link: "elliott",
      date: "August 24th, 2025",
      element: <Note7 />
    },
    {
      title: "Winning the Rat Race",
      preview: "Many people describe life at UVA as a never-ending \"rat-race\". So how, as a rat, do you win this race?",
      image: tunnel,
      link: "tunnel",
      date: "September 14th, 2025",
      element: <Note7 />
    },
    {
      title: "A Letter to Noone",
      preview: "How much of what is written is actually read? I publish some of my most boring and bureaucratic papers I have written this semester.",
      image: reading,
      link: "letter",
      date: "October 5th, 2025",
      element: <Note9 />
    },
    {
      title: "Building Band Better",
      preview: "Examining the process through which an FBS Power 4 marching band, of which I am a member, prepares for a football game in one week.",
      image: stanford,
      link: "band",
      date: "October 26th, 2025",
      element: <Note7 />
    },
];

export default notes_list;
