import { Link } from "react-router-dom";
import Game_icon from "../assets/pictures/Game_icon.png";
import "../App.css";

function Home() {
    return (
        <div className="home-container">

            <img
                src={Game_icon}
                alt="Snake Game"
                className="game-logo"
            />

            <h1>Snake Game</h1>

            <p className="description">
                Control the snake, collect apples, avoid walls, and survive as
                long as possible. Choose your difficulty level and challenge
                yourself to achieve the highest score!
            </p>

            <Link to="/snake">
                <button className="start-btn">
                    Play Game
                </button>
            </Link>

        </div>
    );
}

export default Home;