//import profilePic from "/img/me.png?url";
import profilePic from "./assets/img/me.png";

function Card() {
    return (
        <div className="card">
            <img
                className="card-image"
                src={profilePic}
                alt="Profile picture"
            />
            <h2 className="card-title">Jedybrown</h2>
            <p className="card-desc">Software Developer and Data Analyst</p>
        </div>
    );
}

export default Card;
