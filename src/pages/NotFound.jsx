import { Link } from "react-router-dom";
import "./NotFound.css";
import angry from "./../assets/angry_emotiguy.png";

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>Invalid Link</h1>
            <p>The requested page does not exist, sorry.</p>
            <p>Please <Link to="/">return to the homepage.</Link></p>
            <img src={angry} alt="An angry fellow" />
        </div>
    );
}