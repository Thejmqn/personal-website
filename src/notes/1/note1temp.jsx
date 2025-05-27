import notes_list from "../notes_list";
import { Link } from "react-router-dom";
import freedom_of_speech from "./freedom_of_speech.jpg";
import './../notes_page.css';

export default function Note1() {
  const noteIndex = 0;
  const note = notes_list[noteIndex];

  if (!note) return <div className="note-container">Note not found.</div>;
  
  const prevNote = notes_list[noteIndex + 1];
  const nextNote = notes_list[noteIndex - 1];

  return (
    <div className="note-container">
      <Link to="/notes" className="back-link">← Back to Notes</Link>
      <img src={note.image} alt={note.title} className="note-header-image" />
      <h1>{note.title}</h1>
      <div className="note-date">Published on {note.date}</div>

      <h2>The Anti-Writing Problem</h2>
      <p>If you have ever talked to me for a bit, you would know that I am not much of a writer. Wherever I have to do some sort of university assignment or work report that involves writing, I almost always put it off until the last possible moment. The reason you would know this is that I constantly feel the need to talk about how much I dislike writing and how I am probably, at this moment, putting off writing something relatively important. That’s not to say I am that bad of a writer—While I am not great, I at least think I know how sentences work, generally. Just look at how I used that em dash. There’s a reason they call me Joe Shakespeare. (Don’t ask who “they” is here).</p>
      <p>Of course, my avoidance of writing is not the best thing, since it pretty much forms the basis for a large majority of white collar work nowadays. You don’t have to know much math for most work, but you better know at least some writing. (Tangent: That’s why writing games like Wordle can become very popular amongst the general population, while any sort of math game never will be. Everyone has to write, but not everyone has to know math.) My anti-writing dilemma is confounded by the fact that I just got a lot to say. If I was with Joe Biden, the second most famous Joe after myself, he would tell me to “keep yapping, man.” I can talk for a long time about almost anything if I am speaking about it. But writing, not so much.</p>

      <h2>In Re Scribere</h2>
      <p>To help alleviate this slight issue, I have decided to start a biweekly-ish “notes” page where I just write about whatever is on my mind at the moment. It could be related to something going on in my life, it could be an interesting topic that I heard about, a summary of a discussion I had with someone else, or really just about anything. The goal of this is just to have a place to publicly jot down the random thoughts I have and possibly some important events in my life. I always think it is tragic when someone has interesting stories to tell, but they are not written down anywhere and eventually become forgotten. Not that this is going to be read by many people at all, but I just like to have my thoughts out there. 
        <q cite="Banksy">They say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time.</q> -Banksy</p>
      <p>So that is pretty much the point of this series. I will try to release a new article / note once every two weeks, or maybe once a week if I have more time on my hands. The articles will be about random things that come to mind or things that relate to what I have done over the past few weeks, and I hope you will enjoy reading them. If for some reason you want to send me a comment about one of the articles (and you don’t already have my number), reach out to me by email or one of the social media platforms I have listed on the Contact page, preferably Instagram. Anyways, in the interests of making this intro article slightly more in-depth than just an explanation, I’ll briefly discuss the age-old question that is related to this note’s title.</p>
      <img src={freedom_of_speech} alt="Example" className="note-inline-image" />
      <h2>What's the Deal with Airline Food?</h2>
      <p>I dunno. It’s a little plane, but once you get used to it, it starts to take off. (To be finished soon)</p>
      <div className="note-nav">
        {prevNote && <Link to={prevNote.link} className="note-nav-link">← {prevNote.title}</Link>}
        {nextNote && <Link to={nextNote.link} className="note-nav-link">{nextNote.title} →</Link>}
      </div>
    </div>
  );
}
