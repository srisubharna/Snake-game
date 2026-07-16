import {Link} from "react-router-dom";
import Snake_Game_icon from "../assets/pictures/Game_icon.png";
function Home() {
    return (
        <div className="home">
            <div className="home-card">
                <h1>2048 Game</h1>

                <input
                    type="text"
                    className="UserName"
                    placeholder="Enter your name"
                />

                <br />

                <Link to="/Game_page">
                    <button>Play Now</button>
                </Link>
            </div>
        </div>
    );
}
export default Home;