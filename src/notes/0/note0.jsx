import notes_list from "../notes_list";
import { Link } from "react-router-dom";
import freedom_of_speech from "./freedom_of_speech.jpg";
import airplane_food from "./airplane_food.jpg";
import './../notes_page.css';

export default function Note0() {
  const noteIndex = 0;
  const note = notes_list[noteIndex];

  if (!note) return <div className="note-container">Note not found.</div>;
  
  const prevNote = notes_list[noteIndex - 1];
  const nextNote = notes_list[noteIndex + 1];

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
      <figure className="note-figure">
        <img src={freedom_of_speech} alt="Freedom of Speech" className="note-inline-image" />
        <figcaption>
          Sometimes I just feel like yapping.
          <br />
          <span className="image-source">Source: <a href="https://www.nrm.org/2012/01/norman-rockwells-four-freedoms/" target="_blank" rel="noopener noreferrer">Normal Rockwell</a></span>
        </figcaption>
      </figure>
      <h2>What's the Deal with Airline Food?</h2>
      <p>I am not sure why I started this article with the title, “What’s the deal with…”, but since I did, I may as well talk about my experiences with airplane food. Last year, after the end of my first year of university, I had the opportunity to go on a trip to London. It was my first time out of the country in years, and also the first time I had left the continent. This meant I would be getting on a plane ride for the first time in over five years, and it would also be the first time I was taking a plane overnight. Out of all the things to be excited for when going to London, there was one peculiar thing I was the most interested in trying: airplane food. </p>
      <p>I am sure most people know the classic line making fun of airplane food, given by desperate observational humorists to bring up when they have run out of jokes. Most people associate it with the comedy style of Jerry Seinfeld, but he actually only said the line a <a href="https://www.youtube.com/watch?v=TQ5au_0uO9U" target="_blank" rel="noopener noreferrer">single time,</a> while appearing as a host on <i>Saturday Night Live</i> and jokingly asking fellow stand-up comedians how they would respond to the question. It seems clear he did not actually like the line except in an ironic sense, which I greatly appreciate. In the show <i>Seinfeld</i>, <a href="https://www.youtube.com/watch?v=v1cVl7KHsGA" target="_blank" rel="noopener noreferrer">every time</a> the catchphrase “What’s the deal with…” is used, it is in an ironic manner making fun of bad comedians for using the phrase.</p>
      <p>So what is actually the deal with airplane food? The reasons for the genre’s notorious taste are both economic and scientific. In the 50s and 60s, airplanes would serve borderline restaurant-quality meals onboard, from caviar to shark-fin soup. However, as airlines started to compete to make their flights as cheap as possible, as opposed to as exclusive as possible, the budget to be spent on airplane food drastically decreased for all onboard except first-class passengers. Anything more than snacks is now reserved for long-distance flights. Also, scientifically, the lower air pressure and humidity at higher altitudes decrease the tongue’s ability to taste by up to 30 percent. The sense of smell also decreases, which further contributes to the lackluster taste.</p>
      <p>With all these factors in mind, I was not expecting much from my meal on the flight to London. I ordered the chicken breast since it was the only thing on the menu that seemed simple enough that it could be prepared correctly (a common trick I use when ordering at bad restaurants). When the food came out, I remember being shocked at how it was actually pretty decent. The chicken was great, and it came with four different side courses which were also all decent. I especially appreciated the huge roll they gave, as if you know anything about me, you know how much bread I eat. Thus, my experiences with airplane food have been quite pleasant. So what would I say the deal with airplane food is? Overall, it’s a little plane, but once you get used to it, it starts to take off pretty quickly (if you ignore the sky-high prices). </p>
      <figure className="note-figure">
        <img src={airplane_food} alt="Airplane food" className="note-inline-image" />
        <figcaption>
          The airplane food I got on a flight to London. Honestly was not that bad.
        </figcaption>
      </figure>
      <div className="note-nav">
        {prevNote && <Link to={`${window.location.pathname}/../${prevNote.link}`} className="note-nav-link">← {prevNote.title}</Link>}
        {nextNote && <Link to={`${window.location.pathname}/../${nextNote.link}`} className="note-nav-link">{nextNote.title} →</Link>}
      </div>
    </div>
  );
}
