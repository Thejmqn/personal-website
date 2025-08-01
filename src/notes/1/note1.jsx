import notes_list from "../notes_list";
import { Link } from "react-router-dom";
import './../notes_page.css';
import white_sox from "./white_sox.jpg";
import taxes from "./taxes.svg";
import robert from "./Robert_John_Cornell.jpg";

export default function Note1() {
  const noteIndex = 1;
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
      
      <h2>The Rare Chicago Sports Fan</h2>
      <p>	As of the date of publication of this note, Pope Leo XIV is about to be out of contention for a very morbid record: the shortest pontificate of any Pope Leo. The obscure Pope Leo XI was inaugurated as Pope on April 1st, 1605, and died of a fever on April 27th of that year for a total reign of just 26 days. This is even less than President William Henry Harrison, who also died of a fever after taking office, but at least made it a month. Pope Leo XIV is just about to beat Pope Leo XI’s “record,” so in celebration, I have had some extremely important discussions with some friends about the unique hypotheticals an American Pope brings with it.</p>
      <p>	As an American Pope, one of the most important factors to judge Leo with are his sports affiliations. As a native Chicagoan, there was a big dispute between White Sox and Cubs fans about which team the pontiff supported. There were initially reports that Leo was a rare Southside Cubs fan; however, his brother later dispelled these notions, saying <q cite="Leo's Brother">He was never, ever a Cubs fan, so I don't know where that came from. He was always a Sox fan.</q> </p>
      <p>Personally, I think the confusion makes sense, since the White Sox, just like the Bears, really don’t have any fans anyways. My roommate’s cousin is a pitcher for the White Sox and even he isn’t a White Sox fan. On the football side, I have gotten into “very serious” arguments with some Chicago friends about how the Bears, as a true Chicago team, actually have no fans, and the people there are just vaguely tolerant of them. I mean, who would actually choose to be a Bears fan, unless you really like kickers hitting the uprights?</p>
      <p>Back to Leo, as a graduate of Villanova University, he is known to be a Wildcats fan, even texting the Villanova athletic directory after big Villanova basketball wins. Unfortunately, UVA did not play Villanova while Pope Leo was in attendance, as their first matchup was four years after he graduated (which UVA won of course). Thus, we cannot be sure whether the Pope rooted against UVA. However, if UVA plays Villanova again in the future, I will have to be very careful with what I say in order to avoid possible excommunication for rooting against the Pope’s team. Not sure what the canon law rulings are on rooting against the Pope’s favorite basketball team, but it is probably in there somewhere. Speaking of serious offenses, there are some issues the Pope will not have to deal with, specifically, Uncle Sam. </p>
      <figure className="note-figure">
        <img src={white_sox} alt="White Sox Pope" className="note-inline-image" />
        <figcaption>
          Pope Leo could probably make the 2025 White Sox team.
          <span className="image-source">Source: <a href="https://www.mlb.com/whitesox/video/white-sox-pregame-recognizes-pope-leo-xiv" target="_blank" rel="noopener noreferrer">MLB</a></span>
        </figcaption>
      </figure>
      <h2>A Papal Payment</h2>
      <p>The U.S. is one of only four countries in the world which uses citizenship-based taxation (CBT). This means that U.S. citizens living abroad must still pay taxes on income earned while living in another country, even if that income is not related to American business. As an American citizen now living abroad in the Vatican City, the Pope, at least theoretically, will be subjected to these same tax policies. So what will Leo be paying to Uncle Sam, if anything at all?</p>
      <p>	The Pope is entitled to a salary of 30,000 euro per month, or approximately $396,000 per year. Given that the Pope (hopefully) will not be filing jointly, this would place him into the second-highest tax bracket of 35%, meaning with no deductions or exemptions, he would have to pay up to $135,287 per year to the IRS. The Pope’s income will likely be subjected to the same rules as clergy in the US, meaning that some of it will be considered payment as an employee of the Catholic Church, while other forms of income will be classified as if he was self-employed. He also may qualify for the foreign earned income exclusion, which could allow him to deduct up to $126,500, if he does not visit the US for more than 330 days. This would drastically reduce his personal income, so it would be a good idea for him to apply for this exemption. He could also write off housing related costs as business expenses due to his self-employed status, and use other clever loopholes. Hopefully the Vatican has good accountants. </p>
      <p>	Of course, all of this is just hypothetical, so the real question is: will the Pope actually pay taxes? I highly doubt it, although there is a chance he still files. First of all, previous Popes like Pope Francis have declined their salary due to taking a vow of poverty. As a member of the Augustinian Order, Leo has already taken the vow of poverty, Still, even if Pope Leo accepts his salary, he has options to avoid paying. He could try to renounce his citizenship, although the diplomatic consequences of this would likely be very bad for himself and the Vatican. Not to mention that there is a separate tax on renouncing citizenship. He could also choose to just not pay his taxes, and as a foreign head of state, he would likely qualify for diplomatic immunity. It would also be seen as absolutely shocking if the US government actually arrested the Pope or took away his citizenship.</p>
      <p>The moral of this story is: no one, not even the pope, escapes the IRS. While the Pope may be merciful, the taxman sure is not. But if he got really upset, could the Pope do something about it through political office?</p>
      <figure className="note-figure">
        <img src={taxes} alt="Global taxes" className="note-inline-image" />
        <figcaption>
          Countries in purple have taxation by citizenship. The other countries don't. Honestly I can't be bothered to look what the other colors mean.
          <br />
          <span className="image-source">Source: <a href="https://commons.wikimedia.org/wiki/File:Individual_Taxation_Systems.svg" target="_blank" rel="noopener noreferrer">Wikipedia</a></span>
        </figcaption>
      </figure>
      <h2>Pontiff for President</h2>
      <p>The Pope, historically, has been one of the most powerful positions in the world, not just spiritually, but also politically. For about a thousand years the Pope was the sovereign ruler of a large portion of central Italy known as the Papal States, effectively a much larger version of the current-day Vatican City. Of course, for the past century the Pope has been a purely spiritual leader within only a small chunk of land in Rome, but maybe Pope Leo XIV is itching to get back into political office. Fortunately for him, it is possible he is the first ever Pope eligible to also be President of the United States.</p>
      <p>	The Constitution is clear about the requirements to be President: Be born in the U.S., have lived in the U.S. for 14 years, and be at least 35 years old. Leo meets all these criteria and thus meets all the constitutional requirements to be President, assuming he does not renounce his citizenship. A spokesperson for the Illinois Board of Elections has clarified that he is still eligible to vote in Illinois as well, <q cite="Illinois Board of Elections">He’s still an active voter in Will County, Illinois, and he did cast a ballot in November 2024 — a vote by mail.</q> However, there are two potential roadblocks, one American and one Vatican, that may block his potential run.</p>
      <p>	The rarely used Foreign Emoluments Claude of the Constitution states that, <q cite="U.S. Constitution">No Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever.</q> As Pope, Leo is automatically also the absolute monarch of the Vatican CIty. Thus, if he were already President, he would have violated this clause by accepting a foreign office and title. However, since he already has the title, it is more likely he would be deemed eligible, as he accepted the title before running. It is also possible that the Pope could have been affected by the proposed Titles of Nobility Amendment, which if passed, would have automatically stripped the U.S. citizenship of any American who accepted a title of nobility from a foreign power. This amendment was proposed in 1810 and received the necessary 2/3rds majority in the House and Senate, but fell two states short of ratification. However, Congress never set a deadline for ratification, so if the states were very unhappy with Leo’s run for office, they could pass this amendment now and strip his citizenship.</p>
      <p>	The other potential problem for Leo’s presidential ambition is spiritual. In 1980, Pope John Paul II decreed that priests and other individuals holding spiritual office refrain from holding any worldly political positions. This was codified as section 285.4 of Canon Law in 1983. At the time of John Paul II’s declaration, there had been two U.S. representatives, Robert Drinan from Massachusetts, and Robert Cornell from Wisconsin, who were also priests. In observance with the Pope’s decree, they both declined to run again for Congress in the 1980 election. Of course, as Pope, Leo could simply revoke this section of Canon Law, as he has the final say on the interpretation of the set of Catholic ordinances. Thus, if Pope Leo wanted to, it is likely he could get around to running for President (as long as he pays his taxes!).</p>
      <figure className="note-figure">
        <img src={robert} alt="Congressman Priest" className="note-inline-image" />
        <figcaption>
          Robert John Cornell was one of two Catholic priests to concurrently serve in Congress.
          <br />
          <span className="image-source">Source: <a href="https://en.wikipedia.org/wiki/Robert_John_Cornell" target="_blank" rel="noopener noreferrer">Wikipedia</a></span>
        </figcaption>
      </figure>
      <div className="note-nav">
        {prevNote && <Link to={`${window.location.pathname}/../${prevNote.link}`} className="note-nav-link">← {prevNote.title}</Link>}
        {nextNote && <Link to={`${window.location.pathname}/../${nextNote.link}`} className="note-nav-link">{nextNote.title} →</Link>}
      </div>
    </div>
  );
}
